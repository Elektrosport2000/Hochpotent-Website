import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useT } from '../hooks/useT';
import { buttons } from '../data/buttons';

// SoundCloud-URL tauschen um einen anderen Track einzubetten
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

  return (
    <section id="sets" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
              {t.sets.heading} <span className="text-neon-cyan">{t.sets.headingAccent}</span>
            </h2>
            <p className="font-body text-lg text-gray-400 mt-2 uppercase tracking-widest">{t.sets.subtitle}</p>
          </div>
          <a
            href={buttons.soundcloud.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 hover:border-neon-cyan hover:text-neon-cyan px-6 py-3 font-display text-xl uppercase tracking-widest transition-colors flex items-center gap-2 flex-shrink-0"
          >
            {t.sets.soundcloudBtn} <ExternalLink size={18} />
          </a>
        </motion.div>

        <div className="space-y-6">
          {tracks.map((track, i) => (
            <motion.div
              key={track.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
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
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full aspect-video bg-dark-surface border border-white/10 p-2"
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
