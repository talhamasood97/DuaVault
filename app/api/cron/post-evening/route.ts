/**
 * POST-EVENING CRON — 7:30 PM IST (14:00 UTC)
 * Posts today's Dua of the Day to Instagram + Facebook.
 * A retry runs automatically at 8:00 PM IST (14:30 UTC) and will only
 * attempt platforms that didn't succeed in the first run.
 *
 * Vercel cron schedules in vercel.json: "0 14 * * *" and "30 14 * * *"
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
    // Check each platform independently
    const [igAlreadyPosted, fbAlreadyPosted] = await Promise.all([
      hasPostedToday("evening", "instagram"),
      hasPostedToday("evening", "facebook"),
    ]);

    if (igAlreadyPosted && fbAlreadyPosted) {
      return Response.json({ ok: true, skipped: true, reason: "already posted to both platforms this evening" });
    }

    const dua = getDailyDua();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://duavault.com";
    const imageUrl = `${baseUrl}/api/instagram/dua?slug=${encodeURIComponent(dua.slug)}`;
    const caption = buildDuaCaption(dua);

    // Only post to platforms that haven't gone out yet
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

    const igDetail = igSettled.status === "fulfilled" ? igSettled.value : { error: String(igSettled.reason) };
    const fbDetail = fbSettled.status === "fulfilled" ? fbSettled.value : { error: String(fbSettled.reason) };

    // Mark each platform independently on success
    if (!igAlreadyPosted && igOk) await markPostedToday("evening", "instagram", dua.slug);
    if (!fbAlreadyPosted && fbOk) await markPostedToday("evening", "facebook", dua.slug);

    // Alert on failures
    if (!igOk && !fbOk) {
      await sendAdminAlert(
        "🚨 Evening post FAILED on ALL platforms — action needed",
        `Dua: ${dua.slug}\nDate: ${new Date().toISOString()}\n\nInstagram: ${JSON.stringify(igDetail)}\nFacebook: ${JSON.stringify(fbDetail)}\n\nRetry: POST https://duavault.com/api/cron/force-post with {"slot":"evening"}`
      );
    } else if (!igOk && !igAlreadyPosted) {
      await sendAdminAlert(
        "⚠️ Evening post — Instagram FAILED (Facebook posted OK)",
        `Dua: ${dua.slug}\nDate: ${new Date().toISOString()}\n\nInstagram error: ${JSON.stringify(igDetail)}\nFacebook: ✅\n\nRetry: POST https://duavault.com/api/cron/force-post {"slot":"evening"}`
      );
    } else if (!fbOk && !fbAlreadyPosted) {
      await sendAdminAlert(
        "⚠️ Evening post — Facebook FAILED (Instagram posted OK)",
        `Dua: ${dua.slug}\nDate: ${new Date().toISOString()}\n\nFacebook error: ${JSON.stringify(fbDetail)}\nInstagram: ✅\n\nRetry: POST https://duavault.com/api/cron/force-post {"slot":"evening"}`
      );
    }

    return Response.json({
      ok: igOk && fbOk,
      dua: dua.slug,
      instagram: igAlreadyPosted ? { skipped: true } : igDetail,
      facebook: fbAlreadyPosted ? { skipped: true } : fbDetail,
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
