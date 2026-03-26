/**
 * POST-MORNING CRON — 7:30 AM IST (02:00 UTC)
 * Posts today's Hadith of the Day to Instagram + Facebook.
 *
 * Vercel cron schedule in vercel.json: "0 2 * * *"
 * Secured with CRON_SECRET env var.
 */

import { getDailyHadith } from "@/data/hadiths";
import { postToInstagram, postToFacebook, verifyCronSecret, hasPostedToday, markPostedToday, sendAdminAlert } from "@/lib/instagram";
import { buildHadithCaption } from "@/lib/captions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
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

    const igOk = igResult.status === "fulfilled" && !igResult.value.error;
    const fbOk = fbResult.status === "fulfilled" && !fbResult.value.error;

    const igDetail = igResult.status === "fulfilled" ? igResult.value : { error: String(igResult.reason) };
    const fbDetail = fbResult.status === "fulfilled" ? fbResult.value : { error: String(fbResult.reason) };

    if (igOk || fbOk) {
      // Mark posted to prevent double-posting on the platform that succeeded
      await markPostedToday("morning", hadith.slug);
      // Alert on any partial failure — one platform missed for the day
      if (!igOk) {
        await sendAdminAlert(
          "⚠️ Morning post — Instagram FAILED (Facebook posted OK)",
          `Hadith: ${hadith.slug}\nDate: ${new Date().toISOString()}\n\nInstagram error: ${JSON.stringify(igDetail)}\nFacebook: ✅ posted successfully\n\nRetry: POST https://duavault.com/api/cron/force-post {"slot":"morning"}`
        );
      }
      if (!fbOk) {
        await sendAdminAlert(
          "⚠️ Morning post — Facebook FAILED (Instagram posted OK)",
          `Hadith: ${hadith.slug}\nDate: ${new Date().toISOString()}\n\nFacebook error: ${JSON.stringify(fbDetail)}\nInstagram: ✅ posted successfully\n\nRetry: POST https://duavault.com/api/cron/force-post {"slot":"morning"}`
        );
      }
    } else {
      // Both failed — alert immediately, do NOT mark as posted so retry is possible
      await sendAdminAlert(
        "🚨 Morning post FAILED on ALL platforms — action needed",
        `Hadith: ${hadith.slug}\nDate: ${new Date().toISOString()}\n\nInstagram: ${JSON.stringify(igDetail)}\nFacebook: ${JSON.stringify(fbDetail)}\n\nFix and retry: POST https://duavault.com/api/cron/force-post with {"slot":"morning"}`
      );
    }

    return Response.json({
      ok: igOk || fbOk,
      hadith: hadith.slug,
      instagram: igDetail,
      facebook: fbDetail,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    await sendAdminAlert(
      "🚨 Morning cron CRASHED — unhandled error",
      `Date: ${new Date().toISOString()}\nError: ${message}\n\nPost may not have gone out. Check Vercel logs.\nRetry: POST https://duavault.com/api/cron/force-post with {"slot":"morning"}`
    );
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
