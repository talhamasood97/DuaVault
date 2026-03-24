/**
 * FILL-BUFFER CRON — runs nightly at 00:00 UTC (5:30 AM IST)
 *
 * Schedules posts for exactly 4 days from now on Instagram + Facebook.
 * Running nightly means after 4 days you always have a rolling 4-day buffer
 * pre-queued in Meta's system — posts go out even if Vercel has an outage.
 *
 * Vercel cron schedule in vercel.json: "0 0 * * *"
 * Secured with CRON_SECRET env var.
 */

import { getDailyHadith } from "@/data/hadiths";
import { getDailyDua } from "@/data/duas";
import { postToInstagram, postToFacebook, verifyCronSecret } from "@/lib/instagram";
import { buildHadithCaption, buildDuaCaption } from "@/lib/captions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://duavault.com";

  // Schedule for exactly 4 days from now
  const targetDate = new Date();
  targetDate.setUTCDate(targetDate.getUTCDate() + 4);
  targetDate.setUTCHours(0, 0, 0, 0);

  // Morning post: 02:00 UTC = 7:30 AM IST
  const morningTime = Math.floor(targetDate.getTime() / 1000) + 2 * 3600;
  // Evening post: 14:00 UTC = 7:30 PM IST
  const eveningTime = Math.floor(targetDate.getTime() / 1000) + 14 * 3600;

  const hadith = getDailyHadith(new Date(targetDate.getTime() + 2 * 3600 * 1000));
  const dua = getDailyDua(new Date(targetDate.getTime() + 14 * 3600 * 1000));

  const hadithImageUrl = `${baseUrl}/api/instagram/hadith?slug=${encodeURIComponent(hadith.slug)}`;
  const duaImageUrl = `${baseUrl}/api/instagram/dua?slug=${encodeURIComponent(dua.slug)}`;

  const hadithCaption = buildHadithCaption(hadith);
  const duaCaption = buildDuaCaption(dua);

  const [igMorning, fbMorning, igEvening, fbEvening] = await Promise.allSettled([
    postToInstagram(hadithImageUrl, hadithCaption, morningTime),
    postToFacebook(hadithImageUrl, hadithCaption, morningTime),
    postToInstagram(duaImageUrl, duaCaption, eveningTime),
    postToFacebook(duaImageUrl, duaCaption, eveningTime),
  ]);

  const dateLabel = targetDate.toISOString().slice(0, 10);

  return Response.json({
    ok: true,
    scheduled_for: dateLabel,
    morning: {
      hadith: hadith.slug,
      instagram: igMorning.status === "fulfilled" ? igMorning.value : { error: String(igMorning.reason) },
      facebook: fbMorning.status === "fulfilled" ? fbMorning.value : { error: String(fbMorning.reason) },
    },
    evening: {
      dua: dua.slug,
      instagram: igEvening.status === "fulfilled" ? igEvening.value : { error: String(igEvening.reason) },
      facebook: fbEvening.status === "fulfilled" ? fbEvening.value : { error: String(fbEvening.reason) },
    },
  });
}
