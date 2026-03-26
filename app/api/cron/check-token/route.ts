/**
 * TOKEN HEALTH CHECK — runs daily at 01:00 UTC (6:30 AM IST)
 * That is 1 hour before the morning post cron (02:00 UTC).
 * If the Meta token is invalid, an alert email is sent immediately
 * so you can fix it BEFORE the post fires rather than after.
 *
 * Vercel cron schedule: "0 1 * * *"
 */

import { verifyCronSecret, sendAdminAlert } from "@/lib/instagram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const GRAPH = "https://graph.facebook.com/v20.0";

export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const token = process.env.META_PAGE_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const igId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!token || !pageId || !igId) {
    await sendAdminAlert(
      "⚠️ Token check skipped — env vars missing",
      "META_PAGE_ACCESS_TOKEN, FACEBOOK_PAGE_ID or INSTAGRAM_BUSINESS_ACCOUNT_ID is not set in Vercel."
    );
    return Response.json({ ok: false, error: "Missing env vars" });
  }

  // Check Facebook Page token validity
  const fbRes = await fetch(`${GRAPH}/${pageId}?fields=name&access_token=${token}`);
  const fbData = await fbRes.json();

  // Check Instagram token validity
  const igRes = await fetch(`${GRAPH}/${igId}?fields=username&access_token=${token}`);
  const igData = await igRes.json();

  const fbOk = !fbData.error;
  const igOk = !igData.error;

  if (!fbOk || !igOk) {
    await sendAdminAlert(
      "🚨 URGENT: Meta token is INVALID — posts will fail today",
      `Token check at ${new Date().toISOString()}\n\nFacebook: ${fbOk ? "✅ OK" : `❌ ${fbData.error?.message}`}\nInstagram: ${igOk ? "✅ OK" : `❌ ${igData.error?.message}`}\n\nACTION REQUIRED:\n1. Go to https://developers.facebook.com/tools/explorer/\n2. Generate a new token\n3. Update META_PAGE_ACCESS_TOKEN in Vercel\n4. Redeploy\n\nMorning post fires in ~1 hour (02:00 UTC / 7:30 AM IST).`
    );
    return Response.json({ ok: false, facebook: fbData.error?.message, instagram: igData.error?.message });
  }

  return Response.json({
    ok: true,
    facebook: fbData.name,
    instagram: igData.username,
    checked_at: new Date().toISOString(),
  });
}
