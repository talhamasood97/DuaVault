import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // Don't block /_next/: Google needs the CSS/JS there to render pages.
        // Page preview images (og:image) live under /api/instagram/ — keep them fetchable.
        allow: ["/", "/api/instagram/"],
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
