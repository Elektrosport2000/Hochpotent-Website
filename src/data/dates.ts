// ─────────────────────────────────────────────────────────────────
//  DATES – hier alle Gigs pflegen
//
//  Felder:
//    date    → Tag als String,       z.B. "23"
//    month   → Monat + Jahr,         z.B. "DEZ 2025"
//    name    → Event-Name,           z.B. "TECHNO KINGDOM"
//    venue   → Location,             z.B. "DOCKS, HAMBURG"
//    artists → weitere Artists,      z.B. "CARL CRAIG, LEN FAKI"
//              (leer lassen "" wenn keine anderen Acts)
//    img     → Pfad in public/,      z.B. "/images/club-docks.jpg"
//    link    → Ticket- oder IG-Link
//    sold_out→ true = "SOLD OUT" Badge, false = "Details"-Button
//
//  Reihenfolge: neueste Dates zuerst eintragen.
//  Es werden immer die ersten 4 angezeigt.
// ─────────────────────────────────────────────────────────────────
//  GOOGLE SHEETS INTEGRATION
//
//  Um Dates über Google Sheets zu verwalten:
//  1. Google Tabelle erstellen mit Spalten:
//     date | month | name | venue | artists | img | link | sold_out
//  2. Datei → Freigabe → Im Web veröffentlichen → CSV-Format → Link kopieren
//  3. Den Link unten einfügen.
//
//  Leer lassen ("") = statische Dates aus diesem File werden verwendet.
// ─────────────────────────────────────────────────────────────────
export const DATES_CSV_URL = "https://docs.google.com/spreadsheets/d/1NYwqR4-EVJEQgNEGVe9bMCuLd6ZPLYc6LDKDaKu6Lk4/gviz/tq?tqx=out:csv";

export type Gig = {
  date: string;
  month: string;
  name: string;
  venue: string;
  artists: string;
  img: string;
  link: string;
  sold_out?: boolean;
};

export const dates: Gig[] = [
  {
    date: "1",
    month: "JAN 2026",
    name: "COMING SOON",
    venue: "CLUB, STADT",
    artists: "ELEKTRO POTENT,ELEKTRSPORT, STEVE",
    img: "/images/club-docks.jpg",
    link: "https://img.freepik.com/vektoren-kostenlos/bald-hintergrund-mit-fokus-lichteffekt-design_1017-27277.jpg?semt=ais_rp_progressive&w=740&q=80",
    sold_out: false,
  },
  {
    date: "1",
    month: "JAN 2026",
    name: "COMING SOON",
    venue: "CLUB, STADT",
    artists: "ELEKTRO POTENT,ELEKTRSPORT, STEVE",
    img: "/images/club-docks.jpg",
    link: "https://img.freepik.com/vektoren-kostenlos/bald-hintergrund-mit-fokus-lichteffekt-design_1017-27277.jpg?semt=ais_rp_progressive&w=740&q=80",
    sold_out: true,
  },
  {
    date: "1",
    month: "JAN 2026",
    name: "COMING SOON",
    venue: "CLUB, STADT",
    artists: "ELEKTRO POTENT,ELEKTRSPORT, STEVE",
    img: "/images/test.jpg",
    link: "https://img.freepik.com/vektoren-kostenlos/bald-hintergrund-mit-fokus-lichteffekt-design_1017-27277.jpg?semt=ais_rp_progressive&w=740&q=80",
    sold_out: true,
  },
  {
    date: "1",
    month: "JAN 2026",
    name: "COMING SOON",
    venue: "CLUB, STADT",
    artists: "ELEKTRO POTENT,ELEKTRSPORT, STEVE",
    img: "/images/test.jpg",
    link: "https://img.freepik.com/vektoren-kostenlos/bald-hintergrund-mit-fokus-lichteffekt-design_1017-27277.jpg?semt=ais_rp_progressive&w=740&q=80",
    sold_out: false,
  },
];
