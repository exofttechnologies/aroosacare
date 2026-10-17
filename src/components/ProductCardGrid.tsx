import React, { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';
import { CartItem } from './CartDrawer';

interface ProductCardGridProps {
  onAddToCart?: (item: CartItem) => void;
  onBuyNow?: (product: any) => void;
}

export const ProductCardGrid: React.FC<ProductCardGridProps> = ({
  onAddToCart,
  onBuyNow,
}) => {
  const images = [
    {
      id: 'img1',
      label: 'Dark Forest',
      src: `${import.meta.env.BASE_URL}images/PHOTO-2026-10-05-19-03-23-1.jpg`,
    },
    {
      id: 'img2',
      label: 'Pure Isolated',
      src: `${import.meta.env.BASE_URL}images/PHOTO-2026-10-05-19-03-23.jpg`,
    },
    {
      id: 'img3',
      label: 'Studio Grey',
      src: `${import.meta.env.BASE_URL}images/PHOTO-2026-10-05-19-03-24.jpg`,
    },
    {
      id: 'img4',
      label: 'Mint Glow',
      src: `${import.meta.env.BASE_URL}images/PHOTO-2026-10-05-19-03-26.jpg`,
    },
  ];

  const [selectedImg1, setSelectedImg1] = useState(images[0].src);
  const [selectedImg2, setSelectedImg2] = useState(images[1].src);
  const [selectedImg3, setSelectedImg3] = useState(images[2].src);
  const [selectedImg4, setSelectedImg4] = useState(images[3].src);

  const [titleMode, setTitleMode] = useState<'reference' | 'brand'>('reference');
  const [priceMode, setPriceMode] = useState<'120usd' | 'retail' | 'inr'>('120usd');
  const [canvasBg, setCanvasBg] = useState<'neutral' | 'cream' | 'dark'>('neutral');
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});

  const getTitle = () => {
    return titleMode === 'reference' ? 'Air Zoom Ultra' : 'Aroosa Care Ultra';
  };

  const getPriceData = () => {
    switch (priceMode) {
      case 'retail':
        return { formatted: '$4.99', numeric: 4.99, label: 'Price' };
      case 'inr':
        return { formatted: '₹299', numeric: 3.6, label: 'Price' };
      case '120usd':
      default:
        return { formatted: '120 USD', numeric: 120.0, label: 'Price' };
    }
  };

  const priceData = getPriceData();

  const handleAdd = (cardId: string, styleName: string, imageSrc: string) => {
    const item: CartItem = {
      id: `cart-${cardId}-${Date.now()}`,
      name: getTitle(),
      packSize: '72 Wipes Soft & Thick Pack',
      priceFormatted: priceData.formatted,
      priceNumeric: priceData.numeric,
      image: imageSrc,
      quantity: 1,
      variantStyle: styleName,
    };

    if (onAddToCart) {
      onAddToCart(item);
    }

    setAddedMap((prev) => ({ ...prev, [cardId]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [cardId]: false }));
    }, 1800);
  };

  const handleBuy = (cardId: string, styleName: string, imageSrc: string) => {
    const product = {
      id: cardId,
      name: `${getTitle()} (${styleName})`,
      price: priceData.formatted,
      packSize: '72 Soft & Thick Baby Wipes',
      image: imageSrc,
    };

    if (onBuyNow) {
      onBuyNow(product);
    }
  };

  const canvasStyles = {
    neutral: 'bg-[#C5C6C9] text-slate-900',
    cream: 'bg-[#FAF8F5] text-slate-900',
    dark: 'bg-[#141518] text-white',
  };

  return (
    <section
      id="product-card-grid"
      className={`py-16 sm:py-24 transition-colors duration-500 ease-in-out relative select-none ${canvasStyles[canvasBg]}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-md mb-3 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Card Design Variations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
            Product Card Designs
          </h2>
          <p className="text-sm sm:text-base opacity-75 max-w-lg mx-auto">
            Faithful recreation of the 4 card design styles with your Aroosa Care product images, interactive Add to Cart, and Buy Now checkout.
          </p>

          {/* Interactive Customizer Bar */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 p-2.5 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-sm max-w-xl mx-auto text-xs">
            
            {/* Title Mode */}
            <div className="flex items-center gap-1 bg-black/5 dark:bg-white/10 rounded-xl p-1">
              <span className="px-2 font-medium opacity-60">Title:</span>
              <button
                onClick={() => setTitleMode('reference')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  titleMode === 'reference'
                    ? 'bg-white dark:bg-white/20 shadow-xs text-black dark:text-white'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                Air Zoom Ultra
              </button>
              <button
                onClick={() => setTitleMode('brand')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  titleMode === 'brand'
                    ? 'bg-white dark:bg-white/20 shadow-xs text-black dark:text-white'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                Aroosa Care
              </button>
            </div>

            {/* Price Toggle */}
            <div className="flex items-center gap-1 bg-black/5 dark:bg-white/10 rounded-xl p-1">
              <span className="px-2 font-medium opacity-60">Price:</span>
              <button
                onClick={() => setPriceMode('120usd')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  priceMode === '120usd'
                    ? 'bg-white dark:bg-white/20 shadow-xs text-black dark:text-white'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                120 USD
              </button>
              <button
                onClick={() => setPriceMode('retail')}
                className={`px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                  priceMode === 'retail'
                    ? 'bg-white dark:bg-white/20 shadow-xs text-black dark:text-white'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                $4.99
              </button>
            </div>

            {/* Canvas Backdrop Selector */}
            <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/10 rounded-xl p-1">
              <span className="px-2 font-medium opacity-60">Canvas:</span>
              <button
                onClick={() => setCanvasBg('neutral')}
                title="Studio Neutral (Matches Reference)"
                className={`w-6 h-6 rounded-lg bg-[#C5C6C9] border transition-all cursor-pointer ${
                  canvasBg === 'neutral' ? 'ring-2 ring-emerald-500 scale-105 border-white' : 'border-black/20'
                }`}
              />
              <button
                onClick={() => setCanvasBg('cream')}
                title="Aroosa Warm Linen Cream"
                className={`w-6 h-6 rounded-lg bg-[#FAF8F5] border transition-all cursor-pointer ${
                  canvasBg === 'cream' ? 'ring-2 ring-emerald-500 scale-105 border-slate-300' : 'border-black/20'
                }`}
              />
              <button
                onClick={() => setCanvasBg('dark')}
                title="Studio Midnight Dark"
                className={`w-6 h-6 rounded-lg bg-[#141518] border transition-all cursor-pointer ${
                  canvasBg === 'dark' ? 'ring-2 ring-emerald-500 scale-105 border-white' : 'border-white/20'
                }`}
              />
            </div>

          </div>
        </div>

        {/* 2X2 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto place-items-center">
          
          {/* CARD 1: TOP-LEFT */}
          <div className="w-full max-w-[360px] bg-[#0A0A0B] rounded-[32px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)] group">
            <div>
              <div className="w-full h-52 sm:h-56 bg-gradient-to-b from-[#18181A] to-[#0A0A0B] rounded-[24px] p-4 flex items-center justify-center relative overflow-hidden">
                <img
                  src={selectedImg1}
                  alt={getTitle()}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-white text-xl sm:text-[22px] font-medium tracking-tight mt-5">
                {getTitle()}
              </h3>
            </div>

            <div className="flex items-center justify-between mt-5 pt-1">
              <div>
                <span className="block text-[11px] sm:text-xs text-zinc-400 font-normal leading-tight">
                  {priceData.label}
                </span>
                <span className="block text-base sm:text-lg font-bold text-white tracking-tight leading-tight mt-0.5">
                  {priceData.formatted}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleBuy('card-1', 'Dark Minimalist', selectedImg1)}
                className="bg-white hover:bg-zinc-100 text-black font-semibold text-xs sm:text-sm px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Buy Now
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
              <span>Card 1 · Dark Single</span>
              <div className="flex items-center gap-1.5">
                {images.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setSelectedImg1(img.src)}
                    className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                      selectedImg1 === img.src ? 'border-white scale-125 bg-white' : 'border-zinc-700 bg-zinc-800'
                    }`}
                    title={img.label}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CARD 2: TOP-RIGHT */}
          <div className="w-full max-w-[360px] bg-white rounded-[32px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] group">
            <div>
              <div className="w-full h-52 sm:h-56 bg-[#EDEDF0] rounded-[24px] p-4 flex items-center justify-center relative overflow-hidden">
                <img
                  src={selectedImg2}
                  alt={getTitle()}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-slate-900 text-xl sm:text-[22px] font-medium tracking-tight mt-5">
                {getTitle()}
              </h3>
            </div>

            <div className="flex items-center justify-between mt-5 pt-1">
              <div>
                <span className="block text-[11px] sm:text-xs text-zinc-400 font-normal leading-tight">
                  {priceData.label}
                </span>
                <span className="block text-base sm:text-lg font-bold text-[#48BA1E] tracking-tight leading-tight mt-0.5">
                  {priceData.formatted}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleBuy('card-2', 'Light Lime Minimalist', selectedImg2)}
                className="bg-[#D2F99C] hover:bg-[#C4F682] text-[#122402] font-semibold text-xs sm:text-sm px-6 sm:px-7 py-2.5 sm:py-3 rounded-full shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                Buy Now
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-zinc-400">
              <span>Card 2 · Light Lime</span>
              <div className="flex items-center gap-1.5">
                {images.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setSelectedImg2(img.src)}
                    className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                      selectedImg2 === img.src ? 'border-slate-800 scale-125 bg-slate-800' : 'border-slate-300 bg-slate-200'
                    }`}
                    title={img.label}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CARD 3: BOTTOM-LEFT */}
          <div className="w-full max-w-[360px] bg-white rounded-[32px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)] group">
            <div>
              <div className="w-full h-52 sm:h-56 bg-[#EDEDF0] rounded-[24px] p-4 flex items-center justify-center relative overflow-hidden">
                <img
                  src={selectedImg3}
                  alt={getTitle()}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-slate-900 text-xl sm:text-[22px] font-medium tracking-tight mt-5">
                {getTitle()}
              </h3>
              <div className="mt-2 text-sm text-zinc-500 font-normal">
                Price: <span className="font-bold text-slate-950 text-base">{priceData.formatted}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 mt-5 pt-1">
              <button
                type="button"
                onClick={() => handleAdd('card-3', 'Light Dual Commerce', selectedImg3)}
                className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-full bg-white hover:bg-zinc-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-xs text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {addedMap['card-3'] ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    <span className="text-emerald-700">Added!</span>
                  </>
                ) : (
                  <span>Add To Cart</span>
                )}
              </button>

              <button
                type="button"
                onClick={() => handleBuy('card-3', 'Light Dual Commerce', selectedImg3)}
                className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-full bg-[#D2F99C] hover:bg-[#C4F682] text-[#122402] text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-xs text-center cursor-pointer"
              >
                Buy Now
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-zinc-400">
              <span>Card 3 · Light Dual</span>
              <div className="flex items-center gap-1.5">
                {images.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setSelectedImg3(img.src)}
                    className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                      selectedImg3 === img.src ? 'border-slate-800 scale-125 bg-slate-800' : 'border-slate-300 bg-slate-200'
                    }`}
                    title={img.label}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CARD 4: BOTTOM-RIGHT */}
          <div className="w-full max-w-[360px] bg-[#0A0A0B] rounded-[32px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] border border-white/5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.45)] group">
            <div>
              <div className="w-full h-52 sm:h-56 bg-gradient-to-b from-[#18181A] to-[#0A0A0B] rounded-[24px] p-4 flex items-center justify-center relative overflow-hidden">
                <img
                  src={selectedImg4}
                  alt={getTitle()}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-white text-xl sm:text-[22px] font-medium tracking-tight mt-5">
                {getTitle()}
              </h3>
              <div className="mt-2 text-sm text-zinc-400 font-normal">
                Price: <span className="font-bold text-white text-base">{priceData.formatted}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-3 mt-5 pt-1">
              <button
                type="button"
                onClick={() => handleAdd('card-4', 'Dark Dual Commerce', selectedImg4)}
                className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-full bg-[#1C1C1F] hover:bg-[#2A2A2E] text-white border border-white/10 text-xs sm:text-sm font-semibold transition-all active:scale-95 text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {addedMap['card-4'] ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                    <span className="text-emerald-400">Added!</span>
                  </>
                ) : (
                  <span>Add To Cart</span>
                )}
              </button>

              <button
                type="button"
                onClick={() => handleBuy('card-4', 'Dark Dual Commerce', selectedImg4)}
                className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-full bg-white hover:bg-zinc-100 text-black text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-md text-center cursor-pointer"
              >
                Buy Now
              </button>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
              <span>Card 4 · Dark Dual</span>
              <div className="flex items-center gap-1.5">
                {images.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setSelectedImg4(img.src)}
                    className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                      selectedImg4 === img.src ? 'border-white scale-125 bg-white' : 'border-zinc-700 bg-zinc-800'
                    }`}
                    title={img.label}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
