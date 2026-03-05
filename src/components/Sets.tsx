import { ExternalLink } from 'lucide-react';

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
          <a href="https://soundcloud.com/hochpotent" target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:border-neon-cyan hover:text-neon-cyan px-6 py-3 font-display text-xl uppercase tracking-widest transition-colors flex items-center gap-2">
            Mehr auf SoundCloud <ExternalLink size={20} />
          </a>
        </div>

        <div className="space-y-8">
          {/* SoundCloud Embed 1: LÄUFT NOCH */}
          <div className="w-full bg-dark-surface border border-white/10 p-2">
            <iframe 
              width="100%" 
              height="166" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hochpotent/laeuft-noch&color=%23ff003c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </div>

          {/* SoundCloud Embed 2: TAUSENDFACH */}
          <div className="w-full bg-dark-surface border border-white/10 p-2">
            <iframe 
              width="100%" 
              height="166" 
              scrolling="no" 
              frameBorder="no" 
              allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hochpotent/tausendfach&color=%23ff003c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </div>

          {/* YouTube Embed */}
          <div className="w-full aspect-video bg-dark-surface border border-white/10 p-2">
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
    </section>
  );
}
