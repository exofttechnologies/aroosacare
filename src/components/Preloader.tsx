import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  minDuration?: number; // Minimum display time in ms (default 1200ms)
}

export const Preloader: React.FC<PreloaderProps> = ({ minDuration = 1200 }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const intervalTime = 16;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / minDuration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFadingOut(true);
          setTimeout(() => {
            setIsMounted(false);
          }, 400);
        }, 120);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [minDuration]);

  if (!isMounted) return null;

  return (
    <div
      aria-label="Loading Aroosa Care"
      role="status"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white select-none transition-opacity duration-400 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Very small size Aroosa logo */}
        <img
          src={`${import.meta.env.BASE_URL}images/Aroosa_logo_light_blue_transparent.png`}
          alt="Aroosa Care"
          className="h-6 sm:h-7 w-auto object-contain mb-5"
        />

        {/* Simple black line loading */}
        <div className="w-28 sm:w-32 h-[2px] bg-neutral-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-black rounded-full transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

