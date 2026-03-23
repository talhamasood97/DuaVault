import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";
import { escapeHtml } from "@/lib/utils";
import { rateLimit, getClientIp } from "@/lib/rateLimit";

export const runtime = "nodejs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://duavault.com";

const hasSupabase =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.SUPABASE_SERVICE_ROLE_KEY;

/** Confirmation landing page — shown when user clicks the email link. */
export async function GET(req: NextRequest) {
  // Rate limit: 20 page loads per IP per minute
  const ip = getClientIp(req.headers);
  const rl = rateLimit(`confirm-get:${ip}`, 20, 60 * 1000);
  if (!rl.allowed) {
    return new NextResponse("Too many requests. Please slow down.", {
      status: 429,
      headers: { "Retry-After": String(rl.retryAfterSec), "Content-Type": "text/plain" },
    });
  }

  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=invalid`);
  }

  // Validate the confirmation_token exists before showing the page so we don't
  // render a "Confirm" button for bogus or already-used tokens.
  if (hasSupabase) {
    try {
      const db = createAdminClient();
      const { data } = await db
        .from("hadith_subscribers")
        .select("id, confirmed, confirmation_token")
        .eq("confirmation_token", token)
        .single();

      if (!data) {
        return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=invalid`);
      }

      if (data.confirmed) {
        return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=true`);
      }
    } catch {
      return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=error`);
    }
  }

  // Escape token before embedding in HTML to prevent XSS.
  const safeToken = escapeHtml(token);

  // Return a minimal confirmation page — user must click the button to POST.
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Confirm Subscription – DuaVault</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#f9f9f7;font-family:Georgia,serif;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
    .card{background:#fff;border-radius:16px;border:1px solid #e7e5e4;max-width:480px;width:100%;padding:40px;text-align:center}
    .label{font-size:11px;font-weight:700;letter-spacing:2px;color:#d97706;text-transform:uppercase;margin-bottom:12px}
    h1{font-size:22px;color:#1c1917;line-height:1.3;margin-bottom:16px}
    p{font-size:15px;color:#57534e;line-height:1.7;margin-bottom:28px}
    button{background:#059669;color:#fff;border:none;border-radius:12px;font-size:14px;font-weight:700;padding:14px 28px;cursor:pointer;width:100%}
    button:hover{background:#047857}
    .note{font-size:12px;color:#a8a29e;margin-top:16px}
  </style>
</head>
<body>
  <div class="card">
    <p class="label">Daily Hadith – DuaVault</p>
    <h1>Confirm your subscription</h1>
    <p>Click the button below to start receiving one authentic hadith every morning.</p>
    <form method="POST" action="/api/confirm-subscription">
      <input type="hidden" name="token" value="${safeToken}">
      <button type="submit">Confirm My Subscription →</button>
    </form>
    <p class="note">If you did not sign up for this, simply close this page.</p>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

/** Performs the actual confirmation — only reachable via the form POST. */
export async function POST(req: NextRequest) {
  // Rate limit: 10 confirmation attempts per IP per minute
  const ip = getClientIp(req.headers);
  const rl = rateLimit(`confirm-post:${ip}`, 10, 60 * 1000);
  if (!rl.allowed) {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=error`);
  }

  let token: string | null = null;

  // Support both form submissions and JSON (for future API use).
  const contentType = req.headers.get("content-type") ?? "";
  if (contentType.includes("application/x-www-form-urlencoded")) {
    const body = await req.text();
    token = new URLSearchParams(body).get("token");
  } else {
    try {
      const json = await req.json();
      token = json?.token ?? null;
    } catch {
      // fall through — token stays null
    }
  }

  if (!token) {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=invalid`);
  }

  try {
    const db = createAdminClient();
    // Confirm the subscriber and null out the confirmation_token so the link
    // cannot be replayed. Match on confirmation_token (not unsubscribe_token).
    const { error, count } = await db
      .from("hadith_subscribers")
      .update({ confirmed: true, confirmation_token: null }, { count: "exact" })
      .eq("confirmation_token", token)
      .eq("confirmed", false); // no-op if already confirmed

    if (error) {
      return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=error`);
    }

    if (count === 0) {
      // Token matched no unconfirmed row — already confirmed or invalid.
      return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=true`);
    }

    return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=true`);
  } catch {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?confirmed=error`);
  }
}
