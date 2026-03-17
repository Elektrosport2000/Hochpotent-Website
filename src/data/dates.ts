// Einstellungen → src/settings.ts (Abschnitt 9)
// Gig-Einträge werden über Google Sheets verwaltet.
// Alle URLs und Einstellungen in src/settings.ts → datesConfig anpassen.
import { datesConfig } from '../settings';

export const DATES_CSV_URL      = datesConfig.upcomingCsvUrl;
export const PAST_DATES_CSV_URL = datesConfig.pastCsvUrl;

export type Gig = {
  date:      string;
  month:     string;
  name:      string;
  venue:     string;
  artists:   string;
  img:       string;
  link:      string;
  sold_out?: boolean;
};

/** Statische Fallback-Daten (werden verwendet wenn Google Sheets nicht erreichbar) */
export const dates: Gig[] = [
  { date: "?",  month: "COMING SOON", name: "TBA", venue: "", artists: "", img: datesConfig.fallbackImage, link: "#", sold_out: false },
  { date: "?",  month: "COMING SOON", name: "TBA", venue: "", artists: "", img: datesConfig.fallbackImage, link: "#", sold_out: false },
  { date: "?",  month: "COMING SOON", name: "TBA", venue: "", artists: "", img: datesConfig.fallbackImage, link: "#", sold_out: false },
  { date: "?",  month: "COMING SOON", name: "TBA", venue: "", artists: "", img: datesConfig.fallbackImage, link: "#", sold_out: false },
];

export const pastDates: Gig[] = [];
