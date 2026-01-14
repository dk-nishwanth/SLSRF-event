
import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const Agenda: React.FC = () => {
  const schedule = [
    {
      time: '09:00 AM',
      title: 'Inaugural Plenary: The Semporul Vision',
      speaker: 'Thiru. Jeyachandran Srinivasan',
      location: 'Grand Hall A',
      type: 'Keynote'
    },
    {
      time: '11:30 AM',
      title: 'Noetic Research & Cognitive Resilience',
      speaker: 'Panel of Noetic Scientists',
      location: 'Foundation Lab',
      type: 'Scientific Track'
    },
    {
      time: '02:30 PM',
      title: 'STEM Eco-Tech & PhytoVault Demo',
      speaker: 'Environmental Team',
      location: 'Regenerative Hub',
      type: 'Workshop'
    }
  ];

  return (
    <section id="agenda" className="bg-black py-32 overflow-hidden scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="space-y-6">
            <h2 className="text-white text-6xl md:text-8xl font-black tracking-[-0.05em] uppercase leading-[0.9]">Event<br/><span className="text-conclave-gold">Agenda.</span></h2>
            <div className="w-20 h-1.5 bg-conclave-gold"></div>
          </div>
          <div className="flex items-center space-x-4 bg-white/5 border border-white/10 px-8 py-4 rounded-full">
            <Calendar className="w-5 h-5 text-conclave-gold" />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-white">February 17, 2026</span>
          </div>
        </div>

        <div className="space-y-6">
          {schedule.map((item, idx) => (
            <div key={idx} className="group relative flex flex-col md:flex-row items-center bg-[#0a0a0a] border border-white/5 hover:border-conclave-gold/30 rounded-2xl overflow-hidden transition-all duration-500">
              {/* Time Pillar */}
              <div className="w-full md:w-60 bg-white/5 p-10 flex flex-col justify-center items-center md:items-start space-y-2 group-hover:bg-conclave-gold transition-colors duration-500">
                 <div className="flex items-center space-x-2 text-conclave-gold group-hover:text-black font-black">
                   <Clock className="w-4 h-4" />
                   <span className="text-lg tracking-tighter">{item.time}</span>
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-black/60">{item.type}</span>
              </div>

              {/* Content Area */}
              <div className="flex-grow p-10 md:p-12 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-conclave-gold transition-colors uppercase tracking-tight leading-none">{item.title}</h3>
                  <p className="text-white/40 text-sm font-bold tracking-widest uppercase">{item.speaker}</p>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-white/50 text-xs font-bold uppercase tracking-widest">
                    <MapPin className="w-4 h-4 text-conclave-gold" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button className="w-14 h-14 rounded-full border border-conclave-gold flex items-center justify-center text-conclave-gold hover:bg-conclave-gold hover:text-black transition-all">
                    <ArrowRight className="w-6 h-6" />
                 </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="text-[11px] font-black uppercase tracking-[0.5em] text-white/40 hover:text-conclave-gold transition-colors">View Full Interactive Schedule</button>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
