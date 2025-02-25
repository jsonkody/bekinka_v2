## 📚 Návod na Bekinka_v2

### 📥 1. Stáhni si projekt k sobě na počítač

Pomocí **Git Bash** (nebo jiného terminálu) si naklonuješ projekt z GitHubu:

```sh
git clone git@github.com:JsonKody/bekinka_v2.git
```

### 🛠️ 2. Nainstaluj potřebné knihovny (dependencies)

Po naklonování si přejdi do složky projektu (`cd bekinka_v2`) a spusť:

```sh
pnpm i
```

> _"⚠️ Tohle stačí udělat jen jednou po stažení – pak už to nebudeš potřebovat opakovat!"_

### 🎮 3. Spusť projekt u sebe na počítači

Když máš všechno ready, spustíš si to lokálně příkazem:

```sh
pnpm dev
```

> _"🎨 Projekt se spustí a můžeš ho otestovat v prohlížeči (obvykle na http://localhost:5173). Další užitečné příkazy najdeš v souboru package.json! 😉"_

### ✏️ 4. Uprav si hry podle sebe

Hry můžeš editovat v souboru:

📍 `/src/stores/Games.ts`

Btw v tech stores můžeš i editovat popis `description` u fotek v galeriích -> `GalleryArt.ts` jsou tvoje kresby
a `GalleryHome.ts` jsou ty fotky dole na hlavní stránce.

> _"🧠 Tady můžeš měnit pravidla, přidávat nové nápady nebo cokoli, co tě napadne – je to tvoje hřiště!"_

### 🚀 5. Nahraj změny na GitHub a web

Až budeš spokojená, uložíš změny a nahraješ je příkazem:

```sh
pnpm psh
```

> _"🌐 Tím se projekt uloží na GitHub, Vercel si toho všimne a nasadí to na web. Hotovo!"_

### 🌟 A je to!

To je všechno – teď už můžeš sama upravovat **bekinka.cz** a nasazovat ho na web! Kdyby něco nešlo, napiš mi, ať to spolu rozlouskneme. 🎉

💖 Přeju hodně štěstí!

Daniel 😊
