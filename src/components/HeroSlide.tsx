import React from 'react';
import { Calendar, Star } from 'lucide-react';

interface HeroSlideProps {
  image: string;
  title: string;
  subtitle: string;
  isDark: boolean;
  active: boolean;
  direction: 1 | -1;
  index: number;
  currentSlide: number;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ image, title, subtitle, isDark, active, direction, index, currentSlide }) => {
  // Determine slide position for animation
  const slideCount = 3; // TODO: get from props if dynamic
  let positionClass = '';
  if (index === currentSlide) {
    positionClass = 'translate-x-0 opacity-100 z-20';
  } else if (
    (index === (currentSlide - 1 + slideCount) % slideCount && direction === 1) ||
    (index === (currentSlide + 1) % slideCount && direction === -1)
  ) {
    // Previous slide (moving left) or next slide (moving right)
    positionClass = direction === 1 ? '-translate-x-full opacity-0 z-10' : 'translate-x-full opacity-0 z-10';
  } else {
    // All other slides
    positionClass = direction === 1 ? 'translate-x-full opacity-0 z-10' : '-translate-x-full opacity-0 z-10';
  }

  // Animate text/buttons in when active
  const titleAnim = active
    ? 'opacity-100 translate-y-0 scale-100 transition-all duration-1000 delay-200'
    : 'opacity-0 translate-y-16 scale-90 pointer-events-none';
  const subtitleAnim = active
    ? 'opacity-100 translate-y-0 scale-100 transition-all duration-1000 delay-500'
    : 'opacity-0 translate-y-16 scale-90 pointer-events-none';
  const buttonsAnim = active
    ? 'opacity-100 translate-y-0 scale-100 transition-all duration-1000 delay-700'
    : 'opacity-0 translate-y-16 scale-90 pointer-events-none';

  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ease-in-out ${positionClass}`}
      aria-hidden={!active}
      style={{ willChange: 'transform, opacity' }}
    >
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-r from-black/80 via-black/50 to-black/30'
            : 'bg-gradient-to-r from-white/80 via-white/50 to-white/30'
        }`} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className={`text-4xl sm:text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse ${titleAnim}`}>
            {title}
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          } ${subtitleAnim}`}>
            {subtitle}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${buttonsAnim}`}>
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white overflow-hidden transform transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Calendar size={20} />
                Book Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 rounded-full font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <span className="flex items-center justify-center gap-2">
                <Star size={20} />
                View Portfolio
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide; 