import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  minDuration?: number; // Minimum display time in ms (default 1800ms)
}

export const Preloader: React.FC<PreloaderProps> = ({ minDuration = 1800 }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const intervalTime = 20; // 50 updates per second

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / minDuration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        // Start smooth fade-out
        setTimeout(() => {
          setIsFadingOut(true);
          // Unmount after animation finishes
          setTimeout(() => {
            setIsMounted(false);
          }, 700);
        }, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [minDuration]);

  if (!isMounted) return null;

  return (
    <div
      aria-label="Loading Aroosa Care"
      role="status"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#F2F9FD] via-[#FAF8F5] to-[#EBF6FC] select-none transition-all duration-700 ease-out ${
        isFadingOut
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Ambience: Soft Water Glow & Ripples */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        {/* Soft Radial Ambient Glow */}
        <div className="w-[450px] h-[450px] rounded-full bg-sky-200/35 blur-3xl animate-pulse" />

        {/* Concentric Water Droplet Ripple Rings */}
        <div className="absolute w-56 h-56 rounded-full border border-sky-300/30 animate-ping opacity-25" style={{ animationDuration: '3s' }} />
        <div className="absolute w-72 h-72 rounded-full border border-sky-400/20 animate-ping opacity-20" style={{ animationDuration: '3.6s', animationDelay: '0.6s' }} />
      </div>

      {/* Main Logo Card Container */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Logo with Soft Floating Animation & Shadow */}
        <div className="relative mb-6">
          {/* Subtle back-glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-sky-300/30 via-white/50 to-sky-200/20 blur-xl opacity-80" />
          
          <div className="relative transition-transform duration-500 hover:scale-105">
            <img
              src={`${import.meta.env.BASE_URL}images/Aroosa_logo_light_blue_transparent.png`}
              alt="Aroosa Care"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-[0_10px_25px_rgba(14,165,233,0.18)]"
            />
          </div>
        </div>

        {/* Brand Tagline */}
        <p className="text-xs sm:text-sm font-display tracking-widest text-[#002D3D]/80 uppercase font-semibold mb-6 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
          Pure Care for Little Ones
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
        </p>

        {/* Elegant Minimalist Progress Bar */}
        <div className="w-48 sm:w-56 h-1.5 bg-sky-100/90 rounded-full overflow-hidden p-[1px] shadow-inner border border-sky-200/50">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 rounded-full transition-all duration-75 ease-out shadow-xs"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage Indicator */}
        <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-sky-800/80 font-mono tracking-wider">
          <span>{progress}%</span>
        </div>

      </div>

      {/* Pure Water Baby Wipes Sub-caption at bottom */}
      <div className="absolute bottom-8 text-[11px] tracking-widest uppercase font-medium text-slate-400/80">
        99.9% Pure Water · 100% Plant Fibers
      </div>
    </div>
  );
};
