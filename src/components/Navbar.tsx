import React, { useState, useEffect } from 'react';
import { Search, MessageCircle } from 'lucide-react';
import { openWhatsAppOrder } from '../utils/whatsapp';

interface NavbarProps {
  onOpenSearch: () => void;
  onOrderNow?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOrderNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleOrder = () => {
    if (onOrderNow) {
      onOrderNow();
    } else {
      openWhatsAppOrder();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'product-details', 'story', 'contact'];
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
    { name: 'Home',            href: '#hero',            id: 'home' },
    { name: 'Product Details', href: '#product-details', id: 'product-details' },
    { name: 'About',           href: '#story',           id: 'story' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-white/10 shadow-lg py-2.5 sm:py-3.5'
            : 'bg-gradient-to-b from-slate-950/60 via-slate-950/25 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between pointer-events-auto">
            
            {/* Left: Aroosa Light Blue Transparent Brand Logo (Desktop only, hides on scroll) */}
            <div
              className={`hidden lg:flex items-center transition-all duration-300 ${
                isScrolled
                  ? 'opacity-0 -translate-x-4 pointer-events-none invisible w-0 overflow-hidden'
                  : 'opacity-100 translate-x-0 w-auto'
              }`}
            >
              <a href="#hero" className="flex items-center group focus:outline-none shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}images/Aroosa_logo_light_blue_transparent.png`}
                  alt="Aroosa"
                  className={`w-auto object-contain drop-shadow-md select-none transition-all duration-200 hover:scale-105 ${
                    isScrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-10 md:h-11'
                  }`}
                />
              </a>
            </div>

            {/* Center: Glass Pill Navigation Capsule (Desktop only - always centered) */}
            <nav
              className={`hidden lg:inline-flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 transition-all duration-300 rounded-full px-2 py-1.5 shadow-sm ${
                isScrolled
                  ? 'bg-white/10 backdrop-blur-md border border-white/15'
                  : 'bg-white/20 backdrop-blur-md border border-white/30'
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

            {/* Right: Desktop Search + Order Button (Desktop only, hides on scroll) */}
            <div
              className={`hidden lg:flex items-center space-x-2 sm:space-x-3 transition-all duration-300 ${
                isScrolled
                  ? 'opacity-0 translate-x-4 pointer-events-none invisible w-0 overflow-hidden'
                  : 'opacity-100 translate-x-0 w-auto'
              }`}
            >
              {/* Search Button */}
              <button
                onClick={onOpenSearch}
                aria-label="Search"
                className="p-2 sm:p-2.5 rounded-full text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200 focus:outline-none cursor-pointer"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Order Pill Button (Clean 'Order' label) */}
              <button
                type="button"
                onClick={handleOrder}
                className="inline-flex items-center pl-4 sm:pl-5 pr-2 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-200 group cursor-pointer hover:scale-105 active:scale-95 shrink-0"
              >
                <span className="mr-2">Order</span>
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/25 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
                </span>
              </button>
            </div>

            {/* Mobile Only: Hamburger Toggle (Visible ONLY on mobile, NEVER on desktop) */}
            <button
              id="hamburger-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((prev) => !prev);
              }}
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
              className="lg:hidden ml-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/30 active:scale-95 backdrop-blur-md flex flex-col items-center justify-center gap-[4.5px] transition-all focus:outline-none shadow-sm cursor-pointer relative z-50"
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
      </header>

      {/* Floating Pill Menu Capsule - Available on Mobile when Hamburger is opened */}
      {menuOpen && (
        <>
          {/* Click-outside backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/25 backdrop-blur-xs transition-opacity lg:hidden"
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            aria-hidden="true"
          />

          {/* Floating Pill Capsule directly aligned below the hamburger button */}
          <div
            className="fixed right-4 sm:right-6 top-16 sm:top-20 z-50 lg:hidden animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl px-5 py-3 shadow-2xl border border-black/10 flex flex-col items-center gap-3 select-none">
              {[
                { name: 'HOME', href: '#hero', id: 'home' },
                { name: 'PRODUCT DETAILS', href: '#product-details', id: 'product-details' },
                { name: 'ABOUT', href: '#story', id: 'story' },
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

              {/* Order Quick Button in Mobile Menu */}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  handleOrder();
                }}
                className="relative text-xs sm:text-[13px] font-bold tracking-[0.14em] text-emerald-700 uppercase py-1 flex items-center gap-1.5 hover:text-emerald-800 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 stroke-none" />
                <span>ORDER</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
