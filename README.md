# HOCHPOTENT - Official Website

> **Schranz & Hardtechno. High Energy. No Excuses.**

Offizielle Website für DJ/Producer HOCHPOTENT. Gebaut für maximale Intensität - schnell, dunkel, ohne Kompromisse.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animationen | Motion (Framer Motion) |
| Icons | Lucide React |

---

## Lokale Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Produktions-Build
npm run preview    # Build lokal vorschauen
npm run lint       # TypeScript-Check
```

---

## Was wo anpassen

### Buttons (Text + Links)
**`src/data/buttons.ts`** - alle CTA-Buttons der Website zentral.
Hier Text und Link ändern, ohne die Komponenten anzufassen.

```ts
heroBooking: { text: "Booking anfragen", href: "#contact" },
instagram:   { text: "Auf Instagram folgen", href: "https://..." },
```

### Gig-Dates
**`src/data/dates.ts`** - alle Auftrittsdaten.
Neuen Gig oben einfügen, die ersten 3 werden automatisch angezeigt.

```ts
{
  date: "15", month: "MAR 2026",
  name: "EVENTNAME", venue: "LOCATION, STADT",
  artists: "",           // leer lassen wenn Solo
  img: "/images/club-xyz.jpg",
  link: "https://tickets.xyz",
  sold_out: false,       // true zeigt "Sold Out"
},
```

### Bio / Über mich
**`src/data/bio.ts`** - Name, Tagline, Fließtext, Tags.

```ts
tagline: "Straight from the Underground",
paragraphs: ["Absatz 1...", "Absatz 2..."],
tags: ["Schranz", "NRW", "Kevelaer"],
```

### Venues (Played At Marquee)
**`src/data/venues.ts`** - Liste der Clubs im scrollenden Marquee.

### Sets / Tracks
**`src/components/Sets.tsx`** - `tracks`-Array oben in der Datei.
SoundCloud-URL tauschen um einen anderen Track einzubetten.

---

## Bilder

Alle Bild-Pfade und empfohlene Größen: [`public/images/README.md`](public/images/README.md)

| Bild | Größe | Max. |
|---|---|---|
| `logo.png` | min. 1600 px breit, PNG mit Transparenz | 300 KB |
| `hero-bg.jpg` | 1920 x 1080 px | 400 KB |
| `media-1.jpg` (Featured) | 1920 x 840 px | 300 KB |
| `media-2` bis `media-9.jpg` | 800 x 800 px | 150 KB |
| `club-*.jpg` | 1200 x 600 px | 200 KB |

JPG-Qualität beim Export: **80-85 %**

---

## Projektstruktur

```
hochpotent/
├── public/
│   ├── logo.png
│   ├── images/         # Bilder - README.md beachten
│   └── files/          # Downloads (Tech-Rider, EPK, etc.)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Venues.tsx
│   │   ├── Sets.tsx
│   │   ├── Dates.tsx
│   │   ├── Media.tsx
│   │   ├── UeberMich.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── buttons.ts    # Buttons: Text + Links
│   │   ├── dates.ts      # Gig-Daten
│   │   ├── bio.ts        # Über mich Text
│   │   └── venues.ts     # Played At Liste
│   ├── index.css
│   └── main.tsx
└── index.html
```

---

## Lizenz

Privates Projekt. Alle Rechte vorbehalten - HOCHPOTENT 2025.
