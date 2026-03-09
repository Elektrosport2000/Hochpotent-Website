import { motion, useReducedMotion } from 'motion/react';
import { useT } from '../hooks/useT';

export default function About() {
  const t = useT();
  const reducedMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, x: reducedMotion ? 0 : -20 },
    visible: (i: number) => ({
      opacity: 1, x: 0,
      transition: { duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : i * 0.12 },
    }),
  };

  return (
    <section id="about" className="py-20 md:py-24 bg-dark-bg border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: reducedMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: reducedMotion ? 0 : 0.6 }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 md:mb-8">
              {t.about.heading} <span className="text-neon-violet">{t.about.headingAccent}</span>
            </h2>
            <p className="font-body text-lg md:text-xl text-gray-400 leading-relaxed mb-5 md:mb-6">{t.about.p1}</p>
            <p className="font-body text-lg md:text-xl text-gray-400 leading-relaxed mb-6 md:mb-8">{t.about.p2}</p>
            <ul className="space-y-4 font-body text-lg">
              {[t.about.sound, t.about.energy, t.about.focus].map((item, i) => (
                <motion.li
                  key={item.label}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="text-neon-cyan mt-1 flex-shrink-0">■</span>
                  <div>
                    <strong className="text-white uppercase tracking-wider">{item.label}:</strong>{' '}
                    <span className="text-gray-400">{item.value}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.15 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="aspect-[4/5] relative overflow-hidden border border-white/10 group col-span-2 sm:col-span-1">
              <div className="absolute inset-0 bg-neon-violet/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <img src="/images/about-1.jpg" alt="HOCHPOTENT Live 1" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="aspect-[4/5] relative overflow-hidden border border-white/10 group hidden sm:block sm:mt-12">
              <div className="absolute inset-0 bg-neon-cyan/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <img src="/images/about-2.jpg" alt="HOCHPOTENT Live 2" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-neon-cyan opacity-50 hidden sm:block" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-neon-violet opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
