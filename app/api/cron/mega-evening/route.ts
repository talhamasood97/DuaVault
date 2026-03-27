/**
 * MEGA-EVENING CRON — 8:00 PM IST (14:30 UTC) daily
 *
 * Posts today's Dua of the Day to Instagram + Facebook.
 *
 * This is one of exactly two active crons (Vercel Hobby plan allows 2).
 * The existing post-evening route remains available for manual triggers.
 *
 * Schedule in vercel.json: "30 14 * * *"
 */

import { getDailyDua } from "@/data/duas";
import {
  postToInstagram,
  postToFacebook,
  verifyCronSecret,
  hasPostedToday,
  markPostedToday,
  sendAdminAlert,
} from "@/lib/instagram";
import { buildDuaCaption } from "@/lib/captions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
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

    if (!igAlreadyPosted && igOk) await markPostedToday("evening", "instagram", dua.slug);
    if (!fbAlreadyPosted && fbOk) await markPostedToday("evening", "facebook", dua.slug);

    if (!igOk && !fbOk) {
      await sendAdminAlert(
        "🚨 Evening social post FAILED on ALL platforms",
        `Dua: ${dua.slug}\nDate: ${new Date().toISOString()}\n\nInstagram: ${JSON.stringify(igDetail)}\nFacebook: ${JSON.stringify(fbDetail)}\n\nRetry: POST https://duavault.com/api/cron/force-post with {"slot":"evening"}`
      );
    } else if (!igOk && !igAlreadyPosted) {
      await sendAdminAlert(
        "⚠️ Evening social post — Instagram FAILED (Facebook OK)",
        `Dua: ${dua.slug}\nInstagram error: ${JSON.stringify(igDetail)}`
      );
    } else if (!fbOk && !fbAlreadyPosted) {
      await sendAdminAlert(
        "⚠️ Evening social post — Facebook FAILED (Instagram OK)",
        `Dua: ${dua.slug}\nFacebook error: ${JSON.stringify(fbDetail)}`
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
      "🚨 Evening cron CRASHED",
      `Date: ${new Date().toISOString()}\nError: ${message}\n\nRetry: POST https://duavault.com/api/cron/force-post with {"slot":"evening"}`
    );
    return Response.json({ ok: false, error: message }, { status: 500 });
  }
}
