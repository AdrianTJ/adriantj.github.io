#!/usr/bin/env bash
# Render an ink-sketch HTML file to a PNG with headless Chromium.
# Usage: ./render.sh input.html output.png [WIDTH] [HEIGHT]
# WIDTH/HEIGHT must match CONFIG.W / CONFIG.H in the HTML.
set -euo pipefail

IN="${1:?usage: render.sh input.html output.png [W] [H]}"
OUT="${2:?usage: render.sh input.html output.png [W] [H]}"
W="${3:-1200}"
H="${4:-800}"

# Find a Chromium/Chrome. Override with CHROME=/path/to/chrome.
CHROME="${CHROME:-}"
if [ -z "$CHROME" ]; then
  for c in \
    "$(command -v chromium 2>/dev/null || true)" \
    "$(command -v chromium-browser 2>/dev/null || true)" \
    "$(command -v google-chrome 2>/dev/null || true)" \
    $(ls /opt/pw-browsers/chromium-*/chrome-linux/chrome 2>/dev/null | sort -V | tail -1); do
    if [ -n "$c" ] && [ -x "$c" ]; then CHROME="$c"; break; fi
  done
fi
[ -z "$CHROME" ] && { echo "No Chromium found. Set CHROME=/path/to/chrome" >&2; exit 1; }

# --force-device-scale-factor=2 renders at 2x for crisp, retina-quality PNGs.
"$CHROME" --headless --no-sandbox --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size="${W},${H}" \
  --screenshot="$OUT" "file://$(realpath "$IN")" >/dev/null 2>&1

echo "wrote $OUT  (${W}x${H} @2x  via $(basename "$CHROME"))"
