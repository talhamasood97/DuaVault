# PROJECT_CONTEXT.md — DuaVault

> Single source of truth for the DuaVault codebase. Every fact below is derived from actual code inspection.
> Last updated: 2026-03-26

---

## 1. Project Identity

| Field | Value |
|---|---|
| Name | DuaVault |
| Tagline | Authentic Islamic Duas \| Every Source Verified |
| Live URL | https://duavault.com |
| GitHub | https://github.com/talhamasood97/dua-companion |
| Instagram | [@dua.vault](https://www.instagram.com/dua.vault) |
| Facebook | https://www.facebook.com/share/1Ash5btPeQ/?mibextid=wwXIfr |
| Domain Registrar | Namecheap |
| Package Name | `duavault` v1.0.0 |

## 2. User Model

**Primary audience:** English-speaking Muslims searching for duas by keyword, category, or emotional state.

**Discovery paths:**
- **SEO** — targeting "dua [keyword]" queries (e.g., "dua before sleeping", "dua for anxiety"). Every dua page has JSON-LD structured data, canonical URLs, and full meta tags.
- **Social media** — automated daily posts to Instagram and Facebook drive followers back to the site.
- **Email** — daily hadith newsletter with double opt-in subscription.
- **Direct** — returning users who have saved duas to their local collection.

**User capabilities (no auth required):**
- Browse 151 duas across 9 categories and 8 emotional states
- Browse 91 hadiths across 6 categories (34 granular topics)
- Full-text search with synonym expansion, fuzzy matching, and Arabic support
- Save/unsave duas to a local collection (localStorage, max 200)
- Share duas via WhatsApp, Twitter, Facebook, or native share
- Subscribe to daily hadith email (double opt-in via Resend)
- View daily rotating dua and hadith

## 3. Tech Stack & Rationale

| Layer | Technology | Version | Why |
|---|---|---|---|
| Framework | Next.js (App Router) | 14.2.35 | SSR/SSG for SEO, API routes for crons |
| Language | TypeScript | 5.5.x | Strict mode enabled |
| Styling | Tailwind CSS | 3.4.x | Dark mode via `class` strategy |
| UI Animations | Framer Motion | 11.3.x | Page transitions, card hover |
| Icons | Lucide React | 0.400.x | Consistent icon set |
| Database | Supabase (PostgreSQL) | SDK 2.44.x | Full-text search, subscriber management |
| Image Generation | @napi-rs/canvas | 0.1.97 | Instagram/Facebook post images (1080x1080 PNG) |
| OG Images | @vercel/og + Satori | 0.11.x / 0.26.x | Dynamic OpenGraph images |
| Email | Resend | 6.9.x | Transactional + batch daily hadith emails |
| Blob Storage | @vercel/blob | 2.3.x | Post deduplication markers + CDN image hosting |
| Analytics | GA4 + @vercel/analytics | 2.0.x | Custom events + Vercel Web Analytics |
| Hosting | Vercel | — | Edge CDN, serverless functions, cron jobs |
| Theming | next-themes | 0.3.x | System/light/dark mode |
| Toasts | react-hot-toast | 2.4.x | User feedback notifications |
| Fonts | Google Fonts (Inter + Amiri) | — | Inter for body, Amiri for Arabic text |
| Node | v20.20.1 | — | Managed via nvm |

## 4. Architecture & Data Model

### Data Flow

```
Static Data (data/duas.ts, data/hadiths.ts)
    |
    v
Data Access Layer (lib/duas.ts)  <----> Supabase (optional, with fallback)
    |
    v
App Router Pages (SSR/ISR)  +  API Routes
    |
    v
Vercel CDN  -->  Browser
```

The system is designed to work entirely without Supabase — `lib/duas.ts` checks `hasSupabase` and falls back to static data from `data/duas.ts`. Supabase is used for:
1. Full-text search (PostgreSQL `tsvector` with weighted fields)
2. Hadith subscriber management (`hadith_subscribers` table)

### Dua Type (`types/index.ts`)

```typescript
interface Dua {
  id: number;
  slug: string;               // URL-safe identifier
  title: string;
  arabic_text: string;
  transliteration: string;
  translation: string;
  source_book: string;         // e.g., "Sahih al-Bukhari"
  hadith_number?: string;
  authenticity_grade: "SAHIH" | "HASAN" | "DA'IF" | "MAWDU'" | "QURAN";
  graded_by?: string;
  category: Category;          // 9 categories
  emotion_tags: Emotion[];     // 8 emotions
  situation_tags: string[];    // free-form tags for search
  featured: boolean;
  daily_dua_eligible: boolean;
}
```

### Hadith Type

```typescript
interface Hadith {
  id: number;
  slug: string;
  title: string;
  arabic: string;
  transliteration: string;
  translation: string;
  narrator: string;
  source_book: string;
  hadith_number: string;
  grade: "Sahih" | "Hasan";
  topic: string;               // granular topic (34 total)
  topic_tags: string[];        // broader search tags
  daily_practice: string;      // actionable takeaway
}
```

### Content Counts

| Content | Count | File |
|---|---|---|
| Duas | 151 | `data/duas.ts` (3,255 lines) |
| Hadiths | 91 | `data/hadiths.ts` (1,730 lines) |
| Dua Categories | 9 | `lib/utils.ts` — CATEGORIES array |
| Emotion States | 8 | `lib/utils.ts` — EMOTIONS array |
| Hadith Categories | 6 (34 topics) | `lib/hadith-categories.ts` |

### Categories (9)

daily-life, worship, protection, forgiveness, travel, quranic, family, health, morning-evening

### Emotions (8)

sad, stressed, afraid, lonely, grateful, angry, hopeful, seeking-forgiveness

### Hadith Categories (6)

character (Character & Ethics), worship (Faith & Worship), social (Social & Community), heart (Heart & Soul), compassion (Kindness & Mercy), knowledge (Knowledge & Giving)

### Database Schema (Supabase)

**Table: `duas`**
- Full-text search via `search_vector` (tsvector, generated column with weighted fields: A=title, B=translation+situation_tags, C=transliteration, D=source_book)
- GIN indexes on `search_vector`, `emotion_tags`; B-tree on `category`, `slug`, `featured`
- RLS: public SELECT via anon key, all ops via service_role

**Table: `hadith_subscribers`**
- Double opt-in: `confirmed` boolean, `confirmation_token` UUID (nulled after confirm)
- `unsubscribe_token` UUID (permanent, for email footer links)
- `last_sent_on` date for per-subscriber idempotency
- RLS: no anon access, service_role only

### Supabase Client Architecture (`lib/supabase.ts`)

Three client constructors:
1. `supabase` — client-side, initialized only when env vars present
2. `createPublicServerClient()` — server-side with anon key (public content reads)
3. `createAdminClient()` — server-side with service_role key (subscriber management, bypasses RLS)

### Daily Rotation Logic

Both `getDailyDua()` and `getDailyHadith()` use deterministic day-of-year modulo:
```
dayOfYear = floor((now - Jan 1) / 86400000)
item = pool[dayOfYear % pool.length]
```
Duas: uses only `daily_dua_eligible` entries. Hadiths: uses full array.
Both accept optional `date` parameter for future scheduling.

### Search Architecture (`data/duas.ts`)

Client-side search with:
- Multi-field scoring: title (exact, partial), category, situation_tags, translation, transliteration, Arabic text
- Synonym dictionary (e.g., "anxiety" maps to "stressed", "worried")
- CamelCase splitting (e.g., "SubhanAllah" -> ["subhanallah", "subhan", "allah"])
- Arabic text normalization (diacritics stripped)
- Fuzzy matching with Levenshtein-like typo detection
- Stopword filtering

Supabase search: PostgreSQL `websearch` type full-text search on `search_vector`, limit 20.

## 5. Project Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout: Inter + Amiri fonts, ThemeProvider, Navbar, Footer, GA4
│   ├── page.tsx                # Homepage: hero search, daily dua/hadith banners, grids, featured
│   ├── globals.css             # Tailwind layers, custom utilities, dark mode vars
│   ├── sitemap.ts              # Dynamic sitemap (all pages)
│   ├── robots.ts               # Allows /, disallows /api/ and /_next/
│   ├── icon.tsx                # Dynamic favicon
│   ├── apple-icon.tsx          # Dynamic Apple touch icon
│   ├── opengraph-image.tsx     # Dynamic OG image
│   ├── error.tsx               # Error boundary
│   ├── not-found.tsx           # 404 page
│   │
│   ├── duas/[slug]/page.tsx    # Individual dua page
│   ├── hadith/[slug]/page.tsx  # Individual hadith page
│   ├── hadith/page.tsx         # Hadith browse/index page
│   ├── category/[slug]/page.tsx # Category listing
│   ├── emotion/[slug]/page.tsx # Emotion listing
│   ├── daily-dua/page.tsx      # Today's dua
│   ├── daily-hadith/page.tsx   # Today's hadith + subscribe form
│   ├── search/page.tsx         # Search results
│   ├── saved/page.tsx          # Saved duas collection
│   ├── about/page.tsx          # About page
│   ├── sources/page.tsx        # Source verification info
│   ├── privacy/page.tsx        # Privacy policy
│   ├── instagram-preview/page.tsx # Debug: preview social images
│   │
│   └── api/
│       ├── duas/route.ts           # GET /api/duas — list all, filter by category/emotion
│       ├── duas/[slug]/route.ts    # GET /api/duas/:slug — single dua
│       ├── daily-dua/route.ts      # GET /api/daily-dua — today's rotating dua
│       ├── search/route.ts         # GET /api/search?q= — search API
│       ├── health/route.ts         # GET /api/health — uptime check
│       ├── indexnow/route.ts       # POST /api/indexnow — submit all URLs to Bing/Yandex
│       ├── dedupe-duas/route.ts    # GET /api/dedupe-duas — remove duplicate slugs from Supabase
│       │
│       ├── subscribe/route.ts          # POST — email subscription with double opt-in
│       ├── confirm-subscription/route.ts # GET/POST — confirm email subscription
│       ├── unsubscribe/route.ts        # GET/POST — unsubscribe with confirmation page
│       ├── send-daily-hadith/route.ts  # GET — batch send daily hadith to all subscribers
│       │
│       ├── instagram/
│       │   ├── hadith/route.tsx    # GET — generate 1080x1080 hadith image (green theme)
│       │   └── dua/route.tsx       # GET — generate 1080x1080 dua image (indigo theme)
│       │
│       ├── logo/route.tsx          # Dynamic logo generation
│       │
│       └── cron/
│           ├── post-morning/route.ts   # Morning social post (hadith)
│           ├── post-evening/route.ts   # Evening social post (dua)
│           ├── check-token/route.ts    # Daily Meta token health check
│           ├── refresh-token/route.ts  # Monthly Meta token auto-refresh
│           ├── fill-buffer/route.ts    # Pre-schedule 4 days ahead (DISABLED)
│           ├── init-buffer/route.ts    # One-shot: seed 4-day buffer
│           └── force-post/route.ts     # Manual re-trigger for failed posts
│
├── components/
│   ├── analytics/
│   │   ├── DuaViewTracker.tsx
│   │   ├── HadithViewTracker.tsx
│   │   └── SearchResultsTracker.tsx
│   ├── dua/
│   │   ├── AuthenticityBadge.tsx
│   │   ├── DuaCard.tsx
│   │   ├── RelatedDuas.tsx
│   │   ├── SaveButton.tsx
│   │   ├── SavedPageContent.tsx
│   │   └── ShareButtons.tsx
│   ├── hadith/
│   │   ├── HadithCard.tsx
│   │   └── SubscribeForm.tsx
│   ├── home/
│   │   ├── CategoryGrid.tsx
│   │   ├── DailyDuaBanner.tsx
│   │   ├── DailyHadithBanner.tsx
│   │   ├── EmotionGrid.tsx
│   │   ├── FeaturedDuas.tsx
│   │   ├── HeroSearch.tsx
│   │   ├── HomeSubscribeBanner.tsx
│   │   └── TrustBar.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── GoogleAnalytics.tsx
│   │   ├── Navbar.tsx
│   │   ├── SocialFollowStrip.tsx
│   │   └── ThemeProvider.tsx
│   └── ui/
│       ├── Badge.tsx
│       └── LoadingState.tsx
│
├── contexts/
│   └── SavedDuasContext.tsx     # localStorage-based saved duas (max 200)
│
├── hooks/
│   ├── useSavedDuas.ts
│   └── useSubscribeForm.ts
│
├── data/
│   ├── duas.ts                 # 151 duas with search engine + utilities
│   ├── hadiths.ts              # 91 hadiths with getDailyHadith()
│   ├── schema.sql              # Supabase DDL (duas + hadith_subscribers)
│   ├── seed.ts                 # DB seeding script
│   └── validate.ts             # Content validation script
│
├── lib/
│   ├── analytics.ts            # GA4 event helpers (search, dua_viewed, hadith_viewed, etc.)
│   ├── captions.ts             # Instagram/Facebook caption builders
│   ├── duas.ts                 # Data access layer with Supabase/static fallback
│   ├── hadith-categories.ts    # 6 hadith categories mapping 34 topics
│   ├── instagram.ts            # Meta Graph API: post to IG + FB, dedup, alerting
│   ├── rateLimit.ts            # In-memory per-process rate limiter
│   ├── supabase.ts             # Supabase client constructors (anon, admin)
│   └── utils.ts                # cn(), CATEGORIES, EMOTIONS, SITE_URL, escapeHtml, safeJsonLd
│
├── types/
│   └── index.ts                # Dua, Hadith, SearchResult, CategoryMeta, EmotionMeta
│
├── public/
│   ├── fonts/                  # Amiri-Regular.ttf, Inter-*.ttf/woff, NotoSansArabic, PlayfairDisplay
│   ├── 9e52a8b3c4d1f067e2a9b5c8d3f10247.txt  # IndexNow verification key
│   └── 7407844c6631af6428ce3b88a62107ae.txt  # Additional verification key
│
├── scripts/
│   ├── generate_excel.py       # Excel export of duas
│   └── generate_prd.js         # PRD generation
│
├── vercel.json                 # Cron schedules (7 active entries)
├── next.config.js              # Security headers, CSP, www redirect, native module externals
├── tailwind.config.ts          # Custom colors (sand, emerald, gold), Arabic font sizes, animations
├── package.json                # Dependencies, scripts, node >=20.0.0
└── tsconfig.json               # Strict mode, bundler resolution, @/* path alias
```

## 6. Coding Standards & Constraints

### TypeScript
- Strict mode enabled
- Path alias: `@/*` maps to project root
- Target: ES2017
- Module resolution: bundler

### Security Headers (`next.config.js`)
- Content-Security-Policy (script-src self + GA + Vercel analytics, no unsafe-eval)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin
- Strict-Transport-Security: 2-year max-age with includeSubDomains
- Permissions-Policy: camera, microphone, geolocation all denied

### Security Patterns
- `escapeHtml()` for all user-provided strings in HTML context
- `safeJsonLd()` for JSON-LD script tags (Unicode-escapes `<`, `>`, `&`)
- CRON_SECRET: fail-closed (denies access if env var is unset)
- Rate limiting on all public API routes via `lib/rateLimit.ts`
- Subscriber emails protected by RLS (service_role only)
- Double opt-in for email subscriptions
- Confirmation tokens nulled after use to prevent replay
- Unsubscribe requires explicit POST (GET shows confirmation page to prevent bot/prefetch triggers)

### Rate Limits
| Endpoint | Limit | Window |
|---|---|---|
| `/api/search` | 30/IP | 60s |
| `/api/duas` | 60/IP | 60s |
| `/api/daily-dua` | 60/IP | 60s |
| `/api/subscribe` | 3/IP | 5 min |
| `/api/confirm-subscription` GET | 20/IP | 60s |
| `/api/confirm-subscription` POST | 10/IP | 60s |
| `/api/unsubscribe` GET | 20/IP | 60s |
| `/api/unsubscribe` POST | 10/IP | 60s |

### Image Generation
- `@napi-rs/canvas` with `GlobalFonts.registerFromPath()` (not the deprecated `registerFont`)
- Native `.node` binaries externalized in webpack config
- Fonts loaded from `public/fonts/` directory
- Hadith images: dark green gradient background, emerald accent
- Dua images: dark blue/indigo gradient background, indigo accent
- Both: 1080x1080px PNG, DuaVault wordmark, category badge, Arabic + English text

### Caching
- Homepage: `revalidate = 3600` (1 hour ISR)
- API responses: `s-maxage=300` (search), `s-maxage=3600` (duas, daily-dua)
- Cron routes: `dynamic = "force-dynamic"`, no caching

## 7. Current State

### What Is Working
- Full website live at duavault.com with 151 duas and 91 hadiths
- Dark mode with system preference detection
- Search with synonym expansion, fuzzy matching, Arabic support
- Save/unsave duas (localStorage)
- Share via WhatsApp, Twitter, Facebook, copy link, native share
- Daily rotating dua and hadith
- Automated social posting: morning hadith (7:30 AM IST) + evening dua (7:30 PM IST) to Instagram and Facebook
- Per-platform deduplication via Vercel Blob markers (fail-closed)
- Automatic retry crons at +30 min for each slot
- Daily hadith email to confirmed subscribers (8:30 AM IST)
- Monthly Meta token auto-refresh via Vercel API
- Daily token health check (6:30 AM IST)
- Admin email alerts on failures (via Resend)
- sitemap.xml, robots.txt, IndexNow submission
- SEO: JSON-LD structured data, canonical URLs, OG images
- GA4 custom events: search, dua_viewed, hadith_viewed, save_dua, share, subscribe

### What Is Disabled
- `fill-buffer` cron (pre-scheduling 4 days ahead) — removed from vercel.json to prevent duplicate posts

### Known Technical Decisions
- Globe emoji removed from captions (renders as raw `\uD83C` escape on Instagram)
- Using `list()` with `noStore()` for dedup instead of HEAD fetch (more reliable against Next.js cache)
- Fail-closed dedup: on Blob API error, assumes already posted (prevents duplicates; missed posts recovered by retry cron)

## 8. API Contracts & Integration Points

### Public REST APIs

| Method | Path | Description | Auth |
|---|---|---|---|
| GET | `/api/duas` | List all duas. Filter: `?category=`, `?emotion=`, `?limit=` | None |
| GET | `/api/duas/:slug` | Single dua by slug | None |
| GET | `/api/daily-dua` | Today's rotating dua | None |
| GET | `/api/search?q=` | Full-text search (min 2 chars, max 150) | None |
| GET | `/api/health` | Health check (`{ status: "ok", timestamp }`) | None |
| POST | `/api/subscribe` | Subscribe to daily hadith. Body: `{ email, name? }` | None |
| GET | `/api/confirm-subscription?token=` | Confirm email subscription (shows HTML page) | None |
| POST | `/api/confirm-subscription` | Confirm subscription (form POST) | None |
| GET | `/api/unsubscribe?token=` | Show unsubscribe confirmation page | None |
| POST | `/api/unsubscribe` | Execute unsubscribe (form POST) | None |

### Image Generation APIs

| Method | Path | Description |
|---|---|---|
| GET | `/api/instagram/hadith?slug=` | 1080x1080 hadith PNG (green theme) |
| GET | `/api/instagram/dua?slug=` | 1080x1080 dua PNG (indigo theme) |

### Protected APIs (require `Authorization: Bearer <CRON_SECRET>`)

| Method | Path | Description |
|---|---|---|
| GET | `/api/cron/post-morning` | Post daily hadith to IG + FB |
| GET | `/api/cron/post-evening` | Post daily dua to IG + FB |
| GET | `/api/cron/check-token` | Verify Meta token validity |
| GET | `/api/cron/refresh-token` | Exchange Meta token for fresh 60-day token |
| GET | `/api/cron/fill-buffer` | Pre-schedule posts 4 days ahead (DISABLED) |
| GET | `/api/cron/init-buffer` | One-shot: seed 4-day buffer |
| POST | `/api/cron/force-post` | Re-trigger a slot. Body: `{ slot: "morning"\|"evening", force?: true }` |
| GET | `/api/send-daily-hadith` | Batch-send daily hadith email to all confirmed subscribers |
| POST | `/api/indexnow` | Submit all URLs to Bing/Yandex IndexNow |
| GET | `/api/dedupe-duas` | Remove known duplicate slugs from Supabase |

### Vercel Cron Schedule (vercel.json)

All times UTC. IST = UTC + 5:30.

| Schedule (UTC) | IST | Path | Purpose |
|---|---|---|---|
| `0 1 * * *` | 6:30 AM | `/api/cron/check-token` | Token health check |
| `0 2 * * *` | 7:30 AM | `/api/cron/post-morning` | Morning hadith post (primary) |
| `30 2 * * *` | 8:00 AM | `/api/cron/post-morning` | Morning hadith post (retry) |
| `0 3 * * *` | 8:30 AM | `/api/send-daily-hadith` | Daily hadith email |
| `0 14 * * *` | 7:30 PM | `/api/cron/post-evening` | Evening dua post (primary) |
| `30 14 * * *` | 8:00 PM | `/api/cron/post-evening` | Evening dua post (retry) |
| `0 0 1 * *` | 5:30 AM 1st | `/api/cron/refresh-token` | Monthly token refresh |

### External Integrations

**Meta Graph API (v20.0)**
- Instagram: two-step publish (create container -> poll status -> publish)
- Facebook: feed post with attached_media (fallback to /photos on failure)
- Images uploaded to Vercel Blob CDN before posting (Instagram requires public URL)
- Token: long-lived Page Access Token, auto-refreshed monthly

**Resend**
- Confirmation emails (single send)
- Daily hadith emails (batch send, 50 per batch, paginated DB reads of 100)
- Admin alert emails on cron failures

**Vercel Blob**
- Post deduplication: `post-log/{YYYY-MM-DD}-{slot}-{platform}.txt`
- Image CDN: `posts/{timestamp}.png`

**Vercel API**
- Used by refresh-token cron to auto-update env vars (`META_USER_ACCESS_TOKEN`, `META_PAGE_ACCESS_TOKEN`)

**IndexNow**
- Submits all URLs to api.indexnow.org, bing.com, yandex.com

**Google Analytics 4**
- Measurement ID via `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- Custom events defined in `lib/analytics.ts`

### Environment Variables

**Required for production:**

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (public reads) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role (subscriber management) |
| `NEXT_PUBLIC_SITE_URL` | Site URL (default: https://duavault.com) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Google Search Console verification |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | Sender email (default: noreply@duavault.com) |
| `CRON_SECRET` | Shared secret for cron authentication |
| `META_PAGE_ACCESS_TOKEN` | Meta long-lived Page Access Token |
| `INSTAGRAM_BUSINESS_ACCOUNT_ID` | Numeric Instagram Business account ID |
| `FACEBOOK_PAGE_ID` | Numeric Facebook Page ID |
| `META_APP_ID` | Meta App ID (for token refresh) |
| `META_APP_SECRET` | Meta App Secret (for token refresh) |
| `META_USER_ACCESS_TOKEN` | Meta long-lived User Token (for token refresh) |
| `MY_VERCEL_TOKEN` | Vercel personal access token (for env var auto-update) |
| `VERCEL_PROJECT_ID` | Vercel project ID (for env var auto-update) |
| `ADMIN_ALERT_EMAIL` | Admin email for failure alerts |
| `NEXT_PUBLIC_BASE_URL` | Base URL for image generation (default: https://duavault.com) |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob token (auto-added when Blob store is connected) |

**Not required for local dev** — the app uses static data fallback when Supabase vars are missing.

## 9. Agent Operating Instructions

### Critical Rules (from CLAUDE.md)

1. **Never use worktrees.** Always edit files directly in `/Users/mohdtalhamasood/Downloads/Dua/`.
2. **Node commands** must be prefixed with `PATH="$HOME/.nvm/versions/node/v20.20.1/bin:$PATH"`.
3. **Definition of Done**: files edited in main repo, `git add <specific files>` (never `git add -A`), commit with clear message, `git push origin main`, Vercel deploy confirmed.

### Adding New Duas

1. Add entry to `data/duas.ts` array following the `Dua` interface
2. Assign unique `id` (next sequential), unique `slug` (kebab-case)
3. Set appropriate `category`, `emotion_tags`, `situation_tags`
4. Mark `featured: true` if it should appear in homepage featured section
5. Mark `daily_dua_eligible: true` if suitable for daily rotation
6. If Supabase is configured, also insert into the `duas` table (or run seed)

### Adding New Hadiths

1. Add entry to `data/hadiths.ts` array following the `Hadith` interface
2. Assign unique `id` and `slug`
3. Set `topic` (one of the 34 topics in `lib/hadith-categories.ts`)
4. Include `daily_practice` — an actionable one-line takeaway

### Social Posting Flow

1. Vercel cron triggers at scheduled time
2. Route checks `CRON_SECRET`, calls `hasPostedToday()` per-platform
3. Generates image URL pointing to `/api/instagram/hadith` or `/api/instagram/dua`
4. `postToInstagram()`: fetches image -> uploads to Blob CDN -> creates IG container -> polls status -> publishes
5. `postToFacebook()`: fetches image -> uploads to Blob CDN -> uploads photo (unpublished) -> posts to feed -> fallback to /photos
6. On success: `markPostedToday()` writes marker to Blob
7. On failure: `sendAdminAlert()` emails admin with retry instructions
8. Retry cron at +30 min only attempts platforms that failed

### Email Subscription Flow

1. User POSTs to `/api/subscribe` with email + optional name
2. Server upserts into `hadith_subscribers`, generates `confirmation_token`
3. Confirmation email sent via Resend
4. User clicks link -> GET `/api/confirm-subscription?token=` shows confirmation page
5. User clicks button -> POST confirms subscriber, nulls `confirmation_token`
6. Daily cron at 8:30 AM IST sends hadith email to all confirmed subscribers
7. Idempotency: `last_sent_on` date prevents duplicate sends on cron re-runs

## 10. Open Questions & Assumptions

1. **Supabase duas table sync**: Static data in `data/duas.ts` may drift from Supabase `duas` table. No automated sync mechanism exists — seed script must be run manually.
2. **fill-buffer cron disabled**: Was causing duplicate posts. The immediate-post + retry approach is the active strategy.
3. **Rate limiter is per-process**: Warm serverless instances share limits, but cold starts reset counters. Noted as acceptable for current traffic; Upstash Redis recommended at scale.
4. **Meta token expiry**: 60-day user token refreshed monthly. If refresh-token cron fails, manual intervention needed within ~30 days.
5. **No authentication system**: All user features (save, search) are anonymous/client-side. Subscriber emails are the only PII stored.
6. **IndexNow verification files** in public/ — these must be maintained if the IndexNow key changes.

## 11. Rolling Version History (7-Day Snapshot Log)

| Date | Commit | Summary |
|---|---|---|
| Recent | `a85459d` | fix: revert to list() with noStore() + fail-closed on error for robust deduplication |
| Recent | `e2adf37` | fix: replace list() with direct CDN HEAD fetch in hasPostedToday |
| Recent | `b9509ac` | fix: force-post respects per-platform markers by default |
| Recent | `f9d06b6` | fix: per-platform deduplication + automatic retry crons |
| Recent | `6762140` | fix: address all critical audit findings — resilience + alerting overhaul |
| Recent | `ac97bb5` | fix: rename VERCEL_TOKEN to MY_VERCEL_TOKEN (reserved variable conflict) |
| Recent | `22f2ec3` | fix: add send-daily-hadith cron + schedule all 5 crons correctly |
| Recent | `7c6c35e` | feat: 360-degree failsafe — alerts, retry crons, daily token check, monthly auto-refresh |
| Recent | `1347fce` | fix: correct attached_media format, only mark posted on success, add force-post |
| Recent | `547f176` | fix: add feed-post fallback for Facebook |
| Recent | `a880fe1` | fix: post Facebook images to feed (not photos album) |
| Recent | `2f0f418` | feat: add Instagram & Facebook social links across site |
| Recent | `683d576` | feat: add 30 authenticated hadiths (IDs 61-90) |
| Recent | `1be1efd` | feat: add 20 high-traffic duas and hadiths + relax validator |
| Recent | `f5c4b26` | docs: add comprehensive technical overview document |
| Recent | `2bb13be` | fix: deduplicate posts — skip if already posted today |
| Recent | `36fd39c` | fix: disable fill-buffer cron to prevent duplicate posts |
| Recent | `c05af9f` | fix: remove globe emoji from captions |
| Recent | `2fe66fd` | fix: use GlobalFonts.registerFromPath — canvas v0.1.97 change |

---

*This document is the single source of truth for the DuaVault project. Update it when architecture, integrations, or key decisions change.*
