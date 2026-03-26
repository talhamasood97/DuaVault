/**
 * FORCE-POST — manual trigger to re-run a cron slot immediately.
 * Clears per-platform deduplication markers for today's slot, then posts
 * to both platforms fresh.
 *
 * Usage:
 *   POST /api/cron/force-post
 *   Authorization: Bearer <CRON_SECRET>
 *   Body (JSON): { "slot": "morning" | "evening" }
 */

import { getDailyHadith } from "@/data/hadiths";
import { getDailyDua } from "@/data/duas";
import { postToInstagram, postToFacebook, verifyCronSecret, markPostedToday } from "@/lib/instagram";
import { del, list } from "@vercel/blob";
import { buildHadithCaption } from "@/lib/captions";
import { buildDuaCaption } from "@/lib/captions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function todayIST(): string {
  return new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().slice(0, 10);
}

export async function POST(request: Request) {
  if (!verifyCronSecret(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const slot = body?.slot as "morning" | "evening" | undefined;

  if (slot !== "morning" && slot !== "evening") {
    return Response.json({ ok: false, error: 'Body must include { "slot": "morning" | "evening" }' }, { status: 400 });
  }

  // Clear all per-platform deduplication markers for this slot so both can retry
  const prefix = `post-log/${todayIST()}-${slot}`;
  const { blobs } = await list({ prefix });
  for (const blob of blobs) {
    await del(blob.url);
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://duavault.com";
  let imageUrl: string;
  let caption: string;
  let slug: string;

  if (slot === "morning") {
    const hadith = getDailyHadith();
    slug = hadith.slug;
    imageUrl = `${baseUrl}/api/instagram/hadith?slug=${encodeURIComponent(slug)}`;
    caption = buildHadithCaption(hadith);
  } else {
    const dua = getDailyDua();
    slug = dua.slug;
    imageUrl = `${baseUrl}/api/instagram/dua?slug=${encodeURIComponent(slug)}`;
    caption = buildDuaCaption(dua);
  }

  const [igSettled, fbSettled] = await Promise.allSettled([
    postToInstagram(imageUrl, caption),
    postToFacebook(imageUrl, caption),
  ]);

  const igOk = igSettled.status === "fulfilled" && !igSettled.value.error;
  const fbOk = fbSettled.status === "fulfilled" && !fbSettled.value.error;

  // Mark each platform independently
  if (igOk) await markPostedToday(slot, "instagram", slug);
  if (fbOk) await markPostedToday(slot, "facebook", slug);

  return Response.json({
    ok: igOk && fbOk,
    slot,
    slug,
    instagram: igSettled.status === "fulfilled" ? igSettled.value : { error: String(igSettled.reason) },
    facebook: fbSettled.status === "fulfilled" ? fbSettled.value : { error: String(fbSettled.reason) },
  });
}
