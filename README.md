# HOCHPOTENT – Website

**Stack:** React 19 · TypeScript · Vite 6 · Tailwind CSS v4 · Motion (Framer Motion) · Lucide React

---

## Schnellstart

```bash
npm install
npm run dev       # Entwicklungsserver → http://localhost:3000
npm run build     # Produktions-Build → /dist
npm run preview   # Build lokal vorschauen
```

---

## Einstellungen – `src/settings.ts`

**Alle konfigurierbaren Inhalte der Website stehen in einer einzigen Datei:**

```
src/settings.ts
```

Die alten Einzeldateien (`buttons.ts`, `bio.ts`, `venues.ts` …) existieren noch als dünne Re-Exports aus `settings.ts` und müssen nicht angefasst werden.

### Inhaltsverzeichnis der Einstellungsdatei

| Abschnitt | Export | Was du damit steuerst |
|---|---|---|
| 1 | `artist` | Name, E-Mail, Standort, Genres, Tagline |
| 2 | `social` | Instagram- und SoundCloud-Links |
| 3 | `nav` | Booking-Button-Link in der Navbar |
| 4 | `hero` | Hintergrundbild, Booking-Button, Listen-Button |
| 5 | `aboutSection` | Fotos für die "Raw Power"-Sektion |
| 6 | `venues` | "Played At"-Marquee-Liste mit optionalen Links |
| 7 | `sets` | SoundCloud-Tracks, YouTube-Videos, SoundCloud-Profil-URL |
| 8 | `media` | Galerie-Bilder, Stats-Leiste (Gigs, Städte, Jahre, Energy) |
| 9 | `datesConfig` | Google-Sheets-Links für Upcoming + Past Gigs |
| 10 | `ueberMich` | Bio-Tags, Presskit-E-Mail-Link |
| 11 | `translations` | Alle sichtbaren Texte in DE und EN |
| 12 | `legal` | Impressum & Datenschutzerklärung (Markdown) |

---

### 1. Artist & Kontakt

```ts
export const artist = {
  alias:       "HOCHPOTENT",       // Künstlername (erscheint in Impressum, Bio)
  displayName: "HOCHPOTENT",       // Anzeigename
  location:    "Kevelaer, NRW",    // Standort in der Bio
  tagline:     "Straight from the Underground",
  genres:      ["Schranz", "Hardtechno", "Industrial"],
  email:       "info@hochpotent.com",  // für Kontakt, Impressum, Presskit
};
```

---

### 2. Social Media

```ts
export const social = {
  instagram:       "https://www.instagram.com/hochpotent/",
  instagramHandle: "@hochpotent",
  soundcloud:      "https://soundcloud.com/hochpotent",
};
```

---

### 6. Venues – Played At

Das Laufband. Einfach Einträge hinzufügen oder entfernen:

```ts
export const venues = [
  { name: "Amphoria Kevelaer",   url: "" },          // kein Link
  { name: "Docks Hamburg",       url: "" },
  { name: "Odonien",             url: "https://www.odonien.de" },  // mit Link
  // weitere Venues ...
];
```

---

### 7. Sets – SoundCloud & YouTube

```ts
export const sets = {
  soundcloudTracks: [
    { label: "Bellen",      url: "https://soundcloud.com/hochpotent/bellen" },
    { label: "Läuft noch",  url: "https://soundcloud.com/hochpotent/laeuft-noch" },
    { label: "Tausendfach", url: "https://soundcloud.com/hochpotent/tausendfach" },
    // Weiteren Track hinzufügen:
    // { label: "Track Name", url: "https://soundcloud.com/hochpotent/track-slug" },
  ],
  youtubeVideos: [
    { id: "sXdhMUOgS7A", label: "HOCHPOTENT Live Set" },
    { id: "5SlAeV6PvJY", label: "HOCHPOTENT Set" },
    // Weiteres Video: { id: "YOUTUBE_VIDEO_ID", label: "Live @ Club XY" }
    // Die ID ist der Teil nach ?v= in der YouTube-URL.
  ],
  soundcloudProfileUrl: "https://soundcloud.com/hochpotent",
};
```

**SoundCloud-Track-URL:** Track auf SoundCloud öffnen → URL aus der Adresszeile kopieren.

---

### 8. Media / Galerie

```ts
export const media = {
  images: [
    "/images/media-1.jpg",   // Erstes Bild = großes Featured Image
    "/images/media-2.jpg",
    // ... weitere Bilder einfach anhängen
  ],
  stats: [
    { value: "150+", label: "Gigs" },
    { value: "20+",  label: "Städte" },
    { value: "5+",   label: "Jahre" },
    { value: "∞",    label: "Energy" },
  ],
};
```

Bilder nach `/public/images/` kopieren, dann Pfad hier eintragen.

---

### 9. Dates – Google Sheets Integration

Die Gig-Einträge werden **live aus Google Sheets geladen**. Kein Code-Deployment nötig.

#### Google Sheet einrichten

**Tabellenstruktur** (zwei Tabellenblätter: eines für Upcoming, eines für Past):

| Spalte | Inhalt | Beispiel |
|---|---|---|
| `date` | Tag als Zahl | `15` |
| `month` | Monat + Jahr | `MAR 2026` |
| `name` | Event-Name | `TECHNO KINGDOM` |
| `venue` | Location | `DOCKS HAMBURG` |
| `artists` | Weitere Acts (optional) | `CARL CRAIG + LEN FAKI` |
| `img` | Bild-Pfad oder URL | `/images/docks.jpg` |
| `link` | Ticket- oder Infoseite | `https://tickets.xyz` |
| `sold_out` | true oder false | `false` |

**Tipp:** Neueste Dates oben eintragen. Es werden immer die ersten 4 Zeilen angezeigt.

#### CSV-Links generieren

1. Google Tabelle öffnen
2. **Datei → Teilen → Im Web veröffentlichen**
3. Format: **"Gesamtes Dokument"** + **"CSV"** → Veröffentlichen → Link kopieren
4. Für vergangene Gigs: zweites Tabellenblatt erstellen, dann `&gid=SHEET_GID` anhängen (Sheet-ID steht in der URL beim Öffnen des Tabellenblatts als `#gid=...`)

#### In `settings.ts` eintragen

```ts
export const datesConfig = {
  upcomingCsvUrl: "https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/gviz/tq?tqx=out:csv",
  pastCsvUrl:     "https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/gviz/tq?tqx=out:csv&gid=SHEET_GID",
  displayCount:   4,
  fallbackImage:  "/images/club-docks.jpg",
};
```

> **Aktuell konfiguriertes Sheet:**
> `https://docs.google.com/spreadsheets/d/1oE_Yy9yz-vK4sdtJ5Gk-wHC7xIdEn-9krax-PQXH8BY`
> Upcoming: Standard-Tabellenblatt | Past Gigs: gid=243049432

---

### 11. Texte (Übersetzungen)

Alle sichtbaren Texte stehen unter `translations` in `settings.ts`, jeweils für `de` und `en`:

```ts
export const translations = {
  de: {
    hero: {
      subtitle:   "Schranz & Hardtechno · High Energy · No Excuses",
      tags:       ["Schranz / Hardtechno", "Peak-Time Sets", "Industrial Pressure"],
      bookingBtn: "Booking anfragen",
      listenBtn:  "Jetzt hören",
    },
    dates: {
      toggleUpcoming: "Upcoming",   // Tab-Button für aktuelle Gigs
      togglePast:     "Past",       // Tab-Button für vergangene Gigs
      // ...
    },
    // ... alle weiteren Sektionen
  },
  en: { /* gleiche Struktur auf Englisch */ },
};
```

---

### 12. Impressum & Datenschutz

Die Rechtstexte stehen als Markdown-Template am Ende von `settings.ts` unter `legal.impressum` und `legal.datenschutz`.

> **Wichtig:** Angaben sorgfältig prüfen. Das Impressum ist gesetzlich Pflicht (§ 5 TMG).

---

## Dateistruktur

```
src/
├── settings.ts          ← MASTER SETTINGS – hier alles einstellen
├── components/
│   ├── Hero.tsx         ← Startseite / Landing
│   ├── Navbar.tsx       ← Fixe Navigation oben
│   ├── About.tsx        ← "Raw Power"-Sektion
│   ├── Venues.tsx       ← "Played At"-Marquee
│   ├── Sets.tsx         ← SoundCloud + YouTube
│   ├── Dates.tsx        ← Upcoming/Past Gigs mit Toggle
│   ├── Media.tsx        ← Galerie + Lightbox
│   ├── UeberMich.tsx    ← Bio-Sektion
│   ├── Contact.tsx      ← Booking-Formular
│   ├── Footer.tsx       ← Footer mit Links
│   └── LegalModal.tsx   ← Impressum/Datenschutz Modal
├── data/
│   ├── buttons.ts       ← Re-Export aus settings.ts
│   ├── translations.ts  ← Re-Export aus settings.ts
│   ├── bio.ts           ← Re-Export aus settings.ts
│   ├── venues.ts        ← Re-Export aus settings.ts
│   ├── legal.ts         ← Re-Export aus settings.ts
│   └── dates.ts         ← Re-Export aus settings.ts + Typen
├── hooks/
│   ├── useGigDates.ts   ← Google Sheets CSV fetcher (upcoming + past)
│   ├── useT.ts          ← Übersetzungs-Hook
│   ├── useHaptic.ts     ← Vibrations-Feedback
│   └── useSound.ts      ← Web Audio UI-Sounds
├── context/
│   └── LanguageContext.tsx  ← DE/EN Toggle
└── index.css            ← Tailwind + Custom Animations
public/
├── images/              ← Alle Bilder hier ablegen
├── files/               ← Presskit etc. (private)
└── logo.png
```

---

## Bilder hinzufügen

1. Bild nach `/public/images/` kopieren
2. In `settings.ts` eintragen:
   - **Galerie:** `media.images` Array ergänzen
   - **About-Fotos:** `aboutSection.imageLeft` / `aboutSection.imageRight`
   - **Hero-Hintergrund:** `hero.backgroundImage`
   - **Gig-Bilder:** Direkt im Google Sheet in der `img`-Spalte

---

## GitHub-Repository

```
https://github.com/Elektrosport2000/Hochpotent-Website
```

Push auf `main`:
```bash
git add .
git commit -m "Update settings"
git push origin master:main
```
