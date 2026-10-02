import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, Check, Facebook, Twitter, Linkedin, Sparkles } from 'lucide-react';

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
    <footer className="w-full relative z-10 select-none font-sans">
      
      {/* ========================================================
          TOP SECTION: Soft Baby Blue / Sky Ice Newsletter Banner
          Styled with Aroosa's signature blue palette & modern Outfit font
          ======================================================== */}
      <section className="bg-gradient-to-r from-[#DDF2FD] via-[#E8F5FD] to-[#D8EEFD] border-t border-sky-200/60 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left: Headline & Subtitle with new modern typography */}
          <div className="text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-sky-200/80 text-[#002D3D] text-[11px] font-semibold uppercase tracking-wider mb-2.5 shadow-2xs">
              <Sparkles className="w-3 h-3 text-sky-600" />
              <span>Join The Aroosa Family</span>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-display font-bold text-[#002D3D] tracking-tight leading-tight">
              Subscribe To Our Newsletter
            </h3>
            <p className="text-sm sm:text-base text-[#0C4A6E] mt-2.5 leading-relaxed font-normal">
              Sign up today. Stay updated with gentle baby care tips, pediatric advice, and exclusive nursery savings.
            </p>
          </div>

          {/* Right: Pill Capsule Input with Orange "Get Listed" Button */}
          <div className="w-full lg:w-auto flex-shrink-0">
            <form
              onSubmit={handleTopSubscribe}
              className="bg-white rounded-full p-1.5 sm:p-2 shadow-md border border-sky-300/40 flex items-center w-full max-w-md mx-auto lg:max-w-lg transition-all focus-within:ring-2 focus-within:ring-sky-400"
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
          BOTTOM SECTION: Aroosa Brand Deep Blue Footer
          Rich brand navy palette, modern fonts & detailed product offerings
          ======================================================== */}
      <section className="bg-gradient-to-b from-[#002D3D] to-[#001E2B] text-white pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#03445A]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
            
            {/* Column 1 (span 4): Brand Logo + Subtitle + Mini Email Box */}
            <div className="lg:col-span-4 space-y-4 text-left">
              
              {/* Official Aroosa Brand Logo */}
              <a href="#hero" className="inline-flex items-center gap-2 group">
                <img
                  src={`${import.meta.env.BASE_URL}images/Aroosa_logo_light_blue_transparent.png`}
                  alt="Aroosa Care"
                  className="h-9 sm:h-10 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                />
              </a>

              <p className="text-xs sm:text-sm text-sky-100/80 leading-relaxed max-w-sm font-normal">
                Pure, gentle baby wipes crafted with 99.9% ultra-purified water and organic plant fibers. Dermatologically tested for your newborn&apos;s delicate skin.
              </p>

              {/* Mini White Email Capsule with Orange Arrow Button */}
              <div className="pt-2">
                <form
                  onSubmit={handleBottomSubscribe}
                  className="bg-white rounded-xl sm:rounded-2xl p-1 shadow-md flex items-center max-w-xs focus-within:ring-2 focus-within:ring-sky-400"
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

            {/* Column 2 (span 3): What We Have (Detailed Products & Offerings) */}
            <div className="lg:col-span-3 text-left space-y-3.5">
              <h4 className="text-xs font-bold text-sky-200 tracking-wider uppercase font-display">
                What We Have
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-sky-100/80">
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                    <span>Pure Wet Wipes (72 Wipes Pack)</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                    <span>99.9% Ultra-Purified Water Wipes</span>
                  </a>
                </li>
                <li>
                  <a href="#card-showcase" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                    <span>100% Plant-Based Bamboo Fiber</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                    <span>Organic Chamomile &amp; Aloe Vera</span>
                  </a>
                </li>
                <li>
                  <a href="#story" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                    <span>Sensitive Newborn Diaper Care</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform" />
                    <span>Double Moisture Lock Lid Cap</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 (span 2): Customer Care with Phone & Mail Icons */}
            <div className="lg:col-span-3 text-left space-y-3.5">
              <h4 className="text-xs font-bold text-sky-200 tracking-wider uppercase font-display">
                Customer Care
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-sky-100/90">
                {/* Phone Contact */}
                <li>
                  <a
                    href="tel:8714514447"
                    className="flex items-center gap-2.5 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-300 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-400 transition-all flex-shrink-0 shadow-xs">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-sky-300/80 block uppercase tracking-wider font-semibold">Call or WhatsApp</span>
                      <span className="font-semibold text-white tracking-wide">8714514447</span>
                    </div>
                  </a>
                </li>

                {/* Mail Contact */}
                <li>
                  <a
                    href="mailto:info.thearoosa@gmail.com"
                    className="flex items-center gap-2.5 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-300 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-400 transition-all flex-shrink-0 shadow-xs">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-sky-300/80 block uppercase tracking-wider font-semibold">Email Support</span>
                      <span className="font-medium text-white break-all">info.thearoosa@gmail.com</span>
                    </div>
                  </a>
                </li>

                <li className="text-[11px] text-sky-200/70 pt-1 leading-relaxed border-t border-white/10 mt-2">
                  Mon – Sat · 9:00 AM – 6:00 PM IST
                </li>
              </ul>
            </div>

            {/* Column 4 (span 2): Social with New Instagram Icon Style */}
            <div className="lg:col-span-2 text-left space-y-3.5">
              <h4 className="text-xs font-bold text-sky-200 tracking-wider uppercase font-display">
                Connect
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-sky-100/80">
                {/* Redesigned Instagram Icon (Premium gradient ring & camera badge) */}
                <li>
                  <a
                    href="https://instagram.com/thearoosa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full p-[2px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-sm group-hover:shadow-[0_0_14px_rgba(238,42,123,0.55)] group-hover:scale-110 transition-all flex-shrink-0">
                      <div className="w-full h-full bg-[#002D3D] rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </div>
                    <span className="font-medium text-white group-hover:text-sky-200 transition-colors">Instagram</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2.5 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sky-300 group-hover:text-white transition-all flex-shrink-0">
                      <Facebook className="w-4 h-4" />
                    </div>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2.5 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sky-300 group-hover:text-white transition-all flex-shrink-0">
                      <Twitter className="w-4 h-4" />
                    </div>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2.5 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-sky-300 group-hover:text-white transition-all flex-shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright centered text */}
          <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-200/70">
            <p>© Copyright 2026 by Aroosa Care. All rights reserved.</p>
            <div className="flex items-center gap-6 text-xs text-sky-200/70">
              <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#hero" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#hero" className="hover:text-white transition-colors">Shipping &amp; Returns</a>
            </div>
          </div>

        </div>
      </section>

    </footer>
  );
};

