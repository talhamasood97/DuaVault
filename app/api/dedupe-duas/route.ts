import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

// Slugs that are exact duplicates — these are the inferior copies.
// The canonical (kept) version for each is noted in comments.
const DUPLICATE_SLUGS = [
  "dua-for-righteous-spouse",        // keep: dua-for-spouse-husband-wife
  "dua-blessing-at-nikah",           // keep: dua-for-marriage-nikah
  "dua-to-say-to-newlyweds",         // keep: dua-for-marriage-nikah
  "dua-when-entering-mosque",        // keep: dua-entering-mosque
  "dua-when-leaving-mosque",         // keep: dua-leaving-mosque
  "dua-when-sneezing-alhamdulillah", // keep: dua-when-sneezing
  "dua-before-jummah-friday-prayer", // keep: dua-salawat-ibrahim
  "dua-for-entering-toilet-bathroom",// keep: dua-entering-bathroom
  "dua-for-leaving-toilet-bathroom", // keep: dua-leaving-bathroom
  "dua-when-afraid",                 // keep: dua-hasbunallah-wa-nimal-wakeel
  "dua-on-laylatul-qadr",            // keep: dua-laylatul-qadr
  "dua-for-success-in-business",     // keep: dua-rabbana-atina
  "dua-when-seeing-rain",            // keep: dua-when-it-rains
  "dua-when-visiting-sick-person",   // keep: dua-visiting-sick
  "dua-for-protection-from-hellfire",// keep: dua-for-jannah
  "dua-for-protection-from-magic-sihr", // keep: dua-against-evil-eye
  "dua-for-protection-from-debt",    // keep: dua-for-anxiety-and-grief
  "dua-for-children-righteous-offspring", // keep: dua-for-righteous-children
  "dua-for-steadfastness",           // keep: dua-for-strong-iman-faith
  "dua-for-finding-a-job",           // keep: dua-for-rizq-and-good-deeds
  "dua-for-guidance-and-righteousness", // keep: dua-for-guidance-hidayah
  "dua-for-newborn-baby-protection", // keep: dua-for-newborn-protection
  "dua-before-intercourse",          // keep: dua-before-marital-intimacy
];

export async function GET(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    return NextResponse.json({ error: "CRON_SECRET not configured" }, { status: 500 });
  }
  // Accept secret via Authorization header OR ?secret= query param (for browser access)
  const auth = req.headers.get("authorization");
  const querySecret = req.nextUrl.searchParams.get("secret");
  const isAuthorized =
    auth === `Bearer ${cronSecret}` || querySecret === cronSecret;
  if (!isAuthorized) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }

  const db = createServerClient();

  // First: check which of these slugs actually exist in the DB
  const { data: existing, error: fetchErr } = await db
    .from("duas")
    .select("id, slug, title")
    .in("slug", DUPLICATE_SLUGS);

  if (fetchErr) {
    return NextResponse.json({ error: fetchErr.message }, { status: 500 });
  }

  if (!existing || existing.length === 0) {
    return NextResponse.json({ message: "No duplicates found — DB is already clean.", deleted: [] });
  }

  // Delete them
  const slugsToDelete = existing.map((r: { slug: string }) => r.slug);
  const { error: deleteErr } = await db
    .from("duas")
    .delete()
    .in("slug", slugsToDelete);

  if (deleteErr) {
    return NextResponse.json({ error: deleteErr.message }, { status: 500 });
  }

  return NextResponse.json({
    message: `Deleted ${existing.length} duplicate duas from Supabase.`,
    deleted: existing.map((r: { id: number; slug: string; title: string }) => ({
      id: r.id,
      slug: r.slug,
      title: r.title,
    })),
  });
}
