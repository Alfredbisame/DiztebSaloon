import React from 'react';

interface HeroIndicatorsProps {
  count: number;
  current: number;
  setCurrent: (idx: number) => void;
  isDark: boolean;
}

const HeroIndicators: React.FC<HeroIndicatorsProps> = ({ count, current, setCurrent, isDark }) => (
  <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-[100]">
    {Array.from({ length: count }).map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrent(index)}
        aria-label={`Go to slide ${index + 1}`}
        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
          index === current 
            ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
            : isDark ? 'bg-white/30 hover:bg-white/50' : 'bg-gray-600/30 hover:bg-gray-600/50'
        }`}
      />
    ))}
  </div>
);

export default HeroIndicators; 