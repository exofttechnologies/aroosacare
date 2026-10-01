import React from 'react';

interface ProductShowcaseProps {
  onQuickView?: (product: any) => void;
  onOrderNow?: (product: any) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOrderNow }) => {
  const mainProduct = {
    id: 'aroosa-wet-wipes-72',
    name: 'Aroosa Wet Wipes (72 Wipes)',
    price: '$4.99',
    packSize: '72 Wipes Soft & Thick Pack',
  };

  return (
    <section
      id="products"
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(170deg, #8fd8f0 0%, #62c5e8 18%, #3aaedb 38%, #2196c4 58%, #1a7fb0 78%, #1568a0 100%)',
        minHeight: '100vh',
      }}
    >

      {/* Ambient Sunburst Light Effect top-right */}
      <div
        className="absolute top-0 right-0 w-[55%] h-[55%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 10%, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.12) 35%, transparent 70%)',
        }}
      />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 sm:pt-20 pb-0">

        {/* TOP ROW: Brand tag + headline + description (left-aligned) */}
        <div className="max-w-lg lg:max-w-xl">

          {/* Brand name */}
          <div className="flex items-center gap-1.5 mb-4">
            <span className="text-white/95 text-base sm:text-lg font-semibold tracking-tight">
              ✦ Aroosa
            </span>
          </div>

          {/* Headline: Bold first line, thinner second line */}
          <h2 className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] leading-[1.05] text-white mb-4">
            <span className="font-extrabold block tracking-tight">Pure Care</span>
            <span className="font-light block tracking-tight">for Little Ones</span>
          </h2>

          {/* Description */}
          <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-sm font-normal">
            Aroosa wet wipes are made with 99% pure water, chamomile, vitamin E and aloe — keeping your baby's skin clean, soft and protected.
          </p>
        </div>

        {/* INGREDIENT ICONS ROW — arc-style arrangement matching reference */}
        <div className="mt-8 sm:mt-10 flex items-end gap-0 relative ml-2 sm:ml-4">

          {/* Circular arc background for the 3 icons */}
          <div className="relative" style={{ width: '320px', height: '130px' }}>

            {/* Arc SVG behind the icons */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 320 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 20 130 A 170 170 0 0 1 300 130"
                stroke="rgba(255,255,255,0.30)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="4 4"
              />
            </svg>

            {/* Icon 1: 99.9% Pure Water — left, lower */}
            <div className="absolute flex flex-col items-center" style={{ left: '-4px', bottom: '0px' }}>
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-1.5 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 100%)',
                  backdropFilter: 'blur(8px)',
                  border: '1.5px solid rgba(255,255,255,0.45)',
                }}
              >
                {/* Water Drop SVG */}
                <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                  <path
                    d="M20 4 C20 4 8 16 8 24 A12 12 0 0 0 32 24 C32 16 20 4 20 4Z"
                    fill="rgba(100,200,240,0.9)"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1"
                  />
                  <ellipse cx="15" cy="20" rx="3" ry="5" fill="rgba(255,255,255,0.45)" transform="rotate(-20 15 20)" />
                </svg>
              </div>
              <span className="text-white font-bold text-xs sm:text-sm leading-none text-center">99.9%</span>
              <span className="text-white/85 text-[10px] sm:text-xs leading-none text-center mt-0.5">Pure Water</span>
            </div>

            {/* Icon 2: Chamomile Extract — center, higher */}
            <div className="absolute flex flex-col items-center" style={{ left: '50%', transform: 'translateX(-50%)', bottom: '28px' }}>
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-1.5 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 100%)',
                  backdropFilter: 'blur(8px)',
                  border: '1.5px solid rgba(255,255,255,0.45)',
                }}
              >
                {/* Chamomile Flower SVG */}
                <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                  {/* Yellow center */}
                  <circle cx="20" cy="20" r="6" fill="#F5C842" />
                  {/* White petals */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <ellipse
                      key={i}
                      cx="20"
                      cy="8"
                      rx="3"
                      ry="5"
                      fill="white"
                      transform={`rotate(${angle} 20 20)`}
                    />
                  ))}
                </svg>
              </div>
              <span className="text-white font-bold text-xs sm:text-sm leading-none text-center">Chamomile</span>
              <span className="text-white/85 text-[10px] sm:text-xs leading-none text-center mt-0.5">Extract</span>
            </div>

            {/* Icon 3: Vitamin E & Aloe — right, lower */}
            <div className="absolute flex flex-col items-center" style={{ right: '-4px', bottom: '0px' }}>
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-1.5 shadow-md"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.15) 100%)',
                  backdropFilter: 'blur(8px)',
                  border: '1.5px solid rgba(255,255,255,0.45)',
                }}
              >
                {/* Aloe Leaf SVG */}
                <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                  <path
                    d="M20 32 C20 32 10 24 10 14 Q10 6 20 6 Q30 6 30 14 C30 24 20 32 20 32Z"
                    fill="rgba(80,190,100,0.85)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="0.8"
                  />
                  <path d="M20 8 L20 30" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
                  <path d="M14 14 Q20 12 26 14" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                  <path d="M13 19 Q20 16 27 19" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                </svg>
              </div>
              <span className="text-white font-bold text-xs sm:text-sm leading-none text-center">Vitamin E</span>
              <span className="text-white/85 text-[10px] sm:text-xs leading-none text-center mt-0.5">&amp; Aloe</span>
            </div>

          </div>
        </div>

      </div>

      {/* PRODUCT IMAGE — floating on clouds, flush to bottom */}
      <div className="relative z-10 mt-4 sm:mt-6 w-full flex justify-center items-end">
        <img
          src="/images/about_product_part.png"
          alt="Aroosa Wet Wipes 72-pack floating on soft clouds"
          className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl h-auto object-contain select-none"
          style={{
            marginBottom: '-2px',
            filter: 'drop-shadow(0 20px 60px rgba(0,50,100,0.35))',
          }}
        />
      </div>

      {/* BOTTOM CLOUD FADE — smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, rgba(250,248,245,1) 0%, rgba(250,248,245,0.6) 50%, transparent 100%)',
        }}
      />

      {/* Hidden order trigger for the nav */}
      <div className="sr-only">
        <button onClick={() => onOrderNow?.(mainProduct)}>Order</button>
      </div>

    </section>
  );
};
