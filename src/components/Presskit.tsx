import { Download, FileText, Image as ImageIcon } from 'lucide-react';

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
              <div className="space-y-4 flex flex-col">
                {/* Update the href to point to your actual files in the public folder */}
                <a href="/files/tech-rider.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-dark-surface hover:bg-white/5 border border-white/10 p-4 transition-colors group">
                  <div className="flex items-center gap-3">
                    <FileText className="text-neon-cyan group-hover:text-white transition-colors" />
                    <span className="font-display text-xl uppercase tracking-wider">Tech Rider (PDF)</span>
                  </div>
                  <Download size={20} className="text-gray-500 group-hover:text-white" />
                </a>
                
                {/* Update the href to point to your actual files in the public folder */}
                <a href="/files/press-photos.zip" className="flex items-center justify-between bg-dark-surface hover:bg-white/5 border border-white/10 p-4 transition-colors group">
                  <div className="flex items-center gap-3">
                    <ImageIcon className="text-neon-violet group-hover:text-white transition-colors" />
                    <span className="font-display text-xl uppercase tracking-wider">Press Photos (ZIP)</span>
                  </div>
                  <Download size={20} className="text-gray-500 group-hover:text-white" />
                </a>

                {/* Update the href to point to your actual files in the public folder */}
                <a href="/files/epk-hochpotent.zip" className="flex items-center justify-between bg-neon-violet hover:bg-white hover:text-black text-white p-4 transition-colors group mt-4">
                  <span className="font-display text-xl uppercase tracking-wider font-bold">Download Full EPK</span>
                  <Download size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
