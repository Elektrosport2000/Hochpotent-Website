import { Instagram, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 text-center md:text-left">
          <div>
            {/* Logo PNG - Make sure to upload your logo.png to the public folder */}
            <img src="/logo.png" alt="HOCHPOTENT Logo" className="h-12 object-contain mb-4 mx-auto md:mx-0" onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} />
            <span className="hidden font-display text-4xl font-bold tracking-wider text-white mb-2 block">HOCHPOTENT</span>
            <p className="font-body text-gray-500 uppercase tracking-widest text-sm">Schranz & Hardtechno</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.instagram.com/hochpotent/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-neon-violet hover:border-neon-violet transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://soundcloud.com/hochpotent" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-neon-cyan hover:border-neon-cyan transition-colors">
              <Music size={20} />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-600 font-body text-sm uppercase tracking-wider gap-4">
          <p>&copy; {new Date().getFullYear()} HOCHPOTENT. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black via-black to-transparent">
        <a href="#contact" className="block w-full bg-neon-violet text-white text-center font-display text-xl uppercase tracking-widest py-4 shadow-[0_0_20px_rgba(176,38,255,0.3)]">
          Booking
        </a>
      </div>
    </footer>
  );
}
