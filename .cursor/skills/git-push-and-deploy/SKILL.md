---
name: git-push-and-deploy
description: >-
  After any code or site change in paleram.ai, commit, git push to origin main,
  and deploy via GitHub Pages. Use every time code changes, after finishing
  edits, when the user asks to ship, push, or deploy, or when the standing
  rule is to git push and deploy on each change.
---

# Git push and deploy

every time change of code do a git push and deploy

## When

Run this **after finishing code changes** in the same turn. Do not wait for the user to ask again. Skip only if there is nothing to commit.

## Deploy path

This repo is static HTML on **GitHub Pages** from `main`. Custom domain: `palramai.in` (`CNAME`). Pushing `main` **is** the deploy.

## Steps

1. `git status`, `git diff`, `git log -8 --oneline` (parallel).
2. Stage only the files you changed. Do not stage `.env` or secrets.
3. Commit (PowerShell):

```powershell
git add <files>
git commit -m @"
Short why-focused message.

Optional second sentence.
"@
```

4. `git push origin HEAD` (this repo tracks `origin` = GitHub `naresh-palle/paleram.ai`).
5. Tell the user: commit hash, that Pages will refresh **https://palramai.in**, and to hard-refresh if the old site is cached.

## Do not

- Force-push to `main`
- `--no-verify` unless the user asked
- Empty commits
- Push if commit failed
