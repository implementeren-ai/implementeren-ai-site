#!/usr/bin/env bash
# Stagingomgeving van implementeren.ai: de echte site, gebouwd zoals hij live zou komen te staan.
#
# Gebruik:  scripts/staging.sh <naam> [PR-nummer|branch ...]
#   scripts/staging.sh pr-51 51                  één PR bekijken
#   scripts/staging.sh go-live 51 52 53 ...      meerdere PR's samen, bijvoorbeeld de go-live
#
# Wat het doet: verse worktree van origin/main, merget de opgegeven PR's erin, bouwt met
# STAGING=1 (pagina's met status 'review' doen dan mee, zie src/lib/publicatie.mjs) en zet het
# resultaat op het aparte Pages-project implementeren-ai-staging. Dat project vraagt een
# wachtwoord (STAGING_WACHTWOORD, zie functions/_middleware.js) en is altijd noindex.
# Resultaat: https://<naam>.implementeren-ai-staging.pages.dev
#
# Nodig: gh (ingelogd) en een Cloudflare API-token met alleen Pages:Edit, in
# ~/.config/cloudflare/implementeren-staging-token (chmod 600, token "implementeren-staging-pages",
# verloopt niet). Zonder dat bestand valt wrangler terug op `npx wrangler login`, en die OAuth
# verloopt. Productie raakt dit nooit: productie gaat alleen via .github/workflows/deploy.yml.
set -euo pipefail

PROJECT="${STAGING_PROJECT:-implementeren-ai-staging}"
TOKEN_BESTAND="${STAGING_TOKEN_FILE:-$HOME/.config/cloudflare/implementeren-staging-token}"
if [[ -z "${CLOUDFLARE_API_TOKEN:-}" && -r "$TOKEN_BESTAND" ]]; then
  CLOUDFLARE_API_TOKEN="$(<"$TOKEN_BESTAND")"
  export CLOUDFLARE_API_TOKEN
  export CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-1634d39356c029283d63b0f7bbd5d103}"
fi
naam="${1:-}"
[[ "$naam" =~ ^[a-z0-9][a-z0-9-]{0,27}$ ]] || { echo "naam: kleine letters, cijfers en '-', max 28 tekens" >&2; exit 2; }
shift

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"
git fetch -q origin

TMP="$(mktemp -d)"
W="$TMP/staging"
opruimen() { cd "$ROOT"; git worktree remove --force "$W" >/dev/null 2>&1 || true; rm -rf "$TMP"; }
trap opruimen EXIT
git worktree add -q --detach "$W" origin/main
cd "$W"

merge() {
  git -c user.name=staging -c user.email=staging@implementeren.ai merge -q --no-edit "$1" >/dev/null \
    || { echo "merge van $1 geeft een conflict" >&2; exit 1; }
}

# Zolang de stagingmodus zelf nog niet op main staat, gaat hij mee.
if git rev-parse -q --verify origin/feat/staging >/dev/null && ! git merge-base --is-ancestor origin/feat/staging HEAD; then
  merge origin/feat/staging
fi

for arg in "$@"; do
  if [[ "$arg" =~ ^[0-9]+$ ]]; then
    branch="$(gh pr view "$arg" --json headRefName -q .headRefName)"
  else
    branch="$arg"
  fi
  merge "origin/$branch"
  echo "  + $branch"
done

ln -s "$ROOT/node_modules" node_modules
STAGING=1 STAGING_LABEL="$naam" npm run build >"$TMP/build.log" 2>&1 || { tail -40 "$TMP/build.log" >&2; exit 1; }
grep -E '\[check-dist\]|page\(s\) built' "$TMP/build.log" || true

npx --no-install wrangler pages deploy dist --project-name="$PROJECT" --branch="$naam" --commit-dirty=true >"$TMP/deploy.log" 2>&1 \
  || { tail -30 "$TMP/deploy.log" >&2; exit 1; }

echo "https://$naam.$PROJECT.pages.dev"
