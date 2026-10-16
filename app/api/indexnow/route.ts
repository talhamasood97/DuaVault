import { NextRequest, NextResponse } from "next/server";
import { DUAS } from "@/data/duas";
import { HADITHS } from "@/data/hadiths";
import { CATEGORIES, EMOTIONS, SITE_URL } from "@/lib/utils";
import { COLLECTIONS } from "@/lib/collections";

// Must match the key file Bing/IndexNow first verified (public/<key>.txt). The other
// key file in public/ is rejected with UserForbiddedToAccessSite.
const INDEXNOW_KEY = "7407844c6631af6428ce3b88a62107ae";

function getAllUrls(): string[] {
  const staticUrls = [
    SITE_URL,
    `${SITE_URL}/daily-dua`,
    `${SITE_URL}/daily-hadith`,
    `${SITE_URL}/about`,
    `${SITE_URL}/sources`,
  ];
  const collectionUrls = [`${SITE_URL}/duas-for`, ...COLLECTIONS.map((c) => `${SITE_URL}/duas-for/${c.slug}`)];
  const categoryUrls = CATEGORIES.map((c) => `${SITE_URL}/category/${c.slug}`);
  const emotionUrls = EMOTIONS.map((e) => `${SITE_URL}/emotion/${e.slug}`);
  const duaUrls = DUAS.map((d) => `${SITE_URL}/duas/${d.slug}`);
  const hadithUrls = HADITHS.map((h) => `${SITE_URL}/hadith/${h.slug}`);
  return [...staticUrls, ...collectionUrls, ...categoryUrls, ...emotionUrls, ...duaUrls, ...hadithUrls];
}

export async function POST(req: NextRequest) {
  // Require admin secret — fail closed if env var is unset
  const cronSecret = process.env.CRON_SECRET?.trim();
  if (!cronSecret) {
    return NextResponse.json({ error: "CRON_SECRET not configured" }, { status: 500 });
  }
  if (req.headers.get("authorization") !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const urls = getAllUrls();
  const host = new URL(SITE_URL).hostname;

  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const engines = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
  ];

  const results = await Promise.allSettled(
    engines.map((endpoint) =>
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
      }).then((r) => ({ endpoint, status: r.status }))
    )
  );

  const summary = results.map((r) =>
    r.status === "fulfilled" ? r.value : { endpoint: "unknown", status: "error" }
  );

  return NextResponse.json({ submitted: urls.length, engines: summary });
}

export async function GET() {
  return NextResponse.json({
    message: "Use POST with Authorization: Bearer <CRON_SECRET> to submit all URLs to IndexNow",
    urlCount: getAllUrls().length,
  });
}
