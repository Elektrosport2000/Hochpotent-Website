export default function Venues() {
  const venues = [
    "Amphoria Kevelaer",
    "Docks Hamburg",
    "Dogs",
    "Ehrenclub",
    "Odonien",
    "Bootshaus",
    "Fusion Club",
    "Helios37",
    "Box Mönchengladbach"
  ];

  return (
    <section className="py-16 bg-dark-surface border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h3 className="font-display text-3xl text-gray-400 uppercase tracking-widest">Played At</h3>
      </div>
      
      {/* Marquee effect for venues */}
      <div className="flex w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
          {[...venues, ...venues, ...venues, ...venues].map((venue, i) => (
            <span key={i} className="font-display text-4xl md:text-5xl uppercase tracking-wider text-white/40 hover:text-white transition-colors cursor-default mx-8">
              {venue} <span className="text-neon-violet ml-8">/</span>
            </span>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-8 text-center">
        <p className="font-body text-gray-500 uppercase tracking-widest text-sm">Auszug – vollständige Liste auf Anfrage.</p>
      </div>
    </section>
  );
}
