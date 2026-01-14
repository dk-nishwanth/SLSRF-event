
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl py-2' : 'bg-transparent py-8'}`}>
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[2px] bg-conclave-gold transition-all duration-100 z-50"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-conclave-gold rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
              <svg viewBox="0 0 100 100" className="relative w-full h-full fill-white transition-all duration-700 group-hover:rotate-[180deg]">
                <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="1" fill="none" opacity="0.2" />
                <path d="M50 5 L70 50 L50 95 L30 50 Z" fill="white" opacity="0.8" />
                <path d="M5 50 L50 70 L95 50 L50 30 Z" fill="white" opacity="0.4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white tracking-[-0.05em] leading-none uppercase">
                SLSRF
              </span>
              <span className="text-[9px] font-black text-conclave-gold tracking-[0.4em] leading-none uppercase mt-1.5 opacity-80">
                LIFE SCIENCE RESEARCH
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-[11px] font-bold text-white/70 hover:text-conclave-gold transition-all tracking-[0.25em] relative group py-2 cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-conclave-gold transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:text-conclave-gold transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center space-y-10 animate-in fade-in slide-in-from-top-20 duration-500">
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform">
            <X className="w-10 h-10" />
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                const target = document.querySelector(link.href);
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="text-4xl font-black text-white hover:text-conclave-gold tracking-tighter transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;