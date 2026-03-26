/**
 * FORCE-POST — manual trigger to re-run a cron slot immediately.
 * Use when a scheduled post failed and you need to retry without waiting.
 *
 * Usage:
 *   POST /api/cron/force-post
 *   Authorization: Bearer <CRON_SECRET>
 *   Body (JSON): { "slot": "morning" | "evening" }
 *
 * This clears the deduplication marker for today's slot so it can run again,
 * then fires the appropriate post immediately.
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

  // Clear existing deduplication marker so this slot can post again today
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

  const [igResult, fbResult] = await Promise.allSettled([
    postToInstagram(imageUrl, caption),
    postToFacebook(imageUrl, caption),
  ]);

  const igOk = igResult.status === "fulfilled" && !igResult.value.error;
  const fbOk = fbResult.status === "fulfilled" && !fbResult.value.error;

  if (igOk || fbOk) {
    await markPostedToday(slot, slug);
  }

  return Response.json({
    ok: igOk || fbOk,
    slot,
    slug,
    instagram: igResult.status === "fulfilled" ? igResult.value : { error: String(igResult.reason) },
    facebook: fbResult.status === "fulfilled" ? fbResult.value : { error: String(fbResult.reason) },
  });
}
