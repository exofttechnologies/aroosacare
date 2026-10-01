import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Search, Sparkles, ChevronRight, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'products', 'story', 'why-us', 'coming-soon', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === 'hero' ? 'home' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: 'Home', href: '#hero', id: 'home', number: '01' },
    { name: 'About', href: '#story', id: 'story', number: '02' },
    { name: 'Products', href: '#products', id: 'products', number: '03' },
    { name: 'Why Aroosa', href: '#why-us', id: 'why-us', number: '04' },
    { name: 'Blog', href: '#coming-soon', id: 'coming-soon', number: '05' },
    { name: 'Contact', href: '#contact', id: 'contact', number: '06' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/85 backdrop-blur-md shadow-md py-3.5'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            
            {/* Left: Aroosa White Logo */}
            <a href="#hero" className="flex items-center gap-1.5 group focus:outline-none">
              <span className="text-white font-bold font-display text-2xl sm:text-3xl tracking-tight flex items-center">
                <span className="text-lg mr-1 text-white/90">☘</span>
                Aroosa
              </span>
            </a>

            {/* Center: Glass Pill Navigation Capsule (Desktop) */}
            <nav className="hidden lg:inline-flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-1.5 shadow-sm">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-xs sm:text-[13px] font-medium transition-all duration-200 px-4 py-1.5 rounded-full ${
                      isActive
                        ? 'bg-white text-slate-900 font-semibold shadow-xs'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right: Search + "Shop Now" Pill Button + Hamburger Menu Button */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-2 sm:p-2.5 rounded-full text-white/90 hover:text-white hover:bg-white/15 transition-colors focus:outline-none"
              >
                <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* Shop Now Pill Button (Desktop & Tablet) */}
              <a
                href="#products"
                className="hidden sm:inline-flex items-center pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm shadow-md transition-all duration-200 group"
              >
                <span className="mr-2">Shop Now</span>
                <span className="w-7 h-7 rounded-full bg-[#002D3D] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </a>

              {/* Mobile Hamburger Toggle Button - Circular with 3 horizontal bars matching mockup */}
              <button
                id="mobile-hamburger-btn"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileMenuOpen((prev) => !prev);
                }}
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                className="lg:hidden w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 backdrop-blur-md border border-white/30 flex flex-col items-center justify-center gap-[4.5px] transition-all focus:outline-none shadow-sm cursor-pointer relative z-50"
              >
                <span className={`w-[18px] h-[2px] bg-white rounded-full transition-all duration-300 block pointer-events-none ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`} />
                <span className={`w-[18px] h-[2px] bg-white rounded-full transition-all duration-300 block pointer-events-none ${
                  mobileMenuOpen ? 'opacity-0 scale-x-0' : ''
                }`} />
                <span className={`w-[18px] h-[2px] bg-white rounded-full transition-all duration-300 block pointer-events-none ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`} />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Horizontal Pill Capsule Menu - FIXED right below the header on the right side */}
      {mobileMenuOpen && (
        <>
          {/* Click-outside backdrop */}
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(false);
            }}
            aria-hidden="true"
          />

          {/* Floating Horizontal Pill Capsule directly below the header on the right side */}
          <div
            className="lg:hidden fixed right-4 sm:right-6 top-16 sm:top-20 z-50 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-full px-5 py-2.5 shadow-2xl border border-black/10 flex items-center gap-4 sm:gap-5 select-none">
              {[
                { name: 'HOME', href: '#hero', id: 'home' },
                { name: 'PROJECTS', href: '#products', id: 'products' },
                { name: 'CONTACT', href: '#contact', id: 'contact' },
              ].map((link) => {
                const isActive = activeSection === link.id || (link.id === 'home' && activeSection === 'hero');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative text-[11px] sm:text-xs font-bold tracking-[0.16em] text-slate-950 uppercase py-0.5 group transition-colors"
                  >
                    <span className="relative inline-block">
                      {link.name}
                      {/* Active & Hover horizontal strike line exactly like HOME in mockup image */}
                      <span
                        className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-slate-950 transition-all duration-200 ${
                          isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                        }`}
                      />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};
