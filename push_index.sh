#!/bin/bash
set -e
REPO="/Users/denismaskov/Claude/Projects/DarkKitchen"
cd "$REPO"
rm -f .git/HEAD.lock .git/index.lock .git/objects/maintenance.lock 2>/dev/null || true
git add index.html DarkKitchen_Service_v4.html
git commit -m "Index + Service v4: full BODRO rebrand, Archivo font, cream bg, lime accent"
git push
echo ""
echo "✅ Done!"
echo "   https://d-mashkov.github.io/bodro/"
echo "   https://d-mashkov.github.io/bodro/DarkKitchen_Service_v4.html"
