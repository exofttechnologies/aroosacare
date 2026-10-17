import React from 'react';

export const LifestyleBanner: React.FC = () => {
  return (
    <section className="relative h-[440px] sm:h-[520px] lg:h-[600px] w-full overflow-hidden my-0 py-0 select-none">
      
      {/* Background Banner Image — Aroosa Baby Wipes in Sunlit Forest */}
      <img
        src={`${import.meta.env.BASE_URL}images/aroosa_sunlit_forest.png`}
        alt="Aroosa gentle baby wipes in a pristine sunlit forest with clear spring water"
        className="w-full h-full object-cover object-center scale-100 sm:scale-105 transition-transform duration-1000"
      />

      {/* Soft Ambient Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20 z-10 pointer-events-none" />

      {/* Floating Animated Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="bubble w-10 h-10 left-[15%] bottom-0 animate-float" style={{ animationDelay: '1s' }} />
        <div className="bubble w-14 h-14 left-[45%] bottom-0 animate-float" style={{ animationDelay: '3s' }} />
        <div className="bubble w-8 h-8 left-[75%] bottom-0 animate-float" style={{ animationDelay: '0s' }} />
      </div>

      {/* Subtle Caption Pill at bottom left */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-8 sm:pb-12">
        <div className="bg-white/85 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/90 shadow-xl max-w-md text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-teal-900 mb-1">
            NATURE INSPIRED · PURE CARE
          </p>
          <h3 className="text-lg sm:text-xl font-serif text-slate-900 font-bold leading-tight">
            Pure as Spring Water. Soft as Morning Dew.
          </h3>
          <p className="text-xs text-slate-600 font-normal mt-1">
            Engineered with 99.9% reverse-osmosis purified water and plant-based cotton fibers for the gentlest newborn touch.
          </p>
        </div>
      </div>
    </section>
  );
};
