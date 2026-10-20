import React from 'react';
import { Feather, Sparkles, ShieldCheck, Clock, RefreshCw, Layers } from 'lucide-react';


export const ProductFeatures: React.FC = () => {
  const features = [
    {
      icon: Feather,
      title: 'Soft Texture',
      description: 'Engineered with high-density plush cotton sheets that glide smoothly without friction on baby skin.',
    },
    {
      icon: Sparkles,
      title: 'Gentle Cleansing',
      description: 'Formulated for mild, comforting cleanups during diaper changes, meal times, and messy play.',
    },
    {
      icon: ShieldCheck,
      title: 'Baby-Friendly Care',
      description: 'Created specifically with delicate newborn and infant skin needs in mind.',
    },
    {
      icon: Clock,
      title: 'Convenient Everyday Use',
      description: 'Easy single-sheet pull mechanism with a snap-close lid for busy moms and dads on the move.',
    },
    {
      icon: RefreshCw,
      title: 'Fresh and Clean Feel',
      description: 'Provides soothing moisture that leaves baby skin feeling soft, clean, and refreshed.',
    },
    {
      icon: Layers,
      title: 'Carefully Considered Materials',
      description: 'Selected for optimal softness, strength, and gentle absorbency in every single sheet.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-cream-50 via-sky-50/50 to-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-teal-800 mb-3">
            THOUGHTFUL DETAILS · AROOSA BABY CARE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Aroosa Wipes Features: Gentle by Nature, Thoughtful by Design
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Every feature of Aroosa baby wipes is crafted to make your daily routine softer, simpler, and more reassuring.
          </p>
        </div>

        {/* Feature Cards Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="h-full glass-card rounded-3xl p-8 border border-white/90 shadow-xs hover:shadow-soft hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 text-sky-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#006059] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-display mb-2 group-hover:text-sky-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                  <a href="#product-details" className="mt-6 pt-4 border-t border-sky-100/70 flex items-center text-xs font-medium text-sky-600 group-hover:text-sky-800">
                    <span>Explore specifications</span>
                    <span className="ml-1 group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                  </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
