import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Droplets, Feather, ShieldCheck, Heart, Sparkles, ArrowRight } from 'lucide-react';

interface CardItem {
  id: string;
  title: string;
  subtitle: string;
  badgeTag: string;
  isExactImage?: boolean;
  imageSrc: string;
  gradient: string;
  features: {
    icon: 'leaf' | 'water' | 'cotton' | 'shield' | 'heart' | 'sparkle';
    label: string;
  }[];
}

const CARDS: CardItem[] = [
  {
    id: 'pure-care',
    title: 'Pure Care for Little Ones',
    subtitle: "Aroosa wet wipes are made with 99% pure water, chamomile, vitamin E and aloe — keeping your baby's skin clean, soft and protected.",
    badgeTag: 'ORIGINAL FORMULA',
    isExactImage: true,
    imageSrc: `${import.meta.env.BASE_URL}images/aroosa_card_exact_1.jpg`,
    gradient: 'from-[#2AA5A8] via-[#1A8992] to-[#0A6770]',
    features: [
      { icon: 'leaf', label: 'ECO-FRIENDLY' },
      { icon: 'water', label: '99.99% PURE WATER' },
      { icon: 'cotton', label: 'PURE COTTON' },
    ],
  },
  {
    id: 'sensitive-skin',
    title: 'Ultra-Soft Newborn Touch',
    subtitle: 'Formulated specifically for delicate newborn and sensitive baby skin. Dermatologist tested with 0% alcohol and zero fragrance.',
    badgeTag: 'SENSITIVE SKIN',
    imageSrc: `${import.meta.env.BASE_URL}images/aroosa_pack_cropped.jpg`,
    gradient: 'from-[#0284C7] via-[#0369A1] to-[#075985]',
    features: [
      { icon: 'shield', label: '0% ALCOHOL' },
      { icon: 'water', label: 'pH 5.5 BALANCED' },
      { icon: 'heart', label: 'HYPOALLERGENIC' },
    ],
  },
  {
    id: 'plant-based',
    title: 'Earth-Kind Botanical Care',
    subtitle: 'Zero microplastics, zero harsh synthetics. 100% compostable plant fibers that naturally return to the soil.',
    badgeTag: '100% BIODEGRADABLE',
    imageSrc: `${import.meta.env.BASE_URL}images/aroosa_pack_cropped.jpg`,
    gradient: 'from-[#059669] via-[#047857] to-[#064E3B]',
    features: [
      { icon: 'leaf', label: '100% PLANT FIBERS' },
      { icon: 'cotton', label: 'PLASTIC-FREE' },
      { icon: 'sparkle', label: 'COMPOSTABLE' },
    ],
  },
  {
    id: 'aloe-chamomile',
    title: 'Deep Hydration & Soothing',
    subtitle: 'Infused with natural organic chamomile extract and soothing aloe vera to calm redness and lock in healthy moisture.',
    badgeTag: 'MOISTURE SHIELD',
    imageSrc: `${import.meta.env.BASE_URL}images/aroosa_pack_cropped.jpg`,
    gradient: 'from-[#0D9488] via-[#0F766E] to-[#115E59]',
    features: [
      { icon: 'water', label: 'ORGANIC ALOE' },
      { icon: 'sparkle', label: 'VITAMIN E BOOST' },
      { icon: 'shield', label: 'DERMA TESTED' },
    ],
  },
];

export const CardShowcaseSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-slide every 5 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % CARDS.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const renderBadgeIcon = (type: string) => {
    switch (type) {
      case 'leaf':
        return <Leaf className="w-4 h-4 text-emerald-700 fill-emerald-600/30" />;
      case 'water':
        return <Droplets className="w-4 h-4 text-sky-600 fill-sky-500/40" />;
      case 'cotton':
        return <Feather className="w-4 h-4 text-teal-700" />;
      case 'shield':
        return <ShieldCheck className="w-4 h-4 text-sky-700" />;
      case 'heart':
        return <Heart className="w-4 h-4 text-rose-600 fill-rose-500/30" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-600" />;
    }
  };

  return (
    <section id="card-showcase" className="relative bg-[#FAF8F5] py-16 sm:py-24 lg:py-28 overflow-hidden select-none">
      
      {/* Ambient background studio lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-teal-200/20 via-sky-100/30 to-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-teal-700 mb-2.5">
            Aroosa Care · Signature Collection
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-slate-950 tracking-tight leading-[1.12]">
            Pure Care for Little Ones
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-3 max-w-lg mx-auto">
            Crafted with newborn safety at heart. Swipe through our signature baby wipe formulations.
          </p>
        </div>

        {/* 3D Perspective Card Showcase with Side Cards peeking */}
        <div
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-[450px] mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card Viewport */}
          <div className="relative h-[480px] sm:h-[540px] md:h-[580px] w-full flex items-center justify-center">
            {CARDS.map((card, index) => {
              let position = index - activeIndex;
              if (position < -1) position += CARDS.length;
              if (position > 1) position -= CARDS.length;

              const isActive = position === 0;
              const isPrev = position === -1;
              const isNext = position === 1;

              if (!isActive && !isPrev && !isNext) return null;

              return (
                <div
                  key={card.id}
                  onClick={() => {
                    if (isPrev) handlePrev();
                    if (isNext) handleNext();
                  }}
                  style={{
                    transform: isActive
                      ? 'translateX(0%) scale(1) translateZ(0)'
                      : isPrev
                      ? 'translateX(-42%) scale(0.85) rotateY(12deg)'
                      : 'translateX(42%) scale(0.85) rotateY(-12deg)',
                    zIndex: isActive ? 20 : 10,
                  }}
                  className={`absolute top-0 w-full h-full transition-all duration-500 ease-out cursor-pointer rounded-[30px] sm:rounded-[34px] overflow-hidden ${
                    isActive
                      ? 'shadow-[0_30px_70px_-15px_rgba(10,103,112,0.35),0_10px_30px_rgba(0,0,0,0.1)] border-2 border-white/60'
                      : 'opacity-40 blur-[1.5px] hover:opacity-75 shadow-lg border border-black/5'
                  }`}
                >
                  {card.isExactImage ? (
                    /* Card 1: EXACT card image provided by user */
                    <div className="w-full h-full relative bg-[#1A8992]">
                      <img
                        src={card.imageSrc}
                        alt={card.title}
                        className="w-full h-full object-cover object-center select-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />
                    </div>
                  ) : (
                    /* Sibling Cards (2, 3, 4) in the exact same visual structure */
                    <div
                      className={`w-full h-full bg-gradient-to-b ${card.gradient} p-6 sm:p-7 flex flex-col justify-between text-white relative overflow-hidden`}
                    >
                      <div className="absolute top-0 right-0 w-56 h-56 bg-white/15 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-56 h-56 bg-black/20 rounded-full blur-2xl pointer-events-none" />

                      {/* Top: Wipes Pack Rendering */}
                      <div className="relative z-10 w-full h-[47%] flex items-center justify-center pt-2">
                        <img
                          src={card.imageSrc}
                          alt={card.title}
                          className="w-auto max-h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)] select-none hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Middle: Brand mark + Heading + Description */}
                      <div className="relative z-10 space-y-2 mt-1 text-left">
                        <div className="flex items-center gap-1.5 opacity-90">
                          <span className="text-sm">☘</span>
                          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                            Aroosa
                          </span>
                          <span className="ml-auto text-[10px] font-bold tracking-widest bg-white/20 px-2 py-0.5 rounded-full border border-white/20">
                            {card.badgeTag}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight font-serif">
                          {card.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal line-clamp-3">
                          {card.subtitle}
                        </p>
                      </div>

                      {/* Bottom: 3 Circular Feature Badges matching reference */}
                      <div className="relative z-10 pt-3 border-t border-white/20 grid grid-cols-3 gap-2 text-center">
                        {card.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex flex-col items-center group">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-md flex items-center justify-center mb-1 group-hover:scale-105 transition-transform">
                              {renderBadgeIcon(feature.icon)}
                            </div>
                            <span className="text-[9px] sm:text-[10px] font-bold tracking-tight text-white/95 uppercase leading-tight line-clamp-1">
                              {feature.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Previous / Next Arrow Chevrons */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Card"
            className="absolute left-[-16px] sm:left-[-24px] top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-900 border border-slate-200/80 shadow-xl flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Card"
            className="absolute right-[-16px] sm:right-[-24px] top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-900 border border-slate-200/80 shadow-xl flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-6 relative z-20">
            {CARDS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to card ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIndex === idx
                    ? 'w-8 h-2.5 bg-teal-600 shadow-[0_0_10px_rgba(13,148,136,0.5)]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Explore Product Quick Link */}
          <div className="mt-6">
            <a
              href="#products"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal-800 hover:text-teal-950 transition-colors group"
            >
              <span>Explore all specifications</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
};
