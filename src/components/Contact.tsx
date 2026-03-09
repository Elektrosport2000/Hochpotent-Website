import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Mail, Instagram, Music } from 'lucide-react';
import { useT } from '../hooks/useT';
import { buttons } from '../data/buttons';
import { useHaptic } from '../hooks/useHaptic';
import { useSound } from '../hooks/useSound';

const EMAIL = 'business@hochpotent.com';

export default function Contact() {
  const t = useT();
  const haptic = useHaptic();
  const sound = useSound();
  const reducedMotion = useReducedMotion();
  const [honeypot, setHoneypot] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (honeypot) return;

    haptic.success();
    sound.success();

    const form = e.currentTarget;
    const name    = (form.elements.namedItem('Name')         as HTMLInputElement).value;
    const email   = (form.elements.namedItem('Email')        as HTMLInputElement).value;
    const org     = (form.elements.namedItem('Organisation') as HTMLInputElement).value;
    const date    = (form.elements.namedItem('Datum_Ort')    as HTMLInputElement).value;
    const message = (form.elements.namedItem('Nachricht')    as HTMLTextAreaElement).value;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      org   ? `Organisation: ${org}` : '',
      date  ? `${t.contact.labelDate.replace(' *', '')}: ${date}` : '',
      `\n${t.contact.labelMessage.replace(' *', '')}:\n${message}`,
    ].filter(Boolean).join('\n');

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(t.contact.emailSubject + name)}&body=${encodeURIComponent(body)}`;

    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="py-20 md:py-24 bg-dark-bg border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-violet/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-10 md:gap-16">

          <motion.div
            initial={{ opacity: 0, x: reducedMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reducedMotion ? 0 : 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="absolute inset-0 -mx-4 -my-20 lg:mx-0 lg:my-0 z-[-1] opacity-30 lg:opacity-50">
              <img src="/images/contact-bg.jpg" alt="Contact Background" className="w-full h-full object-cover filter grayscale contrast-125 mix-blend-screen" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg" />
            </div>

            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-5 mt-6 lg:mt-0">
              {t.contact.heading}<span className="text-neon-cyan">{t.contact.headingAccent}</span>
            </h2>
            <p className="font-body text-base md:text-lg text-gray-400 mb-10 md:mb-12">{t.contact.subtext}</p>

            <div className="space-y-6 md:space-y-8">
              {[
                { icon: <Mail className="text-neon-cyan" />, label: 'Email', href: `mailto:${EMAIL}`, text: EMAIL, color: 'neon-cyan' },
                { icon: <Instagram className="text-neon-violet" />, label: 'Instagram', href: 'https://www.instagram.com/hochpotent/', text: '@hochpotent', color: 'neon-violet' },
                { icon: <Music className="text-white" />, label: 'SoundCloud', href: 'https://soundcloud.com/hochpotent', text: 'soundcloud.com/hochpotent', color: 'white' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 md:w-12 md:h-12 bg-dark-surface border border-white/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-lg md:text-xl uppercase tracking-wider text-gray-500 mb-1">{item.label}</h4>
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" onClick={() => haptic.light()} className={`font-body text-lg md:text-xl hover:text-${item.color} transition-colors`}>{item.text}</a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-dark-surface border border-white/10 p-5 md:p-10">
              <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, width: 0, overflow: 'hidden' }} aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block font-display text-base md:text-lg uppercase tracking-wider text-gray-400 mb-2">{t.contact.labelName}</label>
                  <input type="text" name="Name" className="w-full bg-black/50 border border-white/20 focus:border-neon-violet text-white px-4 py-3 outline-none font-body transition-colors text-base" required />
                </div>
                <div>
                  <label className="block font-display text-base md:text-lg uppercase tracking-wider text-gray-400 mb-2">{t.contact.labelEmail}</label>
                  <input type="email" name="Email" className="w-full bg-black/50 border border-white/20 focus:border-neon-violet text-white px-4 py-3 outline-none font-body transition-colors text-base" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block font-display text-base md:text-lg uppercase tracking-wider text-gray-400 mb-2">{t.contact.labelOrg}</label>
                  <input type="text" name="Organisation" className="w-full bg-black/50 border border-white/20 focus:border-neon-violet text-white px-4 py-3 outline-none font-body transition-colors text-base" />
                </div>
                <div>
                  <label className="block font-display text-base md:text-lg uppercase tracking-wider text-gray-400 mb-2">{t.contact.labelDate}</label>
                  <input type="text" name="Datum_Ort" className="w-full bg-black/50 border border-white/20 focus:border-neon-violet text-white px-4 py-3 outline-none font-body transition-colors text-base" />
                </div>
              </div>

              <div className="mb-6 md:mb-8">
                <label className="block font-display text-base md:text-lg uppercase tracking-wider text-gray-400 mb-2">{t.contact.labelMessage}</label>
                <textarea name="Nachricht" rows={5} className="w-full bg-black/50 border border-white/20 focus:border-neon-violet text-white px-4 py-3 outline-none font-body transition-colors resize-none text-base" required />
              </div>

              <motion.button
                type="submit"
                whileTap={reducedMotion ? {} : { scale: 0.98 }}
                className="w-full flex items-center justify-center bg-neon-violet hover:bg-white hover:text-black active:bg-white active:text-black text-white font-display text-xl md:text-2xl uppercase tracking-widest py-4 transition-colors touch-manipulation"
              >
                {sent ? t.contact.submitting : t.contact.submitBtn}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
