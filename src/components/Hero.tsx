import { motion, useReducedMotion } from 'motion/react';
import { useT } from '../hooks/useT';
import { buttons } from '../data/buttons';
import { useHaptic } from '../hooks/useHaptic';
import { useSound } from '../hooks/useSound';

export default function Hero() {
  const t = useT();
  const haptic = useHaptic();
  const sound = useSound();
  const reducedMotion = useReducedMotion();

  const handleCta = () => {
    haptic.medium();
    sound.click();
  };

  return (
    <section id="home" className="relative h-[100svh] flex items-center justify-center overflow-hidden scanlines">
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg z-0" />

      {/* Animated background glow */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-violet/10 blur-[120px] rounded-full" />
        </motion.div>
      )}

      <div className="container relative z-10 px-4 sm:px-6 flex flex-col items-center text-center mt-16 md:mt-20">
        <motion.img
          src="/logo.png"
          alt="HOCHPOTENT"
          className="w-full max-w-[280px] sm:max-w-[420px] md:max-w-[640px] lg:max-w-[900px] mx-auto mb-6 md:mb-8 object-contain drop-shadow-[0_0_60px_rgba(255,0,60,0.4)] cursor-pointer"
          initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={reducedMotion ? {} : { scale: 1.03, filter: 'drop-shadow(0 0 80px rgba(255,0,60,0.7))' }}
          whileTap={reducedMotion ? {} : { scale: 0.98 }}
          transition={{ duration: reducedMotion ? 0 : 1.2, ease: 'easeOut' }}
        />

        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.5 }}
          className="w-full"
        >
          <p className="font-body text-sm sm:text-base md:text-xl text-gray-400 uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-8 md:mb-10 max-w-2xl mx-auto px-2">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
            {t.hero.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.4, delay: reducedMotion ? 0 : 0.7 + i * 0.1 }}
                className="border border-white/15 px-3 md:px-4 py-1 font-display uppercase tracking-wider text-xs md:text-sm text-white/60 bg-black/40 backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0">
            <motion.a
              href={buttons.heroBooking.href}
              onClick={handleCta}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 1.0 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
              className="bg-neon-violet hover:bg-white hover:text-black active:bg-white active:text-black text-white font-display text-lg sm:text-xl md:text-2xl uppercase tracking-widest px-8 md:px-10 py-4 transition-all duration-300 touch-manipulation select-none"
            >
              {t.hero.bookingBtn}
            </motion.a>
            <motion.a
              href={buttons.heroListen.href}
              onClick={handleCta}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 1.1 }}
              whileTap={reducedMotion ? {} : { scale: 0.97 }}
              className="border border-white/40 hover:border-white hover:bg-white/5 active:bg-white/10 text-white font-display text-lg sm:text-xl md:text-2xl uppercase tracking-widest px-8 md:px-10 py-4 transition-all duration-300 touch-manipulation select-none"
            >
              {t.hero.listenBtn}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      {!reducedMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="w-px h-12 bg-white/40"
            animate={{ scaleY: [1, 0.5, 1], originY: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </section>
  );
}
