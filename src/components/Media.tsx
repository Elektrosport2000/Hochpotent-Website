export default function Media() {
  // Bilder einfach hier ergänzen – Dateien in public/images/ ablegen
  const images = [
    "/images/media-1.jpg",
    "/images/media-2.jpg",
    "/images/media-3.jpg",
    "/images/media-4.jpg",
    "/images/media-5.jpg",
    "/images/media-6.jpg",
    "/images/media-7.jpg",
    "/images/media-8.jpg",
    "/images/media-9.jpg",
  ];

  // Erstes Bild groß (featured), Rest im Grid
  const [featured, ...rest] = images;

  return (
    <section id="media" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
            Visual <span className="text-neon-cyan">Impact</span>
          </h2>
          <a
            href="https://www.instagram.com/hochpotent/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 hover:border-neon-violet hover:text-neon-violet px-6 py-3 font-display text-xl uppercase tracking-widest transition-colors flex items-center gap-2 flex-shrink-0"
          >
            @hochpotent ↗
          </a>
        </div>

        {/* Featured Bild (groß) */}
        <div className="w-full aspect-[16/7] overflow-hidden bg-dark-surface group relative cursor-pointer mb-4">
          <div className="absolute inset-0 bg-neon-violet/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark-bg to-transparent z-10"></div>
          <img
            src={featured}
            alt="HOCHPOTENT Live"
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {rest.map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-dark-surface group relative cursor-pointer">
              <div className="absolute inset-0 bg-neon-violet/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img
                src={src}
                alt={`HOCHPOTENT Live ${i + 2}`}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="border border-white/10 bg-dark-surface p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-3xl md:text-4xl uppercase tracking-widest text-white mb-1">Mehr auf Instagram</p>
            <p className="font-body text-gray-400 text-lg">Backstage, Sets, Behind the Scenes – @hochpotent</p>
          </div>
          <a
            href="https://www.instagram.com/hochpotent/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-neon-violet hover:bg-white hover:text-black text-white font-display text-xl uppercase tracking-widest px-10 py-4 transition-colors"
          >
            Auf Instagram folgen ↗
          </a>
        </div>

      </div>
    </section>
  );
}
