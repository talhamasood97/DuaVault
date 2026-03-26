/**
 * POST-EVENING CRON — 7:30 PM IST (14:00 UTC)
 * Posts today's Dua of the Day to Instagram + Facebook.
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

  try {
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

    if (igOk || fbOk) {
      // Mark posted to prevent double-posting on the platform that succeeded
      await markPostedToday("evening", dua.slug);
      // Alert on any partial failure — one platform missed for the day
      if (!igOk) {
        await sendAdminAlert(
          "⚠️ Evening post — Instagram FAILED (Facebook posted OK)",
          `Dua: ${dua.slug}\nDate: ${new Date().toISOString()}\n\nInstagram error: ${JSON.stringify(igDetail)}\nFacebook: ✅ posted successfully\n\nRetry: POST https://duavault.com/api/cron/force-post {"slot":"evening"}`
        );
      }
      if (!fbOk) {
        await sendAdminAlert(
          "⚠️ Evening post — Facebook FAILED (Instagram posted OK)",
          `Dua: ${dua.slug}\nDate: ${new Date().toISOString()}\n\nFacebook error: ${JSON.stringify(fbDetail)}\nInstagram: ✅ posted successfully\n\nRetry: POST https://duavault.com/api/cron/force-post {"slot":"evening"}`
        );
      }
    } else {
      // Both failed — alert immediately, do NOT mark as posted so retry is possible
      await sendAdminAlert(
        "🚨 Evening post FAILED on ALL platforms — action needed",
        `Dua: ${dua.slug}\nDate: ${new Date().toISOString()}\n\nInstagram: ${JSON.stringify(igDetail)}\nFacebook: ${JSON.stringify(fbDetail)}\n\nFix and retry: POST https://duavault.com/api/cron/force-post with {"slot":"evening"}`
      );
    }

    return Response.json({
      ok: igOk || fbOk,
      dua: dua.slug,
      instagram: igDetail,
      facebook: fbDetail,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    await sendAdminAlert(
      "🚨 Evening cron CRASHED — unhandled error",
      `Date: ${new Date().toISOString()}\nError: ${message}\n\nPost may not have gone out. Check Vercel logs.\nRetry: POST https://duavault.com/api/cron/force-post with {"slot":"evening"}`
    );
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
