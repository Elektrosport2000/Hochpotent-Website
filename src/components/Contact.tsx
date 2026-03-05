import { motion } from 'motion/react';
import { Mail, Instagram, Music } from 'lucide-react';
import { buttons } from '../data/buttons';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark-bg border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon-violet/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="absolute inset-0 -mx-6 -my-24 lg:mx-0 lg:my-0 z-[-1] opacity-30 lg:opacity-50">
              <img src="/images/contact-bg.jpg" alt="Contact Background" className="w-full h-full object-cover filter grayscale contrast-125 mix-blend-screen" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-transparent lg:hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg" />
            </div>

            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 mt-8 lg:mt-0">
              Book<span className="text-neon-cyan">ing</span>
            </h2>
            <p className="font-body text-lg text-gray-400 mb-12">
              Für Booking-Anfragen, Remixe oder Kollaborationen nutze das Formular oder schreibe direkt eine E-Mail.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dark-surface border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-neon-cyan" />
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase tracking-wider text-gray-500 mb-1">Email</h4>
                  <a href="mailto:booking@hochpotent.com" className="font-body text-xl hover:text-neon-cyan transition-colors">booking@hochpotent.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dark-surface border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-neon-violet" />
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase tracking-wider text-gray-500 mb-1">Instagram</h4>
                  <a href="https://www.instagram.com/hochpotent/" target="_blank" rel="noopener noreferrer" className="font-body text-xl hover:text-neon-violet transition-colors">@hochpotent</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dark-surface border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Music className="text-white" />
                </div>
                <div>
                  <h4 className="font-display text-xl uppercase tracking-wider text-gray-500 mb-1">SoundCloud</h4>
                  <a href="https://soundcloud.com/hochpotent" target="_blank" rel="noopener noreferrer" className="font-body text-xl hover:text-white transition-colors">soundcloud.com/hochpotent</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form className="bg-dark-surface border border-white/10 p-6 md:p-10" action="mailto:booking@hochpotent.com" method="POST" encType="text/plain">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-display text-lg uppercase tracking-wider text-gray-400 mb-2">Name *</label>
                  <input type="text" name="Name" className="w-full bg-black/50 border border-white/20 focus:border-neon-violet text-white px-4 py-3 outline-none font-body transition-colors" required />
                </div>
                <div>
                  <label className="block font-display text-lg uppercase tracking-wider text-gray-400 mb-2">Email *</label>
                  <input type="email" name="Email" className="w-full bg-black/50 border border-white/20 focus:border-neon-violet text-white px-4 py-3 outline-none font-body transition-colors" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-display text-lg uppercase tracking-wider text-gray-400 mb-2">Organisation / Club</label>
                  <input type="text" name="Organisation" className="w-full bg-black/50 border border-white/20 focus:border-neon-violet text-white px-4 py-3 outline-none font-body transition-colors" />
                </div>
                <div>
                  <label className="block font-display text-lg uppercase tracking-wider text-gray-400 mb-2">Datum &amp; Ort</label>
                  <input type="text" name="Datum_Ort" className="w-full bg-black/50 border border-white/20 focus:border-neon-violet text-white px-4 py-3 outline-none font-body transition-colors" />
                </div>
              </div>

              <div className="mb-8">
                <label className="block font-display text-lg uppercase tracking-wider text-gray-400 mb-2">Nachricht *</label>
                <textarea name="Nachricht" rows={5} className="w-full bg-black/50 border border-white/20 focus:border-neon-violet text-white px-4 py-3 outline-none font-body transition-colors resize-none" required />
              </div>

              <button type="submit" className="w-full bg-neon-violet hover:bg-white hover:text-black text-white font-display text-2xl uppercase tracking-widest py-4 transition-colors">
                {buttons.contactSubmit.text}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
