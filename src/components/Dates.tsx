import { motion } from 'motion/react';
import { useT } from '../hooks/useT';
import { dates } from '../data/dates';
import { buttons } from '../data/buttons';

export default function Dates() {
  const t = useT();
  const upcoming = dates.slice(0, 3);

  return (
    <section id="dates" className="py-24 bg-dark-surface border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-12 text-center"
        >
          {t.dates.heading} <span className="text-neon-violet">{t.dates.headingAccent}</span>
        </motion.h2>

        {upcoming.length > 0 ? (
          <div className="space-y-4">
            {upcoming.map((gig, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col md:flex-row items-center justify-between bg-black/50 border border-white/10 hover:border-neon-violet transition-colors group relative overflow-hidden min-h-[160px]"
              >
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <img src={gig.img} alt={gig.venue} className="w-full h-full object-cover filter grayscale contrast-125" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 w-full md:w-auto text-center md:text-left p-6 relative z-10">
                  <div className="flex flex-col items-center justify-center w-32 border-b md:border-b-0 md:border-r border-white/10 pb-4 pr-0 md:pb-0 md:pr-6 flex-shrink-0">
                    <span className="font-display text-5xl md:text-6xl text-white font-bold leading-none">{gig.date}</span>
                    <span className="font-body text-gray-400 text-sm uppercase tracking-widest mt-2">{gig.month}</span>
                  </div>
                  <div>
                    <p className="font-body text-gray-400 text-sm uppercase tracking-widest mb-1">{gig.venue}</p>
                    <h3 className="font-display text-3xl md:text-4xl uppercase tracking-wider mb-1">{gig.name}</h3>
                    {gig.artists && (
                      <p className="font-body text-neon-violet text-sm uppercase tracking-widest">{gig.artists}</p>
                    )}
                  </div>
                </div>

                <div className="p-6 relative z-10 w-full md:w-auto flex justify-center md:justify-end">
                  {gig.sold_out ? (
                    <span className="border border-white/20 text-white/30 font-display text-xl uppercase tracking-widest px-8 py-3 cursor-not-allowed">
                      {t.dates.soldOut}
                    </span>
                  ) : (
                    <a
                      href={gig.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neon-violet text-white hover:bg-white hover:text-black font-display text-xl uppercase tracking-widest px-8 py-3 transition-colors text-center"
                    >
                      {t.dates.detailsBtn}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-16 bg-black/30 border border-white/5"
          >
            <h3 className="font-display text-3xl md:text-4xl text-gray-400 uppercase tracking-wider mb-6">{t.dates.comingSoon}</h3>
            <a
              href={buttons.datesBooking.href}
              className="inline-block border border-neon-violet text-neon-violet hover:bg-neon-violet hover:text-white font-display text-xl uppercase tracking-widest px-8 py-3 transition-colors"
            >
              {t.dates.bookingBtn}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
