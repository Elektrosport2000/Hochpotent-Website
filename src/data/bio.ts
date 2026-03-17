// Einstellungen → src/settings.ts (Abschnitte 1, 2, 10)
import { artist, ueberMich } from '../settings';

export const bio = {
  name:      artist.displayName,
  alias:     artist.alias,
  location:  artist.location,
  tagline:   artist.tagline,
  genres:    artist.genres,
  // Texte stehen in settings.ts → translations.de.ueberMich.paragraphs
  paragraphs: [] as string[],
  tags: ueberMich.tags,
};
