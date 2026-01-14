
import React from 'react';

const TransformsSection: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center py-24">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-white text-5xl md:text-7xl font-black mb-8 leading-tight uppercase">
            BUILDING <span className="text-conclave-gold">GLOBAL</span><br />
            & NATIONAL<br />
            IMPACT
          </h2>
          <div className="space-y-6 text-gray-200">
             <p className="text-lg font-bold leading-relaxed">
               SLSRF actively partners with ministries like <span className="text-conclave-gold">AYUSH, Tribal Affairs, MoEFCC, and CSIR</span> to drive sustainable and inclusive growth.
             </p>
             <p className="text-lg opacity-80 leading-relaxed">
               We co-create solutions, generate policy insights, and empower the next generation of scientific and spiritual leaders through our nseUW program.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformsSection;
