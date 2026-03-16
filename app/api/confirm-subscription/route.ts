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
    const { error } = await db
      .from("hadith_subscribers")
      .update({ confirmed: true })
      .eq("unsubscribe_token", token)
      .eq("confirmed", false);

    if (error) {
      return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=error`);
    }

    return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=true`);
  } catch {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=error`);
  }
}
