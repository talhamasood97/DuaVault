# DuaVault — Complete Technical Overview

> Written for a non-technical / semi-technical audience.
> Covers the full history of what was built, every problem we hit, every fix we tried, and why each decision was made.

---

## Table of Contents

1. [What is DuaVault?](#1-what-is-duavault)
2. [How the Website Works (Frontend)](#2-how-the-website-works-frontend)
3. [How the Website Works (Backend)](#3-how-the-website-works-backend)
4. [The Instagram & Facebook Automation — The Idea](#4-the-instagram--facebook-automation--the-idea)
5. [How Automated Posting Works (Step by Step)](#5-how-automated-posting-works-step-by-step)
6. [Every Problem We Hit and How We Fixed It](#6-every-problem-we-hit-and-how-we-fixed-it)
7. [What We Tried That Didn't Work](#7-what-we-tried-that-didnt-work)
8. [The Full Chronology of Changes](#8-the-full-chronology-of-changes)
9. [Current Architecture (What's Live Today)](#9-current-architecture-whats-live-today)
10. [The Instagram & Facebook Link Strategy (Backlinks)](#10-the-instagram--facebook-link-strategy-backlinks)
11. [Most Common Issues & How to Diagnose Them](#11-most-common-issues--how-to-diagnose-them)
12. [How to Manually Trigger a Post](#12-how-to-manually-trigger-a-post)
13. [Environment Variables Reference](#13-environment-variables-reference)

---

## 1. What is DuaVault?

DuaVault (https://duavault.com) is a website that serves as a library of Islamic duas (supplications) and hadiths. Users can browse, search, save, and share duas. The website is also connected to an Instagram page (@dua.vault) and a Facebook page (DuaVault) that automatically post a Hadith every morning and a Dua every evening.

**The goal of the social media automation** is to drive traffic back to the website — every post includes the URL `duavault.com` in the caption, which acts as a backlink and brand awareness tool.

---

## 2. How the Website Works (Frontend)

### The Technology Stack

- **Next.js 14** — The framework the website is built on. Think of it as the engine that powers both what users see and the behind-the-scenes logic.
- **TypeScript** — A programming language (based on JavaScript) that helps catch errors before the code runs.
- **Tailwind CSS** — A styling system that makes it easy to design the look and feel of pages.
- **Supabase** — A database service (like a spreadsheet in the cloud) that stores user data like saved duas and email subscribers.

### What users can do on the site

- Browse duas by category (daily life, worship, protection, etc.)
- Browse duas by emotion (sad, stressed, afraid, etc.)
- Read the daily hadith
- Save duas to a personal list
- Subscribe to a daily hadith email digest
- Search for specific duas

### How pages are built

The website uses a technique called **static generation** for most pages. This means the HTML for pages like `/duas/dua-before-sleeping` is pre-built at deploy time — not generated fresh every time someone visits. This makes the site extremely fast and cheap to run because the server isn't doing heavy work for every visitor.

Dynamic things (like search results or the daily dua which changes every day) are handled differently and computed on demand.

---

## 3. How the Website Works (Backend)

### What is "backend"?

The backend is the part of the website users never see — the code that runs on the server, fetches data, and does the actual work. In DuaVault, the backend is a set of API routes (URLs that return data or perform actions instead of showing web pages).

### Key backend routes

| Route | What it does |
|-------|-------------|
| `/api/duas` | Returns a list of all duas |
| `/api/duas/[slug]` | Returns a specific dua by its URL name |
| `/api/daily-dua` | Returns today's dua (changes daily) |
| `/api/search` | Handles search queries |
| `/api/subscribe` | Saves an email address for daily hadith emails |
| `/api/send-daily-hadith` | Sends the daily hadith email to all subscribers |
| `/api/instagram/hadith` | Generates a 1080×1080 PNG image for the hadith post |
| `/api/instagram/dua` | Generates a 1080×1080 PNG image for the dua post |
| `/api/cron/post-morning` | Posts today's Hadith to Instagram + Facebook |
| `/api/cron/post-evening` | Posts today's Dua to Instagram + Facebook |

### How the "daily" content works

Both the daily hadith and daily dua rotate through a fixed list. The selection is deterministic — meaning on any given date, the same hadith/dua is always selected. The code takes today's date, converts it to a number, and uses that number to pick an item from the list. This means:
- No database needed to track "which one was shown today"
- It works the same on every server, every time
- It can look up what will be shown on any future date

### Where is it hosted?

The website runs on **Vercel** — a cloud hosting platform built specifically for Next.js. Vercel handles:
- Running the website 24/7
- Automatically deploying when new code is pushed to GitHub
- Running scheduled jobs (crons) at specific times
- Storing uploaded images (via Vercel Blob)

---

## 4. The Instagram & Facebook Automation — The Idea

### Why automate?

Manually creating and posting content every day is time-consuming and inconsistent. The goal was to build a system that:
1. Automatically picks today's hadith/dua
2. Creates a visually appealing image (1080×1080 pixels — Instagram's standard square size)
3. Posts that image with a caption to both Instagram and Facebook
4. Does all of this at a fixed time every day, forever, with zero manual effort

### The backlink strategy

Instagram doesn't allow clickable links in post captions — the URL `duavault.com` appears as plain text. However, it still serves several purposes:
- **Brand recognition** — people who see the account repeatedly start to remember the name
- **Direct traffic** — motivated users type the URL manually
- **The bio link** — the Instagram profile bio has a clickable link to duavault.com. Posts drive followers to the profile, and the bio link drives them to the site
- **Facebook** — Facebook DOES allow clickable links in posts and comments, making it a stronger traffic source
- **SEO signal** — social media presence and brand mentions are indirect signals to search engines

### How Meta's API works (simplified)

Meta (the company that owns Instagram and Facebook) provides a programming interface called the **Graph API**. This lets our code talk to Instagram and Facebook like this:

```
Our server → "Hey Instagram, here's an image and caption, please post it"
Instagram  → "OK, done. Here's the post ID: 12345"
```

To do this, we need a **Page Access Token** — essentially a password that proves our code has permission to post on behalf of the DuaVault accounts. Getting this token set up correctly was one of the major challenges (explained in Section 6).

---

## 5. How Automated Posting Works (Step by Step)

### The daily schedule

| Time | What happens |
|------|-------------|
| **02:00 UTC (7:30 AM IST)** | Vercel automatically calls `/api/cron/post-morning` |
| **14:00 UTC (7:30 PM IST)** | Vercel automatically calls `/api/cron/post-evening` |

### What happens inside post-morning (step by step)

1. **Authentication check** — Vercel sends a secret key with the request. The code verifies this key matches `CRON_SECRET`. If someone else tries to hit the URL without the key, they get a 403 error.

2. **Deduplication check** — The code checks Vercel Blob storage for a marker file like `post-log/2026-03-25-morning.txt`. If it exists, that means today's post was already made. The code returns `{ skipped: true }` and stops. Nothing posts.

3. **Pick today's hadith** — `getDailyHadith()` uses today's date to deterministically select a hadith from the list.

4. **Build the image URL** — Creates a URL pointing to `/api/instagram/hadith?slug=hadith-fasting-is-for-allah`

5. **Build the caption** — `buildHadithCaption()` formats the text that goes under the post: title, translation, narrator, source book, hashtags.

6. **Generate the image** — `/api/instagram/hadith` runs the image generation code (see below) and returns a PNG file.

7. **Upload to CDN** — The PNG is uploaded to Vercel Blob (a file storage service). This gives us a stable public URL like `https://blob.vercel-storage.com/posts/1234567890.png`. Instagram's servers need to download the image from a public URL — they can't access our internal server directly.

8. **Post to Instagram** — Two-step process:
   - Step A: Create a "media container" — tell Instagram "I want to post this image with this caption"
   - Step B: Instagram processes the image (this takes a few seconds). We poll every 3 seconds until it says "FINISHED"
   - Step C: Publish the container — tell Instagram "OK, go live with it"

9. **Post to Facebook** — Simpler: one call to `/{pageId}/photos` with the image URL and caption.

10. **Mark as done** — Write the marker file to Vercel Blob (`post-log/2026-03-25-morning.txt`) so future calls know it's already been done today.

### How the image is generated

The image is a 1080×1080 PNG created entirely in code using a library called **@napi-rs/canvas**. Think of it like an invisible Photoshop that runs on the server:

- Draw a dark gradient background
- Load Arabic and English fonts
- Write the Arabic text (right-to-left, large font)
- Write the English translation below it
- Write the source and narrator info
- Export as PNG

**Hadith image:** Dark green gradient (`#021207` → `#052e16`), Arabic text in Amiri font (64px), English quote in Playfair Display italic, narrator and source in Inter.

**Dua image:** Dark blue gradient (`#020617` → `#0f172a`), Arabic text centered in Amiri font, transliteration in italic, translation in sans-serif.

---

## 6. Every Problem We Hit and How We Fixed It

### Problem 1: Arabic text showing as boxes (squares) on Instagram

**What happened:** Posts were going out but all the Arabic text appeared as □□□□ (empty boxes) instead of actual Arabic letters.

**Root Cause — Layer 1 (CDN caching):** The image route had `Cache-Control: public, max-age=3600` which told Vercel's CDN to cache the image for 1 hour. When we deployed a new version, Instagram was still getting the old cached (broken) image.

**Fix:** Changed to `Cache-Control: no-store` — every request generates a fresh image.

**Root Cause — Layer 2 (The real problem — font loading):** The original image generation used a library called `sharp` which renders SVG files into PNG images. To show Arabic text in an SVG, you declare a font using `@font-face`. This works in browsers, but on Vercel's servers, the underlying library (`librsvg`) that converts SVG to PNG simply ignores `@font-face` declarations entirely. It has no font loading capability.

We tried two approaches to load the font in SVG:
- Embedding the entire font as a base64 string inside the SVG → didn't work, librsvg ignores it
- Pointing to the font file using a `file://` path → didn't work, librsvg ignores it too

The result was always the same: no font = boxes.

**Fix:** Completely replaced `sharp + SVG` with `@napi-rs/canvas` — a different image generation library that uses Skia (Google's graphics engine, also used in Chrome) with HarfBuzz (an Arabic text shaping engine). This library loads fonts directly at the system level, bypassing the SVG font issue entirely.

---

### Problem 2: @napi-rs/canvas API changed

**What happened:** After switching to `@napi-rs/canvas`, the code used `registerFont()` to load fonts. This caused the error:
```
TypeError: registerFont is not a function
```

**Root Cause:** In version 0.1.97 of `@napi-rs/canvas`, the API was changed. `registerFont()` was removed and replaced with `GlobalFonts.registerFromPath()`.

**Fix:** Updated the code to use the new API:
```javascript
// Old (broken):
registerFont(path, { family: "Amiri" })

// New (correct):
GlobalFonts.registerFromPath(path, "Amiri")
```

---

### Problem 3: Webpack trying to bundle a native binary

**What happened:** `@napi-rs/canvas` contains a compiled `.node` binary file (native C++ code). When Next.js builds the project, its bundler (Webpack) tried to include this binary in the JavaScript bundle — which is impossible and caused build errors.

**Fix:** Added two things to `next.config.js`:
1. Added `@napi-rs/canvas` to `serverExternalPackages` — tells Next.js to treat it as external
2. Added a Webpack rule to mark it as "don't bundle this" — tells the bundler to skip it and load it natively at runtime

---

### Problem 4: Meta API calls failing (emoji corruption)

**What happened:** The code was sending the caption to Meta's API as JSON (`JSON.stringify`). Meta's API expects form-encoded data (like how HTML forms submit). Emoji characters (which are multi-byte Unicode) were being double-encoded or corrupted in the process.

**Fix:** Switched to `new URLSearchParams({ caption, image_url, access_token })` as the request body. This is the correct format Meta's API expects and handles all characters correctly.

---

### Problem 5: Instagram container not ready when we tried to publish

**What happened:** After telling Instagram "here's my image" (step A), we immediately tried to publish it (step C). Instagram was still processing the image and returned an error.

**Fix:** Added a polling loop between steps A and C. The code now checks the container's status every 3 seconds, up to 10 times (30 seconds total). It only proceeds to publish when Instagram reports the status as "FINISHED".

---

### Problem 6: Meta couldn't fetch our images

**What happened:** When we gave Instagram the image URL (pointing to our Vercel server), Instagram's servers tried to download it but couldn't. This was because:
- During development: localhost URLs are not publicly accessible
- On Vercel: the image generation takes time and the URL might not be reliably accessible to external servers

**Fix:** Added an upload step — before telling Instagram about the image, we first download it ourselves, upload it to Vercel Blob (a public file storage CDN), and give Instagram that stable CDN URL instead. Vercel Blob URLs are permanent, publicly accessible, and fast.

---

### Problem 7: Globe emoji 🌐 showing as \uD83C\uDF10 in captions

**What happened:** The caption ended with "🌐 Read more duas & hadith at duavault.com". On Instagram, this appeared as the raw escape code `\uD83C\uDF10 Read more...` instead of the emoji.

**Root Cause:** The 🌐 emoji lives in Unicode's "supplementary plane" — it requires two code units (called a surrogate pair) to represent in UTF-16 encoding. Meta's API or Instagram's display layer was not handling this correctly and outputting the raw surrogate values.

**Fix:** Removed the 🌐 emoji entirely. Other emoji we use (📚 📖 🌙) are in the "basic plane" and display correctly — only supplementary plane emoji cause this problem.

---

### Problem 8: Facebook (#200) Permissions Error

**What happened:** Every attempt to post to the Facebook page returned:
```json
{ "error": "(#200) Permissions error" }
```

**Root Cause:** The `/{pageId}/photos` API endpoint requires the `pages_manage_posts` permission on the access token. Our original token was generated without this permission in the OAuth scope.

**What makes this tricky:** You can't add permissions to an existing token. You must:
1. Enable the permission at the app level in Meta Developer Console
2. Re-authorize (generate a new token) with the permission included
3. Exchange the short-lived token for a long-lived one
4. Extract the Page Access Token from that

**Fix:** Went through the full token regeneration flow with `pages_manage_posts` added. Facebook posting now works.

---

### Problem 9: Duplicate posts every day

**What happened:** The system had two mechanisms running simultaneously:
- `fill-buffer` cron (midnight UTC) — scheduled posts 4 days ahead via Meta's `scheduled_publish_time`
- `post-morning` / `post-evening` crons — posted the same content immediately on the day

Result: every day, the same hadith posted twice (once from the pre-scheduled buffer, once from the direct cron).

Additionally, any manual trigger of the cron endpoints (e.g., for testing) would create an extra post.

**Fix — Part 1:** Disabled `fill-buffer` completely. The direct crons (`post-morning` / `post-evening`) are sufficient and simpler.

**Fix — Part 2:** Added a deduplication guard. Before every post, the code checks Vercel Blob for a marker file (`post-log/YYYY-MM-DD-morning.txt`). If it exists, the post is skipped. After a successful post, the marker is written. This means no matter how many times the endpoint is called, only one post goes out per slot per day.

---

## 7. What We Tried That Didn't Work

| Approach | Why it failed |
|----------|--------------|
| `sharp` + SVG with base64 font | librsvg on Vercel Lambda ignores `data:` URI fonts |
| `sharp` + SVG with `file://` font path | librsvg on Vercel Lambda ignores `file://` URI fonts |
| `registerFont()` from @napi-rs/canvas | API removed in v0.1.97 |
| JSON body to Meta API | Meta expects form-encoded, not JSON — emoji gets corrupted |
| `Cache-Control: public, max-age=3600` | CDN served stale images; Instagram got old broken version |
| Browser screenshots for production verification | Preview tool captured localhost dev server, not actual production PNG |
| fill-buffer (4-day pre-scheduling) | Caused duplicate posts — both the scheduled post and the direct cron fired on the same day |

---

## 8. The Full Chronology of Changes

### Phase 1 — Building the Automation

**Commit: `e9647b6` — feat: automated Instagram/Facebook posting**
The first version of the Instagram automation was built:
- `/api/instagram/hadith` and `/api/instagram/dua` routes to generate images
- `lib/instagram.ts` with Meta Graph API helpers
- `post-morning` and `post-evening` cron endpoints
- `vercel.json` registering the crons

At this point, images were generated using `sharp` + SVG. Arabic text appeared as boxes on Vercel (the font loading problem).

---

**Commit: `373c5c4` — feat: 4-day rolling post buffer**
Added `fill-buffer` cron and `init-buffer` endpoint to pre-schedule posts 4 days ahead. The idea was to build a buffer so posts would survive a Vercel outage.

*(Later found to cause duplicate posts — eventually disabled.)*

---

**Commit: `82e6938` — fix: center Arabic text in dua image**
Visual fix — Arabic text in the dua image was left-aligned when it should be centered.

---

**Commit: `a8ee5f5` — feat: use hadith/dua title as caption hook**
Changed the caption format to lead with the hadith/dua title as a hook to grab attention in the Instagram feed.

---

**Commit: `7083d36` — redesign: hadith image centered layout**
Redesigned the hadith image layout — moved elements to be center-aligned.

---

**Commit: `c98298a` — redesign: Arabic 64px hero, English 22px, hard-cap 4 lines**
Tuned the typography:
- Arabic text increased to 64px (hero size)
- English translation set to 22px
- Hard limit of 4 lines for both Arabic and English so text never overflows the image

---

### Phase 2 — Fixing the Core Image Issue

**Commit: `105243e` — fix: remove CDN cache**
Added `Cache-Control: no-store` to both image routes. This fixed the issue of Vercel's CDN serving stale broken images to Instagram.

---

**Commit: `8fce147` — fix: use file:// paths for fonts**
First attempt to fix Arabic rendering — tried using `file://` URIs to load fonts in the SVG template. Did not work on Vercel (librsvg ignores them).

---

**Commit: `2fe66fd` — fix: use GlobalFonts.registerFromPath**
**The definitive fix.** Replaced `sharp` + SVG entirely with `@napi-rs/canvas` (Skia-based). Fonts now loaded via `GlobalFonts.registerFromPath()`. Arabic text renders correctly with full RTL support and proper shaping.

---

### Phase 3 — Caption & API Fixes

**Commit: `c05af9f` — fix: remove globe emoji from captions**
Removed 🌐 from captions after discovering it rendered as raw `\uD83C\uDF10` on Instagram due to UTF-16 surrogate pair encoding issues with Meta's API.

---

### Phase 4 — Facebook Fix & Deduplication (Today)

**Commit: `36fd39c` — fix: disable fill-buffer cron**
Removed `fill-buffer` from `vercel.json` to prevent the daily duplicate post problem.

**Meta token regeneration**
Generated a new Page Access Token with `pages_manage_posts` permission included. Updated `META_PAGE_ACCESS_TOKEN` in Vercel. Facebook posting now works.

**Commit: `2bb13be` — fix: deduplicate posts**
Added `hasPostedToday()` and `markPostedToday()` functions using Vercel Blob as a simple key-value store. Both cron routes now check before posting and record after posting. Any duplicate trigger within the same day is silently skipped.

---

## 9. Current Architecture (What's Live Today)

```
Vercel (cron scheduler)
    │
    ├── 02:00 UTC daily ──→ /api/cron/post-morning
    │                            │
    │                            ├── Check Vercel Blob: already posted today?
    │                            │     YES → return { skipped: true }
    │                            │     NO  → continue
    │                            │
    │                            ├── getDailyHadith() → pick today's hadith
    │                            ├── /api/instagram/hadith → generate PNG
    │                            ├── Upload PNG to Vercel Blob CDN
    │                            ├── POST to Instagram (2-step: container → publish)
    │                            ├── POST to Facebook (/photos endpoint)
    │                            └── Write marker to Vercel Blob
    │
    └── 14:00 UTC daily ──→ /api/cron/post-evening
                                 │
                                 └── (same flow, but with getDailyDua())
```

### Font files (in /public/fonts/)

| File | Used for |
|------|---------|
| `Amiri-Regular.ttf` | Arabic text (both images) |
| `Inter-Regular.ttf` | Body text (hadith image) |
| `Inter-Bold.ttf` | Bold text (hadith image) |
| `PlayfairDisplay-Italic.ttf` | English quote (hadith image) |

### Vercel Blob storage usage

| Path pattern | Purpose |
|-------------|---------|
| `posts/[timestamp].png` | Uploaded images served to Meta's API |
| `post-log/YYYY-MM-DD-morning.txt` | Deduplication marker for morning post |
| `post-log/YYYY-MM-DD-evening.txt` | Deduplication marker for evening post |

---

## 10. The Instagram & Facebook Link Strategy (Backlinks)

### What is a backlink?

A backlink is when another website (or platform) mentions or links to your website. Search engines like Google use backlinks as a signal of trust and relevance — the more reputable sources link to you, the higher you rank.

### How DuaVault uses social media for this

1. **Instagram captions** — Every post includes `duavault.com` as plain text. While not a clickable hyperlink (Instagram's limitation), it still:
   - Builds brand recognition
   - Drives manual traffic from engaged users
   - Creates a consistent brand presence

2. **Instagram bio** — The profile bio has a clickable link directly to `duavault.com`. Posts drive followers to the profile page, and the bio link converts them to website visitors.

3. **Facebook posts** — Facebook allows full clickable links. Every Facebook post's caption includes `duavault.com` which Facebook users can click directly.

4. **Facebook Page description** — The "About" section of the Facebook page links to the website.

5. **Content-to-site funnel** — The captions are written to create curiosity:
   - "Read more duas & hadith at duavault.com"
   - "Learn more duas at duavault.com"
   This gives followers a reason to visit the site beyond just seeing the post.

### Why two platforms?

- **Instagram** has higher engagement rates and a younger Muslim audience, better for brand building
- **Facebook** has older demographics, more likely to click links and share content
- Running both doubles the content output for zero extra work (same image, same code, one extra API call)

---

## 11. Most Common Issues & How to Diagnose Them

### "The post didn't go out today"

**Check 1 — Vercel cron logs:**
Go to Vercel Dashboard → Project → Logs → filter by `/api/cron/post-morning`

**Check 2 — Manual trigger:**
```bash
curl -X GET "https://duavault.com/api/cron/post-morning" \
  -H "Authorization: Bearer <CRON_SECRET>"
```
Read the JSON response — it will tell you exactly what happened (posted, skipped, or error with message).

**Check 3 — Was it skipped?**
If the response is `{ "skipped": true }`, it means a post was already made earlier that day. Check if the post actually exists on Instagram/Facebook.

---

### "Instagram posted but Facebook didn't"

Most likely cause: the `META_PAGE_ACCESS_TOKEN` expired or permissions were revoked.

**Diagnose:**
```
https://graph.facebook.com/debug_token?input_token=<TOKEN>&access_token=<APP_ID>|<APP_SECRET>
```
Check the `is_valid` field and `scopes` array. Should include `pages_manage_posts`.

**Fix:** Regenerate the Page Access Token (follow steps in Section 6, Problem 8).

---

### "Arabic text showing as boxes again"

This would mean `@napi-rs/canvas` failed to load the font files. Check:
1. Are all 4 font files present in `/public/fonts/`?
2. Are there any build errors in Vercel deployment logs?

---

### "Post has wrong content (yesterday's dua, etc.)"

The `getDailyHadith()` / `getDailyDua()` functions use the server's date. Vercel servers run in UTC. If the cron fires at exactly midnight UTC, the date might be off by one. Currently the morning cron fires at 02:00 UTC which is safely within the correct IST day.

---

### "Token expired warning"

Page Access Tokens derived from long-lived User tokens never expire — as long as you remain an admin of the Facebook page and the app remains active.

If you see token errors, use the `/api/cron/refresh-token` endpoint:
```bash
curl "https://duavault.com/api/cron/refresh-token" \
  -H "Authorization: Bearer <CRON_SECRET>"
```
This requires `META_APP_ID`, `META_APP_SECRET`, and `META_USER_ACCESS_TOKEN` to be set in Vercel env vars.

---

## 12. How to Manually Trigger a Post

Only do this if the automatic cron failed. The deduplication guard will prevent duplicates.

**Post morning hadith:**
```bash
curl -X GET "https://duavault.com/api/cron/post-morning" \
  -H "Authorization: Bearer a445ed940bb9f05f1fc1fc50194813d08c6540b82b8f912f"
```

**Post evening dua:**
```bash
curl -X GET "https://duavault.com/api/cron/post-evening" \
  -H "Authorization: Bearer a445ed940bb9f05f1fc1fc50194813d08c6540b82b8f912f"
```

**Expected successful response:**
```json
{
  "ok": true,
  "hadith": "hadith-fasting-is-for-allah",
  "instagram": { "platform": "instagram", "id": "18088506653187151" },
  "facebook": { "platform": "facebook", "id": "122095875674884452" }
}
```

**If already posted today:**
```json
{ "ok": true, "skipped": true, "reason": "already posted this morning" }
```

---

## 13. Environment Variables Reference

All stored in Vercel Dashboard → Settings → Environment Variables.

| Variable | What it is | How to get it |
|----------|-----------|---------------|
| `META_PAGE_ACCESS_TOKEN` | Never-expiring token to post on behalf of IG + FB pages | Meta Graph API Explorer → generate User token → exchange for long-lived → get from `/me/accounts` |
| `INSTAGRAM_BUSINESS_ACCOUNT_ID` | Numeric ID of the @dua.vault Instagram account | Meta Graph API: `GET /me/accounts` then `GET /{page-id}?fields=instagram_business_account` |
| `FACEBOOK_PAGE_ID` | Numeric ID of the DuaVault Facebook page | Shown in `/me/accounts` response (`id` field) — currently `1028552817007610` |
| `CRON_SECRET` | Secret to authenticate cron endpoint calls | Auto-generated by Vercel — find in Vercel Dashboard |
| `NEXT_PUBLIC_BASE_URL` | The live site URL | `https://duavault.com` |
| `BLOB_READ_WRITE_TOKEN` | Token for Vercel Blob file storage | Auto-added when Blob store is connected in Vercel Dashboard |
| `SUPABASE_SERVICE_ROLE_KEY` | Admin key for Supabase database | Supabase project → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public key for Supabase | Supabase project → Settings → API |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Supabase project → Settings → API |
| `RESEND_API_KEY` | Key for sending emails via Resend | Resend dashboard → API Keys |

---

*Document last updated: March 2026*
*All changes committed to: https://github.com/talhamasood97/dua-companion*
