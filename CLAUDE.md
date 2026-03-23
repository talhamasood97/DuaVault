# DuaVault – Claude Instructions

## ⚠️ CRITICAL: Never Use Worktrees
**Always edit files directly in the main repo at `/Users/mohdtalhamasood/Downloads/Dua/`.**

- Do NOT use `isolation: "worktree"` on any Agent tool call
- Do NOT create worktrees via git or any other method
- All edits must go directly to the main working directory
- The only definition of "done" is: committed to main + pushed to GitHub + Vercel deploy confirmed

## Definition of Done
A task is NOT complete until:
1. Files edited directly in `/Users/mohdtalhamasood/Downloads/Dua/`
2. `git add <specific files>` — never `git add -A`
3. `git commit` with a clear message
4. `git push origin main`
5. Vercel deploy confirmed (check `gh run list` or Vercel dashboard)

## Project
- Live site: https://duavault.com
- GitHub: https://github.com/talhamasood97/dua-companion
- Stack: Next.js 14 App Router + TypeScript + Tailwind + Supabase + Vercel
- Node: use `PATH="$HOME/.nvm/versions/node/v20.20.1/bin:$PATH"` prefix for npm/node commands
