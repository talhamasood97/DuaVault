# PROJECT_CONTEXT.md — DuaVault

> Single source of truth for the DuaVault codebase. Every fact below is derived from actual code inspection.
> Last updated: 2026-10-11

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
- Browse 276 duas across 9 categories and 8 emotional states
- Browse 246 hadiths across 6 categories (34 granular topics)
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
| Duas | 276 | `data/duas.ts` |
| Hadiths | 246 | `data/hadiths.ts` |
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
dayOfYear = dayOfYearIST(now)   // lib/utils.ts — day rolls over at midnight IST
item = pool[dayOfYear % pool.length]
```
Date labels on the site use `SITE_TIME_ZONE` ("Asia/Kolkata"). The post crons run at 8:30 AM / 8 PM IST, when IST and UTC dates agree.
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
│           ├── mega-morning/route.ts   # PRIMARY: 8:30 AM IST — hadith social post + hadith email
│           ├── mega-evening/route.ts   # PRIMARY: 8:00 PM IST — dua social post (IG + FB)
│           ├── force-post/route.ts     # Manual re-trigger for failed posts
│           ├── post-morning/route.ts   # Legacy (inactive — superseded by mega-morning)
│           ├── post-evening/route.ts   # Legacy (inactive — superseded by mega-evening)
│           ├── check-token/route.ts    # Meta token health check (manual only)
│           ├── refresh-token/route.ts  # Meta token auto-refresh (manual only)
│           ├── fill-buffer/route.ts    # Pre-schedule 4 days ahead (DISABLED)
│           └── init-buffer/route.ts    # One-shot: seed 4-day buffer
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
│   ├── duas.ts                 # 276 duas with search engine + utilities
│   ├── hadiths.ts              # 246 hadiths with getDailyHadith()
│   ├── schema.sql              # Supabase DDL (duas + hadith_subscribers)
│   ├── seed.ts                 # DB seeding script
│   └── validate.ts             # Content validation script
│
├── lib/
│   ├── analytics.ts              # GA4 event helpers (search, dua_viewed, hadith_viewed, etc.)
│   ├── captions.ts               # Instagram/Facebook caption builders
│   ├── duas.ts                   # Data access layer with Supabase/static fallback
│   ├── hadith-categories.ts      # 6 hadith categories mapping 34 topics
│   ├── instagram.ts              # Meta Graph API: post to IG + FB, dedup, alerting
│   ├── rateLimit.ts              # In-memory per-process rate limiter
│   ├── sendDailyHadithEmail.ts   # Shared daily hadith email logic (used by mega-morning + manual route)
│   ├── supabase.ts               # Supabase client constructors (anon, admin)
│   └── utils.ts                  # cn(), CATEGORIES, EMOTIONS, SITE_URL, escapeHtml, safeJsonLd
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
├── vercel.json                 # Cron schedules (2 active mega-crons — Hobby plan limit)
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
- Dua images: text size is chosen from the actual wrapped line count; if the card would overflow, Arabic/translation budgets shrink step by step (min 20px Arabic / 14px translation). Duas too long even then should be `daily_dua_eligible: false` (e.g. istikhara, wajjahtu-wajhiya)
- Hadith images: dark green gradient background, emerald accent
- Dua images: dark blue/indigo gradient background, indigo accent
- Both: 1080x1080px PNG, DuaVault wordmark, category badge, Arabic + English text

### Caching
- Homepage: `revalidate = 3600` (1 hour ISR)
- API responses: `s-maxage=300` (search), `s-maxage=3600` (duas, daily-dua)
- Cron routes: `dynamic = "force-dynamic"`, no caching

## 7. Current State

### What Is Working
- Full website live at duavault.com with 276 duas and 246 hadiths
- Dark mode with system preference detection
- Search with synonym expansion, fuzzy matching, Arabic support
- Save/unsave duas (localStorage)
- Share via WhatsApp, Twitter, Facebook, copy link, native share
- Daily rotating dua and hadith
- Automated social posting via 2 mega-crons (Vercel Hobby plan limit):
  - `mega-morning` at 8:30 AM IST: posts daily hadith to IG + FB, then sends hadith email to all subscribers
  - `mega-evening` at 8:00 PM IST: posts daily dua to IG + FB
- Per-platform deduplication via Vercel Blob markers (fail-open on Blob error — see below)
- Daily hadith email to confirmed subscribers (runs inside mega-morning at 8:30 AM IST)
- Admin email alerts on failures (via Resend to feedback.duavault@gmail.com)
- sitemap.xml, robots.txt, IndexNow submission
- SEO: JSON-LD structured data, canonical URLs, OG images
- GA4 custom events: search, dua_viewed, hadith_viewed, save_dua, share, subscribe
- Manual trigger endpoints for email and social posts (see Section 8)

### What Is Disabled / Legacy
- `fill-buffer` cron — removed from vercel.json to prevent duplicate posts
- `post-morning`, `post-evening` routes — superseded by mega-crons (files remain for manual use)
- `check-token`, `refresh-token` crons — removed from vercel.json (Hobby limit reached); available for manual trigger only
- All retry crons removed — no longer possible within the 2-cron limit

### Known Technical Decisions
- Globe emoji removed from captions (renders as raw `\uD83C` escape on Instagram)
- Using `list()` with `noStore()` for dedup instead of HEAD fetch (more reliable against Next.js cache)
- **Fail-open dedup**: `hasPostedToday()` now throws on Blob error instead of returning `true`. Both mega-crons catch the error, send an admin alert, and proceed assuming not posted. Rationale: with no retry cron, a permanent miss is worse than a rare duplicate on Blob outage.
- **Real ok status**: `mega-morning` returns HTTP 500 + `ok: false` when social or email tasks fail. Previously always returned `ok: true`, masking failures.
- **Manual trigger guide**: All endpoints require `Authorization: Bearer <CRON_SECRET>` header. Email: `GET /api/send-daily-hadith`. Social posts: `POST /api/cron/force-post` with body `{"slot":"morning"}` or `{"slot":"evening"}`. Force repost: add `"force":true`.

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
| GET | `/api/cron/mega-morning` | Automated: post hadith to IG + FB + send hadith email (8:30 AM IST) |
| GET | `/api/cron/mega-evening` | Automated: post dua to IG + FB (8:00 PM IST) |
| POST | `/api/cron/force-post` | Manual: re-trigger a slot. Body: `{ slot: "morning"\|"evening", force?: true }` |
| GET | `/api/send-daily-hadith` | Manual: batch-send hadith email to all confirmed subscribers |
| GET | `/api/cron/post-morning` | Legacy manual trigger: hadith post only |
| GET | `/api/cron/post-evening` | Legacy manual trigger: dua post only |
| GET | `/api/cron/check-token` | Manual: verify Meta token validity |
| GET | `/api/cron/refresh-token` | Manual: exchange Meta token for fresh 60-day token |
| GET | `/api/cron/fill-buffer` | Pre-schedule posts 4 days ahead (DISABLED) |
| GET | `/api/cron/init-buffer` | One-shot: seed 4-day buffer |
| POST | `/api/indexnow` | Submit all URLs to Bing/Yandex IndexNow |
| GET | `/api/dedupe-duas` | Remove known duplicate slugs from Supabase |

### Vercel Cron Schedule (vercel.json)

All times UTC. IST = UTC + 5:30.
**Vercel Hobby plan allows exactly 2 active crons.** Only these two run automatically:

| Schedule (UTC) | IST | Path | Purpose |
|---|---|---|---|
| `0 3 * * *` | 8:30 AM | `/api/cron/mega-morning` | Post hadith to IG + FB, then send hadith email to all subscribers |
| `30 14 * * *` | 8:00 PM | `/api/cron/mega-evening` | Post dua to IG + FB |

All other routes (check-token, refresh-token, post-morning, post-evening) must be triggered manually.

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

IDs are never reused. Removed duas/hadiths keep a permanent redirect in `REMOVED_PAGES` (`next.config.js`) — add one whenever an entry is merged or deleted.

### Adding New Hadiths

1. Add entry to `data/hadiths.ts` array following the `Hadith` interface
2. Assign unique `id` and `slug`
3. Set `topic` (one of the 34 topics in `lib/hadith-categories.ts`)
4. Include `daily_practice` — an actionable one-line takeaway

### Social Posting Flow

1. Vercel cron triggers `mega-morning` (8:30 AM IST) or `mega-evening` (8:00 PM IST)
2. Route checks `CRON_SECRET`
3. Calls `hasPostedToday(slot, platform)` for each platform — if Blob throws, proceeds fail-open (assume not posted) and sends admin alert
4. Generates image URL pointing to `/api/instagram/hadith` or `/api/instagram/dua`
5. `postToInstagram()`: fetches image → uploads to Blob CDN → creates IG container → polls status → publishes
6. `postToFacebook()`: fetches image → uploads to Blob CDN → uploads photo (unpublished) → posts to /feed with `attached_media` → fallback to /photos
7. On success: `markPostedToday()` writes `post-log/{DATE}-{slot}-{platform}.txt` to Blob
8. On failure: `sendAdminAlert()` emails admin with retry instructions
9. mega-morning then runs `sendDailyHadithEmails()` for the email task
10. Response: `ok: true` + HTTP 200 only if both tasks succeeded; `ok: false` + HTTP 500 otherwise
11. No automatic retry — use `POST /api/cron/force-post` to manually retry

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
6. **Pre-existing content duplicates**: `data/validate.ts` reports 39 errors on entries that predate batch 4 (e.g. duplicate Arabic between `dua-for-patience` / `dua-rabbana-afrigh-alayna-sabran`, `dua-for-good-health` slug used twice). Batch 4 adds none; cleaning these up requires deciding which entry keeps each slug/URL.
7. **Content sourcing (batch 4 onward)**: Qur'anic duas use Quran.com `text_imlaei` + Sahih International; hadith Arabic/English from Sunnah.com, grade taken from Sunnah.com's grade table (Al-Albani for Abu Dawud, Darussalam for Tirmidhi/Nasa'i). Transliterations are authored.
8. **IndexNow verification files** in public/ — these must be maintained if the IndexNow key changes.

## 11. Rolling Version History (7-Day Snapshot Log)

| Date | Commit | Summary |
|---|---|---|
| 2026-10-16 | QA audit | fix: full QA/security/a11y pass. **Security:** Supabase anon key verified unable to read `hadith_subscribers` or insert (RLS OK). `/api/instagram/*` now 404s unknown slugs and 400s unknown params, and caches slug images (previews 30 days, post images 1 day; the slug-less image stays `no-store`), so random URLs can't burn the Vercel quota. Subscribe returns 400 on malformed JSON and throttles per email address (2/hour) against inbox flooding. `/instagram-preview` is noindex. **Search:** Urdu/Hindi synonyms (nazar, qarz, safar, tension, darood, janaza, walidain, nikah…); featured duas win ties. **Accessibility:** axe went from 3 failing rules on every page to 0 in light and dark (stone-400→500 light text, dark:stone-500/600→400, darker WhatsApp/Telegram/Facebook buttons, -700 category colours, labelled `<nav>`s, footer h3→h2). New `tools/a11y-check.js` |
| 2026-10-16 | release checklist | chore: permanent release checklist in CLAUDE.md (owner's standing order); `npm run preflight` = `tools/preflight.ts` (untrimmed env reads, collection/SEO-title slugs, redirect validity, verification files, stale CONTENT_UPDATED) + content validator; `npm run phone-check` = `tools/phone-check.js` (every sitemap page at 375px, optional light/dark screenshots). Preflight caught a stale `CONTENT_UPDATED` → bumped to 2026-10-16 |
| 2026-10-16 | discovery | fix: favicon now 96×96 (Google Search ignores favicons that aren't a multiple of 48px; 32px showed a blank globe); homepage Organization schema has `logo` + `sameAs` (Instagram, Facebook); dua and hadith pages show their card image (`components/ui/ShareImage.tsx`, lazy, descriptive alt) so Google Images can index them; `/llms.txt` (generated from collections + categories) for AI search. GSC at the time: Google knew 35 pages / indexed 25 (as of 12 Oct); sitemap read 15 Oct → 546 discovered; resubmitted 16 Oct for the 566-URL version |
| 2026-10-16 | analytics fix | fix: Google Analytics had **never recorded data** — Vercel env values carry a trailing newline (`"G-79HPFH4NXC\n"`), which broke the inline gtag script with a SyntaxError. Now every `process.env.X` read in app/lib is `.trim()`ed (also protects email links, Resend admin alerts, Supabase and Meta tokens), the GA id is JSON-encoded into the script, and CSP allows Google's GA4 wildcards (`*.google-analytics.com`, `*.analytics.google.com`, `*.googletagmanager.com`). Verified locally: `gtag` defined and `/g/collect` hit sent |
| 2026-10-16 | collections ×19 | feat: 14 more topic collections (before-sleeping, morning-and-evening, anxiety-and-stress, rabbana-from-the-quran [all 29 Quranic "Rabbana" duas in surah order], parents, exams-and-studying, children-and-pregnancy, marriage, debt-and-rizq, the-deceased, salah, ramadan, hajj-and-umrah, the-evil-eye) → 19 total, ordered by search demand; `/duas-for` index page; homepage "Dua Collections" section (`components/home/CollectionLinks.tsx`); footer shows `FOOTER_COLLECTIONS` + "All collections"; sitemap now 566 URLs |
| 2026-10-15 | reach | feat: topic collection pages `/duas-for/[slug]` (the-sick, waking-up, rain, protection-from-hellfire, the-mosque) defined in `lib/collections.ts` — built from existing duas only, chosen from Search Console queries where several thin pages split the same search; ItemList JSON-LD; linked from each member dua ("Part of …"), the footer and the sitemap. `lib/seo-titles.ts` overrides search titles for duas people search by Arabic name (e.g. "Rabbana Atina Dua"). Removed hellfire dua now redirects to the hellfire collection (it ranked ~#7). Daily post captions link to the exact page (`https://duavault.com/duas/<slug>`). IndexNow URL list includes collections and the route now uses the key Bing actually verified (`7407844c…`; the old `9e52a8b3…` key was rejected with 403, so earlier IndexNow pings never landed) — all 551 URLs submitted to IndexNow/Bing/Yandex 2026-10-15; footer source chips list books we actually cite |
| 2026-10-15 | trust + sharing | feat: sources link to the original (`lib/sources.ts` → Sunnah.com / Quran.com; Musnad Ahmad, al-Hakim etc. stay plain text; Muslim lettered parts in `SUNNAH_SUFFIX`, every link checked against Sunnah.com); "Report an error" mailto on dua + hadith pages (`components/ui/SourceLink.tsx`); per-page link previews use `/api/instagram/{dua,hadith}?slug=…&share=1` (badge "AUTHENTIC DUA/HADITH", edge-cached 30 days; daily posts unchanged, still `no-store`); robots allows `/api/instagram/`; removed "scholar-verified" / "most complete" claims (no individual scholar review has happened — say "checked against the source"); emotion grid moved directly under the homepage hero; Google Search Console verified via `public/google80842bb7c72773cb.html` (never delete it) and sitemap submitted |
| 2026-10-11 | pre-break check | fix: Related Duas list overflowed phone width on 270 dua pages (grid item min-width; now `grid-cols-1` + `line-clamp-2`) — all 551 pages verified at 375px with headless Chrome; Tailwind `content` now includes `lib/` (emotion/category colours in `lib/utils.ts` were being purged, breaking emotion tiles in dark mode); post cards render "(ﷺ)" as "(SAW)" not "((SAW))"; `npm audit fix` (non-breaking, lockfile only — remaining advisories need Next 15+/sharp majors and mostly target self-hosting). Rendered all hadith + dua cards for 2026-10-11 → 2027-01-13: all fit, no repeats. Domain paid to 2027-03-15 (Namecheap) |
| 2026-10-11 | seo fix | fix: robots.txt no longer blocks `/_next/` (Google needs CSS/JS to render); sitemap `lastmod` uses a fixed `CONTENT_UPDATED` date for content pages (bump it on every content change) instead of "now"; dua pages now have an og/twitter image and Article schema `image`/`author`/`mainEntityOfPage` |
| 2026-10-11 | audit fix | fix: site audit — merged 33 duplicate duas + 4 duplicate hadiths into the original (tags carried over, 301 redirects in `next.config.js` `REMOVED_PAGES`); removed 7 duas + 5 hadiths whose only source is Da'if/fabricated per Al-Albani on Sunnah.com (Abu Dawud 3850→replaced by 4023, 5096, 5079, 2358, 2795, 528; Tirmidhi 3450; hadiths Abu Dawud 4903, Ibn Majah 425, 3452, Tabarani "poisoned arrow", Hakim "dua is the weapon"); trimmed the weak addition of Ibn Majah 224; normalised hadith book names; remapped 58 hadiths to the 34 topics; related duas/hadiths now scored by relevance; IST day rollover; SEO titles/descriptions fitted (`fitTitle`/`truncate` in `lib/utils.ts`), 404 title, /privacy in sitemap. Validator now 0 errors (was 39). Counts: 276 duas / 246 hadiths |
| 2026-10-11 | batch 5 | feat: add 60 duas (IDs 280-339; 58 daily-eligible, 42 Qur'anic + 18 Sunnah.com incl. prayer-chapter duas) and 60 hadiths (IDs 196-255) — 2 more months. Sourced from Sunnah.com chapter scrapes (5,000+ narrations filtered for grade, reuse and Arabic overlap); 7 candidates rejected as Da'if; all post cards verified |
| 2026-10-11 | batch 4 | fix: dua post image (`/api/instagram/dua`) now sizes text from the real wrapped line count and tightens budgets until the card fits — previously 49 existing + 24 new duas rendered Arabic over the transliteration or translation into the footer; cards that already fit are pixel-identical |
| 2026-10-11 | batch 4 | feat: add 60 duas (IDs 220-279; 59 daily-eligible — 275 Wajjahtu Wajhiya is too long for a 1080px card) and 60 hadiths (IDs 136-195) — ~2 months of daily rotation. Arabic sliced verbatim from Sunnah.com / Quran.com source text; every hadith Sahih/Hasan per Sunnah.com grade; zero new validator errors |
| 2026-04-27 | `88dc0ff` | feat: add 15 new SEO-optimised duas (IDs 205-219) and 15 hadiths (IDs 121-135) — batch 3, live verified |
| 2026-04-27 | `eee29b5` | feat: add 30 new authentic duas (IDs 175-204) and 30 new hadiths (IDs 91-120) — all SAHIH/HASAN/QURAN graded |
| 2026-03-27 | `f07a4d0` | fix: fail-open on Blob dedup error + real ok status in mega-crons |
| 2026-03-27 | `f5c4b26`–`1fbd357` | feat: consolidate 7 crons into 2 mega-crons (Hobby plan limit); extract sendDailyHadithEmail |
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
