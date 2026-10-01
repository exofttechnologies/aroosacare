import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { ProductFeatures } from './components/ProductFeatures';
import { OurStory } from './components/OurStory';
import { LifestyleBanner } from './components/LifestyleBanner';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { Toast } from './components/Toast';

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">

      {/* Navbar */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Section */}
      <Hero
        onExploreProducts={() => {
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onDiscoverStory={() => {
          const el = document.getElementById('story');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Plain Text Product Intro — full bleed, no cards, clean editorial typography */}
      <section className="bg-[#FAF8F5] px-5 sm:px-8 lg:px-0 py-16 sm:py-20 lg:py-28">
        <div className="lg:px-12 xl:px-20 max-w-none">

          {/* Eyebrow */}
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 mb-5">
            Aroosa Care · Baby Wipes
          </p>

          {/* Two-column editorial layout on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

            {/* LEFT: Large display headline + stats */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-[64px] xl:text-[72px] font-bold text-slate-950 tracking-tight leading-[1.04] mb-0">
                High Quality<br />
                Softness.
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-500 tracking-tight leading-[1.1] mt-3">
                Pure · Soft · Gentle.
              </p>

              {/* Key stats */}
              <div className="mt-10 sm:mt-12 grid grid-cols-2 gap-x-8 gap-y-7">
                {[
                  { stat: '99.99%', label: 'Pure Water Formula' },
                  { stat: '100%', label: 'Cloud-Soft Pure Cotton' },
                  { stat: '4.9 ★', label: 'Rated by 348+ Parents' },
                  { stat: '72', label: 'Wipes Per Pack' },
                ].map(({ stat, label }) => (
                  <div key={label} className="flex flex-col border-t border-slate-200 pt-4">
                    <span className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight leading-none">{stat}</span>
                    <span className="text-xs sm:text-sm text-slate-500 mt-1.5 font-normal leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Rich body copy */}
            <div className="space-y-6 pt-1 lg:pt-3">
              <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
                Specially formulated for newborn and sensitive baby skin. Crafted with 99.99% pure water and ultra-soft cotton for comforting daily cleanups.
              </p>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                Every wipe is dermatologist-tested, fragrance-free, and completely free from alcohol and parabens — because your baby's first wipe matters as much as every wipe after.
              </p>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                Our formula blends pharmaceutical-grade chamomile extract, vitamin E, and cold-pressed aloe vera to naturally soothe, hydrate, and protect delicate skin — wash after wash, change after change.
              </p>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
                Thick, durable cotton fibres ensure a single wipe does the job with minimal effort. No tearing, no thinning, no mess — just a quiet, confident clean for every little moment.
              </p>

              {/* Feature bullets */}
              <ul className="space-y-2.5 pt-2">
                {[
                  'Dermatologist tested & approved for newborns',
                  'Zero fragrance, alcohol & parabens',
                  'Eco-friendly, biodegradable cotton fibres',
                  '72 soft & thick wipes — sealed for lasting moisture',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <ProductShowcase />

      {/* Product Features Section */}
      <ProductFeatures />

      {/* Our Story Section */}
      <OurStory />

      {/* Baby Lifestyle Visual Section */}
      <LifestyleBanner />

      {/* Footer */}
      <Footer />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onQuickView={() => {}}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

export default App;
