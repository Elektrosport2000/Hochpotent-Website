// ─────────────────────────────────────────────────────────────────
//  PLAYED AT – hier die Venues pflegen
//
//  name: Name des Clubs/Venue
//  url:  Link zur Website oder Instagram - leer lassen "" wenn kein Link
// ─────────────────────────────────────────────────────────────────

export type Venue = {
  name: string;
  url: string;
};

export const venues: Venue[] = [
  { name: "Amphoria Kevelaer",     url: "" },
  { name: "Docks Hamburg",         url: "https://www.dockshamburg.de" },
  { name: "Dogs",                  url: "" },
  { name: "Ehrenclub",             url: "" },
  { name: "Odonien",               url: "https://www.odonien.de" },
  { name: "Bootshaus",             url: "https://www.bootshaus.tv" },
  { name: "Fusion Club",           url: "" },
  { name: "Helios37",              url: "" },
  { name: "Box Mönchengladbach",   url: "" },
  { name: "Flowers and Bees Essen",url: "" },
];
