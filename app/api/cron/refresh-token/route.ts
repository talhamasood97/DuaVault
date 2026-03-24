/**
 * TOKEN-REFRESH CRON (optional, monthly safety net)
 * Exchanges the current long-lived User token for a fresh 60-day token.
 * Page Access Tokens derived from long-lived User tokens never expire,
 * so this is only needed if you're storing a User token directly.
 *
 * Call manually via: GET /api/cron/refresh-token
 * with Authorization: Bearer <CRON_SECRET>
 *
 * Required env vars:
 *   META_APP_ID, META_APP_SECRET, META_USER_ACCESS_TOKEN
 */

import { verifyCronSecret } from "@/lib/instagram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const appId = process.env.META_APP_ID;
  const appSecret = process.env.META_APP_SECRET;
  const currentToken = process.env.META_USER_ACCESS_TOKEN;

  if (!appId || !appSecret || !currentToken) {
    return Response.json(
      { error: "Missing META_APP_ID, META_APP_SECRET, or META_USER_ACCESS_TOKEN" },
      { status: 400 }
    );
  }

  const url = new URL("https://graph.facebook.com/v20.0/oauth/access_token");
  url.searchParams.set("grant_type", "fb_exchange_token");
  url.searchParams.set("client_id", appId);
  url.searchParams.set("client_secret", appSecret);
  url.searchParams.set("fb_exchange_token", currentToken);

  const res = await fetch(url.toString());
  const data = await res.json();

  if (!data.access_token) {
    return Response.json({ error: data.error?.message ?? "Token refresh failed" }, { status: 500 });
  }

  // Log the new token — copy it to Vercel env vars manually (or use Vercel API to update)
  console.log("Refreshed token expires in:", data.expires_in, "seconds");

  return Response.json({
    ok: true,
    message: "Copy the new_token value to your Vercel META_USER_ACCESS_TOKEN env var.",
    new_token: data.access_token,
    expires_in_days: Math.round((data.expires_in ?? 5184000) / 86400),
  });
}
