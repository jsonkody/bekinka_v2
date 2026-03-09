#!/bin/bash

# Ujistíme se, že cílové složky existují
mkdir -p webp avif

# Projdeme všechny .png a .gif soubory
for file_path in *.png *.gif; do
    # Ochrana pro případ, že by nějaký typ souboru chyběl
    [ -e "$file_path" ] || continue

    # Získáme jméno souboru bez přípony
    base_name="${file_path%.*}"
    
    # Cesty k cílovým souborům
    target_webp="webp/${base_name}.webp"
    target_avif="avif/${base_name}.avif"

    echo "Zpracovávám: $file_path"

    # Kontrola a konverze do WebP
    if [ ! -f "$target_webp" ]; then
        echo " -> Vytvářím $target_webp..."
        magick "$file_path" -quality 80 "$target_webp"
    else
        echo " -> $target_webp už existuje, přeskakuji."
    fi

    # Kontrola a konverze do AVIF
    if [ ! -f "$target_avif" ]; then
        echo " -> Vytvářím $target_avif..."
        magick "$file_path" -quality 50 "$target_avif"
    else
        echo " -> $target_avif už existuje, přeskakuji."
    fi
done

echo "Hotovo! Všechny chybějící verze jsou vygenerované."
