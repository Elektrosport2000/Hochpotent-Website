import { Mail } from 'lucide-react';
import { bio } from '../data/bio';

export default function UeberMich() {
  return (
    <section id="ueber-mich" className="py-24 bg-dark-surface border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4">
            Über <span className="text-neon-violet">Mich</span>
          </h2>
          <p className="font-body text-xl text-gray-400 uppercase tracking-widest">{bio.alias} — {bio.location}</p>
        </div>

        <div className="bg-black/50 border border-white/10 p-8 md:p-12">

          {/* Bio-Text */}
          <div className="space-y-6 mb-10">
            {bio.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-lg md:text-xl text-gray-300 leading-relaxed">{p}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-12 border-t border-white/10 pt-8">
            {bio.tags.map((tag) => (
              <span key={tag} className="border border-white/20 px-4 py-1 font-display uppercase tracking-wider text-sm text-gray-400">
                {tag}
              </span>
            ))}
          </div>

          {/* Presskit-Anfrage */}
          <div className="border border-neon-violet/30 bg-neon-violet/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-display text-2xl uppercase tracking-widest text-white mb-1">Presskit</p>
              <p className="font-body text-gray-400 text-sm uppercase tracking-widest">Tech Rider · Pressefotos · EPK — nur auf Anfrage</p>
            </div>
            <a
              href="mailto:booking@hochpotent.com?subject=Presskit%20Anfrage&body=Hallo%2C%0A%0Aich%20w%C3%BCrde%20gerne%20das%20Presskit%20von%20HOCHPOTENT%20anfordern.%0A%0AMein%20Medium%2FOrganisation%3A%20"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-neon-violet hover:bg-white hover:text-black text-white font-display text-xl uppercase tracking-widest px-8 py-3 transition-colors"
            >
              <Mail size={18} />
              Presskit anfragen
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
