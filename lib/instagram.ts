/**
 * Meta Graph API helpers for posting to Instagram + Facebook Page.
 *
 * Required env vars (set in Vercel dashboard):
 *   META_PAGE_ACCESS_TOKEN      — long-lived Page Access Token (never expires when
 *                                  derived from a long-lived User token with admin role)
 *   INSTAGRAM_BUSINESS_ACCOUNT_ID — numeric IG Business/Creator account ID
 *   FACEBOOK_PAGE_ID            — numeric Facebook Page ID (set once Page is created)
 *   CRON_SECRET                 — shared secret to verify Vercel cron requests
 *   NEXT_PUBLIC_BASE_URL        — https://duavault.com
 *   BLOB_READ_WRITE_TOKEN       — Vercel Blob token (auto-added when Blob store is connected)
 */

import { put, list } from "@vercel/blob";

const GRAPH = "https://graph.facebook.com/v20.0";

/**
 * Fetch an image from our Vercel API route and upload it to Vercel Blob.
 * Returns a stable public CDN URL that Instagram/Facebook can reliably fetch.
 */
async function uploadToBlobCdn(imageUrl: string): Promise<string> {
  const res = await fetch(imageUrl);
  if (!res.ok) throw new Error(`Failed to fetch image: ${res.status}`);
  const buffer = await res.arrayBuffer();
  const filename = `posts/${Date.now()}.png`;
  const blob = await put(filename, buffer, { access: "public", contentType: "image/png" });
  return blob.url;
}

export interface PostResult {
  platform: "instagram" | "facebook";
  id?: string;
  error?: string;
}

/**
 * Post an image to Instagram Business/Creator account.
 * Two-step: create media container → publish container.
 * Pass scheduledTime (Unix seconds) to schedule instead of posting immediately.
 */
export async function postToInstagram(
  imageUrl: string,
  caption: string,
  scheduledTime?: number
): Promise<PostResult> {
  const igUserId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
  const token = process.env.META_PAGE_ACCESS_TOKEN;

  if (!igUserId || !token) {
    return {
      platform: "instagram",
      error: "Missing INSTAGRAM_BUSINESS_ACCOUNT_ID or META_PAGE_ACCESS_TOKEN env var",
    };
  }

  // Upload to Vercel Blob CDN so Instagram can reliably fetch the image
  const cdnUrl = await uploadToBlobCdn(imageUrl);

  // Step 1: create media container (URLSearchParams preserves emoji correctly)
  const params = new URLSearchParams({ image_url: cdnUrl, caption, access_token: token });
  if (scheduledTime) {
    params.set("scheduled_publish_time", String(scheduledTime));
    params.set("published", "false");
  }
  const containerRes = await fetch(`${GRAPH}/${igUserId}/media`, {
    method: "POST",
    body: params,
  });
  const container = await containerRes.json();

  if (!container.id) {
    return {
      platform: "instagram",
      error: container.error?.message ?? "Container creation failed",
    };
  }

  // Step 2: poll until container is FINISHED processing (up to 30s)
  for (let i = 0; i < 10; i++) {
    await new Promise((r) => setTimeout(r, 3000));
    const statusRes = await fetch(`${GRAPH}/${container.id}?fields=status_code&access_token=${token}`);
    const status = await statusRes.json();
    if (status.status_code === "FINISHED") break;
    if (status.status_code === "ERROR" || status.status_code === "EXPIRED") {
      return { platform: "instagram", error: `Container failed with status: ${status.status_code}` };
    }
  }

  // Step 3: publish
  const publishRes = await fetch(`${GRAPH}/${igUserId}/media_publish`, {
    method: "POST",
    body: new URLSearchParams({ creation_id: container.id, access_token: token }),
  });
  const publish = await publishRes.json();

  if (!publish.id) {
    return {
      platform: "instagram",
      error: publish.error?.message ?? "Publish failed",
    };
  }

  return { platform: "instagram", id: publish.id };
}

/**
 * Post an image to a Facebook Page.
 * Pass scheduledTime (Unix seconds) to schedule instead of posting immediately.
 */
export async function postToFacebook(
  imageUrl: string,
  caption: string,
  scheduledTime?: number
): Promise<PostResult> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const token = process.env.META_PAGE_ACCESS_TOKEN;

  if (!pageId || !token) {
    return {
      platform: "facebook",
      error: "Missing FACEBOOK_PAGE_ID or META_PAGE_ACCESS_TOKEN env var",
    };
  }

  const cdnUrl = await uploadToBlobCdn(imageUrl);
  const params = new URLSearchParams({ url: cdnUrl, caption, access_token: token });
  if (scheduledTime) {
    params.set("scheduled_publish_time", String(scheduledTime));
    params.set("published", "false");
  }

  const res = await fetch(`${GRAPH}/${pageId}/photos`, {
    method: "POST",
    body: params,
  });
  const data = await res.json();

  if (!data.id) {
    return {
      platform: "facebook",
      error: data.error?.message ?? "Post failed",
    };
  }

  return { platform: "facebook", id: data.id };
}

/** Verify Vercel cron secret from Authorization header. */
export function verifyCronSecret(request: Request): boolean {
  const auth = request.headers.get("authorization");
  return auth === `Bearer ${process.env.CRON_SECRET}`;
}

/** Returns today's date in IST as YYYY-MM-DD (UTC+5:30). */
function todayIST(): string {
  return new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().slice(0, 10);
}

/** Returns true if this slot (morning/evening) has already been posted today. */
export async function hasPostedToday(slot: "morning" | "evening"): Promise<boolean> {
  const { blobs } = await list({ prefix: `post-log/${todayIST()}-${slot}` });
  return blobs.length > 0;
}

/** Records that this slot was successfully posted today. */
export async function markPostedToday(slot: "morning" | "evening", slug: string): Promise<void> {
  await put(`post-log/${todayIST()}-${slot}.txt`, slug, { access: "public", addRandomSuffix: false });
}
