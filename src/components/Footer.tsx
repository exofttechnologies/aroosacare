import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, Check, Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [bottomEmail, setBottomEmail] = useState('');
  const [bottomSubscribed, setBottomSubscribed] = useState(false);

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
          BOTTOM SECTION: Aroosa Black & White Modern Theme Footer
          ======================================================== */}
      <section className="bg-black text-white pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
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

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-normal">
                Pure, gentle baby wipes crafted with 99.9% ultra-purified water and organic plant fibers. Dermatologically tested for your newborn&apos;s delicate skin.
              </p>

              {/* Mini White Email Capsule with Sleek Black Button */}
              <div className="pt-2">
                <form
                  onSubmit={handleBottomSubscribe}
                  className="bg-white rounded-xl sm:rounded-2xl p-1 shadow-md flex items-center max-w-xs focus-within:ring-2 focus-within:ring-neutral-400"
                >
                  <input
                    type="email"
                    required
                    value={bottomEmail}
                    onChange={(e) => setBottomEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none bg-transparent"
                  />
                  <button
                    type="submit"
                    aria-label="Submit email"
                    className="flex-shrink-0 bg-black hover:bg-neutral-800 active:scale-95 text-white rounded-lg sm:rounded-xl p-2 transition-transform duration-200 shadow-sm cursor-pointer"
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
              <h4 className="text-xs font-bold text-white tracking-wider uppercase font-display">
                What We Have
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white group-hover:scale-125 transition-transform" />
                    <span>Pure Wet Wipes (72 Wipes Pack)</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white group-hover:scale-125 transition-transform" />
                    <span>99.9% Ultra-Purified Water Wipes</span>
                  </a>
                </li>
                <li>
                  <a href="#card-showcase" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white group-hover:scale-125 transition-transform" />
                    <span>100% Plant-Based Bamboo Fiber</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white group-hover:scale-125 transition-transform" />
                    <span>Organic Chamomile &amp; Aloe Vera</span>
                  </a>
                </li>
                <li>
                  <a href="#story" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white group-hover:scale-125 transition-transform" />
                    <span>Sensitive Newborn Diaper Care</span>
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-white group-hover:scale-125 transition-transform" />
                    <span>Double Moisture Lock Lid Cap</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 (span 3): Customer Care with Phone & Mail Icons */}
            <div className="lg:col-span-3 text-left space-y-3.5">
              <h4 className="text-xs font-bold text-white tracking-wider uppercase font-display">
                Customer Care
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                {/* Phone Contact */}
                <li>
                  <a
                    href="tel:8714514447"
                    className="flex items-center gap-2.5 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all flex-shrink-0 shadow-xs">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-400 block uppercase tracking-wider font-semibold">Call or WhatsApp</span>
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
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all flex-shrink-0 shadow-xs">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-400 block uppercase tracking-wider font-semibold">Email Support</span>
                      <span className="font-medium text-white break-all">info.thearoosa@gmail.com</span>
                    </div>
                  </a>
                </li>

                <li className="text-[11px] text-neutral-400 pt-1 leading-relaxed border-t border-white/10 mt-2">
                  Mon – Sat · 9:00 AM – 6:00 PM IST
                </li>
              </ul>
            </div>

            {/* Column 4 (span 2): Social Links */}
            <div className="lg:col-span-2 text-left space-y-3.5">
              <h4 className="text-xs font-bold text-white tracking-wider uppercase font-display">
                Connect
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
                {/* Instagram Icon */}
                <li>
                  <a
                    href="https://www.instagram.com/aroosacare/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full p-[2px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-sm group-hover:shadow-[0_0_14px_rgba(238,42,123,0.55)] group-hover:scale-110 transition-all flex-shrink-0">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-white group-hover:text-white transition-colors block leading-tight">Instagram</span>
                      <span className="text-[10px] text-neutral-400 font-normal">@aroosacare</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2.5 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all flex-shrink-0">
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
                    <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all flex-shrink-0">
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
                    <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all flex-shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright centered text */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <p>© Copyright 2026 by Aroosa Care. All rights reserved.</p>
            <div className="flex items-center gap-6 text-xs text-neutral-400">
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

