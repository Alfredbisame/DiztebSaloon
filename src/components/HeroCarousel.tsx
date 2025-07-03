import React, { useState, useEffect, useRef } from 'react';
import HeroSlide from './HeroSlide';
import HeroNavigation from './HeroNavigation';
import HeroIndicators from './HeroIndicators';

interface HeroCarouselProps {
  isDark: boolean;
}

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

const HeroCarousel: React.FC<HeroCarouselProps> = ({ isDark }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1); // 1: next, -1: prev
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  return (
    <div className="relative w-full h-full z-40 overflow-hidden">
      {slides.map((slide, index) => (
        <HeroSlide
          key={index}
          image={slide.image}
          title={slide.title}
          subtitle={slide.subtitle}
          isDark={isDark}
          active={index === currentSlide}
          direction={direction}
          index={index}
          currentSlide={currentSlide}
        />
      ))}
      <HeroNavigation onPrev={prevSlide} onNext={nextSlide} isDark={isDark} />
      <HeroIndicators count={slides.length} current={currentSlide} setCurrent={goToSlide} isDark={isDark} />
    </div>
  );
};

export default HeroCarousel; 