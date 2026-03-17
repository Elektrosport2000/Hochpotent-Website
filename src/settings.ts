// ╔══════════════════════════════════════════════════════════════════════════╗
// ║                     HOCHPOTENT – MASTER SETTINGS FILE                   ║
// ║                                                                          ║
// ║  ALLE Einstellungen der Website an einem Ort.                            ║
// ║  Ausnahme: Dates (Gig-Einträge) werden über Google Sheets verwaltet.     ║
// ║                                                                          ║
// ║  Inhaltsverzeichnis:                                                     ║
// ║    1.  ARTIST & KONTAKT      – Name, E-Mail, Standort                    ║
// ║    2.  SOCIAL MEDIA          – Links zu Instagram, SoundCloud etc.       ║
// ║    3.  NAVIGATION            – Nav-Labels, Booking-Button                ║
// ║    4.  HERO / STARTSEITE     – Untertitel, Tags, Buttons                 ║
// ║    5.  ABOUT-SEKTION         – "Raw Power"-Texte (DE/EN), Bilder         ║
// ║    6.  VENUES                – "Played At"-Marquee-Liste                 ║
// ║    7.  SETS                  – SoundCloud-Tracks, YouTube-Videos          ║
// ║    8.  MEDIA / GALERIE       – Bilder, Stats-Leiste                       ║
// ║    9.  DATES (Google Sheets) – CSV-Links für Upcoming + Past Gigs        ║
// ║   10.  ÜBER MICH             – Bio, Tags, Presskit                       ║
// ║   11.  KONTAKT-FORMULAR      – Labels, E-Mail, Texte                     ║
// ║   12.  FOOTER                – Tagline, Links                            ║
// ║   13.  IMPRESSUM & DATENSCHUTZ                                            ║
// ╚══════════════════════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────────────────────────────────────
// 1. ARTIST & KONTAKT
//    Grunddaten der Künstlerin – werden in mehreren Sektionen verwendet.
// ─────────────────────────────────────────────────────────────────────────────
export const artist = {
  /** Künstlername (uppercase) – erscheint in Impressum, Bio, Meta-Tags */
  alias: "HOCHPOTENT",
  /** Stagename für Anzeigen (kleingeschrieben/gemischt ist auch ok) */
  displayName: "HOCHPOTENT",
  /** Standort, erscheint in der Bio-Sektion */
  location: "Kevelaer, NRW",
  /** Kurzzeile direkt unter dem Namen in der Bio */
  tagline: "Straight from the Underground",
  /** Genre-Liste (wird in Bio/Meta verwendet) */
  genres: ["Schranz", "Hardtechno", "Industrial"],
  /** Haupt-E-Mail-Adresse (Kontakt, Impressum, Presskit-Link) */
  email: "info@hochpotent.com",
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. SOCIAL MEDIA
//    Alle externen Links zentral verwalten.
// ─────────────────────────────────────────────────────────────────────────────
export const social = {
  /** Vollständige Instagram-URL */
  instagram: "https://www.instagram.com/hochpotent/",
  /** Instagram-Handle (wird als Button-Text angezeigt) */
  instagramHandle: "@hochpotent",
  /** Vollständige SoundCloud-Profilseite */
  soundcloud: "https://soundcloud.com/hochpotent",
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. NAVIGATION
//    Navbar-Labels und Booking-Button. Links = Anker-IDs der Sektionen.
// ─────────────────────────────────────────────────────────────────────────────
export const nav = {
  /** Booking-Button (oben rechts + mobile Menü) */
  bookingBtn: { href: "#contact" },
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. HERO / STARTSEITE
//    Vollbild-Header mit Logo, Untertitel, Tags und CTA-Buttons.
// ─────────────────────────────────────────────────────────────────────────────
export const hero = {
  /** Hintergrundbild (Pfad relativ zu /public) */
  backgroundImage: "/images/hero-bg.jpg",
  /** Booking-Button (primär, links) */
  bookingBtn: { href: "#contact" },
  /** "Jetzt hören"-Button (sekundär, rechts) */
  listenBtn: { href: "#sets" },
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. ABOUT-SEKTION – "Raw Power"
//    Bilder für die zweigeteilte Foto-Spalte rechts.
// ─────────────────────────────────────────────────────────────────────────────
export const aboutSection = {
  /** Linkes / großes Foto (4:5 Seitenverhältnis empfohlen) */
  imageLeft: "/images/about-1.jpg",
  /** Rechtes Foto (versetzt, nur auf Desktop sichtbar) */
  imageRight: "/images/about-2.jpg",
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. VENUES – "Played At"-Marquee
//    Alle Clubs/Locations die im Laufband erscheinen sollen.
//    url: "" = kein Link, url: "https://..." = klickbar
// ─────────────────────────────────────────────────────────────────────────────
export const venues: { name: string; url: string }[] = [
  { name: "Amphoria Kevelaer",   url: "" },
  { name: "Docks Hamburg",       url: "" },
  { name: "Odonien",             url: "https://www.odonien.de" },
  { name: "Impulz Techno",       url: "" },
  { name: "Helios37",            url: "" },
  { name: "Box Mönchengladbach", url: "" },
  { name: "Flowers and Bees",    url: "" },
  { name: "Club Vier Sieben",    url: "" },
];

// ─────────────────────────────────────────────────────────────────────────────
// 7. SETS – SoundCloud & YouTube
//
//    soundcloudTracks: Jeder Eintrag ist ein SoundCloud-Player-Embed.
//      label  = interner Name (wird als aria-title verwendet)
//      url    = direkte SoundCloud-Track-URL (z.B. soundcloud.com/hochpotent/trackname)
//
//    youtubeVideos: YouTube-Einbettungen im Sets-Bereich.
//      id     = YouTube-Video-ID (der Teil nach ?v= in der URL)
//      label  = Titel/Beschreibung des Videos
//
//    Die Reihenfolge im Array bestimmt die Anzeigereihenfolge.
//    SoundCloud-Tracks werden zuerst angezeigt, dann YouTube-Videos.
// ─────────────────────────────────────────────────────────────────────────────
export const sets = {
  soundcloudTracks: [
    {
      label: "Bellen",
      url: "https://soundcloud.com/hochpotent/bellen",
    },
    {
      label: "Läuft noch",
      url: "https://soundcloud.com/hochpotent/laeuft-noch",
    },
    {
      label: "Tausendfach",
      url: "https://soundcloud.com/hochpotent/tausendfach",
    },
  ],
  youtubeVideos: [
    {
      id: "sXdhMUOgS7A",
      label: "HOCHPOTENT Live Set",
    },
    {
      id: "5SlAeV6PvJY",
      label: "HOCHPOTENT Set",
    },
  ],
  /** Link zum vollständigen SoundCloud-Profil (Hauptbutton) */
  soundcloudProfileUrl: "https://soundcloud.com/hochpotent",
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. MEDIA / GALERIE
//
//    images: Bilder die in der Galerie angezeigt werden.
//      Das erste Bild ist das große "Featured Image" oben.
//      Alle weiteren erscheinen im Raster darunter.
//      Pfade sind relativ zu /public.
//
//    stats: Die 4 Kennzahlen in der Statistik-Leiste.
//      value = angezeigter Wert (z.B. "150+", "∞")
//      label = Beschriftung darunter (z.B. "Gigs", "Energy")
// ─────────────────────────────────────────────────────────────────────────────
export const media = {
  images: [
    "/images/media-1.jpg",
    "/images/media-2.jpg",
    "/images/media-3.jpg",
    "/images/media-4.jpg",
    "/images/media-5.jpg",
    "/images/media-6.jpg",
    "/images/media-7.jpg",
    "/images/media-8.jpg",
    "/images/media-9.jpg",
    // Weitere Bilder: "/images/media-10.jpg", "/images/media-11.jpg"
  ],
  stats: [
    { value: "150+", label: "Gigs" },
    { value: "20+",  label: "Städte" },
    { value: "5+",   label: "Jahre" },
    { value: "∞",    label: "Energy" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 9. DATES – Google Sheets Integration
//
//    Die Gig-Einträge werden aus Google Sheets geladen.
//    Aufbau der Tabellen-Spalten:
//      date | month | name | venue | artists | img | link | sold_out
//
//    So die CSV-Links einrichten:
//      1. Google Tabelle öffnen
//      2. Datei → Teilen → Im Web veröffentlichen
//      3. "Gesamtes Dokument" + Format "CSV" → Link kopieren
//      4. Für vergangene Gigs: Zweites Tabellenblatt erstellen,
//         dann den Link mit ?gid=... der richtigen Sheet-ID verwenden.
//
//    "" (leer) = statische Fallback-Daten werden verwendet.
//
//    Spalten-Beispiel:
//      15 | MAR 2026 | TECHNO KINGDOM | DOCKS HAMBURG | CARL CRAIG + LEN FAKI | /images/docks.jpg | https://tickets.xyz | false
// ─────────────────────────────────────────────────────────────────────────────
export const datesConfig = {
  /** CSV-Link für kommende Gigs (Standard-Tabellenblatt) */
  upcomingCsvUrl:
    "https://docs.google.com/spreadsheets/d/1NYwqR4-EVJEQgNEGVe9bMCuLd6ZPLYc6LDKDaKu6Lk4/gviz/tq?tqx=out:csv&gid=243049432",
  /** CSV-Link für vergangene Gigs */
  pastCsvUrl:
    "https://docs.google.com/spreadsheets/d/1oE_Yy9yz-vK4sdtJ5Gk-wHC7xIdEn-9krax-PQXH8BY/gviz/tq?tqx=out:csv&gid=243049432",
  /** Anzahl Gigs die gleichzeitig angezeigt werden (upcoming & past jeweils) */
  displayCount: 4,
  /** Fallback-Bild wenn im Sheet kein Bild angegeben */
  fallbackImage: "/images/club-docks.jpg",
};

// ─────────────────────────────────────────────────────────────────────────────
// 10. ÜBER MICH
//     Bio-Tags (Schlagwörter) und Presskit-Button.
// ─────────────────────────────────────────────────────────────────────────────
export const ueberMich = {
  /** Tags die als Badges unter dem Bio-Text angezeigt werden */
  tags: ["Peak-Time", "Schranz", "Hardtechno", "NRW", "Kevelaer♡", "Backflips"],
  /** Presskit-Anfrage via E-Mail */
  presskitEmail: `mailto:${artist.email}?subject=Presskit%20Anfrage&body=Hallo%2C%0A%0Aich%20m%C3%B6chte%20das%20Presskit%20von%20HOCHPOTENT%20anfordern.%0A%0AMein%20Medium%20%2F%20Organisation%3A%20`,
};

// ─────────────────────────────────────────────────────────────────────────────
// 11. TEXTE (Deutsch & Englisch)
//     Alle sichtbaren Texte der Website in beiden Sprachen.
//     'de' = Deutsch (Standard), 'en' = Englisch
// ─────────────────────────────────────────────────────────────────────────────
export const translations = {
  de: {
    nav: {
      home:    "Home",
      dates:   "Dates",
      sets:    "Sets",
      media:   "Media",
      about:   "Story",
      contact: "Kontakt",
      booking: "Booking",
    },

    hero: {
      /** Untertitel unter dem Logo */
      subtitle: "Schranz & Hardtechno · High Energy · No Excuses",
      /** 3 Tags die als Badges erscheinen */
      tags: ["Schranz / Hardtechno", "Peak-Time Sets", "Industrial Pressure"],
      bookingBtn: "Booking anfragen",
      listenBtn:  "Jetzt hören",
    },

    about: {
      heading:       "Raw",
      headingAccent: "Power",
      p1: "Sound, der unter die Haut geht und dort bleibt. HOCHPOTENT steht für treibenden Schranz und düsteren Hardtechno. Rohe Energie, die auf präzise Rhythmik trifft, gemacht für die dunkelsten Dancefloors und die härtesten Nächte.",
      p2: "Tief verwurzelt in der industriellen Rave-Kultur bringt HOCHPOTENT eine Intensität ins Set, die man spürt bevor man sie hört. Jeder Track ein Hammer, jeder Drop ein Statement. No Excuses.",
      sound:  { label: "Sound",  value: "Schranz, Hardtechno, Industrial" },
      energy: { label: "Energie", value: "Fast, driving, relentless, intense" },
      focus:  { label: "Fokus",  value: "Crowd control, peak-time pressure" },
    },

    venues: {
      heading: "Played At",
      note:    "Auszug - vollständige Liste auf Anfrage.",
    },

    sets: {
      heading:       "Latest",
      headingAccent: "Sets",
      subtitle:      "Listen to the pressure",
      soundcloudBtn: "Mehr auf SoundCloud",
      /** Labels für die Plattform-Sektionen */
      soundcloudSection: "SoundCloud",
      youtubeSection:    "YouTube",
    },

    dates: {
      heading:       "Upcoming",
      headingAccent: "Dates",
      detailsBtn:    "Details",
      soldOut:       "Sold Out",
      comingSoon:    "Neue Dates coming soon",
      bookingBtn:    "Booking anfragen",
      /** Toggle-Button: aktuelle/vergangene Gigs */
      toggleUpcoming: "Upcoming",
      togglePast:     "Past",
    },

    media: {
      heading:       "Visual",
      headingAccent: "Impact",
      handle:        "@hochpotent",
      instagramCta:  "Mehr auf Instagram",
      instagramSub:  "Backstage, Sets, Behind the Scenes",
      instagramBtn:  "Auf Instagram folgen",
    },

    ueberMich: {
      heading:        "Wer ich",
      headingAccent:  "bin?",
      locationPrefix: "aus",
      paragraphs: [
        "Ich bin HOCHPOTENT, eine DJane aus Kevelaer. Meine Mission: den Dancefloor mit roher Energie und einem Sound übernehmen, der keine Kompromisse kennt.",
        "Schranz und Hardtechno stecken einfach in mir drin. Aufgeben? Kommt nicht in Frage. Was andere aufhält, treibt mich erst richtig an.",
        "Angefangen in einem kleinen Ort am Niederrhein, hab ich mich auf Bühnen von Hamburg bis Köln gespielt. HOCHPOTENT pure Chaos. Multiple Backflips.",
      ],
      presskitHeading: "Presskit",
      presskitSub:     "Tech Rider · Pressefotos · EPK - nur auf Anfrage",
      presskitBtn:     "Presskit anfragen",
    },

    contact: {
      heading:       "Book",
      headingAccent: "ing",
      subtext:       "Für Booking-Anfragen, Remixe oder Kollaborationen nutze das Formular oder schreibe direkt eine E-Mail.",
      labelName:     "Name *",
      labelEmail:    "Email *",
      labelOrg:      "Organisation / Club",
      labelDate:     "Datum & Ort",
      labelMessage:  "Nachricht *",
      submitBtn:     "Anfrage senden",
      submitting:    "E-Mail-Programm wird geöffnet...",
      emailSubject:  "Booking-Anfrage von ",
    },

    footer: {
      tagline:     "Schranz & Hardtechno",
      rights:      "Alle Rechte vorbehalten.",
      impressum:   "Impressum",
      datenschutz: "Datenschutz",
      close:       "Schließen",
    },
  },

  en: {
    nav: {
      home:    "Home",
      dates:   "Dates",
      sets:    "Sets",
      media:   "Media",
      about:   "Story",
      contact: "Contact",
      booking: "Booking",
    },

    hero: {
      subtitle:   "Schranz & Hardtechno · High Energy · No Excuses",
      tags:       ["Schranz / Hardtechno", "Peak-Time Sets", "Industrial Pressure"],
      bookingBtn: "Request Booking",
      listenBtn:  "Listen Now",
    },

    about: {
      heading:       "Raw",
      headingAccent: "Power",
      p1: "Sound that hits and doesn't let go. HOCHPOTENT stands for driving Schranz and dark Hardtechno. Raw energy meets precision, built for the darkest dancefloors and the longest nights.",
      p2: "Rooted deep in industrial rave culture, HOCHPOTENT brings an intensity to every set that you feel before you hear it. Every track a machine, every drop a statement. No Excuses.",
      sound:  { label: "Sound",  value: "Schranz, Hardtechno, Industrial" },
      energy: { label: "Energy", value: "Fast, driving, relentless, intense" },
      focus:  { label: "Focus",  value: "Crowd control, peak-time pressure" },
    },

    venues: {
      heading: "Played At",
      note:    "Just a selection - full list on request.",
    },

    sets: {
      heading:       "Latest",
      headingAccent: "Sets",
      subtitle:      "Listen to the pressure",
      soundcloudBtn: "More on SoundCloud",
      soundcloudSection: "SoundCloud",
      youtubeSection:    "YouTube",
    },

    dates: {
      heading:       "Upcoming",
      headingAccent: "Dates",
      detailsBtn:    "Details",
      soldOut:       "Sold Out",
      comingSoon:    "New dates coming soon",
      bookingBtn:    "Request Booking",
      toggleUpcoming: "Upcoming",
      togglePast:     "Past",
    },

    media: {
      heading:       "Visual",
      headingAccent: "Impact",
      handle:        "@hochpotent",
      instagramCta:  "More on Instagram",
      instagramSub:  "Backstage, Sets, Behind the Scenes",
      instagramBtn:  "Follow on Instagram",
    },

    ueberMich: {
      heading:        "Who I",
      headingAccent:  "Am?",
      locationPrefix: "from",
      paragraphs: [
        "I'm HOCHPOTENT, a DJ from Kevelaer. My mission: take over the dancefloor with raw energy and a sound that doesn't do half measures.",
        "Schranz and Hardtechno are just part of who I am. Quitting? Not an option. Whatever gets in the way just makes me push harder.",
        "Started in a small town on the Lower Rhine, now playing stages from Hamburg to Cologne. HOCHPOTENT pure Chaos. Multiple Backflips.",
      ],
      presskitHeading: "Press Kit",
      presskitSub:     "Tech Rider · Press Photos · EPK, available on request",
      presskitBtn:     "Request Press Kit",
    },

    contact: {
      heading:       "Book",
      headingAccent: "ing",
      subtext:       "For booking inquiries, remixes or collaborations, use the form or send an email directly.",
      labelName:     "Name *",
      labelEmail:    "Email *",
      labelOrg:      "Organisation / Club",
      labelDate:     "Date & Location",
      labelMessage:  "Message *",
      submitBtn:     "Send Request",
      submitting:    "Opening email client...",
      emailSubject:  "Booking inquiry from ",
    },

    footer: {
      tagline:     "Schranz & Hardtechno",
      rights:      "All rights reserved.",
      impressum:   "Legal Notice",
      datenschutz: "Privacy Policy",
      close:       "Close",
    },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// 12. IMPRESSUM & DATENSCHUTZ
//     Rechtliche Pflichtangaben. Markdown-Format.
//     WICHTIG: Angaben sorgfältig prüfen und ggf. mit einem Anwalt absprechen.
// ─────────────────────────────────────────────────────────────────────────────
export const legal = {
  impressum: `
# Impressum

**Angaben gemäß § 5 TMG**

Elektrosport
Elektrosportstr. 1
47623 Kevelaer

**Kontakt**
E-Mail: info@hochpotent.com

**Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV**
Elektrosport
Elektrosportstr. 1
47623 Kevelaer

---

## Haftung für Inhalte

Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.

Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.

---

## Haftung für Links

Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.

Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.

---

## Urheberrecht

Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
`,

  datenschutz: `
# Datenschutzerklärung

## 1. Verantwortlicher

Verantwortlich für die Datenverarbeitung auf dieser Website:

Elektrosport
Elektrosportstr. 1
47623 Kevelaer
E-Mail: info@hochpotent.com

---

## 2. Kontaktformular

Wenn du das Kontaktformular auf dieser Website nutzt, werden die eingegebenen Daten (Name, E-Mail-Adresse, Nachricht sowie optional Organisation und Datum) ausschließlich zum Zweck der Bearbeitung deiner Anfrage verarbeitet. Diese Daten werden nicht ohne deine Einwilligung weitergegeben.

Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Kontaktanfragen).

---

## 3. Google Fonts

Diese Seite verwendet Web Fonts des Anbieters Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Beim Aufruf der Website werden die benötigten Schriftarten aus dem Google-CDN geladen. Dabei wird deine IP-Adresse an Google übermittelt.

Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einheitlicher Darstellung).

Weitere Informationen: https://policies.google.com/privacy

---

## 4. YouTube-Embeds

Diese Website bettet Videos des Dienstes YouTube (Google LLC) ein. Wenn du eine Seite mit einem eingebetteten YouTube-Video aufrufst, wird eine Verbindung zu den YouTube-Servern hergestellt und dabei deine IP-Adresse übermittelt.

Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.

Weitere Informationen: https://policies.google.com/privacy

---

## 5. SoundCloud-Embeds

Diese Website bettet Audio-Inhalte des Dienstes SoundCloud (SoundCloud Limited, Rheinsberger Str. 76/77, 10115 Berlin) ein. Bei Aufruf einer Seite mit SoundCloud-Widget wird eine Verbindung zu den SoundCloud-Servern hergestellt.

Weitere Informationen: https://soundcloud.com/pages/privacy

---

## 6. Externe Links (Instagram, SoundCloud)

Diese Website enthält Links zu externen Diensten (Instagram/Meta, SoundCloud). Beim Klick auf diese Links verlässt du diese Website. Für die Datenschutzpraktiken der Zieldienste sind deren eigene Datenschutzerklärungen maßgeblich.

---

## 7. Hosting

Diese Website wird bei einem externen Hosting-Dienstleister betrieben. Beim Aufruf der Website werden automatisch Server-Logfiles gespeichert (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Zugriffszeit). Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.

Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.

---

## 8. Deine Rechte

Du hast das Recht auf:
- **Auskunft** über deine gespeicherten Daten (Art. 15 DSGVO)
- **Berichtigung** unrichtiger Daten (Art. 16 DSGVO)
- **Löschung** deiner Daten (Art. 17 DSGVO)
- **Einschränkung** der Verarbeitung (Art. 18 DSGVO)
- **Datenübertragbarkeit** (Art. 20 DSGVO)
- **Widerspruch** gegen die Verarbeitung (Art. 21 DSGVO)

Zur Ausübung dieser Rechte wende dich an: info@hochpotent.com

Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist der Landesbeauftragte für Datenschutz und Informationsfreiheit NRW (www.ldi.nrw.de).

---

*Stand: ${new Date().getFullYear()}*
`,
};
