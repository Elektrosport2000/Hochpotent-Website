import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { useT } from '../hooks/useT';
import { buttons } from '../data/buttons';
import { useHaptic } from '../hooks/useHaptic';
import { useSound } from '../hooks/useSound';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggle } = useLang();
  const t = useT();
  const haptic = useHaptic();
  const sound = useSound();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home,    href: '#home' },
    { name: t.nav.dates,   href: '#dates' },
    { name: t.nav.sets,    href: '#sets' },
    { name: t.nav.media,   href: '#media' },
    { name: t.nav.about,   href: '#ueber-mich' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleMenu = () => {
    haptic.light();
    sound.click();
    setMobileMenuOpen(v => !v);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-4 md:py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="flex-shrink-0 touch-manipulation" onClick={() => haptic.tick()}>
          <img
            src="/logo.png"
            alt="HOCHPOTENT Logo"
            className="h-[32px] md:h-[44px] object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              (e.currentTarget.nextElementSibling as HTMLElement)?.classList.remove('hidden');
            }}
          />
          <span className="hidden font-display text-3xl font-bold tracking-wider text-white">HOCHPOTENT</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => haptic.tick()} className="font-display text-lg uppercase tracking-widest hover:text-neon-violet transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 font-display text-base uppercase tracking-widest">
            <button onClick={() => { lang !== 'de' && toggle(); haptic.tick(); }} className={`px-2 py-1 transition-colors ${lang === 'de' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}>DE</button>
            <span className="text-white/20">|</span>
            <button onClick={() => { lang !== 'en' && toggle(); haptic.tick(); }} className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}>EN</button>
          </div>
          <a href={buttons.navBooking.href} onClick={() => { haptic.medium(); sound.click(); }} className="border border-white/30 hover:border-neon-violet hover:text-neon-violet text-white/70 font-display text-lg uppercase tracking-widest px-5 py-2 transition-all touch-manipulation">
            {t.nav.booking}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 -mr-2 touch-manipulation"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileMenuOpen ? (
              <motion.span key="close" initial={{ rotate: reducedMotion ? 0 : -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: reducedMotion ? 0 : 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={28} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: reducedMotion ? 0 : 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: reducedMotion ? 0 : -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Menu size={28} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-dark-surface border-b border-white/10 shadow-2xl"
          >
            <div className="px-6 pt-4 pb-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: reducedMotion ? 0 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2, delay: reducedMotion ? 0 : i * 0.05 }}
                  className="font-display text-2xl uppercase tracking-widest hover:text-neon-violet active:text-neon-violet transition-colors py-3 border-b border-white/5 touch-manipulation"
                  onClick={() => { haptic.tick(); closeMenu(); }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex items-center justify-between mt-4 pt-2">
                <a
                  href={buttons.navBooking.href}
                  onClick={() => { haptic.medium(); sound.click(); closeMenu(); }}
                  className="bg-neon-violet text-white font-display text-xl uppercase tracking-widest px-6 py-3 text-center touch-manipulation active:bg-white active:text-black transition-colors"
                >
                  {t.nav.booking}
                </a>
                <div className="flex items-center gap-2 font-display text-xl uppercase tracking-widest">
                  <button onClick={() => { lang !== 'de' && toggle(); haptic.tick(); }} className={`py-2 px-2 touch-manipulation ${lang === 'de' ? 'text-white' : 'text-white/30'}`}>DE</button>
                  <span className="text-white/20">|</span>
                  <button onClick={() => { lang !== 'en' && toggle(); haptic.tick(); }} className={`py-2 px-2 touch-manipulation ${lang === 'en' ? 'text-white' : 'text-white/30'}`}>EN</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
