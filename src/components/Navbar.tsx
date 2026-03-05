import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { useT } from '../hooks/useT';
import { buttons } from '../data/buttons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggle } = useLang();
  const t = useT();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="HOCHPOTENT Logo"
            className="h-[36px] md:h-[44px] object-contain"
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
            <a key={link.name} href={link.href} className="font-display text-lg uppercase tracking-widest hover:text-neon-violet transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* Sprachumschalter */}
          <div className="flex items-center gap-1 font-display text-base uppercase tracking-widest">
            <button
              onClick={() => lang !== 'de' && toggle()}
              className={`px-2 py-1 transition-colors ${lang === 'de' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
            >
              DE
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => lang !== 'en' && toggle()}
              className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-white' : 'text-white/30 hover:text-white/60'}`}
            >
              EN
            </button>
          </div>

          <a
            href={buttons.navBooking.href}
            className="border border-white/30 hover:border-neon-violet hover:text-neon-violet text-white/70 font-display text-lg uppercase tracking-widest px-5 py-2 transition-all"
          >
            {t.nav.booking}
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-surface border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display text-2xl uppercase tracking-widest hover:text-neon-violet transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center justify-between mt-2">
            <a
              href={buttons.navBooking.href}
              className="bg-neon-violet text-white font-display text-xl uppercase tracking-widest px-6 py-3 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.booking}
            </a>
            {/* Sprachumschalter Mobile */}
            <div className="flex items-center gap-2 font-display text-xl uppercase tracking-widest">
              <button
                onClick={() => { lang !== 'de' && toggle(); }}
                className={lang === 'de' ? 'text-white' : 'text-white/30'}
              >
                DE
              </button>
              <span className="text-white/20">|</span>
              <button
                onClick={() => { lang !== 'en' && toggle(); }}
                className={lang === 'en' ? 'text-white' : 'text-white/30'}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
