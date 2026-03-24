/**
 * POST-EVENING CRON — 7:30 PM IST (14:00 UTC)
 * Posts the Dua of the Day image to Instagram + Facebook.
 *
 * Vercel cron schedule in vercel.json: "0 14 * * *"
 * Secured with CRON_SECRET env var.
 */

import { getDailyDua } from "@/data/duas";
import { postToInstagram, postToFacebook, verifyCronSecret } from "@/lib/instagram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function formatSource(dua: ReturnType<typeof getDailyDua>): string {
  if (dua.authenticity_grade === "QURAN") {
    return dua.hadith_number ? `Quran ${dua.hadith_number}` : "Quran";
  }
  const grade = dua.authenticity_grade === "SAHIH" ? "Sahih" : "Hasan";
  return dua.hadith_number
    ? `${dua.source_book} • #${dua.hadith_number} • ${grade}`
    : `${dua.source_book} • ${grade}`;
}

function buildCaption(dua: ReturnType<typeof getDailyDua>): string {
  const translit = dua.transliteration.length > 200
    ? dua.transliteration.slice(0, 200).trimEnd() + "…"
    : dua.transliteration;
  const translation = dua.translation.length > 300
    ? dua.translation.slice(0, 300).trimEnd() + "…"
    : dua.translation;

  return [
    `🌙 Dua of the Day: ${dua.title}`,
    "",
    translit,
    "",
    `"${translation}"`,
    "",
    `📖 ${formatSource(dua)}`,
    "",
    "🌐 Learn more duas at duavault.com",
    "",
    "#dua #islamicdua #quran #islam #muslimlifestyle #dailydua #islamicreminder #duavault",
  ].join("\n");
}

export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const dua = getDailyDua();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://duavault.com";
  const imageUrl = `${baseUrl}/api/instagram/dua?slug=${encodeURIComponent(dua.slug)}`;
  const caption = buildCaption(dua);

  const [igResult, fbResult] = await Promise.allSettled([
    postToInstagram(imageUrl, caption),
    postToFacebook(imageUrl, caption),
  ]);

  return Response.json({
    ok: true,
    dua: dua.slug,
    instagram: igResult.status === "fulfilled" ? igResult.value : { error: String(igResult.reason) },
    facebook: fbResult.status === "fulfilled" ? fbResult.value : { error: String(fbResult.reason) },
  });
}
