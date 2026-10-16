#!/usr/bin/env bash
# Rebuilds the Rober A. Terziyan headshot derivatives.
# Master is the full-frame 4:5 PNG. Black and white stays as photographed.
# Page slot uses that frame. The social card crops the head (y=80, 800x420)
# and scales to 1200x630.
set -euo pipefail
cd "$(dirname "$0")/.."
master="public/assets/attorney/robby-terziyan-800.png"
dest="public/assets/attorney"
test -f "$master"
tmp=$(mktemp -d)
python3 - "$master" "$tmp" << 'PY'
import sys
from PIL import Image
master, tmp = sys.argv[1], sys.argv[2]
src = Image.open(master).convert("RGB")
if src.size != (800, 1000):
    raise SystemExit(f"expected 800x1000 master, got {src.size}")
for width in (400, 640, 800):
    height = round(width * 1000 / 800)
    src.resize((width, height), Image.Resampling.LANCZOS).save(
        f"{tmp}/robby-terziyan-{width}.png", optimize=True
    )
src.crop((0, 80, 800, 500)).resize((1200, 630), Image.Resampling.LANCZOS).save(
    f"{tmp}/robby-terziyan-og.png", optimize=True
)
PY
for f in "$tmp"/*.png; do
  base=$(basename "$f" .png)
  ffmpeg -y -hide_banner -loglevel error -i "$f" \
    -c:v libwebp -quality 82 -compression_level 6 "$dest/${base}.webp"
  ffmpeg -y -hide_banner -loglevel error -i "$f" \
    -c:v libaom-av1 -still-picture 1 -crf 24 -b:v 0 -cpu-used 6 -pix_fmt yuv420p \
    "$dest/${base}.avif"
  cp "$f" "$dest/${base}.png"
done
rm -rf "$tmp"
echo "rebuilt headshot derivatives in $dest"
