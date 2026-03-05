import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden scanlines">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: 'url("/images/hero-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) contrast(120%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg z-0" />

      <div className="container relative z-10 px-6 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/logo.png"
            alt="HOCHPOTENT"
            className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[700px] lg:max-w-[960px] mx-auto mb-4 object-contain drop-shadow-[0_0_40px_rgba(255,0,60,0.3)]"
          />
          <p className="font-body text-xl md:text-2xl text-gray-300 uppercase tracking-[0.2em] mb-10 max-w-3xl mx-auto">
            SCHRANZ & HARDTECHNO. HIGH ENERGY. NO EXCUSES. INTENSE BACKFLIPS.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="border border-white/20 px-4 py-1 font-display uppercase tracking-wider text-sm md:text-base bg-black/50 backdrop-blur-sm">Schranz / Hardtechno</span>
            <span className="border border-white/20 px-4 py-1 font-display uppercase tracking-wider text-sm md:text-base bg-black/50 backdrop-blur-sm">Peak-Time Sets</span>
            <span className="border border-white/20 px-4 py-1 font-display uppercase tracking-wider text-sm md:text-base bg-black/50 backdrop-blur-sm">Industrial Pressure</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="bg-neon-violet hover:bg-white hover:text-black text-white font-display text-2xl uppercase tracking-widest px-10 py-4 transition-all duration-300 flex items-center justify-center gap-2 group">
              Booking / Anfrage
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#sets" className="bg-transparent border border-white hover:border-neon-cyan hover:text-neon-cyan text-white font-display text-2xl uppercase tracking-widest px-10 py-4 transition-all duration-300 flex items-center justify-center">
              Jetzt Hören
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
