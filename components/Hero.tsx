
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Background Layer */}
      <div 
        className="absolute inset-0 z-0 scale-110 animate-pan opacity-60"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2400")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'contrast(1.1) brightness(0.8)',
        }}
      ></div>

      {/* Shifting Light Overlay */}
      <div className="absolute inset-0 z-1 opacity-40 mix-blend-screen pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(248,164,46,0.1)_0%,transparent_70%)] animate-pulse duration-[8000ms]"></div>
      </div>

      {/* Static Gradient Shield for Text Readability */}
      <div className="absolute inset-0 z-2 bg-gradient-to-b from-black/80 via-black/20 to-black/90"></div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto transform translate-y-[-2%] transition-transform duration-[2000ms] ease-out hover:translate-y-[-3%]">
        {/* Main Title Group */}
        <div className="inline-flex flex-col items-start md:items-center">
          <div className="flex flex-col md:flex-row items-baseline justify-center group">
            <div className="flex flex-col items-start md:items-end mr-6 mb-4 md:mb-0 transform transition-all duration-1000 group-hover:translate-x-[-10px]">
               <span className="text-conclave-gold text-xs font-black tracking-[0.4em] mb-2 uppercase animate-in fade-in slide-in-from-left-10 duration-1000">Power of Science</span>
               <span className="text-white text-[10px] font-bold tracking-[0.15em] opacity-60 uppercase text-left md:text-right max-w-[220px] leading-relaxed">
                 Science empowers progress through logic, innovation, and fearless human curiosity.
               </span>
            </div>
            
            <h1 className="flex items-baseline font-black leading-none tracking-tighter">
              <span className="text-white text-7xl md:text-[140px] tracking-tight animate-in fade-in zoom-in duration-700">SLS</span>
              <span className="text-conclave-gold text-8xl md:text-[180px] ml-4 md:ml-8 animate-in fade-in zoom-in delay-200 duration-700">RF</span>
            </h1>
          </div>
          
          <div className="w-full flex flex-col items-start md:items-end -mt-4 md:-mt-10 md:mr-10 animate-in fade-in slide-in-from-right-10 duration-1000 delay-500">
            <span className="text-white text-2xl md:text-5xl font-black tracking-tight opacity-90 uppercase">
              The timeless mission
            </span>
            <span className="text-conclave-gold text-3xl md:text-7xl font-black tracking-tighter italic opacity-100 mt-2 hover:brightness-125 transition-all">
              Sustaining Humanity
            </span>
          </div>
        </div>

        <div className="mt-12 max-w-2xl mx-auto md:ml-auto md:mr-0 md:text-right opacity-0 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-700 fill-mode-forwards">
          <p className="text-white/80 text-lg md:text-xl font-medium tracking-tight leading-relaxed">
            Forging a <span className="text-white font-black border-b border-conclave-gold/40">Civilizational Shift</span> for sustenance.
          </p>
        </div>
      </div>

      {/* Decorative Light Rays Layer */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-conclave-gold/20 to-transparent opacity-30"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-conclave-gold/10 to-transparent opacity-20"></div>
    </section>
  );
};

export default Hero;
