# DuaVault – Claude Instructions

## ⚠️ How the owner wants you to work
- The owner is **non-technical**. Do every task **end to end**: build → validate → publish → confirm live on duavault.com. Explain results in plain language.
- **Don't ask unnecessary questions.** Pick sensible defaults and proceed. Ask only when genuinely blocked.
- Never hand the owner technical chores: no Terminal commands, no creating or pasting GitHub tokens, no installing tools.

## ⚠️ CRITICAL: Never Use Worktrees
**Always edit files directly in the main repo at `/Users/mohdtalhamasood/Downloads/Dua/`.**

- Do NOT use `isolation: "worktree"` on any Agent tool call
- Do NOT create worktrees via git or any other method
- All edits must go directly to the main working directory
- The only definition of "done" is: committed to main + on GitHub + live on duavault.com and verified

## Definition of Done
A task is NOT complete until:
1. Files edited directly in `/Users/mohdtalhamasood/Downloads/Dua/`
2. `git add <specific files>` — never `git add -A` (untracked junk like `nohup.out`, `*.tgz`, `~$*.docx`, `PRD.md`, `app/api/dedupe-duas/` must stay out)
3. `git commit` with a clear message; update `PROJECT_CONTEXT.md` (GOVERNANCE.md rule)
4. On GitHub `main` (see Publishing below)
5. Live: poll a changed/new URL on https://duavault.com until it serves the change (Vercel takes ~5 min), then spot-check pages and `/api/instagram/*` images

## ✅ Release checklist — EVERY change, no exceptions
The owner asked (Oct 2026) that none of these are ever skipped. Each one exists because it broke silently before.

**Before publishing**
1. `npm run preflight`. It runs `tools/preflight.ts` and the content validator, and must pass. It checks:
   - every `process.env` read is `.trim()`ed (Vercel values end in a newline, which broke Google Analytics until Oct 2026)
   - collections and `SEO_TITLES` point at real duas
   - redirects are valid
   - the verification files exist
   - `CONTENT_UPDATED` isn't stale
2. `npx tsc --noEmit` and `npm run build`.
3. Start the build (`npx next start -p 3002`), then run `node tools/phone-check.js http://localhost:3002`. Every sitemap page must fit 375px with no broken images and exactly one `<h1>`.
4. For visual changes, take light and dark screenshots with `--shots light|dark <paths>` and look at them.
5. If content changed: bump `CONTENT_UPDATED`, add new duas to a collection, check Sunnah.com links (`SUNNAH_SUFFIX`), and render the post cards.
6. New page types need: a unique title (≤60 chars incl. " | DuaVault"), a description (≤160), a canonical, an og:image, one `<h1>`, a sitemap entry and internal links (homepage/footer/related).

**After it's live**
7. Spot-check the changed URLs on https://duavault.com. Confirm Google Analytics still fires: `gtag` is defined and a `/g/collect` request is sent.
8. If pages were added or removed: POST all sitemap URLs to IndexNow (key below). In Search Console, resubmit `sitemap.xml` and request indexing for the most important new pages (about 10 a day).
9. Update `PROJECT_CONTEXT.md` (version history) and the memory notes.

**Never**
- Reduce the favicon below 48px.
- Remove `public/google80842bb7c72773cb.html` or `public/7407844c6631af6428ce3b88a62107ae.txt`.
- Block `/_next/` or `/api/instagram/` in robots.
- Change existing URLs without a redirect.
- Reuse an ID.
- Leave a viewport emulation on the browser pane before handing it to the owner.

## Publishing
- Normal: `git push origin main`. Credentials live in the macOS Keychain, and the sandbox can't read it, so retry without the sandbox.
- If push fails on auth (the token expired in Oct 2026; `gh` isn't installed), **don't ask the owner for a token**. Publish through GitHub's web upload page in the built-in browser pane instead:
  1. The owner signs in to GitHub there; that's the only step they do.
  2. Hand the file contents to `https://github.com/talhamasood97/DuaVault/upload/main` via a local `window.name` handoff page (escape `</` as `<\/` in the inlined JSON).
  3. Build each `File` with its full repo path as the name (e.g. `app/duas/[slug]/page.tsx`) so every file lands in its folder in ONE commit. Set them on `#upload-manifest-files-input` with a DataTransfer, add a commit message, and click "Commit changes".
  4. Verify `git diff origin/main main` is empty, then `git reset origin/main` locally.

## Trust wording
- Never claim "scholar-verified" or "most complete": no individual scholar review has happened. Say each dua is checked against its source and grading.
- Keep `public/google80842bb7c72773cb.html`. It verifies Google Search Console ownership (talhasubscriptionbbk@gmail.com).

## Adding duas / hadiths
- **Sources:** Sunnah.com for hadith (Arabic, English, grade); Quran.com `text_imlaei` + Sahih International for Qur'anic duas. Sahih/Hasan only.
- **Arabic:** sliced from the source text, never retyped. Transliterations ASCII only. Write (SAW), not ﷺ.
- **No duplicates** against existing duas AND hadiths: reference, slug, title, translation, Arabic overlap.
- **Labels:** only the 9 categories, 8 emotions and 34 hadith topics.
- **Validator:** `data/validate.ts` passes with 0 errors (since the Oct 2026 audit). Keep it at 0.
- **Topic collections** (`lib/collections.ts` → `/duas-for/<slug>`): when adding duas, add them to a matching collection. Create new collections only from Search Console queries where several pages split the same search.
- **After any content change:** bump `CONTENT_UPDATED` in `app/sitemap.ts` to today.
- **Source links:** for a new Sunnah.com reference, check that `https://sunnah.com/<book>:<n>` opens. If only `<n>a` exists, add it to `SUNNAH_SUFFIX` in `lib/sources.ts`.
- **Tell search engines:** after publishing new pages, POST the sitemap URLs to IndexNow with key `7407844c6631af6428ce3b88a62107ae` (the other key file in `public/` is rejected).
- **Removing an entry:** never reuse its ID; add a permanent redirect to `REMOVED_PAGES` in `next.config.js`.
- **Post images:** render `/api/instagram/dua` and `/api/instagram/hadith` for every new item and look at them.
  - Very long duas → `daily_dua_eligible: false`.
  - The hadith card quotes from the first `said, "…"`, so make sure that's the Prophet's words.
- **Before publishing:** follow the Release checklist above.

## Project
- Live site: https://duavault.com
- GitHub: https://github.com/talhamasood97/DuaVault (renamed from `dua-companion`; the old URL redirects)
- Stack: Next.js 14 App Router + TypeScript + Tailwind + Supabase + Vercel
- Node: use `PATH="$HOME/.nvm/versions/node/v20.20.1/bin:$PATH"` prefix for npm/node commands
- Full technical reference: `PROJECT_CONTEXT.md`
