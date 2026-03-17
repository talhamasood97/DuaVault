import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getDailyHadith } from "@/data/hadiths";
import { createServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://duavault.com";

function buildDailyEmail(
  name: string,
  hadith: ReturnType<typeof getDailyHadith>,
  unsubscribeToken: string
): string {
  const greeting = name ? `Assalamu Alaikum ${name},` : "Assalamu Alaikum,";
  const hadithUrl = `${SITE_URL}/hadith/${hadith.slug}`;
  const unsubUrl = `${SITE_URL}/api/unsubscribe?token=${unsubscribeToken}`;
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const gradeColor = hadith.grade === "Sahih" ? "#059669" : "#0284c7";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9f9f7;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f7;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e7e5e4;">

        <!-- Top bar -->
        <tr><td style="height:4px;background:linear-gradient(90deg,#d97706,#059669,#d97706);"></td></tr>

        <!-- Header -->
        <tr><td style="padding:28px 40px 20px;">
          <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:2px;color:#d97706;text-transform:uppercase;">Hadith of the Day</p>
          <p style="margin:0;font-size:13px;color:#a8a29e;">${today}</p>
        </td></tr>

        <!-- Title -->
        <tr><td style="padding:0 40px 16px;">
          <h2 style="margin:0;font-size:22px;color:#1c1917;line-height:1.3;">${hadith.title}</h2>
        </td></tr>

        <!-- Source + Grade -->
        <tr><td style="padding:0 40px 24px;">
          <span style="font-size:12px;color:${gradeColor};font-weight:700;background:${hadith.grade === "Sahih" ? "#d1fae5" : "#e0f2fe"};padding:3px 10px;border-radius:20px;margin-right:8px;">✓ ${hadith.grade}</span>
          <span style="font-size:12px;color:#78716c;">${hadith.source_book} · ${hadith.hadith_number} · ${hadith.narrator}</span>
        </td></tr>

        <!-- Arabic -->
        <tr><td style="padding:24px 40px;background:#fafaf9;border-top:1px solid #f5f5f4;border-bottom:1px solid #f5f5f4;">
          <p style="margin:0;font-size:28px;line-height:1.9;text-align:right;direction:rtl;color:#1c1917;font-family:'Traditional Arabic','Scheherazade New',serif;">
            ${hadith.arabic}
          </p>
        </td></tr>

        <!-- Transliteration -->
        <tr><td style="padding:20px 40px 8px;">
          <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:1.5px;color:#a8a29e;text-transform:uppercase;">Transliteration</p>
          <p style="margin:0;font-size:14px;color:#78716c;font-style:italic;line-height:1.7;">${hadith.transliteration}</p>
        </td></tr>

        <!-- Translation -->
        <tr><td style="padding:16px 40px 24px;">
          <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:1.5px;color:#a8a29e;text-transform:uppercase;">Translation</p>
          <p style="margin:0;font-size:16px;color:#292524;line-height:1.75;">${hadith.translation}</p>
        </td></tr>

        <!-- Today's practice -->
        <tr><td style="padding:20px 40px;background:#fffbeb;border-top:1px solid #fde68a;">
          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="width:24px;vertical-align:top;padding-top:2px;">
                <span style="font-size:16px;">✅</span>
              </td>
              <td style="padding-left:10px;">
                <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:1.5px;color:#d97706;text-transform:uppercase;">Today&apos;s Practice</p>
                <p style="margin:0;font-size:14px;color:#44403c;line-height:1.7;">${hadith.daily_practice}</p>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- CTA -->
        <tr><td style="padding:24px 40px;" align="center">
          <a href="${hadithUrl}" style="display:inline-block;background:#059669;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:13px 28px;border-radius:12px;">
            View on DuaVault →
          </a>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:16px 40px;border-top:1px solid #f5f5f4;background:#fafaf9;">
          <p style="margin:0;font-size:11px;color:#a8a29e;line-height:1.8;">
            DuaVault · <a href="${SITE_URL}" style="color:#a8a29e;">duavault.com</a><br>
            <a href="${unsubUrl}" style="color:#a8a29e;">Unsubscribe</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function GET(req: NextRequest) {
  // Verify cron secret — protects endpoint from public access
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "RESEND_API_KEY not configured" }, { status: 500 });
  }

  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.SUPABASE_SERVICE_ROLE_KEY
  ) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 500 });
  }

  try {
    const hadith = getDailyHadith();
    const db = createServerClient();
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "noreply@duavault.com";

    // Fetch all confirmed subscribers
    const { data: subscribers, error } = await db
      .from("hadith_subscribers")
      .select("email, name, unsubscribe_token")
      .eq("confirmed", true);

    if (error || !subscribers) {
      console.error("Fetch subscribers error:", error);
      return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 });
    }

    if (subscribers.length === 0) {
      return NextResponse.json({ sent: 0, message: "No confirmed subscribers yet." });
    }

    // Send in batches of 50 (Resend batch limit)
    let sent = 0;
    let failed = 0;
    const BATCH_SIZE = 50;

    for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
      const batch = subscribers.slice(i, i + BATCH_SIZE);
      const emails = batch.map((sub) => ({
        from: fromEmail,
        to: sub.email,
        subject: `Hadith of the Day: ${hadith.title}`,
        html: buildDailyEmail(sub.name ?? "", hadith, sub.unsubscribe_token),
      }));

      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { error: batchError } = await (resend.batch as any).send(emails);
        if (batchError) {
          console.error(`Batch ${i / BATCH_SIZE + 1} send error:`, batchError);
          failed += batch.length;
        } else {
          sent += batch.length;
        }
      } catch (batchErr) {
        console.error(`Batch ${i / BATCH_SIZE + 1} threw:`, batchErr);
        failed += batch.length;
      }
    }

    return NextResponse.json({
      sent,
      failed,
      hadith: hadith.title,
      date: new Date().toISOString().split("T")[0],
    });
  } catch (err) {
    console.error("Send daily hadith error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
