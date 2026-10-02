import React from 'react';
import { Heart, Quote } from 'lucide-react';


interface OurStoryProps {
  onLearnMore?: () => void;
}

export const OurStory: React.FC<OurStoryProps> = () => {
  return (
    <section id="story" className="py-20 lg:py-28 relative overflow-hidden bg-white">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Floating Quote Pill */}
          <div className="lg:col-span-6 relative">
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200/80">
                <img
                  src={`${import.meta.env.BASE_URL}images/mother_tenderly_hold_baby.jpg`}
                  alt="Mother tenderly holding newborn baby"
                  className="w-full h-auto object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-slate-200/80">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <Quote className="w-4 h-4 fill-sky-200" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-[13px] text-slate-800 italic font-medium leading-relaxed">
                      "Parenthood is made of thousands of soft, quiet moments. We build wipes to make every moment reassuring."
                    </p>
                    <span className="text-[11px] font-bold text-sky-600 mt-2 block">
                      — The Aroosa Care Promise
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Content in Dribbble Style */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-[11px] font-semibold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-sky-500 fill-sky-200" />
                <span>OUR BRAND JOURNEY</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                Every Little Touch Matters
              </h2>
            </div>

            <div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We believe baby care should feel simple, gentle and reassuring. Our wipes are created with the everyday moments of parenthood in mind — from quick cleanups to those little moments that deserve extra care.
              </p>
            </div>

            {/* Values Grid */}
            <div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-2xl font-bold text-slate-900 font-display">100%</span>
                  <p className="text-xs text-slate-600 font-medium mt-1">Dedicated to Gentle Baby Care</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-2xl font-bold text-slate-900 font-display">Pure</span>
                  <p className="text-xs text-slate-600 font-medium mt-1">Safe Comfort in Every Pack</p>
                </div>
              </div>
            </div>

            {/* Dribbble Style Pill Button */}



          </div>

        </div>
      </div>
    </section>
  );
};
