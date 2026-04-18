import { readFile } from "fs/promises";
import path from "path";
import { unstable_cache } from "next/cache";
import { NextResponse } from "next/server";
import { fetchSellersPayloadFromGoogleSheet } from "@/app/lib/fetchSellersPayloadFromGoogleSheet";
import { isGoogleSheetSourceConfigured } from "@/app/lib/googleSheetsEnv";
import { SELLERS_JSON_CACHE_TAG } from "@/app/lib/sellersJsonConstants";

const getSellersPayloadFromFile = unstable_cache(
  async () => {
    const filePath = path.join(process.cwd(), "data", "sellers.json");
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw) as Record<string, unknown>;
  },
  ["sellers-json-from-data-file"],
  { tags: [SELLERS_JSON_CACHE_TAG] },
);

const getSellersPayloadFromSheet = unstable_cache(
  async () => fetchSellersPayloadFromGoogleSheet(),
  ["sellers-json-from-google-sheet"],
  { tags: [SELLERS_JSON_CACHE_TAG] },
);

export const runtime = "nodejs";

export const GET = async () => {
  try {
    const fromSheet = isGoogleSheetSourceConfigured();
    const data = fromSheet
      ? await getSellersPayloadFromSheet()
      : await getSellersPayloadFromFile();
    const response = NextResponse.json(data);
    if (process.env.NODE_ENV === "development") {
      response.headers.set(
        "X-Sellers-Source",
        fromSheet ? "google-sheet" : "data-file",
      );
    }
    return response;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("[sellers.json]", error);
    }
    return NextResponse.json(
      { error: "Sellers data unavailable" },
      { status: 500 },
    );
  }
};
