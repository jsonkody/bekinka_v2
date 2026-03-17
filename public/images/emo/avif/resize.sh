#!/bin/bash

# 1. Nejdřív jistota – zkopírujeme celou složku jako zálohu
cp -r public/images/emo public/images/emo_backup

# 2. Najdeme všechny obrázky a proženeme je přes magick
# (Vynechávám formáty jako .svg, ty resize nepotřebují)
find . -type f \( -iname "*.avif" -o -iname "*.webp" -o -iname "*.png" -o -iname "*.gif" \) -exec magick {} -resize 60x60 {} \;

echo "Hotovo! Emoty jsou zmenšené. Původní najdeš v public/images/emo_backup"
