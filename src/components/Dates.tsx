import { dates } from '../data/dates';

export default function Dates() {
  // Immer die ersten 3 Einträge aus dates.ts anzeigen
  const upcoming = dates.slice(0, 3);

  return (
    <section id="dates" className="py-24 bg-dark-surface border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-12 text-center">
          Upcoming <span className="text-neon-violet">Dates</span>
        </h2>

        {upcoming.length > 0 ? (
          <div className="space-y-4">
            {upcoming.map((gig, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center justify-between bg-black/50 border border-white/10 hover:border-neon-violet transition-colors group relative overflow-hidden min-h-[160px]">
                {/* Hintergrundbild */}
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <img src={gig.img} alt={gig.venue} className="w-full h-full object-cover filter grayscale contrast-125" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full md:w-auto text-center md:text-left p-6 relative z-10">
                  {/* Datum */}
                  <div className="flex flex-col items-center justify-center w-32 border-b md:border-b-0 md:border-r border-white/10 pb-4 pr-0 md:pb-0 md:pr-6">
                    <span className="font-display text-5xl md:text-6xl text-white font-bold leading-none">{gig.date}</span>
                    <span className="font-body text-gray-400 text-sm uppercase tracking-widest mt-2">{gig.month}</span>
                  </div>
                  {/* Info */}
                  <div>
                    <p className="font-body text-gray-400 text-sm uppercase tracking-widest mb-1">{gig.venue}</p>
                    <h3 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-1">{gig.name}</h3>
                    {gig.artists && (
                      <p className="font-body text-neon-violet text-sm uppercase tracking-widest">{gig.artists}</p>
                    )}
                  </div>
                </div>

                {/* Button */}
                <div className="p-6 relative z-10 w-full md:w-auto flex justify-center md:justify-end">
                  {gig.sold_out ? (
                    <span className="border border-white/30 text-white/40 font-display text-xl uppercase tracking-widest px-8 py-3 cursor-not-allowed">
                      Sold Out
                    </span>
                  ) : (
                    <a href={gig.link} target="_blank" rel="noopener noreferrer"
                       className="bg-neon-violet text-white hover:bg-white hover:text-black font-display text-xl uppercase tracking-widest px-8 py-3 transition-colors text-center">
                      Details
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-black/30 border border-white/5">
            <h3 className="font-display text-3xl md:text-4xl text-gray-400 uppercase tracking-wider mb-6">Neue Dates coming soon</h3>
            <a href="#contact" className="inline-block border border-neon-violet text-neon-violet hover:bg-neon-violet hover:text-white font-display text-xl uppercase tracking-widest px-8 py-3 transition-colors">
              Booking anfragen
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
