// Einstellungen → src/settings.ts (Abschnitte 3, 4, 7, 2)
import { artist, social, hero, nav, sets, ueberMich } from '../settings';

export const buttons = {
  // Hero-Bereich
  heroBooking: { text: "Booking anfragen",    href: hero.bookingBtn.href },
  heroListen:  { text: "Jetzt hören",          href: hero.listenBtn.href },

  // Navigation (oben rechts)
  navBooking:  { text: "Booking",              href: nav.bookingBtn.href },

  // Sets-Bereich
  soundcloud:  { text: "Mehr auf SoundCloud",  href: sets.soundcloudProfileUrl },

  // Media-Bereich
  instagram:       { text: "Auf Instagram folgen", href: social.instagram },
  instagramHandle: { text: social.instagramHandle, href: social.instagram },

  // Über mich - Presskit
  presskit:    { text: "Presskit anfragen",    href: ueberMich.presskitEmail },

  // Kontakt-Formular (Submit-Button, kein Link)
  contactSubmit: { text: "Anfrage senden" },

  // Dates-Bereich
  datesDetails: { text: "Details" },
  datesBooking: { text: "Booking anfragen",    href: "#contact" },

  // Kontakt-Infos
  contactEmail:     { text: artist.email,           href: `mailto:${artist.email}` },
  contactInstagram: { text: social.instagramHandle, href: social.instagram },
  contactSoundcloud:{ text: "soundcloud.com/hochpotent", href: social.soundcloud },
};
