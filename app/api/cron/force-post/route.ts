/**
 * FORCE-POST — manual trigger to re-run a cron slot immediately.
 *
 * Default behaviour: respects per-platform markers — only posts to platforms
 * that haven't already succeeded today. Safe to run even if one platform posted.
 *
 * Override: pass "force": true in the body to clear all markers and repost
 * both platforms from scratch (use only when you genuinely want to repost both).
 *
 * Usage:
 *   POST /api/cron/force-post
 *   Authorization: Bearer <CRON_SECRET>
 *   Body (JSON): { "slot": "morning" | "evening" }
 *             or { "slot": "morning", "force": true }
 */

import { getDailyHadith } from "@/data/hadiths";
import { getDailyDua } from "@/data/duas";
import { postToInstagram, postToFacebook, verifyCronSecret, hasPostedToday, markPostedToday } from "@/lib/instagram";
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
  const forceAll = body?.force === true;

  if (slot !== "morning" && slot !== "evening") {
    return Response.json({ ok: false, error: 'Body must include { "slot": "morning" | "evening" }' }, { status: 400 });
  }

  // force:true — clear all markers so both platforms repost from scratch
  if (forceAll) {
    const prefix = `post-log/${todayIST()}-${slot}`;
    const { blobs } = await list({ prefix });
    for (const blob of blobs) {
      await del(blob.url);
    }
  }

  // Check per-platform what still needs posting
  const [igAlreadyPosted, fbAlreadyPosted] = await Promise.all([
    hasPostedToday(slot, "instagram"),
    hasPostedToday(slot, "facebook"),
  ]);

  if (igAlreadyPosted && fbAlreadyPosted) {
    return Response.json({ ok: true, skipped: true, reason: "both platforms already posted today — use force:true to override" });
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

  // Only post to platforms not yet marked
  const [igSettled, fbSettled] = await Promise.allSettled([
    igAlreadyPosted
      ? Promise.resolve({ platform: "instagram" as const, id: "already-posted" } as import("@/lib/instagram").PostResult)
      : postToInstagram(imageUrl, caption),
    fbAlreadyPosted
      ? Promise.resolve({ platform: "facebook" as const, id: "already-posted" } as import("@/lib/instagram").PostResult)
      : postToFacebook(imageUrl, caption),
  ]);

  const igOk = igAlreadyPosted || (igSettled.status === "fulfilled" && !igSettled.value.error);
  const fbOk = fbAlreadyPosted || (fbSettled.status === "fulfilled" && !fbSettled.value.error);

  // Mark each platform independently on success
  if (!igAlreadyPosted && igOk) await markPostedToday(slot, "instagram", slug);
  if (!fbAlreadyPosted && fbOk) await markPostedToday(slot, "facebook", slug);

  return Response.json({
    ok: igOk && fbOk,
    slot,
    slug,
    instagram: igAlreadyPosted ? { skipped: true } : (igSettled.status === "fulfilled" ? igSettled.value : { error: String(igSettled.reason) }),
    facebook: fbAlreadyPosted ? { skipped: true } : (fbSettled.status === "fulfilled" ? fbSettled.value : { error: String(fbSettled.reason) }),
  });
}
