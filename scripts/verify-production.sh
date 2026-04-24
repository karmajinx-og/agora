#!/usr/bin/env bash
# Quick smoke checks against production (run after deploy).
# Usage: ./scripts/verify-production.sh [base_url]
set -euo pipefail
BASE="${1:-https://agoralinux.app}"
for path in / /robots.txt /sitemap.xml /about /updates; do
  code=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 25 "${BASE}${path}")
  echo "${path} → ${code}"
  [[ "$code" == "200" ]] || { echo "Expected 200 for ${path}" >&2; exit 1; }
done
echo "OK — ${BASE}"
