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
 */

const GRAPH = "https://graph.facebook.com/v20.0";

export interface PostResult {
  platform: "instagram" | "facebook";
  id?: string;
  error?: string;
}

/**
 * Post an image to Instagram Business/Creator account.
 * Two-step: create media container → publish container.
 */
export async function postToInstagram(
  imageUrl: string,
  caption: string
): Promise<PostResult> {
  const igUserId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;
  const token = process.env.META_PAGE_ACCESS_TOKEN;

  if (!igUserId || !token) {
    return {
      platform: "instagram",
      error: "Missing INSTAGRAM_BUSINESS_ACCOUNT_ID or META_PAGE_ACCESS_TOKEN env var",
    };
  }

  // Step 1: create media container
  const containerRes = await fetch(`${GRAPH}/${igUserId}/media`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image_url: imageUrl, caption, access_token: token }),
  });
  const container = await containerRes.json();

  if (!container.id) {
    return {
      platform: "instagram",
      error: container.error?.message ?? "Container creation failed",
    };
  }

  // Step 2: publish container
  const publishRes = await fetch(`${GRAPH}/${igUserId}/media_publish`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ creation_id: container.id, access_token: token }),
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
 */
export async function postToFacebook(
  imageUrl: string,
  caption: string
): Promise<PostResult> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const token = process.env.META_PAGE_ACCESS_TOKEN;

  if (!pageId || !token) {
    return {
      platform: "facebook",
      error: "Missing FACEBOOK_PAGE_ID or META_PAGE_ACCESS_TOKEN env var",
    };
  }

  const res = await fetch(`${GRAPH}/${pageId}/photos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: imageUrl, caption, access_token: token }),
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
