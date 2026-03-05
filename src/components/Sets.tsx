import { ExternalLink } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────
//  SETS – SoundCloud & YouTube Embeds
//  Um einen Track zu ersetzen: die URL im src-Attribut tauschen.
//  SoundCloud-URL-Schema:
//  https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hochpotent/TRACK-NAME&color=%23ff003c&...
// ─────────────────────────────────────────────────────────────────

const tracks = [
  {
    label: "Läuft noch",
    src: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hochpotent/laeuft-noch&color=%23ff003c&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
  },
  {
    label: "Tausendfach",
    src: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hochpotent/tausendfach&color=%23ff003c&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
  },
];

export default function Sets() {
  return (
    <section id="sets" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
              Latest <span className="text-neon-cyan">Sets</span>
            </h2>
            <p className="font-body text-xl text-gray-400 mt-2 uppercase tracking-widest">Listen to the pressure</p>
          </div>
          <a href="https://soundcloud.com/hochpotent" target="_blank" rel="noopener noreferrer"
             className="border border-white/20 hover:border-neon-cyan hover:text-neon-cyan px-6 py-3 font-display text-xl uppercase tracking-widest transition-colors flex items-center gap-2">
            Mehr auf SoundCloud <ExternalLink size={20} />
          </a>
        </div>

        <div className="space-y-6">
          {/* SoundCloud Tracks */}
          {tracks.map((track) => (
            <div key={track.label} className="bg-dark-surface border border-white/10 border-t-2 border-t-neon-violet overflow-hidden">
              <div className="px-4 pt-3 pb-1">
                <span className="font-display text-sm uppercase tracking-widest text-neon-violet">{track.label}</span>
              </div>
              <div className="p-2 pt-0">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={track.src}
                  style={{ colorScheme: 'normal' }}
                ></iframe>
              </div>
            </div>
          ))}

          {/* YouTube */}
          <div className="bg-dark-surface border border-white/10 border-t-2 border-t-neon-cyan overflow-hidden">
            <div className="px-4 pt-3 pb-1">
              <span className="font-display text-sm uppercase tracking-widest text-neon-cyan">Video</span>
            </div>
            <div className="p-2 pt-0 aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/5SlAeV6PvJY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
