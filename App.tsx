
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FutureCode from './components/FutureCode';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Agenda from './components/Agenda';
import TransformsSection from './components/TransformsSection';
import SpeakersSection from './components/SpeakersSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col selection:bg-conclave-gold selection:text-black">
      <Header isScrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <FutureCode />
        <AboutUs />
        <Gallery />
        <Agenda />
        <TransformsSection />
        <SpeakersSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;