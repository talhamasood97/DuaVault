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

## Publishing
- Normal: `git push origin main`. Credentials live in the macOS Keychain, and the sandbox can't read it, so retry without the sandbox.
- If push fails on auth (the token expired in Oct 2026; `gh` isn't installed), **don't ask the owner for a token**. Publish through GitHub's web upload page in the built-in browser pane instead:
  1. The owner signs in to GitHub there; that's the only step they do.
  2. Hand the file contents to `https://github.com/talhamasood97/DuaVault/upload/main/<folder>` via a local `window.name` handoff page.
  3. Set the files on `#upload-manifest-files-input` with a DataTransfer, add a commit message, and click "Commit changes".
  4. Verify `git diff origin/main main` is empty, then `git reset origin/main` locally.

## Adding duas / hadiths
- **Sources:** Sunnah.com for hadith (Arabic, English, grade); Quran.com `text_imlaei` + Sahih International for Qur'anic duas. Sahih/Hasan only.
- **Arabic:** sliced from the source text, never retyped. Transliterations ASCII only. Write (SAW), not ﷺ.
- **No duplicates** against existing duas AND hadiths: reference, slug, title, translation, Arabic overlap.
- **Labels:** only the 9 categories, 8 emotions and 34 hadith topics.
- **Validator:** `data/validate.ts` has 39 pre-existing errors on old entries. New content must add zero.
- **Post images:** render `/api/instagram/dua` and `/api/instagram/hadith` for every new item and look at them.
  - Very long duas → `daily_dua_eligible: false`.
  - The hadith card quotes from the first `said, "…"`, so make sure that's the Prophet's words.
- **Before publishing:** `npx tsc --noEmit`, `npm run build`, and phone-width (375px) checks.

## Project
- Live site: https://duavault.com
- GitHub: https://github.com/talhamasood97/DuaVault (renamed from `dua-companion`; the old URL redirects)
- Stack: Next.js 14 App Router + TypeScript + Tailwind + Supabase + Vercel
- Node: use `PATH="$HOME/.nvm/versions/node/v20.20.1/bin:$PATH"` prefix for npm/node commands
- Full technical reference: `PROJECT_CONTEXT.md`
