import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Droplets, Feather, ArrowRight, Heart, MessageCircle } from 'lucide-react';
import { openWhatsAppOrder } from '../utils/whatsapp';

interface ProductDetailsShowcaseProps {
  onOrderNow?: (product: any) => void;
}

export const ProductDetailsShowcase: React.FC<ProductDetailsShowcaseProps> = ({ onOrderNow }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const defaultProduct = {
    id: 'aroosa-baby-wipes-72',
    name: 'Aroosa Baby Wipes (72 Pcs)',
    price: '$4.99',
    packSize: '72 Pcs Extra Soft Fabric Pack',
    image: `${import.meta.env.BASE_URL}images/PHOTO-2026-10-05-19-03-23.jpg`,
  };

  const handleDetailsClick = () => {
    if (onOrderNow) {
      onOrderNow(defaultProduct);
    } else {
      openWhatsAppOrder('Aroosa Baby Wipes (72 Pcs Pack)');
    }
  };

  const tooltips: Record<string, { title: string; desc: string }> = {
    water: {
      title: '99% Pure Water Formula',
      desc: 'Purified through an 8-stage reverse-osmosis filtration process to guarantee zero heavy metals, chlorine, or chemical impurities.',
    },
    fabric: {
      title: 'Extra Soft 3-Fold Fabric',
      desc: 'Cross-woven cotton fibers engineered for cushiony softness. High absorbency prevents tearing even when wiping tough messes.',
    },
    essence: {
      title: 'Aloe & Almond Essence',
      desc: 'Enriched with organic aloe barbadensis and almond oil to restore the natural lipid skin barrier and prevent diaper rash.',
    },
    pack: {
      title: '72 Pcs Moisture-Lock Seal',
      desc: 'Double-click snap lid and airtight moisture seal preserves freshness and dampness from the first wipe to the 72nd.',
    },
  };

  return (
    <section id="product-details" className="relative bg-[#FAF8F5] py-16 sm:py-24 overflow-hidden select-none">
      
      {/* Ambient background studio lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-teal-200/15 via-sky-100/25 to-amber-100/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top and Bottom soft fade blends */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-teal-800 mb-3">
            Aroosa Care · Product Anatomy
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-slate-950 tracking-tight leading-[1.12]">
            Every Detail, Made with Care
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mt-3.5 max-w-lg mx-auto">
            From 99% pharmaceutical-grade pure water to 3-fold cloud-soft cotton, discover why parents trust Aroosa for their newborns.
          </p>
        </div>

        {/* ================================================================ */}
        {/* MASTER VISUAL COMPOSITION — Natural canvas without outer card    */}
        {/* ================================================================ */}
        <div className="relative max-w-3xl mx-auto">
          
          <div className="relative w-full aspect-[1/1] sm:aspect-[1.05/1] mx-auto flex items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}images/aroosa_product_details_showcase.jpg`}
              alt="Aroosa Baby Wipes Detailed Anatomy"
              className="w-full h-full object-contain select-none transition-transform duration-700 hover:scale-[1.01]"
            />

            {/* Interactive Hotspot 1: "More Details →" button on bottom-left card */}
            <button
              type="button"
              onClick={handleDetailsClick}
              title="Click for full product details & order"
              aria-label="More details about extra soft fabric"
              className="absolute left-[5%] bottom-[4%] sm:left-[6%] sm:bottom-[5%] w-[24%] h-[7%] rounded-full bg-transparent hover:bg-black/10 focus:outline-none cursor-pointer transition-all"
            />

            {/* Interactive Hotspot 2: Top-left "+" button near 99% pure water */}
            <button
              type="button"
              onClick={() => setActiveTooltip((prev) => (prev === 'water' ? null : 'water'))}
              title="Tap for 99% Pure Water info"
              aria-label="99% Pure water details"
              className="absolute left-[27%] top-[29%] sm:left-[27.5%] sm:top-[29.5%] w-[8%] h-[8%] rounded-full bg-transparent hover:bg-emerald-500/20 focus:outline-none cursor-pointer transition-all"
            />

            {/* Interactive Hotspot 3: Top-right "+" button near Naturally Beautiful Skin */}
            <button
              type="button"
              onClick={() => setActiveTooltip((prev) => (prev === 'fabric' ? null : 'fabric'))}
              title="Tap for 3-Fold Cotton details"
              aria-label="3-Fold Cotton details"
              className="absolute right-[30%] top-[27%] sm:right-[30.5%] sm:top-[27.5%] w-[8%] h-[8%] rounded-full bg-transparent hover:bg-emerald-500/20 focus:outline-none cursor-pointer transition-all"
            />

            {/* Interactive Hotspot 4: ESSENCE card on right */}
            <button
              type="button"
              onClick={() => setActiveTooltip((prev) => (prev === 'essence' ? null : 'essence'))}
              title="Tap for Aloe & Almond Essence info"
              aria-label="Aloe and almond essence details"
              className="absolute right-[3%] top-[34%] sm:right-[4%] sm:top-[35%] w-[16%] h-[32%] rounded-2xl bg-transparent hover:bg-sky-500/10 focus:outline-none cursor-pointer transition-all"
            />
          </div>

          {/* Interactive Tooltip Popover if a hotspot is clicked */}
          {activeTooltip && tooltips[activeTooltip] && (
            <div className="absolute inset-x-6 bottom-6 sm:inset-x-auto sm:right-6 sm:bottom-6 max-w-sm bg-slate-900/95 text-white p-4 sm:p-5 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 animate-fadeIn z-30">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{tooltips[activeTooltip].title}</span>
                </div>
                <button
                  onClick={() => setActiveTooltip(null)}
                  className="text-slate-400 hover:text-white text-xs font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                {tooltips[activeTooltip].desc}
              </p>
              <div className="mt-3 pt-2 border-t border-white/10 flex justify-between items-center">
                <button
                  type="button"
                  onClick={handleDetailsClick}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Order 72-Pack</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span className="text-[10px] text-slate-400">Dermatologist Tested</span>
              </div>
            </div>
          )}

        </div>

        {/* ================================================================ */}
        {/* FOUR SPECIFICATION PILLARS — Clean editorial columns (NO cards)  */}
        {/* ================================================================ */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto border-t border-slate-200/80 pt-8">
          
          {/* Pillar 1: 99% Pure Water */}
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center">
              <Droplets className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 font-display">
              99% Pure Water
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Pharmaceutical-grade filtered water that cleans gently without stripping natural skin moisture.
            </p>
          </div>

          {/* Pillar 2: 3-Fold Extra Soft Fabric */}
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center">
              <Feather className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 font-display">
              3-Fold Cloud Cotton
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Ultra-thick cross-woven cotton fabric that cushions skin during daily diaper changes and messes.
            </p>
          </div>

          {/* Pillar 3: Aloe & Almond Essence */}
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center">
              <Heart className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 font-display">
              Aloe & Almond Essence
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Natural lotion extract soothes redness, locks hydration, and keeps baby skin feeling satiny smooth.
            </p>
          </div>

          {/* Pillar 4: 72 Pcs Freshness Lock */}
          <div className="space-y-2">
            <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-bold text-slate-900 font-display">
              72 Pcs Seal-Lock Pack
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Snap-tight flip lid prevents dry-out, ensuring the very last wipe is as damp as the first.
            </p>
          </div>

        </div>

        {/* CTA Bar */}
        <div className="mt-10 sm:mt-12 text-center">
          <button
            type="button"
            onClick={handleDetailsClick}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm shadow-xl transition-all active:scale-95 group cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none" />
            <span>Order</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

    </section>
  );
};
