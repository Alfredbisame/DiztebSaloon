import React from 'react';
import { Star, Award, Clock, Users, Scissors, Crown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const FloatingCards: React.FC = () => {
  const { isDark } = useTheme();

  const floatingCards = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "5 Star Rating",
      subtitle: "1000+ Reviews",
      position: "top-20 left-10",
      animation: "float-slow",
      delay: "0s"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Winning",
      subtitle: "Best Barber 2024",
      position: "top-32 right-16",
      animation: "float-medium",
      delay: "1s"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Service",
      subtitle: "30min Average",
      position: "bottom-40 left-20",
      animation: "float-fast",
      delay: "2s"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "10K+ Clients",
      subtitle: "Happy Customers",
      position: "bottom-32 right-10",
      animation: "float-slow",
      delay: "0.5s"
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Master Cuts",
      subtitle: "Premium Tools",
      position: "top-1/2 left-8",
      animation: "float-medium",
      delay: "1.5s"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "VIP Service",
      subtitle: "Luxury Experience",
      position: "top-1/2 right-12",
      animation: "float-fast",
      delay: "2.5s"
    }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {floatingCards.map((card, index) => (
        <div
          key={index}
          className={`absolute ${card.position} hidden lg:block`}
          style={{
            animation: `${card.animation} 4s ease-in-out infinite`,
            animationDelay: card.delay
          }}
        >
          <div className={`group relative ${
            isDark 
              ? 'bg-white/5 backdrop-blur-xl border border-white/10' 
              : 'bg-white/80 backdrop-blur-xl border border-gray-200/50'
          } rounded-2xl p-4 transition-all duration-500 hover:scale-110 hover:rotate-3`}>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                {card.icon}
              </div>
              <div>
                <h4 className={`font-semibold text-sm ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {card.title}
                </h4>
                <p className={`text-xs ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}>
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