import React, { useEffect, useState, useRef } from 'react';
import { Star, Award, Clock, Users, Scissors, Crown, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const FloatingCards: React.FC = () => {
  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    // Add a small delay for staggered entrance
    const timer = setTimeout(() => {
      setMounted(true);
    }, 300);
    
    return () => {
      setMounted(false);
      clearTimeout(timer);
    };
  }, []);
  
  // Track mouse position for parallax effect and magnetic pull
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };
    
    // Add touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (containerRef.current && e.touches[0]) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.touches[0].clientX - rect.left) / rect.width - 0.5;
        const y = (e.touches[0].clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };
    
    // Add magnetic pull effect for cards when mouse is near
    const handleMagneticPull = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const cards = document.querySelectorAll('.floating-card');
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;
        
        // Calculate distance between mouse and card center
        const distanceX = mouseX - cardCenterX;
        const distanceY = mouseY - cardCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Apply magnetic pull effect if mouse is close enough (within 200px)
        if (distance < 200 && hoveredCard === null) {
          const pullStrength = 0.5; // Adjust for stronger/weaker effect
          const pullX = (distanceX / distance) * pullStrength * (1 - distance / 200);
          const pullY = (distanceY / distance) * pullStrength * (1 - distance / 200);
          
          // Apply transform directly to create a more responsive feel
          (card as HTMLElement).style.transform = `
            translate(${mousePosition.x * 20 - pullX * 30}px, ${mousePosition.y * 20 - pullY * 30}px) 
            scale(${hoveredCard === index ? 1.05 : 1})
          `;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMagneticPull);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMagneticPull);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [hoveredCard]);

  const cards = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "5 Star Rating",
      subtitle: "1000+ Reviews",
      position: "top-20 left-10",
      animation: "float-rotate-3d", // Using the new 3D rotation animation
      delay: "0s",
      glowColor: "from-yellow-300 to-amber-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Winning",
      subtitle: "Best Barber 2024",
      position: "top-32 right-16",
      animation: "float-medium",
      delay: "1s",
      glowColor: "from-blue-400 to-indigo-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Service",
      subtitle: "30min Average",
      position: "bottom-40 left-20",
      animation: "float-fast",
      delay: "2s",
      glowColor: "from-green-400 to-emerald-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "10K+ Clients",
      subtitle: "Happy Customers",
      position: "bottom-32 right-10",
      animation: "float-rotate-3d", // Using the new 3D rotation animation
      delay: "0.5s",
      glowColor: "from-purple-400 to-pink-500"
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Master Cuts",
      subtitle: "Premium Tools",
      position: "top-1/2 left-8",
      animation: "float-medium",
      delay: "1.5s",
      glowColor: "from-red-400 to-rose-500"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "VIP Service",
      subtitle: "Luxury Experience",
      position: "top-1/2 right-12",
      animation: "float-rotate-3d", // Using the new 3D rotation animation
      delay: "2.5s",
      glowColor: "from-cyan-400 to-blue-500"
    }
  ];
  
  // Function to get mobile-friendly positions
  const getMobilePosition = (position: string): string => {
    // Create a more compact layout for mobile
    const positionMap: Record<string, string> = {
      'top-20 left-10': 'top-10 left-4',
      'top-32 right-16': 'top-10 right-4',
      'bottom-40 left-20': 'bottom-24 left-4',
      'bottom-32 right-10': 'bottom-24 right-4',
      'top-1/2 left-8': 'top-1/3 left-4',
      'top-1/2 right-12': 'top-1/3 right-4'
    };
    
    return positionMap[position] || position;
  };
  
  return (
    <div ref={containerRef} className="overflow-hidden absolute inset-0 z-70 pointer-events-none">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`absolute ${card.position} md:${card.position} ${getMobilePosition(card.position)} transform transition-all duration-700 floating-card ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${hoveredCard === index ? 'pointer-events-auto' : ''}`}
          style={{
            animation: `animate-${card.animation}`,
            animationDelay: card.delay,
            transitionDelay: `calc(${card.delay} + 200ms)`,
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
            transform: hoveredCard === index || hoveredCard === null 
              ? `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) scale(${hoveredCard === index ? 1.05 : 1})` 
              : `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) scale(0.95)`,
            transition: 'transform 0.2s ease-out, opacity 0.3s ease-in-out, scale 0.3s ease-in-out',
            // Add animation-play-state to pause the floating animation when hovered
            animationPlayState: hoveredCard === index ? 'paused' : 'running'
          }}
          ref={el => cardRefs.current[index] = el}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => {
            setHoveredCard(null);
            setCardTilt({ x: 0, y: 0 });
          }}
          onMouseMove={(e) => {
            if (hoveredCard === index && cardRefs.current[index]) {
              const card = cardRefs.current[index];
              const rect = card?.getBoundingClientRect();
              if (rect) {
                // Calculate mouse position relative to card
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                
                // Update tilt values
                setCardTilt({ x: y * 20, y: x * -20 }); // Inverted for natural tilt feel
              }
            }
          }}
          onTouchStart={() => setHoveredCard(index)}
          onTouchMove={(e) => {
            if (hoveredCard === index && cardRefs.current[index] && e.touches[0]) {
              const card = cardRefs.current[index];
              const rect = card?.getBoundingClientRect();
              if (rect) {
                // Calculate touch position relative to card
                const x = (e.touches[0].clientX - rect.left) / rect.width - 0.5;
                const y = (e.touches[0].clientY - rect.top) / rect.height - 0.5;
                
                // Update tilt values
                setCardTilt({ x: y * 10, y: x * -10 }); // Reduced effect for touch
              }
            }
          }}
          onTouchEnd={() => {
            setTimeout(() => {
              setHoveredCard(null);
              setCardTilt({ x: 0, y: 0 });
            }, 1000);
          }}
        >
          <div 
            className={`group relative card-hover-rise ${hoveredCard === index ? 'animate-pulse-border' : ''} ${
            isDark 
              ? 'border backdrop-blur-xl bg-white/10 border-white/20' 
              : 'border backdrop-blur-xl bg-white/80 border-gray-200/50'
          } rounded-2xl p-3 sm:p-4 transition-all duration-500 hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl`}
            style={{
              transform: hoveredCard === index 
                ? `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)` 
                : 'perspective(1000px)',
              transition: hoveredCard === index ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out',
              transformStyle: 'preserve-3d'
            }}>
            {/* Enhanced glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${card.glowColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10 animate-pulse-glow`} />
            
            {/* Mouse follow highlight */}
            <div 
              className="absolute inset-0 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-40" 
              style={{
                background: `radial-gradient(circle at ${(mousePosition.x + 0.5) * 100}% ${(mousePosition.y + 0.5) * 100}%, rgba(0, 255, 255, 0.4) 0%, transparent 70%)`,
                zIndex: -8
              }}
            />
            
            {/* Shimmer effect on hover */}
            <div 
              className={`absolute inset-0 rounded-2xl overflow-hidden ${hoveredCard === index ? 'opacity-30' : 'opacity-0'} transition-opacity duration-300`}
              style={{ zIndex: -7 }}
            >
              <div className="absolute inset-0 shimmer-effect"></div>
            </div>
            
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" 
              style={{
                boxShadow: `0 0 15px 2px rgba(0, 255, 255, 0.3)`,
                zIndex: -5
              }} 
            />
            
            {/* Sparkle effect */}
            <div className="absolute -top-1 -right-1 text-yellow-300 opacity-0 transition-opacity duration-500 animate-spin-slow group-hover:opacity-100">
              <Sparkles size={16} />
            </div>
            
            <div className="flex gap-2 items-center sm:gap-3">
              <div 
                className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${card.glowColor} rounded-xl flex items-center justify-center text-white shadow-md transform transition-transform duration-300 group-hover:scale-110`}
                style={{
                  transform: hoveredCard === index ? 'translateZ(20px)' : 'translateZ(0)',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                {card.icon}
              </div>
              <div style={{
                transform: hoveredCard === index ? 'translateZ(10px)' : 'translateZ(0)',
                transition: 'transform 0.3s ease-out'
              }}>
                <h4 
                  className={`font-semibold text-xs sm:text-sm ${
                    isDark ? 'text-white' : 'text-gray-900'
                  } group-hover:text-cyan-400 transition-colors duration-300`}
                  style={{
                    textShadow: hoveredCard === index ? '0 2px 4px rgba(0,0,0,0.2)' : 'none'
                  }}
                >
                  {card.title}
                </h4>
                <p 
                  className={`text-[10px] sm:text-xs ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  } group-hover:opacity-100 opacity-80 transition-opacity duration-300`}
                  style={{
                    textShadow: hoveredCard === index ? '0 1px 2px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  {card.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingCards;