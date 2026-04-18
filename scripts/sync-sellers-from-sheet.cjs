/**
 * Pulls sellers.json shape from Google Sheets into data/sellers.json.
 *
 * Sheet layout (two tabs):
 * - Meta: column A = key, column B = value. Rows from A2: contact_address, contact_email, last_updated
 * - Sellers: row 1 = seller_id | name | domain | seller_type; data from row 2
 *
 * Local setup:
 * 1) Google Cloud: enable Sheets API, create service account, download JSON key
 * 2) Share the spreadsheet with the service account email (Viewer is enough)
 * 3) .env: GOOGLE_APPLICATION_CREDENTIALS=/absolute/path/to/key.json
 *           GOOGLE_SHEETS_SPREADSHEET_ID=<id from spreadsheet URL>
 * Optional: GOOGLE_SHEETS_META_RANGE=Meta!A2:B
 *           GOOGLE_SHEETS_SELLERS_RANGE=Sellers!A2:D
 */

const fs = require("fs");
const path = require("path");
const { google } = require("googleapis");

const loadEnvFile = (relativePath) => {
  const fullPath = path.join(process.cwd(), relativePath);
  if (!fs.existsSync(fullPath)) {
    return;
  }
  const content = fs.readFileSync(fullPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }
    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) {
      continue;
    }
    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
};

loadEnvFile(".env");
loadEnvFile(".env.local");

const META_RANGE = process.env.GOOGLE_SHEETS_META_RANGE ?? "Meta!A2:B";
const SELLERS_RANGE = process.env.GOOGLE_SHEETS_SELLERS_RANGE ?? "Sellers!A2:D";
const OUTPUT_FILE = path.join(process.cwd(), "data", "sellers.json");

const requireEnv = (name) => {
  const value = process.env[name];
  if (!value) {
    console.error(`Missing env: ${name}`);
    process.exit(1);
  }
  return value;
};

const normalizeRows = (response) => response.data.values ?? [];

const main = async () => {
  const keyFile = requireEnv("GOOGLE_APPLICATION_CREDENTIALS");
  const spreadsheetId = requireEnv("GOOGLE_SHEETS_SPREADSHEET_ID");

  if (!fs.existsSync(keyFile)) {
    console.error(`Credentials file not found: ${keyFile}`);
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({
    keyFile,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const [metaResponse, sellersResponse] = await Promise.all([
    sheets.spreadsheets.values.get({ spreadsheetId, range: META_RANGE }),
    sheets.spreadsheets.values.get({ spreadsheetId, range: SELLERS_RANGE }),
  ]);

  const metaRows = normalizeRows(metaResponse);
  const metaMap = {};
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
    console.error(
      "Meta sheet must include rows: contact_address, contact_email, last_updated (column A = key, B = value)",
    );
    process.exit(1);
  }

  const sellerRows = normalizeRows(sellersResponse);
  const sellers = [];
  for (const row of sellerRows) {
    if (!row || row.every((cell) => cell === undefined || String(cell).trim() === "")) {
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

  const payload = {
    contact_address: contactAddress,
    contact_email: contactEmail,
    version: "1.0",
    ext: {
      last_updated: lastUpdated,
    },
    sellers,
  };

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Wrote ${OUTPUT_FILE} (${sellers.length} sellers)`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
