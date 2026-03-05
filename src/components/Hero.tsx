import { motion } from 'motion/react';
import { buttons } from '../data/buttons';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden scanlines">
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg z-0" />

      <div className="container relative z-10 px-6 flex flex-col items-center text-center mt-20">
        <motion.img
          src="/logo.png"
          alt="HOCHPOTENT"
          className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[700px] lg:max-w-[960px] mx-auto mb-8 object-contain drop-shadow-[0_0_60px_rgba(255,0,60,0.4)] cursor-pointer"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03, filter: 'drop-shadow(0 0 80px rgba(255,0,60,0.7))' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full"
        >
          <p className="font-body text-base md:text-xl text-gray-400 uppercase tracking-[0.25em] mb-10 max-w-2xl mx-auto">
            Schranz &amp; Hardtechno · High Energy · No Excuses
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Schranz / Hardtechno", "Peak-Time Sets", "Industrial Pressure"].map((tag) => (
              <span key={tag} className="border border-white/15 px-4 py-1 font-display uppercase tracking-wider text-sm text-white/60 bg-black/40 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buttons.heroBooking.href}
              className="bg-neon-violet hover:bg-white hover:text-black text-white font-display text-xl md:text-2xl uppercase tracking-widest px-10 py-4 transition-all duration-300"
            >
              {buttons.heroBooking.text}
            </a>
            <a
              href={buttons.heroListen.href}
              className="border border-white/40 hover:border-white hover:bg-white/5 text-white font-display text-xl md:text-2xl uppercase tracking-widest px-10 py-4 transition-all duration-300"
            >
              {buttons.heroListen.text}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
