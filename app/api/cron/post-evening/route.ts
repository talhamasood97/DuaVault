/**
 * POST-EVENING CRON — 7:30 PM IST (14:00 UTC)
 * Same-day fallback: posts today's Dua of the Day to Instagram + Facebook.
 * Under normal operation the fill-buffer cron pre-schedules this 4 days ahead.
 *
 * Vercel cron schedule in vercel.json: "0 14 * * *"
 * Secured with CRON_SECRET env var.
 */

import { getDailyDua } from "@/data/duas";
import { postToInstagram, postToFacebook, verifyCronSecret, hasPostedToday, markPostedToday } from "@/lib/instagram";
import { buildDuaCaption } from "@/lib/captions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (await hasPostedToday("evening")) {
    return Response.json({ ok: true, skipped: true, reason: "already posted this evening" });
  }

  const dua = getDailyDua();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://duavault.com";
  const imageUrl = `${baseUrl}/api/instagram/dua?slug=${encodeURIComponent(dua.slug)}`;
  const caption = buildDuaCaption(dua);

  const [igResult, fbResult] = await Promise.allSettled([
    postToInstagram(imageUrl, caption),
    postToFacebook(imageUrl, caption),
  ]);

  await markPostedToday("evening", dua.slug);

  return Response.json({
    ok: true,
    dua: dua.slug,
    instagram: igResult.status === "fulfilled" ? igResult.value : { error: String(igResult.reason) },
    facebook: fbResult.status === "fulfilled" ? fbResult.value : { error: String(fbResult.reason) },
  });
}
