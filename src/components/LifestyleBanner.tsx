import React from 'react';

export const LifestyleBanner: React.FC = () => {
  return (
    <section className="relative h-[480px] sm:h-[540px] w-full overflow-hidden my-12 select-none">
      
      {/* Background Banner Image — Hand pulling soft wipe in cozy nursery */}
      <img
        src={`${import.meta.env.BASE_URL}images/wipes_hand_pull.jpg`}
        alt="Aroosa gentle baby wipes in cozy nursery"
        className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
      />

      {/* Soft Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-900/30 to-transparent z-10" />
      
      {/* Top & Bottom blends into surrounding #FAF8F5 page */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5]/60 to-transparent pointer-events-none z-15" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/60 to-transparent pointer-events-none z-15" />

      {/* Floating Animated Bubbles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="bubble w-10 h-10 left-[15%] bottom-0 animate-float" style={{ animationDelay: '1s' }} />
        <div className="bubble w-14 h-14 left-[45%] bottom-0 animate-float" style={{ animationDelay: '3s' }} />
        <div className="bubble w-8 h-8 left-[75%] bottom-0 animate-float" style={{ animationDelay: '0s' }} />
      </div>

      {/* Centered Overlay Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl bg-white/85 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-white/90 shadow-2xl text-left space-y-4">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-teal-100/90 text-teal-800 text-xs font-semibold uppercase tracking-wider">
            <span>PURE COMFORT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-slate-900 tracking-tight leading-tight">
            Little moments.{' '}
            <span className="text-teal-700 block font-sans font-light">Gentle care.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Every smile, giggly clean-up, and bedtime wipe is a gentle memory in the making. Formulated with pure love for your baby.
          </p>
        </div>
      </div>
    </section>
  );
};
