import { useState, useEffect } from 'react';
import { type Gig, dates as staticDates, DATES_CSV_URL } from '../data/dates';

function parseCSV(text: string): Gig[] {
  const lines = text.trim().split('\n');
  if (lines.length < 2) return [];
  // Skip header row
  return lines.slice(1).map(line => {
    // Handle quoted fields with commas
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
      img:      img     || '/images/club-docks.jpg',
      link:     link    || '#',
      sold_out: sold_out?.toLowerCase() === 'true' || sold_out === '1',
    } satisfies Gig;
  }).filter(g => g.date && g.name);
}

export function useGigDates(): { gigs: Gig[]; loading: boolean } {
  const [gigs, setGigs] = useState<Gig[]>(staticDates);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!DATES_CSV_URL) return;
    setLoading(true);
    fetch(DATES_CSV_URL)
      .then(r => {
        if (!r.ok) throw new Error('fetch failed');
        return r.text();
      })
      .then(text => {
        const parsed = parseCSV(text);
        if (parsed.length > 0) setGigs(parsed);
      })
      .catch(() => { /* use static fallback */ })
      .finally(() => setLoading(false));
  }, []);

  return { gigs, loading };
}
