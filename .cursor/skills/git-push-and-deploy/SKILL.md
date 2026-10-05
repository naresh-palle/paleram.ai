---
name: git-push-and-deploy
description: >-
  After any code or site change in paleram.ai, create a cursor/ branch, commit
  only the related files, fast-forward main, and git push origin main so
  GitHub Pages deploys. Use every time code changes, after finishing edits,
  when the user asks to ship, push, or deploy, or when the standing rule is
  to git push and deploy on each change.
---

# Git push and deploy

every time change of code do a git push and deploy

PUSH AND deploy gh pages

## When

Run this after finishing code changes, in the same turn. Do not wait for the user to ask. Skip only if there is nothing to commit.

## Deploy path

This repo is static HTML on **GitHub Pages** from `main`. Custom domain: `palramai.in` (`CNAME`). Pushing `main` to `origin` **is** the deploy. A commit on a `cursor/` branch does not publish the site.

## Steps

1. `git status`, `git diff`, and `git log -8 --oneline`.
2. Create and check out a new branch named `cursor/<short-description>` (prefix `cursor/`, informative name). Skip this if the work is already on that feature branch.
3. Stage only the files for this change. Exclude unrelated files, `.env`, and secrets.
4. Commit with a concise message about why the change exists.
5. Fast-forward `main`: `git checkout main` then `git merge --ff-only cursor/<branch>`.
6. `git push origin main`. That deploys GitHub Pages.
7. Tell the user the commit hash, that Pages will refresh **https://palramai.in**, and to hard-refresh if the old site is cached.

## Do not

- Force-push to `main`
- Use `--no-verify` unless the user asked
- Create an empty commit
- Push if the commit failed
- Stop after the commit. Push `main` in the same turn.
