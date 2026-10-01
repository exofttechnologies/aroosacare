import React from 'react';
import { Heart, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-sky-100 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-sky-100">
          
          {/* Brand Info & Real Instagram Icon */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <a href="#hero" className="inline-flex items-center group">
              <img
                src={`${import.meta.env.BASE_URL}images/Aroosa_logo_light_blue_transparent.png`}
                alt="Aroosa Care"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-sm text-slate-600 max-w-sm font-normal leading-relaxed">
              Made with care for delicate baby skin, from the first wipe to every little adventure. Pure, soft, and comforting.
            </p>

            {/* Real Instagram Official Gradient Icon */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com/thearoosa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Aroosa on Instagram"
                className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Official Instagram Camera SVG Glyph */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-[2] stroke-linecap-round stroke-linejoin-round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="text-left space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-serif">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li><a href="#hero" className="hover:text-teal-700 transition-colors">Home</a></li>
              <li><a href="#card-showcase" className="hover:text-teal-700 transition-colors">Featured Cards</a></li>
              <li><a href="#products" className="hover:text-teal-700 transition-colors">Products</a></li>
              <li><a href="#story" className="hover:text-teal-700 transition-colors">Our Story</a></li>
            </ul>
          </div>

          {/* Customer Care Contact Column */}
          <div className="text-left space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-serif">
              Customer Care
            </h4>
            <div className="space-y-3 text-sm text-slate-600">
              <a
                href="tel:8714514447"
                className="flex items-center gap-2.5 text-slate-800 hover:text-teal-700 font-medium transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                <span>+91 87145 14447</span>
              </a>

              <a
                href="mailto:info.thearoosa@gmail.com"
                className="flex items-center gap-2.5 text-slate-800 hover:text-teal-700 font-medium transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="break-all">info.thearoosa@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Aroosa Care. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-400 inline" /> for little ones everywhere
          </p>
        </div>

      </div>
    </footer>
  );
};
