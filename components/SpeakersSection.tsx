
import React from 'react';
import { ArrowUpRight, Linkedin, Twitter, Globe } from 'lucide-react';
import { SPEAKERS } from '../constants';

const SpeakersSection: React.FC = () => {
  return (
    <section id="speakers" className="bg-[#050505] py-32 overflow-hidden border-t border-white/5 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24">
          <div className="space-y-6">
            <h2 className="text-white text-6xl md:text-8xl font-black tracking-[-0.05em] leading-[0.9] uppercase">Foundation<br/><span className="text-conclave-gold">Leaders.</span></h2>
            <div className="w-20 h-1.5 bg-conclave-gold"></div>
          </div>
          <p className="max-w-md text-white/40 text-sm md:text-lg font-medium leading-relaxed italic">
            "We represent a powerful confluence of Eastern wisdom and contemporary scientific research."
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {SPEAKERS.map((speaker, i) => (
            <div key={i} className="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-conclave-gold/40 transition-all duration-700 shadow-2xl">
               <div className="aspect-[4/5] overflow-hidden relative bg-[#111]">
                  <img 
                    src={speaker.image} 
                    className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-1000 scale-[1.02] group-hover:scale-105" 
                    alt={speaker.name}
                  />
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-6">
                    <button className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                      <Globe className="w-5 h-5" />
                    </button>
                  </div>
               </div>

               <div className="p-10 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent -mt-24"></div>
                  <div className="relative z-10 space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-white text-3xl font-black leading-none tracking-tight">{speaker.name}</h4>
                      <p className="text-conclave-gold text-[10px] font-black uppercase tracking-[0.4em] pt-2">{speaker.role}</p>
                    </div>
                    <p className="text-white/40 text-[11px] leading-tight font-bold uppercase tracking-widest border-l border-conclave-gold/40 pl-4">{speaker.company}</p>
                  </div>
                  
                  <div className="absolute bottom-10 right-10">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
