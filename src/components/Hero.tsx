import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { openWhatsAppOrder } from '../utils/whatsapp';

interface HeroProps {
  onExploreProducts?: () => void;
  onDiscoverStory?: () => void;
  onOrderNow?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onDiscoverStory, onOrderNow }) => {
  const handleOrder = () => {
    if (onOrderNow) {
      onOrderNow();
    } else {
      openWhatsAppOrder();
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] lg:min-h-screen flex flex-col justify-end lg:justify-center lg:items-center pt-24 sm:pt-32 pb-8 sm:pb-12 lg:pb-24 overflow-hidden">
      
      {/* Background Hero Image (aroosa_mobile_mint_studio.png on mobile and aroosa_dreamy_ad.png on desktop) */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full block">
          <source media="(max-width: 768px)" srcSet={`${import.meta.env.BASE_URL}images/aroosa_mobile_mint_studio.png`} />
          <img
            src={`${import.meta.env.BASE_URL}images/aroosa_dreamy_ad.png`}
            alt="Aroosa Wet Wipes Dreamy Advertisement"
            className="w-full h-full object-cover object-center select-none"
          />
        </picture>
        
        {/* Mobile Gradients */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950/70 via-slate-950/25 to-transparent lg:hidden pointer-events-none" />
        <div className="absolute inset-x-0 bottom-8 h-3/5 bg-gradient-to-t from-slate-950/85 via-slate-950/50 to-transparent lg:hidden pointer-events-none" />

        {/* Desktop Gradients: Subtle dark mist on the left for maximum text contrast against dreamy image */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/35 to-transparent pointer-events-none max-w-3xl" />

        {/* Bottom Blend Gradient (Mobile & Desktop): Smoothly melts into #FAF8F5 with a soft ambient drop shadow */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 lg:h-40 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-4 shadow-[0_20px_35px_rgba(0,0,0,0.14)] pointer-events-none z-10" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        
        {/* MOBILE VIEW (Logo, Headline, Subtitle, 2 stacked pill buttons) */}
        <div className="lg:hidden flex flex-col justify-end space-y-3.5 max-w-md mx-auto text-left">
          
          {/* Brand Logo on Hero */}
          <div className="inline-block mb-1">
            <img
              src={`${import.meta.env.BASE_URL}images/Aroosa_logo_light_blue_transparent.png`}
              alt="Aroosa"
              className="h-8 sm:h-9 w-auto object-contain drop-shadow-md select-none"
            />
          </div>

          {/* Main Headline: Pure · Soft · Gentle */}
          <h1 className="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-[1.15] drop-shadow-sm">
            Pure · Soft · Gentle
          </h1>

          {/* Subtitle description */}
          <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed max-w-sm drop-shadow-xs">
            Aroosa baby wipes are made with 99% pure water, chamomile, vitamin E and aloe — keeping your baby's skin clean, soft and protected.
          </p>

          {/* Two stacked pill action buttons */}
          <div className="pt-2 space-y-3 w-full">
            {/* Primary Action Button: Direct Order */}
            <button
              type="button"
              onClick={handleOrder}
              className="w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.98] text-white font-bold text-sm sm:text-base shadow-xl flex items-center justify-between transition-all group cursor-pointer"
            >
              <span>Order</span>
              <ChevronRight className="w-4 h-4 stroke-[2.5] text-white group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Action Button */}
            <a
              href="#product-details"
              onClick={onExploreProducts}
              className="w-full py-3.5 px-6 rounded-full bg-[#273240]/85 hover:bg-[#273240]/95 active:scale-[0.98] backdrop-blur-md border border-white/15 text-white font-medium text-sm sm:text-base shadow-lg flex items-center justify-between transition-all group"
            >
              <span>View Product Anatomy</span>
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
              Aroosa baby wipes are made with 99% pure water, chamomile, vitamin E and aloe — keeping your baby's skin clean, soft and protected.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                type="button"
                onClick={handleOrder}
                className="inline-flex items-center pl-6 pr-2.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-base shadow-xl transition-all duration-200 group cursor-pointer"
              >
                <span className="mr-3">Order</span>
                <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </span>
              </button>

              <a
                href="#product-details"
                onClick={onExploreProducts}
                className="inline-flex items-center px-6 py-2.5 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 text-white font-medium text-base backdrop-blur-md border border-white/30 shadow-lg transition-all duration-200"
              >
                <span>View Anatomy</span>
              </a>
            </div>

            {/* Trust feature tags below button */}
            <div className="pt-4 flex items-center gap-6 text-xs text-white/85 font-medium">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#E3F942]" />
                <span>99.99% Pure Water</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>Dermatologically Tested</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>100% Cotton Feel</span>
              </div>
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
