/**
 * TOKEN AUTO-REFRESH — runs on the 1st of every month at 00:00 UTC.
 * Exchanges the 60-day long-lived User token for a fresh one,
 * then auto-updates it in Vercel via the Vercel API.
 *
 * Required env vars:
 *   META_APP_ID, META_APP_SECRET, META_USER_ACCESS_TOKEN
 *   VERCEL_TOKEN         — Vercel personal access token (create at vercel.com/account/tokens)
 *   VERCEL_PROJECT_ID    — found in Vercel project Settings → General
 *   ADMIN_ALERT_EMAIL    — where to send success/failure emails
 *
 * Vercel cron schedule: "0 0 1 * *"
 */

import { verifyCronSecret, sendAdminAlert } from "@/lib/instagram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function updateVercelEnv(key: string, value: string): Promise<boolean> {
  const vercelToken = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;
  if (!vercelToken || !projectId) return false;

  // Get existing env var ID
  const listRes = await fetch(`https://api.vercel.com/v9/projects/${projectId}/env`, {
    headers: { Authorization: `Bearer ${vercelToken}` },
  });
  const listData = await listRes.json();
  const existing = listData.envs?.find((e: { key: string }) => e.key === key);

  if (existing) {
    // Update existing
    const res = await fetch(`https://api.vercel.com/v9/projects/${projectId}/env/${existing.id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${vercelToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ value, target: ["production"] }),
    });
    return res.ok;
  } else {
    // Create new
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

  if (!appId || !appSecret || !currentToken) {
    await sendAdminAlert(
      "⚠️ Token refresh skipped — env vars missing",
      "META_APP_ID, META_APP_SECRET or META_USER_ACCESS_TOKEN is not set in Vercel.\nMonthly token refresh did NOT run."
    );
    return Response.json({ error: "Missing META_APP_ID, META_APP_SECRET, or META_USER_ACCESS_TOKEN" }, { status: 400 });
  }

  // Exchange for fresh 60-day long-lived user token
  const url = new URL(`https://graph.facebook.com/v20.0/oauth/access_token`);
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

  const newToken = data.access_token;
  const expiryDays = Math.round((data.expires_in ?? 5184000) / 86400);

  // Auto-update Vercel env var if VERCEL_TOKEN + VERCEL_PROJECT_ID are set
  const autoUpdated = await updateVercelEnv("META_USER_ACCESS_TOKEN", newToken);

  await sendAdminAlert(
    "✅ Monthly token refresh SUCCESS",
    `New user token generated at ${new Date().toISOString()}\nExpires in: ${expiryDays} days\nAuto-updated Vercel env: ${autoUpdated ? "YES ✅" : "NO ⚠️ (set VERCEL_TOKEN + VERCEL_PROJECT_ID to enable auto-update)"}\n\n${!autoUpdated ? `Manual update needed:\nMETA_USER_ACCESS_TOKEN = ${newToken}` : "No manual action needed."}`
  );

  return Response.json({
    ok: true,
    expires_in_days: expiryDays,
    auto_updated_vercel: autoUpdated,
  });
}
