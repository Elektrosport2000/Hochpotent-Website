# HOCHPOTENT — Official Website

> **Schranz & Hardtechno. High Energy. No Excuses.**

Offizielle Website für DJ/Producer HOCHPOTENT. Gebaut für maximale Intensität – schnell, dunkel, ohne Kompromisse.

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
npm run dev
```

→ läuft auf `http://localhost:3000`

```bash
npm run build    # Produktions-Build
npm run preview  # Build lokal vorschauen
npm run lint     # TypeScript-Check
```

---

## Projektstruktur

```
hochpotent/
├── public/
│   ├── logo.png                  # Logo (PNG mit Transparenz)
│   ├── images/                   # Alle Bilder → README.md beachten
│   └── files/                    # Downloads (Tech-Rider, EPK, etc.)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Dates.tsx             # liest aus data/dates.ts
│   │   ├── Sets.tsx
│   │   ├── Media.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── dates.ts              # ← HIER Gig-Daten pflegen
│   ├── index.css
│   └── main.tsx
└── index.html
```

---

## Dates pflegen

Neue Gigs werden ausschließlich in **`src/data/dates.ts`** eingetragen. Die Website zeigt automatisch die ersten 3 Einträge an.

```ts
{
  date: "15",
  month: "MAR 2026",
  name: "EVENTNAME",
  venue: "LOCATION — STADT",
  artists: "WEITERE ACTS",   // leer lassen "" wenn Solo
  img: "/images/club-xyz.jpg",
  link: "https://tickets.xyz",
  sold_out: false,           // true → zeigt "Sold Out" statt Button
},
```

**Workflow für neue Dates:**
1. Neuen Eintrag oben in die Liste in `dates.ts` einfügen
2. Club-Bild in `public/images/` ablegen (`1200 × 600 px`, JPG, max. 200 KB)
3. Alten Eintrag nach unten schieben oder löschen

---

## Bilder ersetzen

Alle Bild-Pfade und empfohlenen Größen stehen in [`public/images/README.md`](public/images/README.md).

**Faustregel:**
- Hero-Bild: `1920 × 1080 px`, max. 400 KB
- Galerie-Featured: `1920 × 840 px`, max. 300 KB
- Galerie-Grid: `800 × 800 px`, max. 150 KB
- Club-Bilder: `1200 × 600 px`, max. 200 KB
- JPG-Qualität beim Export: **80–85 %**

---

## Kontakt / Booking

Die E-Mail-Adresse für Booking-Anfragen steht in `src/components/Contact.tsx` – bei Bedarf dort anpassen.

---

## Lizenz

Privates Projekt. Alle Rechte vorbehalten – HOCHPOTENT © 2025.
