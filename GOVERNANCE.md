# Master Governance Framework — Lessons from DuaVault

> Generated from a forensic audit of 120 commits, 50+ fix chains, and 4 complete architectural reversals.
> Purpose: Paste the "Level 10 Initialization Block" (Section 4) into your next project's first prompt so you never debug the same issue twice.

---

## 1. Architectural Regrets (What We Got Wrong First)

### 1.1 Image Generation: 4 Rewrites in 2 Weeks

| Attempt | Technology | Why It Failed | Commits Wasted |
|---------|-----------|---------------|----------------|
| 1 | `@vercel/og` (ImageResponse) | Cannot render Arabic ligatures, no custom font control | 2 |
| 2 | Browser-rendered `/instagram-preview` page | Required headless browser screenshotting, too slow for cron | 1 |
| 3 | SVG + `sharp` | WOFF fonts don't work (librsvg only supports TTF), `data:` URIs don't work (must use `file://`), base64 embedding breaks | 4 |
| 4 | `@napi-rs/canvas` | **Finally worked** — but `registerFont` was removed in v0.1.97, had to use `GlobalFonts.registerFromPath` | 1 |

**Regret:** Should have validated font rendering + Arabic support in a 30-minute spike before committing to any approach. Would have saved 8 commits and 2 days.

### 1.2 Facebook Posting API: 4 Commits to Get the Right Endpoint

| Attempt | Approach | Problem |
|---------|----------|---------|
| 1 | `POST /{pageId}/photos` | Posts go to Photos album only, not the page timeline/feed |
| 2 | `POST /{pageId}/feed` with `attached_media` | Wrong parameter format (`attached_media[0]` bracket notation) |
| 3 | Feed + Photos fallback | Correct concept but still wrong `attached_media` format |
| 4 | `attached_media=JSON.stringify([{media_fbid: id}])` | **Finally correct** |

**Regret:** Should have read Facebook Graph API docs thoroughly once, tested with a single curl command, then coded. Instead, coded first and debugged in production.

### 1.3 Deduplication: 7 Commits on One Function

```
fill-buffer (scheduled posts) → disabled (caused duplicates)
  → blob list() single-slot → per-platform tracking
    → CDN HEAD fetch (bypassed SDK) → back to list() + noStore()
```

**Regret:** Shipped fill-buffer without testing dedup. Then each fix introduced a new bug:
- `markPostedToday()` called even on failure → blocked all retries
- Single-slot tracking → one platform success masked the other's failure
- `list()` possibly cached by Next.js → CDN HEAD with brittle token parsing → finally `noStore()` + fail-closed

### 1.4 vercel.json: Gutted 3 Times

Started with 35 lines (regions, headers, buildCommand, nodeVersion). Ended with 3 lines (`{ "framework": "nextjs", "crons": [...] }`). Every added field caused a deployment failure.

**Regret:** Over-configured from day 1. Vercel's defaults are correct for 99% of Next.js projects. Only add what you've proven you need.

### 1.5 Edge vs Node Runtime

All API routes initially declared `export const runtime = "edge"`. Every route had to be changed to `"nodejs"` because:
- Edge runtime can't use `@napi-rs/canvas` (native binary)
- Edge runtime can't use `@vercel/blob` `put()` (requires Node streams)
- Edge runtime has limited `fetch` behavior

**Regret:** Defaulted to Edge for "performance" without checking if our dependencies support it. Should have started with Node.

---

## 2. Deployment "Ghosting" — Every Failed Deploy

| Root Cause | Occurrences | Example |
|-----------|-------------|---------|
| vercel.json config conflicts | 4 | `nodeVersion` flip-flopped 3 times, `regions` broke Edge runtime |
| Missing env vars on Vercel | 3 | `SUPABASE_URL` crashed all routes, `BLOB_READ_WRITE_TOKEN` needed empty redeploy commit |
| Env var formatting | 1 | `NEXT_PUBLIC_SITE_URL` had trailing `\n` from Vercel dashboard copy-paste — broke all 264 sitemap URLs |
| Reserved env var name | 1 | `VERCEL_TOKEN` is reserved by Vercel's build system — broke build entirely |
| TypeScript build errors | 2 | Type mismatch from QUDSI→QURAN enum change, utility scripts in `src/` getting compiled |
| Empty redeploy commits | 2 | Had to create `chore: force redeploy` commits because Vercel didn't pick up env var changes |
| Worktree merge artifacts | 2 | Duplicate commits (`8f79c27`/`bc9a29d`) from git worktree divergence |
| Accidentally committed files | 1 | Personal Namecheap invoice PDF, internal scripts, `.claude/worktrees/` directory |

**Total: ~16 broken or unnecessary deploys out of ~120 commits (13%)**

---

## 3. Data Integrity Gaps

### 3.1 Content Authenticity
- Duas and hadiths are stored in static TypeScript files (`data/duas.ts`, `data/hadiths.ts`), not in Supabase. The "source of truth" is the code, which means any merge conflict or copy-paste error directly corrupts content.
- Grade field (`"Sahih"` | `"Hasan"`) is a string, not an enum — typos are possible and not caught at build time.
- `source_book` + `hadith_number` can be non-unique (same hadith used in multiple contexts), so deduplication relies on manual review, not database constraints.

### 3.2 Daily Content Rotation
- `getDailyHadith()` uses `dayOfYear % HADITHS.length` where `dayOfYear` starts at 1 (not 0). This means index 0 is never selected on Jan 1 — it's selected on day 91 instead. Not a bug, but confusing when debugging "wrong content posted."
- Content rotation is deterministic by date, not randomized. If a user visits every day, they'll see every item in sequence — but adding new items shifts the entire sequence, so users may see a repeat or skip.

---

## 4. Level 10 Project Initialization Block

> **Copy everything below into the first prompt of your next project.**

---

### THE "NEVER AGAIN" LIST — Hard Constraints

```
1. VERIFY BEFORE CODING: Before choosing any image generation, email,
   or external API approach, create a standalone test script that proves
   the exact capability works in the target runtime (Vercel Node, Edge,
   Lambda, etc.). Do NOT commit an approach based on docs alone.

2. VERCEL.JSON MINIMAL: Start with `{ "framework": "nextjs" }` and NOTHING
   else. Only add config AFTER a deploy fails and the fix is proven. Never
   add nodeVersion, regions, buildCommand, or outputDirectory preemptively.

3. NODE RUNTIME DEFAULT: All API routes must use `export const runtime = "nodejs"`
   unless there is a measured, proven reason for Edge. Edge breaks native
   binaries, Blob, and many npm packages.

4. ENV VARS — FAIL LOUD: Every function that reads an env var must throw
   an explicit error if the var is missing. Never silently return undefined
   or fall back to a wrong default. Test this: deploy with the var unset
   and confirm the error appears in logs.

5. DEDUPLICATION — FAIL CLOSED: Any idempotency/dedup check must return
   "already done" on error (not "not done yet"). A missed action is
   recoverable; a duplicate action is not. Use `noStore()` from
   `next/cache` on any data fetch used for dedup decisions.

6. ONE FIX PER COMMIT: Never stack multiple fixes in one commit. If fix B
   depends on fix A, commit A first, verify it works in production, THEN
   commit B. Never chain 3+ fix commits without a production verification
   between them.

7. NO WORKTREE EDITS: All edits go to the main working directory. Git
   worktrees cause diverged branches, duplicate commits, and stale snapshots
   that confuse audits and AI agents. If using Claude Code, disable
   isolation: "worktree" in all Agent calls.
```

### PRE-COMMIT CHECKLIST — Ask Before Every `git push`

Before any `git push origin main`, answer these 3 questions:

```
[ ] 1. ENV PARITY: Are all env vars this code references set in Vercel
       Production? Run: grep -rh "process.env\." --include="*.ts" | sort -u
       and cross-check against Vercel dashboard. Pay attention to:
       - Trailing whitespace/newlines in values (use .trim())
       - Reserved names (VERCEL_TOKEN, VERCEL_URL, etc.)
       - New vars that weren't in the previous deploy

[ ] 2. BUILD CHECK: Does `npm run build` pass locally with zero warnings?
       Run with production env vars, not dev. TypeScript strict mode catches
       type errors that won't appear in dev but will crash the Vercel build.

[ ] 3. WHAT COULD DUPLICATE?: If this change touches any posting, email,
       or cron logic — trace the dedup path. What marker is checked? What
       writes the marker? What happens if the marker write fails? What
       happens if this code runs twice in 30 seconds?
```

### CONTEXT SYNC RULE — Mandatory After Every Feature

```
After every feature merge to main:

1. Update PROJECT_CONTEXT.md Section 7 (Current State):
   - Move completed items to "Completed" list
   - Update "In Progress" and "Next Up"
   - Add any new Known Bugs

2. Update PROJECT_CONTEXT.md Section 5 (Project Structure):
   - Add new files/folders to the tree
   - Remove deleted files

3. If env vars changed:
   - Update Section 3 (Tech Stack) env var table
   - Update Section 8 (API Contracts) if new endpoints added

4. If architecture changed:
   - Update Section 4 (Architecture & Data Model)
   - Add an ADR entry explaining the decision

5. Append to Section 11 (Version History):
   - What changed, what's working, how to revert
   - Mark stability: STABLE or UNSTABLE

Enforcement: The AI agent MUST refuse to mark a feature as "done"
until PROJECT_CONTEXT.md is updated. This is not optional cleanup —
it is part of the definition of done.
```

---

## 5. Context Drift — Where I (Claude) Made Mistakes

Being brutally honest:

| Mistake | What Happened | Impact | Prevention |
|---------|--------------|--------|------------|
| **Assumed `@vercel/og` supports Arabic** | Recommended ImageResponse without testing Arabic rendering | 2 wasted commits, full rewrite | Spike test before committing |
| **Used reserved env var name** | Set `VERCEL_TOKEN` as a custom env var, broke Vercel build | 1 broken deploy, 2 commits to fix | Check Vercel reserved names list before naming env vars |
| **Shipped CDN-HEAD dedup without proving root cause** | Claimed "Next.js caching" without production traces, built fragile token-parsing workaround | Introduced new fragility, had to revert | Prove root cause with logs before changing mechanism |
| **Ran force-post with old code, deployed new code, didn't clean up old markers** | Old-format markers (`morning.txt`) invisible to new-format checks (`morning-instagram.txt`) | Caused the exact duplicate posts the user was trying to prevent | After any format migration, clean up old-format data |
| **Edited files in main repo, ran git from worktree** | Commits went to worktree branch, not main. Auditor saw stale code | Confusion about what's actually deployed | Always `cd` to main repo before any git operation |
| **Assumed Facebook `/photos` was the feed** | Used wrong endpoint, then wrong parameter format — 4 commits | Posts went to Photos album, not timeline | Read API docs thoroughly, test with curl first |
| **Didn't verify env var presence after adding** | Added `ADMIN_ALERT_EMAIL` but didn't test if alert emails actually sent | Alert system was silently broken | After adding any env var, trigger the code path that uses it |

---

## 6. Statistics Summary

| Metric | Value |
|--------|-------|
| Total commits | ~120 |
| Fix commits (fix: prefix) | ~50 (42%) |
| Longest fix chain | 7 commits (deduplication) |
| Complete architectural rewrites | 4 (image gen, FB posting, dedup, vercel.json) |
| Broken deploys | ~16 (13%) |
| Env var incidents | 7 |
| Accidentally committed sensitive files | 1 (personal invoice) |
| Time spent on image generation alone | ~8 commits across 4 approaches |

**The ideal ratio:** Fix commits should be <15% of total. At 42%, nearly half our work was debugging previous work. The "Never Again" list targets the root causes that drove this ratio.
