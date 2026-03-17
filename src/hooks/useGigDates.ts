import { useState, useEffect } from 'react';
import { type Gig, dates as staticDates, pastDates as staticPastDates, DATES_CSV_URL, PAST_DATES_CSV_URL } from '../data/dates';
import { datesConfig } from '../settings';

function parseCSV(text: string): Gig[] {
  const lines = text.trim().split('\n');
  if (lines.length < 2) return [];
  return lines.slice(1).map(line => {
    const cols: string[] = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        inQuotes = !inQuotes;
      } else if (ch === ',' && !inQuotes) {
        cols.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
    cols.push(current.trim());

    const [date, month, name, venue, artists, img, link, sold_out] = cols;
    return {
      date:     date    || '',
      month:    month   || '',
      name:     name    || '',
      venue:    venue   || '',
      artists:  artists || '',
      img:      img     || datesConfig.fallbackImage,
      link:     link    || '#',
      sold_out: sold_out?.toLowerCase() === 'true' || sold_out === '1',
    } satisfies Gig;
  }).filter(g => g.date && g.name);
}

async function fetchGigs(url: string): Promise<Gig[]> {
  const r = await fetch(url);
  if (!r.ok) throw new Error('fetch failed');
  const text = await r.text();
  return parseCSV(text);
}

export function useGigDates(): {
  upcomingGigs: Gig[];
  pastGigs: Gig[];
  loading: boolean;
} {
  const [upcomingGigs, setUpcomingGigs] = useState<Gig[]>(staticDates);
  const [pastGigs, setPastGigs]         = useState<Gig[]>(staticPastDates);
  const [loading, setLoading]           = useState(false);

  useEffect(() => {
    if (!DATES_CSV_URL && !PAST_DATES_CSV_URL) return;
    setLoading(true);

    const fetches: Promise<void>[] = [];

    if (DATES_CSV_URL) {
      fetches.push(
        fetchGigs(DATES_CSV_URL)
          .then(parsed => { if (parsed.length > 0) setUpcomingGigs(parsed); })
          .catch(() => { /* use static fallback */ })
      );
    }

    if (PAST_DATES_CSV_URL) {
      fetches.push(
        fetchGigs(PAST_DATES_CSV_URL)
          .then(parsed => { if (parsed.length > 0) setPastGigs(parsed); })
          .catch(() => { /* use static fallback */ })
      );
    }

    Promise.allSettled(fetches).finally(() => setLoading(false));
  }, []);

  return { upcomingGigs, pastGigs, loading };
}
