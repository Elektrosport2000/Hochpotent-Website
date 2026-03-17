import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { useT } from '../hooks/useT';
import { buttons } from '../data/buttons';
import { useGigDates } from '../hooks/useGigDates';
import { useHaptic } from '../hooks/useHaptic';
import { useSound } from '../hooks/useSound';
import { datesConfig } from '../settings';

type Tab = 'upcoming' | 'past';

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const cardVariantsReduced = {
  hidden:  { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

export default function Dates() {
  const t = useT();
  const { upcomingGigs, pastGigs, loading } = useGigDates();
  const haptic = useHaptic();
  const sound = useSound();
  const reducedMotion = useReducedMotion();
  const [tab, setTab] = useState<Tab>('upcoming');

  const gigs = (tab === 'upcoming' ? upcomingGigs : pastGigs).slice(0, datesConfig.displayCount);
  const variants = reducedMotion ? cardVariantsReduced : cardVariants;

  const handleButtonClick = () => {
    haptic.medium();
    sound.click();
  };

  const switchTab = (next: Tab) => {
    if (next === tab) return;
    haptic.tick();
    sound.click();
    setTab(next);
  };

  return (
    <section id="dates" className="py-20 md:py-24 bg-dark-surface border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">

        {/* Heading + Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reducedMotion ? 0 : 0.6 }}
            className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight"
          >
            {t.dates.heading} <span className="text-neon-violet">{t.dates.headingAccent}</span>
          </motion.h2>

          {/* Tab toggle */}
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.15 }}
            className="flex border border-white/15 self-start sm:self-auto flex-shrink-0"
          >
            <button
              onClick={() => switchTab('upcoming')}
              className={`font-display text-base md:text-lg uppercase tracking-widest px-5 py-2 transition-colors duration-200 touch-manipulation ${
                tab === 'upcoming'
                  ? 'bg-neon-violet text-white'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {t.dates.toggleUpcoming}
            </button>
            <button
              onClick={() => switchTab('past')}
              className={`font-display text-base md:text-lg uppercase tracking-widest px-5 py-2 transition-colors duration-200 touch-manipulation border-l border-white/15 ${
                tab === 'past'
                  ? 'bg-neon-violet text-white'
                  : 'text-white/40 hover:text-white/70'
              }`}
            >
              {t.dates.togglePast}
            </button>
          </motion.div>
        </div>

        {/* Loading spinner */}
        {loading && (
          <div className="flex justify-center mb-6">
            <div className="w-6 h-6 border-2 border-neon-violet border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Gig cards */}
        {gigs.length > 0 ? (
          <div className="space-y-3 md:space-y-4">
            {gigs.map((gig, i) => (
              <motion.div
                key={`${tab}-${gig.name}-${i}`}
                custom={i}
                variants={variants}
                initial="hidden"
                animate="visible"
                whileHover={reducedMotion ? {} : { scale: 1.005 }}
                className="flex flex-col md:flex-row items-stretch justify-between bg-black/50 border border-white/10 hover:border-neon-violet active:border-neon-violet transition-colors duration-300 group relative overflow-hidden min-h-[140px] md:min-h-[160px]"
              >
                {/* Background image */}
                <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-35 transition-opacity duration-500">
                  <img src={gig.img} alt={gig.venue} className="w-full h-full object-cover filter grayscale contrast-125" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-row items-center gap-4 md:gap-12 w-full md:w-auto p-5 md:p-6 relative z-10">
                  {/* Date block */}
                  <div className="flex flex-col items-center justify-center w-20 md:w-32 border-r border-white/10 pr-4 md:pr-6 flex-shrink-0">
                    <span className="font-display text-4xl md:text-6xl text-white font-bold leading-none">{gig.date}</span>
                    <span className="font-body text-gray-400 text-xs md:text-sm uppercase tracking-widest mt-1 md:mt-2 text-center">{gig.month}</span>
                  </div>
                  {/* Info block */}
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-gray-400 text-xs md:text-sm uppercase tracking-widest mb-1 truncate">{gig.venue}</p>
                    <h3 className="font-display text-2xl md:text-4xl uppercase tracking-wider mb-1 leading-tight">{gig.name}</h3>
                    {gig.artists && (
                      <p className="font-body text-neon-violet text-xs md:text-sm uppercase tracking-widest truncate">{gig.artists}</p>
                    )}
                  </div>
                </div>

                {/* Button */}
                <div className="p-4 md:p-6 relative z-10 w-full md:w-auto flex justify-stretch md:justify-end items-center border-t md:border-t-0 border-white/5">
                  {gig.sold_out ? (
                    <span className="w-full md:w-auto text-center border border-white/20 text-white/30 font-display text-lg md:text-xl uppercase tracking-widest px-6 md:px-8 py-3 cursor-not-allowed">
                      {t.dates.soldOut}
                    </span>
                  ) : gig.link && gig.link !== '#' ? (
                    <a
                      href={gig.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleButtonClick}
                      className="w-full md:w-auto text-center bg-neon-violet text-white hover:bg-white hover:text-black active:bg-white active:text-black font-display text-lg md:text-xl uppercase tracking-widest px-6 md:px-8 py-3 transition-colors touch-manipulation select-none"
                    >
                      {t.dates.detailsBtn}
                    </a>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          !loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 bg-black/30 border border-white/5"
            >
              <h3 className="font-display text-3xl md:text-4xl text-gray-400 uppercase tracking-wider mb-6">
                {t.dates.comingSoon}
              </h3>
              <a
                href={buttons.datesBooking.href}
                onClick={handleButtonClick}
                className="inline-block border border-neon-violet text-neon-violet hover:bg-neon-violet hover:text-white active:bg-neon-violet active:text-white font-display text-xl uppercase tracking-widest px-8 py-3 transition-colors touch-manipulation"
              >
                {t.dates.bookingBtn}
              </a>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
