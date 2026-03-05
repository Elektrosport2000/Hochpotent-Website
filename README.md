# HOCHPOTENT - Official Website

> **Schranz & Hardtechno. High Energy. No Excuses.**

Offizielle Website für DJ/Producer HOCHPOTENT (Lilly Becker) aus Kevelaer.

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

### Buttons (Text + Links) - `src/data/buttons.ts`

**Alle CTA-Buttons der Website zentral an einem Ort.**
Text und Link hier ändern - wirkt sich automatisch überall aus.

| Key | Button | Wo sichtbar |
|---|---|---|
| `heroBooking` | "Booking anfragen" | Hero, gross links |
| `heroListen` | "Jetzt hören" | Hero, gross rechts |
| `navBooking` | "Booking" | Navbar oben rechts |
| `soundcloud` | "Mehr auf SoundCloud" | Sets-Sektion |
| `instagram` | "Auf Instagram folgen" | Media-Sektion unten |
| `instagramHandle` | "@hochpotent" | Media-Sektion oben rechts |
| `presskit` | "Presskit anfragen" | Über mich - Presskit-Block |
| `contactSubmit` | "Anfrage senden" | Kontakt-Formular |
| `datesDetails` | "Details" | Jeder Gig-Eintrag |
| `datesBooking` | "Booking anfragen" | Fallback wenn keine Dates |

```ts
// Beispiel: Hero-Button Text und Ziel ändern
heroBooking: {
  text: "Jetzt buchen",   // Text im Button
  href: "#contact",        // Ziel beim Klick
},
```

---

### Gig-Dates - `src/data/dates.ts`

**Auftrittsdaten verwalten. Die ersten 3 Einträge werden angezeigt.**

```ts
{
  date: "15",                         // Tag (nur Zahl)
  month: "MAR 2026",                  // Monat + Jahr
  name: "EVENTNAME",                  // Name des Events
  venue: "LOCATION, STADT",           // Club, Stadt
  artists: "WEITERE ACTS",            // leer "" wenn Solo-Auftritt
  img: "/images/club-xyz.jpg",        // Hintergrundbild (in public/images/)
  link: "https://tickets.xyz",        // Ticket-Link oder Instagram-Post
  sold_out: false,                    // true = roter "Sold Out" statt Button
},
```

**Workflow für neue Dates:**
1. Neuen Eintrag **oben** in die Liste einfügen
2. Passendes Club-Foto als `club-name.jpg` in `public/images/` hochladen
3. Alten Eintrag nach unten schieben oder löschen

---

### Bio / Über mich - `src/data/bio.ts`

**Der persönliche Bereich mit Freitext, Tagline und Schlagwörtern.**

```ts
name:       "Lilly Becker",
alias:      "HOCHPOTENT",
location:   "Kevelaer, NRW",
tagline:    "Straight from the Underground",  // Zeile unter dem Titel

paragraphs: [
  "Erster Absatz...",     // beliebig viele Absätze möglich
  "Zweiter Absatz...",
],

tags: ["Peak-Time", "Schranz", "Kevelaer♡", "Backflips"],  // Schlagwort-Kästchen
```

---

### Venues (Played At) - `src/data/venues.ts`

**Clubs im scrollenden Marquee-Band. Mit oder ohne klickbaren Link.**

```ts
{ name: "Bootshaus",      url: "https://www.bootshaus.tv" },  // klickbar
{ name: "Eigener Club",   url: "" },                          // nicht klickbar
```

- Clubs **mit URL** werden beim Hover rot und sind anklickbar
- Clubs **ohne URL** (`""`) werden beim Hover weiß, aber nicht verlinkt
- Reihenfolge im Array = Reihenfolge im Marquee

---

### Sets / Tracks - `src/components/Sets.tsx`

**SoundCloud-Tracks und YouTube-Video einbetten.**

Das `tracks`-Array ganz oben in der Datei:
```ts
const tracks = [
  {
    label: "Track-Name",   // interner Name (wird nicht angezeigt)
    src: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hochpotent/TRACK-NAME&color=%23ff003c&...",
  },
];
```

SoundCloud-URL so ermitteln:
1. Track auf soundcloud.com öffnen
2. "Share" klicken, dann "Embed"
3. Die `src`-URL aus dem generierten Code kopieren

Das YouTube-Video ist direkt in `Sets.tsx` eingebettet - einfach die YouTube-ID in der URL tauschen (`/embed/YOUTUBE-ID`).

---

### Galerie - `src/components/Media.tsx`

**Fotos im Array oben in der Datei verwalten.**

```ts
const images = [
  "/images/media-1.jpg",   // erstes Bild = grosses Featured-Bild
  "/images/media-2.jpg",   // alle weiteren im 4-spaltigen Grid
  // weitere Bilder einfach ergänzen
];
```

Bilder in `public/images/` hochladen, dann Pfad hier eintragen.

---

### Impressum & Datenschutz - `src/data/legal.ts`

**Beide Rechtstexte vollständig befüllt.**

Verantwortlicher: Guido Parzer, Edith-Stein-Ring 1, 47623 Kevelaer
E-Mail: business@hochpotent.com

Bei Änderungen (z.B. Adresse, neue eingebettete Dienste) direkt in dieser Datei anpassen. Die Texte werden als Popup im Footer angezeigt.

---

### Navbar-Links - `src/components/Navbar.tsx`

Das `navLinks`-Array steuert welche Punkte in der Navigation erscheinen:
```ts
const navLinks = [
  { name: 'Home',       href: '#home' },
  { name: 'Dates',      href: '#dates' },
  // weitere Punkte hier ergänzen oder entfernen
];
```

---

## Bilder

Detaillierte Übersicht: [`public/images/README.md`](public/images/README.md)

| Datei | Größe | Max. | Hinweis |
|---|---|---|---|
| `logo.png` | min. 1600 px breit | 300 KB | PNG mit Transparenz |
| `hero-bg.jpg` | 1920 x 1080 px | 400 KB | farbig, nicht Graustufen |
| `media-1.jpg` | 1920 x 840 px | 300 KB | Featured (gross) |
| `media-2` bis `9.jpg` | 800 x 800 px | 150 KB | Galerie-Grid |
| `club-*.jpg` | 1200 x 600 px | 200 KB | Hintergrund je Date |
| `about-1/2.jpg` | 800 x 1000 px | 200 KB | Artist-Fotos |
| `contact-bg.jpg` | 1200 x 1600 px | 300 KB | Kontakt-Hintergrund |

JPG-Qualität beim Export: **80-85 %**

---

## Downloads (Presskit)

Dateien in `public/files/` ablegen: [`public/files/README.md`](public/files/README.md)
Nicht öffentlich verlinkt - nur auf E-Mail-Anfrage.

---

## Projektstruktur

```
hochpotent/
├── public/
│   ├── logo.png
│   ├── images/              # Bilder - README.md beachten
│   └── files/               # Presskit-Downloads - README.md beachten
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation + Booking-Button
│   │   ├── Hero.tsx         # Logo, Hero-Bild, CTAs
│   │   ├── About.tsx        # Raw Power - Artist-Fotos + Text
│   │   ├── Venues.tsx       # Played At Marquee
│   │   ├── Sets.tsx         # SoundCloud + YouTube Embeds
│   │   ├── Dates.tsx        # Upcoming Gigs
│   │   ├── Media.tsx        # Foto-Galerie + Instagram CTA
│   │   ├── UeberMich.tsx    # Bio + Presskit-Anfrage
│   │   ├── Contact.tsx      # Booking-Formular (Honeypot-Spamschutz)
│   │   ├── Footer.tsx       # Social Links + Impressum/Datenschutz
│   │   └── LegalModal.tsx   # Popup fuer Rechtstexte
│   ├── data/
│   │   ├── buttons.ts       # Alle Buttons: Text + Links
│   │   ├── dates.ts         # Gig-Daten
│   │   ├── bio.ts           # Uber mich: Text, Tagline, Tags
│   │   ├── venues.ts        # Played At Liste mit Links
│   │   └── legal.ts         # Impressum + Datenschutzerklaerung
│   ├── index.css            # Tailwind + Animationen (marquee, glitch)
│   └── main.tsx
└── index.html
```

---

## Kontakt / Impressum

E-Mail: business@hochpotent.com
Verantwortlich: Guido Parzer, Edith-Stein-Ring 1, 47623 Kevelaer

---

## Lizenz

Privates Projekt. Alle Rechte vorbehalten - HOCHPOTENT 2025.
