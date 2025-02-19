#!/bin/bash

# Nastavte cestu ke složce se zdrojovými obrázky
SOURCE_DIR="./"

# Nastavte cestu, kam se mají uložit upravené obrázky
WEBP_DIR="$SOURCE_DIR/webp"
THUMB_DIR="$SOURCE_DIR/thumb"

# Vytvořte cílové složky, pokud ještě neexistují
mkdir -p "$WEBP_DIR"
mkdir -p "$THUMB_DIR"

# Procházejte všechny obrázky ve zdrojové složce
for img in "$SOURCE_DIR"/*.jpg; do
  # Získejte rozměry obrázku
  dimensions=$(identify -format "%wx%h" "$img")
  width=$(echo $dimensions | cut -dx -f1)
  height=$(echo $dimensions | cut -dx -f2)

  # Určete, zda je obrázek na šířku nebo na výšku
  if [ "$width" -gt "$height" ]; then
    resize_dimension="1200x"
  else
    resize_dimension="x1200"
  fi

  # Převod obrázku na WebP a změna velikosti
  convert "$img" -resize "$resize_dimension" "$WEBP_DIR/$(basename "$img" .jpg).webp"

  # Vytvoření miniatury
  convert "$img" -thumbnail '200x150^' -gravity center -extent 200x150 "$THUMB_DIR/$(basename "$img" .jpg)_thumb.webp"
done
