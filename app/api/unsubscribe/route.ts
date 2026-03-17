import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://duavault.com";

// GET — show a confirmation page so bots/prefetch crawlers cannot accidentally
// trigger the deletion. The actual delete happens on POST (form submission).
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?unsubscribed=invalid`);
  }

  // Escape token for safe HTML embedding (tokens are UUIDs so this is redundant,
  // but defence-in-depth against any future token format changes).
  const safeToken = token.replace(/[^a-zA-Z0-9\-_]/g, "");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Unsubscribe – DuaVault</title>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f9f9f7;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
    .card{background:#fff;border-radius:20px;padding:40px 36px;max-width:420px;width:100%;text-align:center;border:1px solid #e7e5e4;box-shadow:0 4px 24px rgba(0,0,0,0.06)}
    .logo{font-size:13px;font-weight:700;letter-spacing:1px;color:#059669;text-transform:uppercase;margin-bottom:28px}
    h1{font-size:20px;color:#1c1917;margin-bottom:10px;font-weight:700}
    p{color:#78716c;font-size:14px;line-height:1.6;margin-bottom:28px}
    button{background:#dc2626;color:#fff;border:none;padding:13px 28px;border-radius:12px;font-size:14px;font-weight:600;cursor:pointer;width:100%;transition:opacity .15s}
    button:hover{opacity:.88}
    .back{display:block;margin-top:14px;color:#059669;font-size:13px;text-decoration:none}
    .back:hover{text-decoration:underline}
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">DuaVault</div>
    <h1>Unsubscribe from daily hadith?</h1>
    <p>You will no longer receive the daily hadith email. This action cannot be undone.</p>
    <form method="POST" action="/api/unsubscribe">
      <input type="hidden" name="token" value="${safeToken}">
      <button type="submit">Yes, unsubscribe me</button>
    </form>
    <a class="back" href="${SITE_URL}">← Back to DuaVault</a>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

// POST — performs the actual deletion after user confirms intent on the page above.
export async function POST(req: NextRequest) {
  let token: string | null = null;

  try {
    const formData = await req.formData();
    token = formData.get("token") as string | null;
  } catch {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?unsubscribed=error`);
  }

  if (!token) {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?unsubscribed=invalid`);
  }

  try {
    const db = createServerClient();
    const { error, count } = await db
      .from("hadith_subscribers")
      .delete({ count: "exact" })
      .eq("unsubscribe_token", token);

    if (error) {
      return NextResponse.redirect(`${SITE_URL}/daily-hadith?unsubscribed=error`);
    }

    if (count === 0) {
      return NextResponse.redirect(`${SITE_URL}/daily-hadith?unsubscribed=invalid`);
    }

    return NextResponse.redirect(`${SITE_URL}/daily-hadith?unsubscribed=true`);
  } catch {
    return NextResponse.redirect(`${SITE_URL}/daily-hadith?unsubscribed=error`);
  }
}
