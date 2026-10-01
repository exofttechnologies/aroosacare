import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface CardItem {
  id: string;
  title: string;
  subtitle: string;
  badgeTag: string;
  imageSrc: string;
  bgColor: string;
}

const CARDS: CardItem[] = [
  {
    id: 'pure-care-teal',
    title: 'Pure Care for Little Ones',
    subtitle: "Aroosa wet wipes are made with 99% pure water, chamomile, vitamin E and aloe — keeping your baby's skin clean, soft and protected.",
    badgeTag: 'SIGNATURE FORMULA',
    imageSrc: `${import.meta.env.BASE_URL}images/aroosa_card_exact_1.jpg`,
    bgColor: 'bg-[#1A8992]',
  },
  {
    id: 'product-pack-nursery',
    title: 'Aroosa Wet Wipes 72-Pack',
    subtitle: '72 soft & thick wipes with double moisture-lock lid. Perfect for daily diaper changes, delicate faces, and sticky hands.',
    badgeTag: '72 WIPES PACK',
    imageSrc: `${import.meta.env.BASE_URL}images/product cardimg1.png`,
    bgColor: 'bg-[#82C3E7]',
  },
  {
    id: 'plant-based-fabric',
    title: '100% Natural Plant-Based Fabric',
    subtitle: 'Made entirely from naturally sourced, plant-derived fibers without synthetic materials. Kind to sensitive baby skin and compostable.',
    badgeTag: 'PLANT-BASED FIBERS',
    imageSrc: `${import.meta.env.BASE_URL}images/productcard2_card.jpg`,
    bgColor: 'bg-[#E6CCB3]',
  },
  {
    id: 'water-tested-purity',
    title: '99% Pure Water · EWG Verified',
    subtitle: 'Dermatologist tested hypoallergenic wipes with 99% pure water formulation for newborn and sensitive baby skin.',
    badgeTag: 'CLINICALLY TESTED',
    imageSrc: `${import.meta.env.BASE_URL}images/product3_card.jpg`,
    bgColor: 'bg-[#E2E2E2]',
  },
];

export const CardShowcaseSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-slide every 6 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS.length);
    }, 6000);
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

  const activeCard = CARDS[activeIndex];

  return (
    <section id="card-showcase" className="relative bg-[#FAF8F5] py-16 sm:py-24 lg:py-28 overflow-hidden select-none">
      
      {/* Ambient background studio lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gradient-to-tr from-teal-200/20 via-sky-100/35 to-amber-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-teal-800 mb-2.5">
            Aroosa Care · Product Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-slate-950 tracking-tight leading-[1.12]">
            Pure Care for Little Ones
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mt-3 max-w-lg mx-auto">
            Swipe through our pure cotton, plant-based fabric, and dermatologist-tested baby wipes.
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
          <div className="relative h-[490px] sm:h-[550px] md:h-[580px] w-full flex items-center justify-center">
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
                      ? 'shadow-[0_30px_70px_-15px_rgba(10,103,112,0.35),0_10px_30px_rgba(0,0,0,0.12)] border-2 border-white/80'
                      : 'opacity-40 blur-[1.5px] hover:opacity-75 shadow-lg border border-black/5'
                  }`}
                >
                  {/* Full image card fill — exact elements visible */}
                  <div className={`w-full h-full relative ${card.bgColor} overflow-hidden`}>
                    <img
                      src={card.imageSrc}
                      alt={card.title}
                      className="w-full h-full object-cover object-center select-none"
                    />
                    {/* Subtle glass sheen overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Previous / Next Arrow Chevrons */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Card"
            className="absolute left-[-16px] sm:left-[-24px] top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-900 border border-slate-200/90 shadow-xl flex items-center justify-center transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Card"
            className="absolute right-[-16px] sm:right-[-24px] top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-900 border border-slate-200/90 shadow-xl flex items-center justify-center transition-all active:scale-95 cursor-pointer"
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
                    ? 'w-8 h-2.5 bg-teal-700 shadow-[0_0_10px_rgba(13,148,136,0.5)]'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Active Card Details Caption below Carousel */}
          <div className="mt-5 text-center px-4 max-w-sm mx-auto">
            <span className="inline-block text-[10px] font-bold tracking-widest text-teal-800 uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-2">
              {activeCard.badgeTag}
            </span>
            <h3 className="text-lg font-bold text-slate-900 font-serif leading-tight">
              {activeCard.title}
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
              {activeCard.subtitle}
            </p>
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
