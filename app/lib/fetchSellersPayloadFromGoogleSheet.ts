import { google } from "googleapis";
import { getGoogleSheetsJwtCredentials } from "@/app/lib/googleSheetsEnv";

type SheetCell = string | number | undefined | null;
type SheetRow = SheetCell[];

const normalizeRows = (values: SheetRow[] | null | undefined): SheetRow[] =>
  values ?? [];

const getNestedErrorMessage = (error: unknown): string => {
  if (error && typeof error === "object") {
    const record = error as {
      cause?: { message?: string };
      message?: string;
    };
    if (record.cause?.message) {
      return record.cause.message;
    }
    if (record.message) {
      return record.message;
    }
  }
  return String(error);
};

const formatRangeParseHint = (metaRange: string, sellersRange: string) =>
  [
    "Fix GOOGLE_SHEETS_META_RANGE and GOOGLE_SHEETS_SELLERS_RANGE in .env.",
    `Current: meta="${metaRange}", sellers="${sellersRange}".`,
    "The part before ! must match an existing sheet tab name (e.g. Sheet1).",
    "If the tab name has spaces, use quotes: 'My Tab'!A2:B.",
  ].join(" ");

export const fetchSellersPayloadFromGoogleSheet = async (): Promise<
  Record<string, unknown>
> => {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const jwt = getGoogleSheetsJwtCredentials();
  if (!spreadsheetId || !jwt) {
    throw new Error("Google Sheets source is not configured");
  }
  const metaRange = process.env.GOOGLE_SHEETS_META_RANGE ?? "Meta!A2:B";
  const sellersRange =
    process.env.GOOGLE_SHEETS_SELLERS_RANGE ?? "Sellers!A2:D";

  const auth = new google.auth.JWT({
    email: jwt.clientEmail,
    key: jwt.privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  let metaResponse;
  let sellersResponse;
  try {
    [metaResponse, sellersResponse] = await Promise.all([
      sheets.spreadsheets.values.get({ spreadsheetId, range: metaRange }),
      sheets.spreadsheets.values.get({ spreadsheetId, range: sellersRange }),
    ]);
  } catch (unknownError) {
    const message = getNestedErrorMessage(unknownError);
    if (message.includes("Unable to parse range")) {
      throw new Error(`${message} ${formatRangeParseHint(metaRange, sellersRange)}`);
    }
    throw unknownError;
  }

  const metaRows = normalizeRows(metaResponse.data.values as SheetRow[]);
  const metaMap: Record<string, string> = {};
  for (const row of metaRows) {
    const key = row[0] != null ? String(row[0]).trim() : "";
    const value = row[1] != null ? String(row[1]).trim() : "";
    if (key) {
      metaMap[key] = value;
    }
  }

  const contactAddress = metaMap.contact_address;
  const contactEmail = metaMap.contact_email;
  const lastUpdated = metaMap.last_updated;

  if (!contactAddress || !contactEmail || !lastUpdated) {
    throw new Error(
      "Meta sheet must include contact_address, contact_email, last_updated",
    );
  }

  const sellerRows = normalizeRows(sellersResponse.data.values as SheetRow[]);
  const sellers: Record<string, string>[] = [];
  for (const row of sellerRows) {
    if (
      !row ||
      row.every(
        (cell) =>
          cell === undefined ||
          cell === null ||
          String(cell).trim() === "",
      )
    ) {
      continue;
    }
    const sellerId = row[0] != null ? String(row[0]).trim() : "";
    const name = row[1] != null ? String(row[1]).trim() : "";
    const domain = row[2] != null ? String(row[2]).trim() : "";
    const sellerType = row[3] != null ? String(row[3]).trim() : "";
    if (!name && !domain && !sellerType && !sellerId) {
      continue;
    }
    sellers.push({
      seller_id: sellerId,
      name,
      domain,
      seller_type: sellerType,
    });
  }

  return {
    contact_address: contactAddress,
    contact_email: contactEmail,
    version: "1.0",
    ext: {
      last_updated: lastUpdated,
    },
    sellers,
  };
};
