
import React from 'react';
import { ArrowRight } from 'lucide-react';

const FutureCode: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row min-h-[400px]">
      <div className="flex-1 bg-conclave-gold p-12 md:p-20 flex flex-col justify-center">
        <h2 className="text-white text-5xl md:text-7xl font-black leading-tight mb-8">
          SLSRF<br />
          THE MISSION
        </h2>
        <p className="text-white text-lg max-w-xl opacity-90 font-medium">
          Forging a Civilizational Shift - For sustenance. Sustaining Humanity through the vision that human evolution, environmental protection, and scientific progress must go hand in hand.
        </p>
      </div>
      <div className="w-full md:w-[350px] bg-black p-12 flex flex-col justify-between border-l border-white/10">
        <div>
          <h3 className="text-white text-3xl font-bold flex items-center group cursor-pointer">
            TIMELESS<br />MISSION
            <ArrowRight className="ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </h3>
        </div>
        <div className="mt-20">
          <p className="text-white text-xs font-bold tracking-[0.2em] mb-2 uppercase">Supreme Essence</p>
          <p className="text-white text-5xl font-black tracking-tighter">Semporul</p>
        </div>
      </div>
    </section>
  );
};

export default FutureCode;
