import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

const hasSupabase =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.SUPABASE_SERVICE_ROLE_KEY;

const hasResend = !!process.env.RESEND_API_KEY;

function buildConfirmationEmail(name: string, token: string): string {
  const confirmUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://duavault.com"}/api/confirm-subscription?token=${token}`;
  const greeting = name ? `Assalamu Alaikum ${name},` : "Assalamu Alaikum,";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9f9f7;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f7;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e7e5e4;">
        <tr><td style="height:4px;background:linear-gradient(90deg,#d97706,#059669,#d97706);"></td></tr>
        <tr><td style="padding:32px 40px 24px;">
          <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:2px;color:#d97706;text-transform:uppercase;">Confirm Your Subscription</p>
          <h1 style="margin:0 0 16px;font-size:22px;color:#1c1917;line-height:1.3;">Almost there — one click to confirm</h1>
          <p style="margin:0 0 24px;font-size:15px;color:#57534e;line-height:1.7;">${greeting}<br><br>
          You signed up for the <strong>Daily Hadith</strong> — one authentic hadith on morals and character delivered to your inbox every morning.</p>
          <p style="margin:0 0 24px;font-size:15px;color:#57534e;line-height:1.7;">Please confirm your email to start receiving it:</p>
          <table cellpadding="0" cellspacing="0"><tr><td>
            <a href="${confirmUrl}" style="display:inline-block;background:#d97706;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:14px 28px;border-radius:12px;">
              Confirm My Subscription →
            </a>
          </td></tr></table>
          <p style="margin:24px 0 0;font-size:12px;color:#a8a29e;">If you did not sign up for this, please ignore this email. Link expires in 48 hours.</p>
        </td></tr>
        <tr><td style="padding:16px 40px;border-top:1px solid #f5f5f4;background:#fafaf9;">
          <p style="margin:0;font-size:11px;color:#a8a29e;">DuaVault · duavault.com</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required." }, { status: 400 });
    }

    // ── Without Supabase: simple acknowledgement (dev mode) ─────────────────
    if (!hasSupabase) {
      return NextResponse.json({
        message: "Subscription recorded. (Database not configured — set up Supabase to persist.)",
      });
    }

    const db = createServerClient();

    // Check if already subscribed
    const { data: existing } = await db
      .from("hadith_subscribers")
      .select("id, confirmed")
      .eq("email", email)
      .single();

    if (existing?.confirmed) {
      return NextResponse.json({ message: "You are already subscribed!" });
    }

    // Upsert subscriber (insert or re-send confirmation)
    const { data: subscriber, error } = await db
      .from("hadith_subscribers")
      .upsert({ email, name: name || null }, { onConflict: "email" })
      .select("unsubscribe_token")
      .single();

    if (error || !subscriber) {
      console.error("Subscribe upsert error:", error);
      return NextResponse.json({ error: "Could not save subscription." }, { status: 500 });
    }

    // Send confirmation email via Resend
    if (hasResend) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error: sendError } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? "noreply@duavault.com",
        to: email,
        subject: "Confirm your Daily Hadith subscription — DuaVault",
        html: buildConfirmationEmail(name ?? "", subscriber.unsubscribe_token),
      });
      if (sendError) {
        console.error("Resend send error:", sendError);
      }
    }

    return NextResponse.json({
      message: "Please check your inbox to confirm your subscription.",
    });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
