import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroNavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

const HeroNavigation: React.FC<HeroNavigationProps> = ({ onPrev, onNext }) => (
  <>
    <button
      onClick={onPrev}
      aria-label="Previous Slide"
      className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-cyan-400/70 hover:border-cyan-400 bg-gradient-to-br from-cyan-600 via-blue-700 to-cyan-400/80 hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 transition-all duration-300 z-[100] cursor-pointer`}
      style={{
        boxShadow: '0 4px 24px 0 rgba(0, 255, 255, 0.25)',
        borderWidth: 3,
        zIndex: 100,
      }}
    >
      <ChevronLeft size={32} />
    </button>
    <button
      onClick={onNext}
      aria-label="Next Slide"
      className={`absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-cyan-400/70 hover:border-cyan-400 bg-gradient-to-br from-cyan-600 via-blue-700 to-cyan-400/80 hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 transition-all duration-300 z-[100] cursor-pointer`}
      style={{
        boxShadow: '0 4px 24px 0 rgba(0, 255, 255, 0.25)',
        borderWidth: 3,
        zIndex: 100,
      }}
    >
      <ChevronRight size={32} />
    </button>
  </>
);

export default HeroNavigation; 