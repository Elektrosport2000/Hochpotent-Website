import { useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useT } from '../hooks/useT';
import { buttons } from '../data/buttons';
import { useHaptic } from '../hooks/useHaptic';
import { useSound } from '../hooks/useSound';
import { media as mediaCfg } from '../settings';

const images = mediaCfg.images;
const stats  = mediaCfg.stats;
const videos = mediaCfg.videos ?? [];

export default function Media() {
  const t = useT();
  const haptic = useHaptic();
  const sound = useSound();
  const reducedMotion = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [featured, ...rest] = images;

  // Video state
  const [isMuted, setIsMuted] = useState(mediaCfg.videosMutedByDefault ?? true);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const toggleMute = useCallback(() => {
    haptic.light();
    sound.click();
    setIsMuted(prev => {
      const next = !prev;
      videoRefs.current.forEach(v => { if (v) v.muted = next; });
      return next;
    });
  }, [haptic, sound]);

  const playVideo = useCallback((index: number) => {
    const vid = videoRefs.current[index];
    if (!vid) return;
    videoRefs.current.forEach((v, i) => {
      if (v && i !== index && !v.paused) v.pause();
    });
    vid.play();
    setPlayingIndex(index);
  }, []);

  const pauseVideo = useCallback((index: number) => {
    const vid = videoRefs.current[index];
    if (!vid) return;
    vid.pause();
    setPlayingIndex(null);
  }, []);

  const togglePlay = useCallback((index: number) => {
    haptic.light();
    const vid = videoRefs.current[index];
    if (!vid) return;
    if (vid.paused) playVideo(index);
    else pauseVideo(index);
  }, [haptic, playVideo, pauseVideo]);

  // Sync muted state when videos mount
  useEffect(() => {
    videoRefs.current.forEach(v => { if (v) v.muted = isMuted; });
  }, [isMuted]);

  const openLightbox = useCallback((index: number) => {
    haptic.light();
    sound.click();
    setLightboxIndex(index);
  }, [haptic, sound]);

  const closeLightbox = useCallback(() => {
    haptic.tick();
    setLightboxIndex(null);
  }, [haptic]);

  const prevImage = useCallback(() => {
    haptic.tick();
    setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : null);
  }, [haptic]);

  const nextImage = useCallback(() => {
    haptic.tick();
    setLightboxIndex(i => i !== null ? (i + 1) % images.length : null);
  }, [haptic]);

  return (
    <section id="media" className="py-20 md:py-24 bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4 md:gap-6"
        >
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight">
            {t.media.heading} <span className="text-neon-cyan">{t.media.headingAccent}</span>
          </h2>
          <a
            href={buttons.instagramHandle.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { haptic.light(); sound.click(); }}
            className="border border-white/20 hover:border-neon-violet hover:text-neon-violet active:border-neon-violet active:text-neon-violet px-5 md:px-6 py-2 md:py-3 font-display text-lg md:text-xl uppercase tracking-widest transition-colors flex-shrink-0 touch-manipulation"
          >
            {t.media.handle}
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.1 }}
          className="grid grid-cols-4 border border-white/10 bg-dark-surface mb-4"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className={`flex flex-col items-center justify-center py-5 md:py-6 ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
              <span className="font-display text-2xl md:text-4xl text-neon-violet font-bold">{stat.value}</span>
              <span className="font-body text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.8 }}
          className="w-full aspect-[16/7] overflow-hidden bg-dark-surface group relative cursor-pointer mb-4"
          onClick={() => openLightbox(0)}
        >
          <div className="absolute inset-0 bg-neon-violet/20 mix-blend-overlay opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark-bg to-transparent z-10" />
          <div className="absolute top-3 right-3 z-20 bg-black/60 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIn size={18} className="text-white" />
          </div>
          <img
            src={featured}
            alt="HOCHPOTENT Live"
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-active:grayscale-0 group-hover:scale-105 transition-all duration-700"
            loading="lazy"
          />
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 mb-8 md:mb-12">
          {rest.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: reducedMotion ? 0 : 0.4, delay: reducedMotion ? 0 : (i % 4) * 0.06 }}
              className="aspect-square overflow-hidden bg-dark-surface group relative cursor-pointer"
              onClick={() => openLightbox(i + 1)}
            >
              <div className="absolute inset-0 bg-neon-violet/20 mix-blend-overlay opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 z-10" />
              <div className="absolute top-2 right-2 z-20 bg-black/60 p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={14} className="text-white" />
              </div>
              <img
                src={src}
                alt={`HOCHPOTENT Live ${i + 2}`}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-active:grayscale-0 group-hover:scale-110 transition-all duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Video section */}
        {videos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reducedMotion ? 0 : 0.6 }}
            className="mb-8 md:mb-12"
          >
            {/* Video section header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-widest text-white">
                {t.media.videosHeading}
              </h3>
              <button
                onClick={toggleMute}
                className="flex items-center gap-2 border border-white/20 hover:border-neon-cyan hover:text-neon-cyan active:border-neon-cyan active:text-neon-cyan px-4 py-2 font-display text-sm uppercase tracking-widest transition-colors touch-manipulation"
                aria-label={isMuted ? t.media.unmuteBtn : t.media.muteBtn}
              >
                {isMuted
                  ? <><VolumeX size={16} /> {t.media.unmuteBtn}</>
                  : <><Volume2 size={16} /> {t.media.muteBtn}</>
                }
              </button>
            </div>

            {/* Video grid */}
            <div className={`grid gap-4 ${videos.length === 1 ? 'grid-cols-1 max-w-2xl' : 'grid-cols-1 sm:grid-cols-2'}`}>
              {videos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: reducedMotion ? 0 : 0.4, delay: reducedMotion ? 0 : i * 0.1 }}
                  className="bg-dark-surface group relative cursor-pointer overflow-hidden"
                  onMouseEnter={() => playVideo(i)}
                  onMouseLeave={() => pauseVideo(i)}
                  onClick={() => togglePlay(i)}
                >
                  {/* Video element */}
                  <div className="aspect-video relative">
                    <video
                      ref={el => { videoRefs.current[i] = el; }}
                      src={video.src}
                      poster={video.poster || undefined}
                      muted={isMuted}
                      playsInline
                      loop
                      preload="metadata"
                      className={`w-full h-full object-cover filter contrast-110 transition-all duration-500 ${playingIndex === i ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
                      onEnded={() => setPlayingIndex(null)}
                    />

                    {/* Overlay hover tint */}
                    <div className="absolute inset-0 bg-neon-violet/10 mix-blend-overlay opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />

                    {/* Play/Pause button – always visible when paused, hover-reveal when playing */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${playingIndex === i ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-black/70 border border-white/30 flex items-center justify-center group-hover:border-neon-violet transition-colors touch-manipulation">
                        {playingIndex === i
                          ? <Pause size={28} className="text-white" />
                          : <Play size={28} className="text-white ml-1" />
                        }
                      </div>
                    </div>
                  </div>

                  {/* Label */}
                  {video.label && (
                    <div className="px-3 py-2 border-t border-white/10">
                      <span className="font-display text-sm uppercase tracking-widest text-gray-400">{video.label}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
          className="border border-white/10 bg-dark-surface p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6"
        >
          <div>
            <p className="font-display text-2xl md:text-4xl uppercase tracking-widest text-white mb-1">{t.media.instagramCta}</p>
            <p className="font-body text-gray-400 text-base md:text-lg">{t.media.instagramSub}</p>
          </div>
          <a
            href={buttons.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { haptic.medium(); sound.click(); }}
            className="flex-shrink-0 w-full md:w-auto text-center bg-neon-violet hover:bg-white hover:text-black active:bg-white active:text-black text-white font-display text-lg md:text-xl uppercase tracking-widest px-8 md:px-10 py-3 md:py-4 transition-colors touch-manipulation"
          >
            {t.media.instagramBtn}
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-dark-surface border border-white/20 flex items-center justify-center hover:border-neon-violet transition-colors touch-manipulation"
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-dark-surface border border-white/20 flex items-center justify-center hover:border-neon-violet transition-colors touch-manipulation"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              src={images[lightboxIndex]}
              alt={`HOCHPOTENT ${lightboxIndex + 1}`}
              initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.95 }}
              transition={{ duration: reducedMotion ? 0 : 0.25 }}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-dark-surface border border-white/20 flex items-center justify-center hover:border-neon-violet transition-colors touch-manipulation"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-sm uppercase tracking-widest text-gray-400">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Dot indicators */}
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); haptic.tick(); setLightboxIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-colors touch-manipulation ${i === lightboxIndex ? 'bg-neon-violet' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
