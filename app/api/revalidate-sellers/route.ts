import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { SELLERS_JSON_CACHE_TAG } from "@/app/lib/sellersJsonConstants";

const jsonUnauthorized = () =>
  NextResponse.json({ revalidated: false, message: "Unauthorized" }, { status: 401 });

const jsonMisconfigured = () =>
  NextResponse.json(
    { revalidated: false, message: "REVALIDATE_SELLERS_SECRET is not set" },
    { status: 503 },
  );

const runRevalidate = () => {
  revalidateTag(SELLERS_JSON_CACHE_TAG);
  revalidatePath("/sellers.json");
};

const isValidSecret = (provided: string | null) => {
  const expected = process.env.REVALIDATE_SELLERS_SECRET;
  if (!expected) {
    return null;
  }
  return provided === expected;
};

export const GET = async (request: NextRequest) => {
  if (!process.env.REVALIDATE_SELLERS_SECRET) {
    return jsonMisconfigured();
  }
  const secret = request.nextUrl.searchParams.get("secret");
  if (!isValidSecret(secret)) {
    return jsonUnauthorized();
  }
  runRevalidate();
  return NextResponse.json({ revalidated: true });
};

export const POST = async (request: NextRequest) => {
  if (!process.env.REVALIDATE_SELLERS_SECRET) {
    return jsonMisconfigured();
  }
  const urlSecret = request.nextUrl.searchParams.get("secret");
  let bodySecret: string | undefined;
  try {
    const body = (await request.json()) as { secret?: string };
    bodySecret = body.secret;
  } catch {
    bodySecret = undefined;
  }
  const secret = urlSecret ?? bodySecret ?? null;
  if (!isValidSecret(secret ?? null)) {
    return jsonUnauthorized();
  }
  runRevalidate();
  return NextResponse.json({ revalidated: true });
};
