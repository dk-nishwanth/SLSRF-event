
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % GALLERY_IMAGES.length);
  const prev = () => setCurrent((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);

  return (
    <section className="bg-black py-24 text-center overflow-hidden">
      <h2 className="text-conclave-gold text-5xl md:text-7xl font-black mb-20 tracking-tighter">
        DECODE. DISRUPT. DEFINE.
      </h2>
      
      <div className="relative max-w-6xl mx-auto px-4 flex items-center justify-center">
        {/* Navigation */}
        <button onClick={prev} className="absolute left-8 z-20 w-12 h-12 rounded-full border border-conclave-gold flex items-center justify-center text-conclave-gold hover:bg-conclave-gold hover:text-black transition-all">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={next} className="absolute right-8 z-20 w-12 h-12 rounded-full border border-conclave-gold flex items-center justify-center text-conclave-gold hover:bg-conclave-gold hover:text-black transition-all">
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slides */}
        <div className="flex items-center justify-center gap-8 w-full">
          <div className="hidden md:block w-1/4 opacity-30 scale-90 transition-all duration-500 rounded-xl overflow-hidden blur-[2px]">
             <img src={GALLERY_IMAGES[(current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length]} className="w-full aspect-[4/3] object-cover" />
          </div>
          
          <div className="w-full md:w-1/2 scale-110 z-10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(248,164,46,0.2)] transition-all duration-500">
             <img src={GALLERY_IMAGES[current]} className="w-full aspect-[16/10] object-cover" />
          </div>

          <div className="hidden md:block w-1/4 opacity-30 scale-90 transition-all duration-500 rounded-xl overflow-hidden blur-[2px]">
             <img src={GALLERY_IMAGES[(current + 1) % GALLERY_IMAGES.length]} className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-16 space-x-3">
        {GALLERY_IMAGES.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${current === i ? 'w-10 bg-conclave-gold' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
