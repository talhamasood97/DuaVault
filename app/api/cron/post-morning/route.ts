/**
 * POST-MORNING CRON — 7:30 AM IST (02:00 UTC)
 * Posts the Hadith of the Day image to Instagram + Facebook.
 *
 * Vercel cron schedule in vercel.json: "0 2 * * *"
 * Secured with CRON_SECRET env var.
 */

import { getDailyHadith } from "@/data/hadiths";
import { postToInstagram, postToFacebook, verifyCronSecret } from "@/lib/instagram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function buildCaption(hadith: ReturnType<typeof getDailyHadith>): string {
  return [
    "📚 Hadith of the Day",
    "",
    `"${hadith.translation}"`,
    "",
    `— ${hadith.narrator}`,
    `📖 ${hadith.source_book} • #${hadith.hadith_number} • ${hadith.grade}`,
    "",
    "🌐 Read more duas & hadith at duavault.com",
    "",
    "#hadith #islamicquotes #prophetmuhammad #sunnah #islam #muslimlifestyle #islamicreminder #duavault",
  ].join("\n");
}

export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const hadith = getDailyHadith();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://duavault.com";
  const imageUrl = `${baseUrl}/api/instagram/hadith?slug=${encodeURIComponent(hadith.slug)}`;
  const caption = buildCaption(hadith);

  const [igResult, fbResult] = await Promise.allSettled([
    postToInstagram(imageUrl, caption),
    postToFacebook(imageUrl, caption),
  ]);

  return Response.json({
    ok: true,
    hadith: hadith.slug,
    instagram: igResult.status === "fulfilled" ? igResult.value : { error: String(igResult.reason) },
    facebook: fbResult.status === "fulfilled" ? fbResult.value : { error: String(fbResult.reason) },
  });
}
