import { motion, useReducedMotion } from 'motion/react';
import { Mail } from 'lucide-react';
import { useT } from '../hooks/useT';
import { bio } from '../data/bio';
import { buttons } from '../data/buttons';
import { useHaptic } from '../hooks/useHaptic';
import { useSound } from '../hooks/useSound';

export default function UeberMich() {
  const t = useT();
  const haptic = useHaptic();
  const sound = useSound();
  const reducedMotion = useReducedMotion();

  return (
    <section id="ueber-mich" className="py-20 md:py-24 bg-dark-surface border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-3">
            {t.ueberMich.heading} <span className="text-neon-violet">{t.ueberMich.headingAccent}</span>
          </h2>
          <p className="font-body text-base md:text-lg text-gray-400 uppercase tracking-widest mb-2">
            {bio.alias} {t.ueberMich.locationPrefix} {bio.location}
          </p>
          <p className="font-display text-xl md:text-3xl text-white/60 uppercase tracking-widest">
            {bio.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.1 }}
          className="bg-black/50 border border-white/10 p-6 md:p-12"
        >
          <div className="space-y-5 md:space-y-6 mb-8 md:mb-10">
            {t.ueberMich.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.1 + i * 0.1 }}
                className="font-body text-base md:text-xl text-gray-300 leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12 border-t border-white/10 pt-6 md:pt-8">
            {bio.tags.map((tag) => (
              <span key={tag} className="border border-white/20 px-3 md:px-4 py-1 font-display uppercase tracking-wider text-xs md:text-sm text-gray-400">
                {tag}
              </span>
            ))}
          </div>

          <div className="border border-neon-violet/30 bg-neon-violet/5 p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div>
              <p className="font-display text-xl md:text-2xl uppercase tracking-widest text-white mb-1">{t.ueberMich.presskitHeading}</p>
              <p className="font-body text-gray-400 text-sm uppercase tracking-widest">{t.ueberMich.presskitSub}</p>
            </div>
            <a
              href={buttons.presskit.href}
              onClick={() => { haptic.medium(); sound.click(); }}
              className="flex-shrink-0 w-full md:w-auto text-center inline-flex items-center justify-center gap-2 bg-neon-violet hover:bg-white hover:text-black active:bg-white active:text-black text-white font-display text-lg md:text-xl uppercase tracking-widest px-6 md:px-8 py-3 transition-colors touch-manipulation"
            >
              <Mail size={18} />
              {t.ueberMich.presskitBtn}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
