import { Mail, Lock } from 'lucide-react';

export default function Presskit() {
  return (
    <section id="presskit" className="py-24 bg-dark-surface border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4">
            Press<span className="text-neon-violet">kit</span>
          </h2>
          <p className="font-body text-xl text-gray-400 uppercase tracking-widest">Electronic Press Kit (EPK)</p>
        </div>

        <div className="bg-black/50 border border-white/10 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-3xl uppercase tracking-wider mb-6 border-b border-white/10 pb-4">Info</h3>
              <div className="space-y-4 font-body text-gray-300">
                <p><strong>Artist:</strong> HOCHPOTENT (Lilly Becker)</p>
                <p><strong>Genres:</strong> Schranz, Hardtechno, Industrial</p>
                <p><strong>Base:</strong> NRW, Germany</p>
                <div className="pt-4">
                  <p className="text-sm leading-relaxed">
                    HOCHPOTENT liefert kompromisslosen Schranz und Hardtechno. Bekannt für treibende, energiegeladene Peak-Time Sets, die den Dancefloor dominieren. Keine Kompromisse, pure Energie.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-3xl uppercase tracking-wider mb-6 border-b border-white/10 pb-4">Downloads</h3>

              {/* Gesperrte Download-Items */}
              <div className="space-y-3 mb-8">
                {[
                  { label: "Tech Rider (PDF)" },
                  { label: "Press Photos (ZIP)" },
                  { label: "Full EPK (ZIP)" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between bg-dark-surface border border-white/10 p-4 opacity-50 cursor-not-allowed select-none">
                    <span className="font-display text-xl uppercase tracking-wider text-gray-400">{item.label}</span>
                    <Lock size={18} className="text-gray-600" />
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="border border-neon-violet/30 bg-neon-violet/5 p-6 text-center">
                <p className="font-body text-gray-300 text-sm uppercase tracking-widest mb-4">
                  Pressematerial nur auf Anfrage
                </p>
                <a
                  href="mailto:booking@hochpotent.com?subject=Presskit%20Anfrage&body=Hallo%2C%0A%0Aich%20w%C3%BCrde%20gerne%20das%20Presskit%20von%20HOCHPOTENT%20anfordern.%0A%0AMein%20Medium%2FOrganisation%3A%20"
                  className="inline-flex items-center gap-2 bg-neon-violet hover:bg-white hover:text-black text-white font-display text-xl uppercase tracking-widest px-8 py-3 transition-colors"
                >
                  <Mail size={18} />
                  Presskit anfragen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
