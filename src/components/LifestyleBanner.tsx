import React from 'react';
import { Sparkles } from 'lucide-react';

export const LifestyleBanner: React.FC = () => {
  return (
    <section className="relative h-[480px] sm:h-[540px] w-full overflow-hidden my-12">
      
      {/* Background Banner Image */}
      <img
        src={`${import.meta.env.BASE_URL}images/baby_lifestyle_banner.jpg`}
        alt="Baby care clouds and teddy bear visual advertisement"
        className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
      />

      {/* Soft Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900/40 via-sky-800/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-transparent to-white/40" />

      {/* Floating Animated Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="bubble w-10 h-10 left-[15%] bottom-0 animate-float" style={{ animationDelay: '1s' }} />
        <div className="bubble w-14 h-14 left-[45%] bottom-0 animate-float" style={{ animationDelay: '3s' }} />
        <div className="bubble w-8 h-8 left-[75%] bottom-0 animate-float" style={{ animationDelay: '0s' }} />
      </div>

      {/* Centered Overlay Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl glass-panel p-8 sm:p-12 rounded-4xl border border-white/80 shadow-soft-lg text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>PURE COMFORT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-brand-dark tracking-tight leading-tight">
            Little moments.{' '}
            <span className="text-sky-500 block">Gentle care.</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-slate font-normal leading-relaxed">
            Every smile, giggly clean-up, and bedtime wipe is a gentle memory in the making.
          </p>
        </div>
      </div>
    </section>
  );
};
