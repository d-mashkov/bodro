#!/bin/bash
set -e
REPO="/Users/denismaskov/Claude/Projects/DarkKitchen"
cd "$REPO"
rm -f .git/HEAD.lock .git/index.lock .git/objects/maintenance.lock 2>/dev/null || true
git add DarkKitchen_Service_v4.html
git commit -m "Service v4: BODRO rebrand — Archivo font, lime/charcoal palette, BODRO SMART naming"
git push
echo ""
echo "✅ Done! https://d-mashkov.github.io/bodro/DarkKitchen_Service_v4.html"
