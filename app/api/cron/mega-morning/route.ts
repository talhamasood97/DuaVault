/**
 * MEGA-MORNING CRON — 8:30 AM IST (03:00 UTC) daily
 *
 * Runs three tasks in sequence:
 *   1. Post today's Hadith of the Day to Instagram + Facebook
 *   2. Send today's Hadith of the Day email to all subscribers
 *
 * This is one of exactly two active crons (Vercel Hobby plan allows 2).
 * All existing individual routes remain available for manual triggers.
 *
 * Schedule in vercel.json: "0 3 * * *"
 */

import { getDailyHadith } from "@/data/hadiths";
import {
  postToInstagram,
  postToFacebook,
  verifyCronSecret,
  hasPostedToday,
  markPostedToday,
  sendAdminAlert,
} from "@/lib/instagram";
import { buildHadithCaption } from "@/lib/captions";
import { sendDailyHadithEmails } from "@/lib/sendDailyHadithEmail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const results: Record<string, unknown> = {};

  // ─── Task 1: Hadith social post (Instagram + Facebook) ───────────────────
  try {
    const [igAlreadyPosted, fbAlreadyPosted] = await Promise.all([
      hasPostedToday("morning", "instagram"),
      hasPostedToday("morning", "facebook"),
    ]);

    if (igAlreadyPosted && fbAlreadyPosted) {
      results.social = { skipped: true, reason: "already posted to both platforms this morning" };
    } else {
      const hadith = getDailyHadith();
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://duavault.com";
      const imageUrl = `${baseUrl}/api/instagram/hadith?slug=${encodeURIComponent(hadith.slug)}`;
      const caption = buildHadithCaption(hadith);

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

      if (!igAlreadyPosted && igOk) await markPostedToday("morning", "instagram", hadith.slug);
      if (!fbAlreadyPosted && fbOk) await markPostedToday("morning", "facebook", hadith.slug);

      if (!igOk && !fbOk) {
        await sendAdminAlert(
          "🚨 Morning social post FAILED on ALL platforms",
          `Hadith: ${hadith.slug}\nDate: ${new Date().toISOString()}\n\nInstagram: ${JSON.stringify(igDetail)}\nFacebook: ${JSON.stringify(fbDetail)}\n\nRetry: POST https://duavault.com/api/cron/force-post with {"slot":"morning"}`
        );
      } else if (!igOk && !igAlreadyPosted) {
        await sendAdminAlert(
          "⚠️ Morning social post — Instagram FAILED (Facebook OK)",
          `Hadith: ${hadith.slug}\nInstagram error: ${JSON.stringify(igDetail)}`
        );
      } else if (!fbOk && !fbAlreadyPosted) {
        await sendAdminAlert(
          "⚠️ Morning social post — Facebook FAILED (Instagram OK)",
          `Hadith: ${hadith.slug}\nFacebook error: ${JSON.stringify(fbDetail)}`
        );
      }

      results.social = {
        hadith: hadith.slug,
        instagram: igAlreadyPosted ? { skipped: true } : igDetail,
        facebook: fbAlreadyPosted ? { skipped: true } : fbDetail,
        ok: igOk && fbOk,
      };
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    await sendAdminAlert(
      "🚨 Morning social post CRASHED",
      `Date: ${new Date().toISOString()}\nError: ${message}\n\nRetry: POST https://duavault.com/api/cron/force-post with {"slot":"morning"}`
    );
    results.social = { ok: false, error: message };
  }

  // ─── Task 2: Daily hadith email ───────────────────────────────────────────
  try {
    const emailResult = await sendDailyHadithEmails();
    results.email = emailResult;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    await sendAdminAlert(
      "🚨 Daily hadith email CRASHED — subscribers did not receive today's email",
      `Date: ${new Date().toISOString()}\nError: ${message}\n\nManual retry: GET https://duavault.com/api/send-daily-hadith`
    );
    results.email = { ok: false, error: message };
  }

  return Response.json({ ok: true, ...results });
}
