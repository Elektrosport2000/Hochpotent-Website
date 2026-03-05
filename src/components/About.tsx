import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-bg border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">
              Raw <span className="text-neon-violet">Power</span>
            </h2>
            <p className="font-body text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
              Kompromissloser Sound, der keine Gefangenen macht. HOCHPOTENT steht für treibenden Schranz und düsteren Hardtechno. Rohe Energie trifft auf präzise Rhythmik – gebaut für die dunkelsten Dancefloors und die intensivsten Nächte.
            </p>
            <p className="font-body text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
              Mit einer unverkennbaren Handschrift, die tief in der industriellen Rave-Kultur verwurzelt ist, bringt HOCHPOTENT eine unvergleichliche Intensität in jedes Set. Jeder Track ist eine Maschine, jeder Drop ein Statement. No Excuses.
            </p>
            <ul className="space-y-4 font-body text-lg">
              <li className="flex items-start gap-3">
                <span className="text-neon-cyan mt-1">■</span>
                <div>
                  <strong className="text-white uppercase tracking-wider">Sound:</strong> <span className="text-gray-400">Schranz, Hardtechno, Industrial</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-cyan mt-1">■</span>
                <div>
                  <strong className="text-white uppercase tracking-wider">Energie:</strong> <span className="text-gray-400">Fast, driving, relentless, intense</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-cyan mt-1">■</span>
                <div>
                  <strong className="text-white uppercase tracking-wider">Fokus:</strong> <span className="text-gray-400">Crowd control, peak-time pressure</span>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <div className="aspect-[4/5] relative overflow-hidden border border-white/10 group col-span-2 sm:col-span-1">
              <div className="absolute inset-0 bg-neon-violet/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img 
                src="/images/about-1.jpg" 
                alt="HOCHPOTENT Live 1" 
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[4/5] relative overflow-hidden border border-white/10 group hidden sm:block sm:mt-12">
              <div className="absolute inset-0 bg-neon-cyan/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img 
                src="/images/about-2.jpg" 
                alt="HOCHPOTENT Live 2" 
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-neon-cyan opacity-50 hidden sm:block"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-neon-violet opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
