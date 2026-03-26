/**
 * TOKEN AUTO-REFRESH — runs on the 1st of every month at 00:00 UTC.
 * Exchanges the 60-day long-lived User token for a fresh one,
 * also regenerates the Page Access Token from the new user token,
 * then auto-updates both in Vercel via the Vercel API.
 *
 * Required env vars:
 *   META_APP_ID, META_APP_SECRET, META_USER_ACCESS_TOKEN
 *   FACEBOOK_PAGE_ID             — to fetch the new page token
 *   MY_VERCEL_TOKEN              — Vercel personal access token (vercel.com/account/tokens)
 *   VERCEL_PROJECT_ID            — found in Vercel project Settings → General
 *   ADMIN_ALERT_EMAIL            — where to send success/failure emails
 *
 * Vercel cron schedule: "0 0 1 * *"
 */

import { verifyCronSecret, sendAdminAlert } from "@/lib/instagram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Redact a token for safe display in emails — shows first 8 + last 4 chars only. */
function redact(token: string): string {
  if (token.length <= 12) return "***";
  return `${token.slice(0, 8)}...${token.slice(-4)}`;
}

async function updateVercelEnv(key: string, value: string): Promise<boolean> {
  const vercelToken = process.env.MY_VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  if (!vercelToken || !projectId) return false;

  // Get existing env var ID
  const listRes = await fetch(`https://api.vercel.com/v9/projects/${projectId}/env`, {
    headers: { Authorization: `Bearer ${vercelToken}` },
  });
  const listData = await listRes.json();
  const existing = listData.envs?.find((e: { key: string }) => e.key === key);

  if (existing) {
    const res = await fetch(`https://api.vercel.com/v9/projects/${projectId}/env/${existing.id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${vercelToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ value, target: ["production"] }),
    });
    return res.ok;
  } else {
    const res = await fetch(`https://api.vercel.com/v10/projects/${projectId}/env`, {
      method: "POST",
      headers: { Authorization: `Bearer ${vercelToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ key, value, type: "encrypted", target: ["production"] }),
    });
    return res.ok;
  }
}

export async function GET(request: Request) {
  if (!verifyCronSecret(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const appId = process.env.META_APP_ID;
  const appSecret = process.env.META_APP_SECRET;
  const currentToken = process.env.META_USER_ACCESS_TOKEN;
  const pageId = process.env.FACEBOOK_PAGE_ID;

  if (!appId || !appSecret || !currentToken) {
    await sendAdminAlert(
      "⚠️ Token refresh skipped — env vars missing",
      "META_APP_ID, META_APP_SECRET or META_USER_ACCESS_TOKEN is not set in Vercel.\nMonthly token refresh did NOT run."
    );
    return Response.json({ error: "Missing META_APP_ID, META_APP_SECRET, or META_USER_ACCESS_TOKEN" }, { status: 400 });
  }

  // Step 1: Exchange for fresh 60-day long-lived user token
  const url = new URL("https://graph.facebook.com/v20.0/oauth/access_token");
  url.searchParams.set("grant_type", "fb_exchange_token");
  url.searchParams.set("client_id", appId);
  url.searchParams.set("client_secret", appSecret);
  url.searchParams.set("fb_exchange_token", currentToken);

  const res = await fetch(url.toString());
  const data = await res.json();

  if (!data.access_token) {
    await sendAdminAlert(
      "🚨 Monthly token refresh FAILED",
      `Error: ${data.error?.message ?? "Unknown error"}\n\nManual action needed:\n1. Go to https://developers.facebook.com/tools/explorer/\n2. Generate a new token\n3. Exchange for long-lived token\n4. Update META_USER_ACCESS_TOKEN in Vercel`
    );
    return Response.json({ error: data.error?.message ?? "Token refresh failed" }, { status: 500 });
  }

  const newUserToken = data.access_token;
  const expiryDays = Math.round((data.expires_in ?? 5184000) / 86400);

  // Step 2: Fetch fresh Page Access Token from the new user token
  let newPageToken: string | null = null;
  if (pageId) {
    const pageRes = await fetch(`https://graph.facebook.com/v20.0/me/accounts?access_token=${newUserToken}`);
    const pageData = await pageRes.json();
    const page = pageData.data?.find((p: { id: string }) => p.id === pageId);
    newPageToken = page?.access_token ?? null;
  }

  // Step 3: Auto-update both tokens in Vercel
  const userUpdated = await updateVercelEnv("META_USER_ACCESS_TOKEN", newUserToken);
  const pageUpdated = newPageToken ? await updateVercelEnv("META_PAGE_ACCESS_TOKEN", newPageToken) : false;
  const autoUpdated = userUpdated && (pageUpdated || !newPageToken);

  const statusLines = [
    `Date: ${new Date().toISOString()}`,
    `User token expires in: ${expiryDays} days`,
    `META_USER_ACCESS_TOKEN updated: ${userUpdated ? "YES ✅" : "NO ❌"}`,
    `META_PAGE_ACCESS_TOKEN updated: ${pageUpdated ? "YES ✅" : (newPageToken ? "NO ❌" : "SKIPPED (no FACEBOOK_PAGE_ID)")}`,
    "",
    autoUpdated
      ? "✅ Both tokens refreshed automatically. No manual action needed."
      : `⚠️ Auto-update incomplete. Manual action needed in Vercel dashboard.\nUser token hint: ${redact(newUserToken)}${newPageToken ? `\nPage token hint: ${redact(newPageToken)}` : ""}`,
  ].join("\n");

  await sendAdminAlert(
    autoUpdated ? "✅ Monthly token refresh SUCCESS" : "⚠️ Monthly token refresh — partial failure",
    statusLines
  );

  return Response.json({
    ok: true,
    expires_in_days: expiryDays,
    user_token_updated: userUpdated,
    page_token_updated: pageUpdated,
  });
}
