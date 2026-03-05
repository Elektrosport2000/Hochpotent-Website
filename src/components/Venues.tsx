import { venues } from '../data/venues';

export default function Venues() {
  const repeated = [...venues, ...venues, ...venues, ...venues];

  return (
    <section className="py-16 bg-dark-surface border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h3 className="font-display text-3xl text-gray-400 uppercase tracking-widest">Played At</h3>
      </div>

      <div className="flex w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_60s_linear_infinite]">
          {repeated.map((venue, i) => (
            <span key={i} className="inline-flex items-center mx-8">
              {venue.url ? (
                <a
                  href={venue.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-4xl md:text-5xl uppercase tracking-wider text-white/40 hover:text-neon-violet transition-colors"
                >
                  {venue.name}
                </a>
              ) : (
                <span className="font-display text-4xl md:text-5xl uppercase tracking-wider text-white/40 hover:text-white transition-colors cursor-default">
                  {venue.name}
                </span>
              )}
              <span className="text-neon-violet ml-8">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-8 text-center">
        <p className="font-body text-gray-500 uppercase tracking-widest text-sm">Auszug - vollständige Liste auf Anfrage.</p>
      </div>
    </section>
  );
}
