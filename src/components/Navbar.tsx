import React, { useState, useEffect } from 'react';
import { ArrowRight, Search } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'products', 'story', 'contact'];
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
    { name: 'Home',     href: '#hero',     id: 'home' },
    { name: 'About',    href: '#story',    id: 'story' },
    { name: 'Products', href: '#products', id: 'products' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 sm:py-4 pointer-events-none'
            : 'bg-gradient-to-b from-slate-950/60 via-slate-950/25 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between pointer-events-auto">
            
            {/* Left: Aroosa Light Blue Transparent Brand Logo (Hidden when scrolled) */}
            <div
              className={`transition-all duration-300 ${
                isScrolled
                  ? 'opacity-0 -translate-x-6 pointer-events-none invisible h-0 w-0'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              <a href="#hero" className="flex items-center group focus:outline-none">
                <img
                  src={`${import.meta.env.BASE_URL}images/Aroosa_logo_light_blue_transparent.png`}
                  alt="Aroosa"
                  className="h-8 sm:h-10 md:h-11 w-auto object-contain drop-shadow-md select-none transition-transform hover:scale-105"
                />
              </a>
            </div>

            {/* Center: Glass Pill Navigation Capsule (Desktop - Hidden when scrolled) */}
            <nav
              className={`hidden lg:inline-flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-1.5 shadow-sm transition-all duration-300 ${
                isScrolled
                  ? 'opacity-0 scale-95 pointer-events-none invisible h-0 w-0'
                  : 'opacity-100 scale-100'
              }`}
            >
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

            {/* Right Side: Search + Shop Now (Hidden when scrolled) + Hamburger Toggle */}
            <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
              
              {/* Search Button - Hidden on scroll in BOTH desktop & mobile */}
              {!isScrolled && (
                <button
                  onClick={onOpenSearch}
                  aria-label="Search"
                  className="p-2 sm:p-2.5 rounded-full text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200 focus:outline-none cursor-pointer"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}

              {/* Shop Now Pill Button (Desktop & Tablet) - Hidden on scroll */}
              {!isScrolled && (
                <a
                  href="#products"
                  className="hidden sm:inline-flex items-center pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm shadow-md transition-all duration-200 group"
                >
                  <span className="mr-2">Shop Now</span>
                  <span className="w-7 h-7 rounded-full bg-[#002D3D] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                </a>
              )}

              {/* Hamburger Button:
                  - In scrolled view: visible on BOTH desktop and mobile!
                  - At top: visible on mobile, optional on desktop
              */}
              <button
                id="hamburger-btn"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen((prev) => !prev);
                }}
                aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${
                  isScrolled
                    ? 'bg-slate-900/85 hover:bg-slate-900 text-white shadow-xl border border-white/25 ring-2 ring-black/10'
                    : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                } active:scale-95 backdrop-blur-md flex flex-col items-center justify-center gap-[4.5px] transition-all focus:outline-none shadow-sm cursor-pointer relative z-50 ${
                  isScrolled ? 'block' : 'lg:hidden'
                }`}
              >
                <span className={`w-[18px] h-[2px] bg-white rounded-full transition-all duration-300 block pointer-events-none ${
                  menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
                }`} />
                <span className={`w-[18px] h-[2px] bg-white rounded-full transition-all duration-300 block pointer-events-none ${
                  menuOpen ? 'opacity-0 scale-x-0' : ''
                }`} />
                <span className={`w-[18px] h-[2px] bg-white rounded-full transition-all duration-300 block pointer-events-none ${
                  menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
                }`} />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Floating Pill Menu Capsule - Available on both Mobile and Desktop when Hamburger is opened */}
      {menuOpen && (
        <>
          {/* Click-outside backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/25 backdrop-blur-xs transition-opacity"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            aria-hidden="true"
          />

          {/* Floating Pill Capsule directly aligned below the hamburger button */}
          <div
            className="fixed right-4 sm:right-6 lg:right-8 top-16 sm:top-20 z-50 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-full px-5 py-3 sm:py-2.5 shadow-2xl border border-black/10 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 select-none">
              {[
                { name: 'HOME', href: '#hero', id: 'home' },
                { name: 'ABOUT', href: '#story', id: 'story' },
                { name: 'PRODUCTS', href: '#products', id: 'products' },
              ].map((link) => {
                const isActive = activeSection === link.id || (link.id === 'home' && activeSection === 'hero');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="relative text-xs sm:text-[13px] font-bold tracking-[0.14em] text-slate-900 uppercase py-1 group transition-colors"
                  >
                    <span className="relative inline-block">
                      {link.name}
                      {/* Active indicator horizontal line */}
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
