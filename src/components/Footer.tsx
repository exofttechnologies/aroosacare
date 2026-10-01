import React from 'react';
import { Cloud, Sparkles, Heart, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-sky-100 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-sky-100">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <a href="#hero" className="inline-flex items-center group">
              <img
                src="/images/Aroosa_logo_light_blue_transparent.png"
                alt="Aroosa Care"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-sm text-brand-slate max-w-sm font-normal leading-relaxed">
              Made with care for delicate baby skin, from the first wipe to every little adventure. Pure, soft, and comforting.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-all duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-all duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-sky-50 text-sky-600 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-all duration-200">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="text-left space-y-3">
            <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider font-display">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-slate">
              <li><a href="#hero" className="hover:text-sky-600 transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-sky-600 transition-colors">Products</a></li>
              <li><a href="#story" className="hover:text-sky-600 transition-colors">Our Story</a></li>
              <li><a href="#why-us" className="hover:text-sky-600 transition-colors">Why Us</a></li>
              <li><a href="#coming-soon" className="hover:text-sky-600 transition-colors">Coming Soon</a></li>
              <li><a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Care Column */}
          <div className="text-left space-y-3">
            <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider font-display">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-slate">
              <li><a href="#contact" className="hover:text-sky-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">FAQ & Answers</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Returns & Refunds</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="text-left space-y-3">
            <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider font-display">
              Legal & Trust
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-slate">
              <li><a href="#" className="hover:text-sky-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-sky-600 transition-colors">Cookie Preferences</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-muted gap-4">
          <p>© 2026 Aroosa Care. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-sky-500 fill-sky-400 inline" /> for little ones everywhere
          </p>
        </div>

      </div>
    </footer>
  );
};
