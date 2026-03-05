import { motion } from 'motion/react';
import { useT } from '../hooks/useT';
import { buttons } from '../data/buttons';

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

export default function Media() {
  const t = useT();
  const [featured, ...rest] = images;

  return (
    <section id="media" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
            {t.media.heading} <span className="text-neon-cyan">{t.media.headingAccent}</span>
          </h2>
          <a
            href={buttons.instagramHandle.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 hover:border-neon-violet hover:text-neon-violet px-6 py-3 font-display text-xl uppercase tracking-widest transition-colors flex-shrink-0"
          >
            {t.media.handle}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-[16/7] overflow-hidden bg-dark-surface group relative cursor-pointer mb-4"
        >
          <div className="absolute inset-0 bg-neon-violet/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark-bg to-transparent z-10" />
          <img
            src={featured}
            alt="HOCHPOTENT Live"
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {rest.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              className="aspect-square overflow-hidden bg-dark-surface group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-neon-violet/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <img
                src={src}
                alt={`HOCHPOTENT Live ${i + 2}`}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 bg-dark-surface p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-display text-3xl md:text-4xl uppercase tracking-widest text-white mb-1">{t.media.instagramCta}</p>
            <p className="font-body text-gray-400 text-lg">{t.media.instagramSub}</p>
          </div>
          <a
            href={buttons.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-neon-violet hover:bg-white hover:text-black text-white font-display text-xl uppercase tracking-widest px-10 py-4 transition-colors"
          >
            {t.media.instagramBtn}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
