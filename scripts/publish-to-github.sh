#!/usr/bin/env bash
# Sync this web/ tree into agora-github-sync, then you commit + push from there.
# Usage: from web/  →  ./scripts/publish-to-github.sh
# Env: AGORA_GITHUB_SYNC=/path/to/clone (default: ../agora-github-sync)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="${AGORA_GITHUB_SYNC:-$ROOT/../agora-github-sync}"
if [[ ! -d "$DEST/.git" ]]; then
  echo "Expected git repo at: $DEST"
  echo "Set AGORA_GITHUB_SYNC if your clone lives elsewhere."
  exit 1
fi
rsync -a \
  --exclude=node_modules \
  --exclude=.env \
  --exclude=.svelte-kit \
  --exclude=.wrangler \
  --exclude=.DS_Store \
  "$ROOT/" "$DEST/"
echo "Synced → $DEST"
echo "Tip: run ./scripts/verify-production.sh after Cloudflare finishes deploying."
echo "Next: cd \"$DEST\" && npm run ci && git add -A && git status && git commit && git push origin main"
