import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HeroProps {
  onExploreProducts?: () => void;
  onDiscoverStory?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onDiscoverStory }) => {
  return (
    <section id="hero" className="relative min-h-[100dvh] lg:min-h-screen flex flex-col justify-end lg:justify-center lg:items-center pt-24 sm:pt-32 pb-8 sm:pb-12 lg:pb-24 overflow-hidden">
      
      {/* Background Hero Image (aroosa_mobile_hero.png on mobile and aroosa_hero_bg.png on desktop) */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full block">
          <source media="(max-width: 768px)" srcSet="/images/aroosa_mobile_hero.png" />
          <img
            src="/images/aroosa_hero_bg.png"
            alt="Aroosa Wet Wipes"
            className="w-full h-full object-cover object-top sm:object-center select-none"
          />
        </picture>
        
        {/* Mobile: Top gradient for header contrast and bottom gradient for text & CTA buttons contrast */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/65 via-slate-950/20 to-transparent lg:hidden pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent lg:hidden pointer-events-none" />

        {/* Desktop Gradients */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-sky-950/45 via-sky-900/20 to-transparent pointer-events-none max-w-2xl" />
        <div className="hidden lg:block absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAF8F5]/90 via-[#FAF8F5]/30 to-transparent pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        
        {/* MOBILE VIEW (Bottom-aligned, refined typography, 2 stacked pill buttons) */}
        <div className="lg:hidden flex flex-col justify-end space-y-3.5 max-w-md mx-auto text-left">
          
          {/* Main Headline: Pure · Soft · Gentle with Editorial Serif Font */}
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-[1.15] drop-shadow-sm">
            Pure · Soft · Gentle
          </h1>

          {/* Subtitle description */}
          <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed max-w-sm drop-shadow-xs">
            Aroosa baby wipes are made with 99% pure water, chamomile, vitamin E and aloe — keeping your baby's skin clean, soft and protected.
          </p>

          {/* Two stacked pill action buttons matching the mockup image */}
          <div className="pt-2 space-y-3 w-full">
            {/* Primary Action Button (Bright Neon Lime Pill with black text and right chevron) */}
            <a
              href="#products"
              onClick={onExploreProducts}
              className="w-full py-4 px-6 rounded-full bg-[#E3F942] hover:bg-[#d6ec34] active:scale-[0.98] text-slate-950 font-bold text-sm sm:text-base shadow-xl flex items-center justify-between transition-all group"
            >
              <span>Explore Products</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5] text-slate-950 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Action Button (Dark Slate Pill with border and right chevron as in mockup) */}
            <a
              href="#story"
              onClick={onDiscoverStory}
              className="w-full py-4 px-6 rounded-full bg-[#273240]/85 hover:bg-[#273240]/95 active:scale-[0.98] backdrop-blur-md border border-white/15 text-white font-medium text-sm sm:text-base shadow-lg flex items-center justify-between transition-all group"
            >
              <span>Discover Our Story</span>
              <ChevronRight className="w-4 h-4 stroke-[2] text-white/80 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
          <div className="col-span-7 xl:col-span-6 space-y-6 text-left">

            {/* Main Headline: Pure · Soft · Gentle */}
            <h1 className="text-6xl lg:text-[76px] font-serif font-normal text-white tracking-tight leading-[1.08] drop-shadow-sm">
              Pure · Soft · Gentle
            </h1>

            <p className="text-base lg:text-lg text-white/95 max-w-xl font-normal leading-relaxed drop-shadow-xs">
              Aroosa baby wipes are made with 99% water, chamomile, vitamin E and aloe — keeping your baby's skin clean, soft and protected.
            </p>

            <div className="pt-2">
              <a
                href="#products"
                onClick={onExploreProducts}
                className="inline-flex items-center pl-6 pr-2.5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-semibold text-base shadow-xl transition-all duration-200 group"
              >
                <span className="mr-3">Explore Products</span>
                <span className="w-8 h-8 rounded-full bg-[#002D3D] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </a>
            </div>
          </div>

          <div className="col-span-5 xl:col-span-6 pointer-events-none min-h-[350px]">
            {/* Ambient Spacer */}
          </div>
        </div>

      </div>

    </section>
  );
};
