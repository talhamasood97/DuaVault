import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://duavault.com";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?unsubscribed=invalid`);
  }

  try {
    const db = createServerClient();
    const { error, count } = await db
      .from("hadith_subscribers")
      .delete({ count: "exact" })
      .eq("unsubscribe_token", token);

    if (error) {
      return NextResponse.redirect(`${SITE_URL}/daily-hadith?unsubscribed=error`);
    }

    if (count === 0) {
      return NextResponse.redirect(`${SITE_URL}/daily-hadith?unsubscribed=invalid`);
    }

    return NextResponse.redirect(`${SITE_URL}/daily-hadith?unsubscribed=true`);
  } catch {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?unsubscribed=error`);
  }
}
