import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://duavault.com";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=invalid`);
  }

  try {
    const db = createServerClient();
    const { error, count } = await db
      .from("hadith_subscribers")
      .update({ confirmed: true }, { count: "exact" })
      .eq("unsubscribe_token", token);

    if (error) {
      return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=error`);
    }

    // count === 0 means token matched no row (invalid or tampered)
    if (count === 0) {
      return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=invalid`);
    }

    return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=true`);
  } catch {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=error`);
  }
}
