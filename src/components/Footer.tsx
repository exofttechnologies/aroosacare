import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, Check, Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [topEmail, setTopEmail] = useState('');
  const [bottomEmail, setBottomEmail] = useState('');
  const [topSubscribed, setTopSubscribed] = useState(false);
  const [bottomSubscribed, setBottomSubscribed] = useState(false);

  const handleTopSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (topEmail.trim()) {
      setTopSubscribed(true);
      setTimeout(() => setTopSubscribed(false), 4000);
      setTopEmail('');
    }
  };

  const handleBottomSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (bottomEmail.trim()) {
      setBottomSubscribed(true);
      setTimeout(() => setBottomSubscribed(false), 4000);
      setBottomEmail('');
    }
  };

  return (
    <footer className="w-full relative z-10 select-none">
      
      {/* ========================================================
          TOP SECTION: Mint Green Newsletter Banner
          Exact style from reference screenshot
          ======================================================== */}
      <section className="bg-[#CFEADB] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left: Headline & Subtitle */}
          <div className="text-left max-w-xl">
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#1A4334] tracking-tight leading-tight">
              Subscribe To Our Newsletter
            </h3>
            <p className="text-sm sm:text-base text-[#386453] mt-2.5 leading-relaxed font-normal">
              Sign up today. Stay updated with gentle baby care tips, pediatric advice, and exclusive nursery savings.
            </p>
          </div>

          {/* Right: Pill Capsule Input with Orange "Get Listed" Button */}
          <div className="w-full lg:w-auto flex-shrink-0">
            <form
              onSubmit={handleTopSubscribe}
              className="bg-white rounded-full p-1.5 sm:p-2 shadow-sm border border-[#1A4334]/10 flex items-center w-full max-w-md mx-auto lg:max-w-lg"
            >
              <input
                type="email"
                required
                value={topEmail}
                onChange={(e) => setTopEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full px-4 sm:px-6 py-2.5 text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
              />
              <button
                type="submit"
                className="flex-shrink-0 bg-[#E95331] hover:bg-[#d64726] active:scale-95 text-white font-bold text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-md cursor-pointer whitespace-nowrap"
              >
                {topSubscribed ? (
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Subscribed
                  </span>
                ) : (
                  'Get Listed'
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ========================================================
          BOTTOM SECTION: Deep Forest / Sage Green Footer
          Exact layout & typography from reference screenshot
          ======================================================== */}
      <section className="bg-[#387B66] text-white pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
            
            {/* Column 1 (span 4): Brand Logo + Subtitle + Mini Email Box */}
            <div className="lg:col-span-4 space-y-4 text-left">
              
              {/* Brand Logo with leaf mark */}
              <a href="#hero" className="inline-flex items-center gap-2 group">
                <span className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white flex items-center">
                  <span className="text-xl mr-1 text-[#9EE8C7]">☘</span>
                  Aroosa
                </span>
              </a>

              <p className="text-xs sm:text-sm text-[#D7ECE2] leading-relaxed max-w-sm font-normal">
                No need to worry, we'll help you make sense of it all. Pure, gentle baby wipes made for softest baby care.
              </p>

              {/* Mini White Email Capsule with Orange Arrow Button */}
              <div className="pt-2">
                <form
                  onSubmit={handleBottomSubscribe}
                  className="bg-white rounded-xl sm:rounded-2xl p-1 shadow-md flex items-center max-w-xs"
                >
                  <input
                    type="email"
                    required
                    value={bottomEmail}
                    onChange={(e) => setBottomEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                  />
                  <button
                    type="submit"
                    aria-label="Submit email"
                    className="flex-shrink-0 bg-[#E95331] hover:bg-[#d64726] active:scale-95 text-white rounded-lg sm:rounded-xl p-2 transition-transform duration-200 shadow-sm cursor-pointer"
                  >
                    {bottomSubscribed ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </button>
                </form>
              </div>

            </div>

            {/* Column 2 (span 2): About Links */}
            <div className="lg:col-span-2 text-left space-y-3.5">
              <h4 className="text-sm font-bold text-white tracking-wider">
                About
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#D7ECE2]">
                <li><a href="#products" className="hover:text-white transition-colors">What We Offer</a></li>
                <li><a href="#card-showcase" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
              </ul>
            </div>

            {/* Column 3 (span 2): Solutions Links */}
            <div className="lg:col-span-2 text-left space-y-3.5">
              <h4 className="text-sm font-bold text-white tracking-wider">
                Solutions
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#D7ECE2]">
                <li><a href="#products" className="hover:text-white transition-colors">Pure Water</a></li>
                <li><a href="#card-showcase" className="hover:text-white transition-colors">Plant Fibers</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Sensitive Care</a></li>
                <li><a href="#story" className="hover:text-white transition-colors">Pediatrician Approved</a></li>
              </ul>
            </div>

            {/* Column 4 (span 2): Customer Care Contact */}
            <div className="lg:col-span-2 text-left space-y-3.5">
              <h4 className="text-sm font-bold text-white tracking-wider">
                Customer Care
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#D7ECE2]">
                <li>
                  <a
                    href="tel:8714514447"
                    className="flex items-center gap-1.5 hover:text-white transition-colors group"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#9EE8C7]" />
                    <span>8714514447</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info.thearoosa@gmail.com"
                    className="flex items-start gap-1.5 hover:text-white transition-colors group"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#9EE8C7] mt-0.5 flex-shrink-0" />
                    <span className="break-all">info.thearoosa@gmail.com</span>
                  </a>
                </li>
                <li className="text-[11px] text-[#A6D5C0] pt-1">
                  Mon – Sat · 9 AM to 6 PM
                </li>
              </ul>
            </div>

            {/* Column 5 (span 2): Social with Real Instagram Icon */}
            <div className="lg:col-span-2 text-left space-y-3.5">
              <h4 className="text-sm font-bold text-white tracking-wider">
                Social
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#D7ECE2]">
                <li>
                  <a
                    href="https://instagram.com/thearoosa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    {/* Real Instagram Official Camera Glyph */}
                    <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-white stroke-[2] stroke-linecap-round stroke-linejoin-round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </div>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-[#9EE8C7]" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4 text-[#9EE8C7]" />
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#9EE8C7]" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright centered text matching reference */}
          <div className="pt-8 border-t border-white/15 text-center text-xs text-[#D7ECE2]/80">
            <p>© Copyright 2026 by Aroosa Care. All rights reserved.</p>
          </div>

        </div>
      </section>

    </footer>
  );
};
