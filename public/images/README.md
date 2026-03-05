# Bilder für HOCHPOTENT Website

Alle Bilddateien hier in diesen Ordner (`public/images/`) ablegen.
Das Logo gehört eine Ebene höher: `public/logo.png`

---

## Dateiliste

| Dateiname | Verwendung | Größe (px) | Format | Max. |
|---|---|---|---|---|
| `hero-bg.jpg` | Hintergrundbild Hero-Bereich (Vollbild, farbig) | 1920 x 1080 | JPG | 400 KB |
| `about-1.jpg` | Artist-Foto links in "Raw Power"-Sektion | 800 x 1000 | JPG | 200 KB |
| `about-2.jpg` | Artist-Foto rechts (versetzt, nur Desktop) | 800 x 1000 | JPG | 200 KB |
| `club-docks.jpg` | Hintergrundbild Date: Docks, Hamburg | 1200 x 600 | JPG | 200 KB |
| `club-odonien.jpg` | Hintergrundbild Date: Odonien, Köln | 1200 x 600 | JPG | 200 KB |
| `club-flowers-and-bees.jpg` | Hintergrundbild Date: Flowers and Bees, Essen | 1200 x 600 | JPG | 200 KB |
| `contact-bg.jpg` | Hintergrundbild Kontakt-Sektion | 1200 x 1600 | JPG | 300 KB |
| `media-1.jpg` | Galerie: Featured-Bild (groß, ganz oben) | 1920 x 840 | JPG | 300 KB |
| `media-2.jpg` | Galerie: Grid-Bild 2 | 800 x 800 | JPG | 150 KB |
| `media-3.jpg` | Galerie: Grid-Bild 3 | 800 x 800 | JPG | 150 KB |
| `media-4.jpg` | Galerie: Grid-Bild 4 | 800 x 800 | JPG | 150 KB |
| `media-5.jpg` | Galerie: Grid-Bild 5 | 800 x 800 | JPG | 150 KB |
| `media-6.jpg` | Galerie: Grid-Bild 6 | 800 x 800 | JPG | 150 KB |
| `media-7.jpg` | Galerie: Grid-Bild 7 | 800 x 800 | JPG | 150 KB |
| `media-8.jpg` | Galerie: Grid-Bild 8 | 800 x 800 | JPG | 150 KB |
| `media-9.jpg` | Galerie: Grid-Bild 9 | 800 x 800 | JPG | 150 KB |

**Logo:** `public/logo.png` - min. 1600 px breit, PNG mit Transparenz, max. 300 KB

---

## Neue Club-Bilder hinzufügen

Wenn ein neuer Gig in `src/data/dates.ts` eingetragen wird, braucht er ein eigenes Hintergrundbild:

1. Bild benennen z.B. `club-tresor.jpg`
2. Hier in `public/images/` ablegen (1200 x 600 px, JPG, max. 200 KB)
3. In `src/data/dates.ts` den Pfad eintragen: `img: "/images/club-tresor.jpg"`

---

## Galerie erweitern oder verkleinern

Die Galerie zeigt immer alle Bilder aus dem Array in `src/components/Media.tsx` (ganz oben).
Einfach weitere Zeilen hinzufügen oder entfernen:

```ts
const images = [
  "/images/media-1.jpg",  // wird als grosses Featured-Bild angezeigt
  "/images/media-2.jpg",
  // weitere Bilder hier einfach ergänzen
];
```

---

## Export-Hinweise

- JPG-Qualität: **80-85 %** (guter Kompromiss)
- `hero-bg.jpg` und `contact-bg.jpg`: Motiv mittig platzieren, Ränder werden je nach Bildschirmgröße abgeschnitten
- `hero-bg.jpg` wird **farbig** angezeigt (kein Graustufen-Filter)
- Galerie-Bilder werden im Normalzustand in Graustufen angezeigt, beim Hover farbig
