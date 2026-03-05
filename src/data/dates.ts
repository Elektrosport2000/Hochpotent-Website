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
//  Es werden immer die ersten 3 angezeigt.
// ─────────────────────────────────────────────────────────────────

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
    date: "23",
    month: "DEZ 2025",
    name: "TECHNO KINGDOM",
    venue: "DOCKS, HAMBURG",
    artists: "CARL CRAIG, GREEN VELVET, LEN FAKI",
    img: "/images/club-docks.jpg",
    link: "https://instagram.com/hochpotent",
    sold_out: false,
  },
  {
    date: "23",
    month: "NOV 2025",
    name: "FALLING STARS",
    venue: "ODONIEN, KÖLN",
    artists: "ENRICO SANGIULIANO, CHRIS LIEBING, BLACK ASTEROID",
    img: "/images/club-odonien.jpg",
    link: "https://instagram.com/hochpotent",
    sold_out: false,
  },
  {
    date: "15",
    month: "OKT 2025",
    name: "DARK MATTER",
    venue: "FLOWERS AND BEES, ESSEN",
    artists: "",
    img: "/images/club-flowers-and-bees.jpg",
    link: "https://instagram.com/hochpotent",
    sold_out: false,
  },
];
