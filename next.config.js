// Pages removed in the Oct 2026 content audit: duplicates merged into the
// original dua, and entries whose only source is graded weak (Da'if).
// Permanent redirects keep old links and search rankings pointing somewhere useful.
const REMOVED_PAGES = [
  ["/duas/dua-for-protection-evil-eye-hasad", "/duas/dua-for-protection-morning"],
  ["/duas/dua-seeking-refuge-in-allahs-words", "/duas/dua-against-evil-eye"],
  ["/duas/dua-for-parents-health", "/duas/dua-for-parents"],
  ["/duas/dua-before-driving-car", "/duas/dua-for-travel"],
  ["/duas/dua-upon-riding-vehicle-mount", "/duas/dua-for-travel"],
  ["/duas/dua-for-anxiety-panic-attack", "/duas/dua-of-prophet-yunus"],
  ["/duas/dua-of-ibrahim-for-righteous-offspring", "/duas/dua-of-prophet-ibrahim"],
  ["/duas/dua-rabbana-hab-lana-min-azwajina", "/duas/dua-for-righteous-spouse"],
  ["/duas/dua-for-dhikr-shukr-and-good-worship", "/duas/dua-for-gratitude"],
  ["/duas/dua-rabbi-zidni-ilma", "/duas/dua-for-knowledge"],
  ["/duas/dua-allahumma-la-sahla-ease", "/duas/dua-for-ease-in-hardship"],
  ["/duas/dua-ya-muqallibal-qulub-steadfast-heart", "/duas/dua-for-steadfastness"],
  ["/duas/dua-for-rizq-lawful-provision", "/duas/dua-when-in-debt"],
  ["/duas/dua-for-financial-sufficiency-and-halal", "/duas/dua-when-in-debt"],
  ["/duas/dua-rabbana-afrigh-alayna-sabran", "/duas/dua-for-patience"],
  ["/duas/dua-for-exam-success", "/duas/dua-musa-ease-and-speech"],
  ["/duas/dua-for-beneficial-knowledge", "/duas/dua-for-rizq-and-good-deeds"],
  ["/duas/dua-before-jummah-friday-prayer", "/duas/dua-salawat-ibrahim"],
  ["/duas/dua-for-the-night-of-jumu-ah", "/duas/dua-salawat-ibrahim"],
  ["/duas/dua-protection-from-punishment-at-night", "/duas/dua-for-sleep-protection-night"],
  ["/duas/dua-for-increase-and-benefit-in-knowledge", "/duas/dua-for-students-before-studying"],
  ["/duas/dua-of-musa-at-the-well", "/duas/dua-when-in-need-of-allah"],
  ["/duas/dua-rabbana-taqabbal-minna", "/duas/dua-for-acceptance-of-deeds"],
  ["/duas/dua-astaghfirullah-seeking-forgiveness", "/duas/dua-tawbah-hayy-qayyum"],
  ["/duas/dua-for-depression-sadness", "/duas/dua-for-depression-and-sadness"],
  ["/duas/dua-allahumma-inni-abduka-distress", "/duas/dua-for-depression-and-sadness"],
  ["/duas/dua-severe-hardship-distress", "/duas/dua-for-difficulty-hardship"],
  ["/duas/dua-for-seeing-yourself-in-mirror", "/duas/dua-looking-in-mirror"],
  ["/duas/dua-for-breaking-fast-iftar", "/duas/dua-breaking-fast"],
  ["/duas/dua-after-eating-food", "/duas/dua-after-eating"],
  ["/duas/dua-when-seeing-lightning", "/duas/dua-when-it-thunders"],
  ["/duas/dua-sighting-ramadan-crescent-chand-raat", "/duas/dua-seeing-crescent-moon"],
  ["/duas/dua-upon-seeing-afflicted-person", "/duas/dua-seeing-someone-in-difficulty"],
  ["/duas/dua-for-passing-by-graveyard", "/duas/dua-visiting-graves"],
  ["/hadith/hadith-wealth-not-in-abundance", "/hadith/hadith-on-contentment"],
  ["/hadith/hadith-alhamdulillah-fills-the-scales", "/hadith/hadith-purification-half-of-faith"],
  ["/hadith/hadith-every-joint-owes-sadaqah", "/hadith/hadith-removing-harm-is-charity"],
  ["/duas/dua-entering-home", "/category/daily-life"],
  ["/duas/dua-protection-from-hellfire", "/duas-for/protection-from-hellfire"],
  ["/duas/dua-at-qurbani-slaughter", "/category/worship"],
  ["/duas/dua-upon-hearing-iqamah", "/category/worship"],
  ["/hadith/hadith-beware-of-envy", "/hadith/hadith-do-not-spy"],
  ["/hadith/hadith-do-not-waste-water-in-wudu", "/hadith"],
  ["/hadith/hadith-cure-honey-and-quran", "/hadith"],
  ["/hadith/hadith-guard-your-gaze", "/hadith/hadith-rights-of-the-road"],
  ["/hadith/hadith-on-moderation-in-religion", "/hadith/hadith-most-beloved-deeds-are-consistent"],
  ["/hadith/hadith-dua-weapon-of-believer", "/hadith/hadith-supplication-is-worship"],
];

const nextConfig = {
  poweredByHeader: false,
  compress: true,
  serverExternalPackages: ["sharp", "satori", "@napi-rs/canvas"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Prevent webpack from trying to bundle native .node binaries
      const prev = config.externals;
      config.externals = [
        ...(Array.isArray(prev) ? prev : [prev]),
        ({ request }, callback) => {
          if (request && (request.includes("@napi-rs/canvas") || request.endsWith(".node"))) {
            return callback(null, `commonjs ${request}`);
          }
          callback();
        },
      ];
    }
    return config;
  },
  async redirects() {
    return [
      // Redirect www → non-www to eliminate the redirect chain (saves ~860ms on first load)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.duavault.com" }],
        destination: "https://duavault.com/:path*",
        permanent: true,
      },
      ...REMOVED_PAGES.map(([source, destination]) => ({ source, destination, permanent: true })),
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
