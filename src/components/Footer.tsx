import { useState } from 'react';
import { Instagram, Music } from 'lucide-react';
import LegalModal from './LegalModal';
import { impressum, datenschutz } from '../data/legal';

type ModalType = 'impressum' | 'datenschutz' | null;

export default function Footer() {
  const [modal, setModal] = useState<ModalType>(null);

  return (
    <>
      <footer className="bg-black border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 text-center md:text-left">
            <div>
              <img
                src="/logo.png"
                alt="HOCHPOTENT Logo"
                className="h-12 object-contain mb-4 mx-auto md:mx-0"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  (e.currentTarget.nextElementSibling as HTMLElement)?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-display text-4xl font-bold tracking-wider text-white mb-2 block">HOCHPOTENT</span>
              <p className="font-body text-gray-500 uppercase tracking-widest text-sm">Schranz &amp; Hardtechno</p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/hochpotent/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-neon-violet hover:border-neon-violet transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://soundcloud.com/hochpotent"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-neon-cyan hover:border-neon-cyan transition-colors"
              >
                <Music size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-600 font-body text-sm uppercase tracking-wider gap-4">
            <p>&copy; {new Date().getFullYear()} HOCHPOTENT. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <button
                onClick={() => setModal('impressum')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Impressum
              </button>
              <button
                onClick={() => setModal('datenschutz')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </footer>

      {modal === 'impressum' && (
        <LegalModal title="Impressum" content={impressum} onClose={() => setModal(null)} />
      )}
      {modal === 'datenschutz' && (
        <LegalModal title="Datenschutzerklärung" content={datenschutz} onClose={() => setModal(null)} />
      )}
    </>
  );
}
