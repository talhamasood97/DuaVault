/**
 * POST-EVENING CRON — 7:30 PM IST (14:00 UTC)
 * Same-day fallback: posts today's Dua of the Day to Instagram + Facebook.
 * Under normal operation the fill-buffer cron pre-schedules this 4 days ahead.
 *
 * Vercel cron schedule in vercel.json: "0 14 * * *"
 * Secured with CRON_SECRET env var.
 */

import { getDailyDua } from "@/data/duas";
import { postToInstagram, postToFacebook, verifyCronSecret, hasPostedToday, markPostedToday, sendAdminAlert } from "@/lib/instagram";
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

  const igOk = igResult.status === "fulfilled" && !igResult.value.error;
  const fbOk = fbResult.status === "fulfilled" && !fbResult.value.error;

  const igDetail = igResult.status === "fulfilled" ? igResult.value : { error: String(igResult.reason) };
  const fbDetail = fbResult.status === "fulfilled" ? fbResult.value : { error: String(fbResult.reason) };

  // Only mark as posted if at least one platform succeeded — allows retry if both fail
  if (igOk || fbOk) {
    await markPostedToday("evening", dua.slug);
  } else {
    // Both failed — alert admin immediately
    await sendAdminAlert(
      "⚠️ Evening post FAILED — action needed",
      `Dua: ${dua.slug}\nDate: ${new Date().toISOString()}\n\nInstagram: ${JSON.stringify(igDetail)}\nFacebook: ${JSON.stringify(fbDetail)}\n\nFix and retry: POST https://duavault.com/api/cron/force-post with {"slot":"evening"}`
    );
  }

  return Response.json({
    ok: igOk || fbOk,
    dua: dua.slug,
    instagram: igDetail,
    facebook: fbDetail,
  });
}
