/**
 * POST-MORNING CRON — 7:30 AM IST (02:00 UTC)
 * Same-day fallback: posts today's Hadith of the Day to Instagram + Facebook.
 * Under normal operation the fill-buffer cron pre-schedules this 4 days ahead.
 *
 * Vercel cron schedule in vercel.json: "0 2 * * *"
 * Secured with CRON_SECRET env var.
 */

import { getDailyHadith } from "@/data/hadiths";
import { postToInstagram, postToFacebook, verifyCronSecret, hasPostedToday, markPostedToday } from "@/lib/instagram";
import { buildHadithCaption } from "@/lib/captions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (await hasPostedToday("morning")) {
    return Response.json({ ok: true, skipped: true, reason: "already posted this morning" });
  }

  const hadith = getDailyHadith();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://duavault.com";
  const imageUrl = `${baseUrl}/api/instagram/hadith?slug=${encodeURIComponent(hadith.slug)}`;
  const caption = buildHadithCaption(hadith);

  const [igResult, fbResult] = await Promise.allSettled([
    postToInstagram(imageUrl, caption),
    postToFacebook(imageUrl, caption),
  ]);

  await markPostedToday("morning", hadith.slug);

  return Response.json({
    ok: true,
    hadith: hadith.slug,
    instagram: igResult.status === "fulfilled" ? igResult.value : { error: String(igResult.reason) },
    facebook: fbResult.status === "fulfilled" ? fbResult.value : { error: String(fbResult.reason) },
  });
}
