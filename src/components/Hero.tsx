import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import FloatingCards from './FloatingCards';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isDark } = useTheme();
  
  const slides = [
    {
      image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Master Craftsmanship",
      subtitle: "Precision cuts with artistic flair"
    },
    {
      image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Modern Techniques",
      subtitle: "Contemporary styles for the modern gentleman"
    },
    {
      image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Premium Experience",
      subtitle: "Luxury barbering redefined"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Floating Cards positioned with higher z-index to stay on top */}
      <FloatingCards />
      
      {/* Carousel Container with lower z-index */}
      <div className="relative w-full h-full z-40">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-r from-black/80 via-black/50 to-black/30'
                  : 'bg-gradient-to-r from-white/80 via-white/50 to-white/30'
              }`} />
            </div>
            
            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  {slide.title}
                </h1>
                <p className={`text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white overflow-hidden transform transition-all duration-300 hover:scale-105">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Calendar size={20} />
                      Book Now
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  
                  <button className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 rounded-full font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center justify-center gap-2">
                      <Star size={20} />
                      View Portfolio
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400 ${
          isDark ? 'bg-black/30 hover:bg-black/50' : 'bg-white/30 hover:bg-white/50'
        }`}
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        onClick={nextSlide}
        className={`absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-cyan-400/30 hover:border-cyan-400 ${
          isDark ? 'bg-black/30 hover:bg-black/50' : 'bg-white/30 hover:bg-white/50'
        }`}
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                : isDark ? 'bg-white/30 hover:bg-white/50' : 'bg-gray-600/30 hover:bg-gray-600/50'
            }`}
          />
        ))}
      </div>

      {/* Neon accent lines */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
    </section>
  );
};

export default Hero;