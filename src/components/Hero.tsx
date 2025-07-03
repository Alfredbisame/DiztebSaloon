import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import FloatingCards from './FloatingCards';
import HeroCarousel from './HeroCarousel';

const Hero: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Floating Cards positioned with higher z-index to stay on top */}
      <FloatingCards />

      {/* Carousel Container with lower z-index */}
      <HeroCarousel isDark={isDark} />

      {/* Neon accent lines */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
    </section>
  );
};

export default Hero;