
import React from 'react';
import { Shield, Target, Microscope, Leaf, Users, ArrowUpRight } from 'lucide-react';

const AboutUs: React.FC = () => {
  const coreValues = [
    {
      icon: <Users className="w-8 h-8 text-conclave-gold" />,
      title: "Responsible",
      desc: "Building global and national impact through collaborative evolving ecosystems.",
      number: "01"
    },
    {
      icon: <Shield className="w-8 h-8 text-conclave-gold" />,
      title: "Resilient",
      desc: "Promoting individual and social transformation through verifiable mental resilience.",
      number: "02"
    },
    {
      icon: <Microscope className="w-8 h-8 text-conclave-gold" />,
      title: "Research",
      desc: "Operating at the intersection of deep science, cultural responsibility, and systemic transformation.",
      number: "03"
    }
  ];

  return (
    <>
      {/* Intro Section */}
      <section id="about" className="bg-black py-32 overflow-hidden scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-conclave-gold/10 rounded-full blur-[120px]"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5 group">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                  alt="SLSRF" 
                  className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-12 left-12">
                   <p className="text-conclave-gold text-xs font-black tracking-[0.3em] uppercase mb-4">Established Excellence</p>
                   <h3 className="text-white text-4xl font-black tracking-tighter">THE VISIONARY<br/>PATHWAY</h3>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-white text-6xl md:text-8xl font-black tracking-[-0.05em] leading-[0.9]">ABOUT<br/><span className="text-conclave-gold">US.</span></h2>
                <div className="w-20 h-1.5 bg-conclave-gold"></div>
              </div>
              
              <div className="space-y-8 text-white/70 text-lg md:text-xl font-medium leading-relaxed">
                <p>
                  <span className="text-white font-black">Semporutkalai Life Science Research Foundation (SLSRF)</span> is a global initiative inspired by the Tamil word “Semporul”, meaning the supreme essence of life.
                </p>
                <p>
                  Founded by <span className="text-white font-bold">Thiru. Jeyachandran Srinivasan</span>, we operate at the frontier where noetic science research and indigenous healing traditions meet contemporary scientific rigour.
                </p>
              </div>

              <div className="pt-8">
                <button className="flex items-center space-x-4 group">
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white group-hover:text-conclave-gold transition-colors">Download Foundation Profile</span>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-conclave-gold group-hover:border-conclave-gold transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Vertical Grid */}
      <section className="bg-[#050505] py-32 border-y border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-24">
            <h3 className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">Our CORE Vertical</h3>
            <p className="text-white/40 text-sm font-bold tracking-[0.4em] uppercase">Forging Resilience & Innovation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((val, i) => (
              <div key={i} className="glass-card p-12 rounded-3xl group hover:bg-white/5 transition-all duration-500 relative overflow-hidden">
                <span className="absolute -top-10 -right-5 text-[180px] font-black text-white/5 leading-none transition-all group-hover:text-conclave-gold/10 group-hover:-translate-y-4">
                  {val.number}
                </span>
                <div className="relative z-10">
                  <div className="mb-8 w-16 h-16 rounded-2xl bg-conclave-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {val.icon}
                  </div>
                  <h4 className="text-white text-2xl font-black mb-6 uppercase tracking-tight">{val.title}</h4>
                  <p className="text-white/50 leading-relaxed font-medium">{val.desc}</p>
                </div>
                <div className="mt-10 pt-10 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black text-conclave-gold tracking-[0.3em] uppercase">Learn More</span>
                  <ArrowUpRight className="w-5 h-5 text-conclave-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
