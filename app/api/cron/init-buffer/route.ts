/**
 * INIT-BUFFER — one-shot endpoint to seed 4 days of scheduled posts.
 *
 * Call once after setting up env vars:
 *   GET /api/cron/init-buffer
 *   Authorization: Bearer <CRON_SECRET>
 *
 * Schedules days T+1, T+2, T+3, T+4 immediately so you start with
 * a full buffer instead of waiting 4 days for fill-buffer to build it up.
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
  const results = [];

  for (let daysAhead = 1; daysAhead <= 4; daysAhead++) {
    const targetDate = new Date();
    targetDate.setUTCDate(targetDate.getUTCDate() + daysAhead);
    targetDate.setUTCHours(0, 0, 0, 0);

    const morningTime = Math.floor(targetDate.getTime() / 1000) + 2 * 3600;
    const eveningTime = Math.floor(targetDate.getTime() / 1000) + 14 * 3600;

    const hadith = getDailyHadith(new Date(targetDate.getTime() + 2 * 3600 * 1000));
    const dua = getDailyDua(new Date(targetDate.getTime() + 14 * 3600 * 1000));

    const hadithImageUrl = `${baseUrl}/api/instagram/hadith?slug=${encodeURIComponent(hadith.slug)}`;
    const duaImageUrl = `${baseUrl}/api/instagram/dua?slug=${encodeURIComponent(dua.slug)}`;

    const [igM, fbM, igE, fbE] = await Promise.allSettled([
      postToInstagram(hadithImageUrl, buildHadithCaption(hadith), morningTime),
      postToFacebook(hadithImageUrl, buildHadithCaption(hadith), morningTime),
      postToInstagram(duaImageUrl, buildDuaCaption(dua), eveningTime),
      postToFacebook(duaImageUrl, buildDuaCaption(dua), eveningTime),
    ]);

    results.push({
      date: targetDate.toISOString().slice(0, 10),
      morning: {
        hadith: hadith.slug,
        instagram: igM.status === "fulfilled" ? igM.value : { error: String(igM.reason) },
        facebook: fbM.status === "fulfilled" ? fbM.value : { error: String(fbM.reason) },
      },
      evening: {
        dua: dua.slug,
        instagram: igE.status === "fulfilled" ? igE.value : { error: String(igE.reason) },
        facebook: fbE.status === "fulfilled" ? fbE.value : { error: String(fbE.reason) },
      },
    });
  }

  return Response.json({ ok: true, scheduled: results });
}
