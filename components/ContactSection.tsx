
import React from 'react';
import { Phone, Mail, MapPin, ArrowRight, MessageSquare, Globe } from 'lucide-react';
import { PARTNERSHIP_ENQUIRIES, DELEGATE_REGISTRATION } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <div className="bg-black">
      {/* SECTION: LOCATION */}
      <section id="location" className="py-32 scroll-mt-24 border-t border-white/5 relative overflow-hidden">
        {/* Decorative Map Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 1000 1000" className="w-full h-full stroke-white fill-none stroke-[0.5]">
            <path d="M0 500 Q 250 250 500 500 T 1000 500" />
            <path d="M0 300 Q 250 50 500 300 T 1000 300" />
            <path d="M0 700 Q 250 450 500 700 T 1000 700" />
            <circle cx="500" cy="500" r="400" />
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-6">
              <h2 className="text-white text-6xl md:text-9xl font-black tracking-[-0.05em] leading-[0.85] uppercase">THE<br/><span className="text-conclave-gold">LOCALE.</span></h2>
              <div className="w-20 h-1.5 bg-conclave-gold"></div>
            </div>
            <p className="text-white/40 text-sm font-bold tracking-[0.4em] uppercase mb-4">Foundation Presence</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-12">
                <div className="flex gap-10 items-start group">
                   <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-conclave-gold group-hover:bg-conclave-gold group-hover:text-black transition-all duration-500 flex-shrink-0">
                     <MapPin className="w-8 h-8" />
                   </div>
                   <div className="space-y-3">
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em]">Physical HQ</p>
                      <p className="text-white font-black text-2xl leading-relaxed max-w-sm tracking-tight">
                        Unit - 2, Ground floor, B-wing Hetali Balkrishna CHSLD, Goregaon East, Mumbai - 400063
                      </p>
                   </div>
                </div>
                
                <div className="flex gap-10 items-start group">
                   <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-conclave-gold group-hover:bg-conclave-gold group-hover:text-black transition-all duration-500 flex-shrink-0">
                     <Globe className="w-8 h-8" />
                   </div>
                   <div className="space-y-3">
                      <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em]">Global Liaison</p>
                      <p className="text-white font-black text-2xl tracking-tight">Mumbai - Chennai - London - New York</p>
                   </div>
                </div>
             </div>

             <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1234567890!2d72.8561!3d19.1558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA5JzIwLjkiTiA3MsKwNTEnMjIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SLSRF Office Location - Goregaon East, Mumbai"
                />
             </div>
          </div>
        </div>
      </section>

      {/* SECTION: CONTACT */}
      <section id="contact" className="py-32 scroll-mt-24 bg-[#050505] border-t border-white/5 relative">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-6">
              <h2 className="text-white text-6xl md:text-9xl font-black tracking-[-0.05em] leading-[0.85] uppercase">INITIATE<br/><span className="text-conclave-gold">CONTACT.</span></h2>
              <div className="w-20 h-1.5 bg-conclave-gold"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Details Grid */}
            <div className="lg:col-span-5 space-y-12">
               <div className="bg-white/5 p-12 rounded-3xl border border-white/5 space-y-12">
                  <h3 className="text-white text-sm font-black uppercase tracking-[0.5em] flex items-center gap-4">
                    <MessageSquare className="w-5 h-5 text-conclave-gold" />
                    ENQUIRIES
                  </h3>
                  
                  <div className="space-y-10">
                    {PARTNERSHIP_ENQUIRIES.map((contact, i) => (
                      <div key={i} className="group space-y-4">
                        <h4 className="text-white text-2xl font-black tracking-tight group-hover:text-conclave-gold transition-colors">{contact.name}</h4>
                        <div className="flex flex-col gap-4">
                           <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-white/60 font-bold text-xs hover:text-white transition-all uppercase tracking-widest">
                             <Phone className="w-3.5 h-3.5 text-conclave-gold" /> {contact.phone}
                           </a>
                           <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-white/60 font-bold text-xs hover:text-white transition-all uppercase tracking-widest">
                             <Mail className="w-3.5 h-3.5 text-conclave-gold" /> {contact.email}
                           </a>
                        </div>
                      </div>
                    ))}

                    <div className="group space-y-4 pt-6 border-t border-white/10">
                      <h4 className="text-white text-2xl font-black tracking-tight group-hover:text-conclave-gold transition-colors">{DELEGATE_REGISTRATION.name}</h4>
                      <div className="flex flex-col gap-4">
                         <a href={`tel:${DELEGATE_REGISTRATION.phone}`} className="flex items-center gap-3 text-white/60 font-bold text-xs hover:text-white transition-all uppercase tracking-widest">
                           <Phone className="w-3.5 h-3.5 text-conclave-gold" /> {DELEGATE_REGISTRATION.phone}
                         </a>
                         <a href={`mailto:${DELEGATE_REGISTRATION.email}`} className="flex items-center gap-3 text-white/60 font-bold text-xs hover:text-white transition-all uppercase tracking-widest">
                           <Mail className="w-3.5 h-3.5 text-conclave-gold" /> {DELEGATE_REGISTRATION.email}
                         </a>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7">
               <div className="glass-card p-12 md:p-16 rounded-[40px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-conclave-gold/10 blur-[80px] -mr-20 -mt-20"></div>
                  <div className="relative z-10 space-y-10">
                    <h3 className="text-white text-3xl font-black tracking-tight uppercase">Message the Foundation</h3>
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                       <div className="grid sm:grid-cols-2 gap-8">
                          <div className="space-y-3">
                             <label className="text-conclave-gold text-[9px] font-black uppercase tracking-[0.4em]">Full Name</label>
                             <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-white placeholder:text-gray-600 focus:border-conclave-gold focus:bg-white/10 outline-none transition-all" />
                          </div>
                          <div className="space-y-3">
                             <label className="text-conclave-gold text-[9px] font-black uppercase tracking-[0.4em]">Phone</label>
                             <input type="text" placeholder="+91..." className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-white placeholder:text-gray-600 focus:border-conclave-gold focus:bg-white/10 outline-none transition-all" />
                          </div>
                       </div>
                       <div className="space-y-3">
                          <label className="text-conclave-gold text-[9px] font-black uppercase tracking-[0.4em]">Email Address</label>
                          <input type="email" placeholder="john@domain.com" className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-white placeholder:text-gray-600 focus:border-conclave-gold focus:bg-white/10 outline-none transition-all" />
                       </div>
                       <div className="space-y-3">
                          <label className="text-conclave-gold text-[9px] font-black uppercase tracking-[0.4em]">Your Enquiry</label>
                          <textarea rows={4} placeholder="Tell us how we can collaborate..." className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-white placeholder:text-gray-600 focus:border-conclave-gold focus:bg-white/10 outline-none transition-all resize-none"></textarea>
                       </div>
                       <button className="conclave-gradient w-full py-6 rounded-2xl text-white font-black uppercase tracking-[0.4em] text-xs shadow-[0_20px_40px_rgba(248,164,46,0.3)] hover:brightness-110 hover:-translate-y-1 transition-all flex items-center justify-center gap-4">
                          INITIATE DIALOGUE <ArrowRight className="w-5 h-5" />
                       </button>
                    </form>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-20 border-t border-white/5 text-center px-6">
         <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center space-x-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <svg viewBox="0 0 100 100" className="w-8 h-8 fill-white">
                <path d="M50 5 L70 50 L50 95 L30 50 Z" />
              </svg>
              <span className="text-white text-xs font-black tracking-widest uppercase">SLSRF Research</span>
            </div>
            
            <p className="text-white/20 text-[9px] font-black tracking-[0.5em] uppercase max-w-md leading-loose">
              © 2026 SEMPORUTKALAI LIFE SCIENCE RESEARCH FOUNDATION. ALL RIGHTS RESERVED.
            </p>
            
            <div className="flex gap-10 text-[9px] font-black text-white/30 tracking-[0.3em] uppercase">
               <a href="#" className="hover:text-conclave-gold transition-colors">Privacy</a>
               <a href="#" className="hover:text-conclave-gold transition-colors">Terms</a>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default ContactSection;
