const nextConfig = {
  poweredByHeader: false,
  compress: true,
  serverExternalPackages: ["sharp", "satori"],
  async redirects() {
    return [
      // Redirect www → non-www to eliminate the redirect chain (saves ~860ms on first load)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.duavault.com" }],
        destination: "https://duavault.com/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    // Content-Security-Policy
    // - 'unsafe-inline' on script-src is required by Next.js (inline hydration chunks).
    // - 'unsafe-eval' is omitted; not required by Next.js 14 SWC in production.
    // - Tighten to a nonce-based policy via middleware when traffic justifies the effort.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "img-src 'self' data: https:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://vitals.vercel-insights.com https://*.supabase.co",
      "frame-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          // HSTS — 2-year max-age, include subdomains. Add `; preload` after verifying on hstspreload.org.
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
