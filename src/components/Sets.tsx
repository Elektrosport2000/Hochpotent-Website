import { motion, useReducedMotion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useT } from '../hooks/useT';
import { buttons } from '../data/buttons';
import { useHaptic } from '../hooks/useHaptic';
import { useSound } from '../hooks/useSound';

const tracks = [
  {
    label: "Läuft noch",
    src: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hochpotent/laeuft-noch&color=%23ff003c&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
  },
  {
    label: "Tausendfach",
    src: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hochpotent/tausendfach&color=%23ff003c&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false",
  },
];

export default function Sets() {
  const t = useT();
  const haptic = useHaptic();
  const sound = useSound();
  const reducedMotion = useReducedMotion();

  return (
    <section id="sets" className="py-20 md:py-24 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4 md:gap-6"
        >
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
              {t.sets.heading} <span className="text-neon-cyan">{t.sets.headingAccent}</span>
            </h2>
            <p className="font-body text-base md:text-lg text-gray-400 mt-2 uppercase tracking-widest">{t.sets.subtitle}</p>
          </div>
          <a
            href={buttons.soundcloud.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { haptic.light(); sound.click(); }}
            className="border border-white/20 hover:border-neon-cyan hover:text-neon-cyan active:border-neon-cyan active:text-neon-cyan px-5 md:px-6 py-2 md:py-3 font-display text-lg md:text-xl uppercase tracking-widest transition-colors flex items-center gap-2 flex-shrink-0 touch-manipulation"
          >
            {t.sets.soundcloudBtn} <ExternalLink size={18} />
          </a>
        </motion.div>

        <div className="space-y-4 md:space-y-6">
          {tracks.map((track, i) => (
            <motion.div
              key={track.label}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : i * 0.15 }}
              className="w-full bg-[#111] border border-white/10 overflow-hidden"
            >
              <iframe
                width="100%"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={track.src}
                style={{ display: 'block', marginBottom: '-6px' }}
                title={track.label}
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.3 }}
            className="w-full aspect-video bg-dark-surface border border-white/10 p-1 md:p-2"
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5SlAeV6PvJY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
