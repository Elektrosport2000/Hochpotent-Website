import { motion, useReducedMotion } from 'motion/react';
import { ExternalLink, Music, Play } from 'lucide-react';
import { useT } from '../hooks/useT';
import { buttons } from '../data/buttons';
import { sets } from '../settings';
import { useHaptic } from '../hooks/useHaptic';
import { useSound } from '../hooks/useSound';

function buildSoundCloudEmbedUrl(trackUrl: string): string {
  const encoded = encodeURIComponent(trackUrl);
  return `https://w.soundcloud.com/player/?url=${encoded}&color=%23ff003c&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`;
}

export default function Sets() {
  const t = useT();
  const haptic = useHaptic();
  const sound = useSound();
  const reducedMotion = useReducedMotion();

  return (
    <section id="sets" className="py-20 md:py-28 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6"
        >
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
              {t.sets.heading} <span className="text-neon-violet">{t.sets.headingAccent}</span>
            </h2>
            <p className="font-body text-base md:text-lg text-gray-400 mt-2 uppercase tracking-widest">
              {t.sets.subtitle}
            </p>
          </div>
          <a
            href={buttons.soundcloud.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { haptic.light(); sound.click(); }}
            className="border border-white/20 hover:border-neon-violet hover:text-neon-violet active:border-neon-violet active:text-neon-violet px-5 md:px-6 py-2 md:py-3 font-display text-lg md:text-xl uppercase tracking-widest transition-colors flex items-center gap-2 flex-shrink-0 touch-manipulation"
          >
            {t.sets.soundcloudBtn} <ExternalLink size={16} />
          </a>
        </motion.div>

        {/* ── SoundCloud Tracks ── */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: reducedMotion ? 0 : 0.5 }}
          className="mb-3 flex items-center gap-3"
        >
          <Music size={16} className="text-neon-violet flex-shrink-0" />
          <span className="font-display text-sm uppercase tracking-[0.2em] text-white/40">
            {t.sets.soundcloudSection}
          </span>
          <div className="flex-1 h-px bg-white/8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 mb-12 md:mb-16">
          {sets.soundcloudTracks.map((track, i) => (
            <motion.div
              key={track.url}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : i * 0.1 }}
              className="group relative bg-dark-surface border border-white/10 hover:border-neon-violet/40 transition-colors duration-300 overflow-hidden"
            >
              <iframe
                width="100%"
                height="120"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={buildSoundCloudEmbedUrl(track.url)}
                style={{ display: 'block' }}
                title={track.label}
              />
            </motion.div>
          ))}
        </div>

        {/* ── YouTube Videos ── */}
        {sets.youtubeVideos.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: reducedMotion ? 0 : 0.5 }}
              className="mb-3 flex items-center gap-3"
            >
              <Play size={16} className="text-neon-violet flex-shrink-0" />
              <span className="font-display text-sm uppercase tracking-[0.2em] text-white/40">
                {t.sets.youtubeSection}
              </span>
              <div className="flex-1 h-px bg-white/8" />
            </motion.div>

            <div className={`grid gap-3 md:gap-4 ${sets.youtubeVideos.length === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
              {sets.youtubeVideos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : i * 0.1 }}
                  className="group relative bg-dark-surface border border-white/10 hover:border-neon-violet/40 transition-colors duration-300 overflow-hidden"
                >
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                      title={video.label}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      style={{ display: 'block' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
