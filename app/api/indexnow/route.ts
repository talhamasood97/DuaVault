import { NextResponse } from "next/server";
import { DUAS } from "@/data/duas";
import { HADITHS } from "@/data/hadiths";
import { CATEGORIES, EMOTIONS, SITE_URL } from "@/lib/utils";

const INDEXNOW_KEY = "9e52a8b3c4d1f067e2a9b5c8d3f10247";

function getAllUrls(): string[] {
  const staticUrls = [
    SITE_URL,
    `${SITE_URL}/daily-dua`,
    `${SITE_URL}/daily-hadith`,
    `${SITE_URL}/about`,
    `${SITE_URL}/sources`,
  ];
  const categoryUrls = CATEGORIES.map((c) => `${SITE_URL}/category/${c.slug}`);
  const emotionUrls = EMOTIONS.map((e) => `${SITE_URL}/emotion/${e.slug}`);
  const duaUrls = DUAS.map((d) => `${SITE_URL}/duas/${d.slug}`);
  const hadithUrls = HADITHS.map((h) => `${SITE_URL}/hadith/${h.slug}`);
  return [...staticUrls, ...categoryUrls, ...emotionUrls, ...duaUrls, ...hadithUrls];
}

export async function POST() {
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
    message: "Use POST to submit all URLs to IndexNow",
    urlCount: getAllUrls().length,
    key: INDEXNOW_KEY,
  });
}
