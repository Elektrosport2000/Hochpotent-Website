import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Dates', href: '#dates' },
    { name: 'Sets', href: '#sets' },
    { name: 'Media', href: '#media' },
    { name: 'Presskit', href: '#presskit' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex-shrink-0">
          {/* Logo PNG - Make sure to upload your logo.png to the public folder */}
          <img src="/logo.png" alt="HOCHPOTENT Logo" className="h-[36px] md:h-[44px] lg:h-[56px] object-contain py-1" onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }} />
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

        <div className="hidden md:block">
          <a href="#contact" className="bg-neon-violet hover:bg-white hover:text-black text-white font-display text-xl uppercase tracking-widest px-6 py-2 rounded-none border border-neon-violet hover:border-white transition-all hover:shadow-[0_0_15px_rgba(176,38,255,0.5)]">
            Booking
          </a>
        </div>

        {/* Mobile Toggle */}
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
              className="font-display text-2xl uppercase tracking-widest hover:text-neon-violet"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-neon-violet text-white font-display text-xl uppercase tracking-widest px-6 py-3 text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Booking
          </a>
        </div>
      )}
    </header>
  );
}
