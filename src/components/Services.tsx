import React from 'react';
import { Scissors, Crown, Sparkles, Clock, Star, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Services: React.FC = () => {
  const { isDark } = useTheme();

  const services = [
    {
      tier: "Basic",
      icon: <Scissors className="w-8 h-8" />,
      price: "₵35",
      duration: "30 min",
      features: [
        "Professional haircut",
        "Beard trim",
        "Hair wash & styling",
        "Basic consultation"
      ],
      popular: false,
      gradient: "from-slate-600 to-slate-800"
    },
    {
      tier: "VIP",
      icon: <Crown className="w-8 h-8" />,
      price: "₵65",
      duration: "60 min",
      features: [
        "Premium cut & styling",
        "Hot towel treatment",
        "Beard sculpting",
        "Hair & scalp massage",
        "Premium products",
        "Complimentary drink"
      ],
      popular: true,
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      tier: "Platinum",
      icon: <Sparkles className="w-8 h-8" />,
      price: "₵95",
      duration: "90 min",
      features: [
        "Master barber service",
        "Luxury hot towel ritual",
        "Precision beard artistry",
        "Deep scalp treatment",
        "Premium grooming kit",
        "Personal consultation",
        "Champagne service",
        "30-day style guarantee"
      ],
      popular: false,
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Premium Services
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Choose your experience level and let our master barbers craft your perfect look
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.tier}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 ${
                service.popular ? 'transform -translate-y-4' : ''
              }`}
              style={{
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Glassmorphic Card */}
              <div className={`relative backdrop-blur-xl border rounded-3xl p-6 sm:p-8 h-full transition-all duration-500 ${
                isDark 
                  ? 'bg-white/5 border-white/10 group-hover:bg-white/10 group-hover:border-white/20'
                  : 'bg-white/80 border-gray-200/50 group-hover:bg-white/90 group-hover:border-gray-300/50'
              }`}>
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-2 my-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-4 sm:px-6 py-2 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    MOST POPULAR
                  </div>
                )}

                {/* Service Icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Service Info */}
                <div className="mb-4 sm:mb-6">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.tier}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-cyan-400">{service.price}</span>
                    <div className={`flex items-center gap-1 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6 sm:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center gap-3 text-sm sm:text-base ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Book Button */}
                <button className={`w-full py-3 sm:py-4 rounded-2xl font-semibold text-white bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 text-sm sm:text-base`}>
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  Book {service.tier}
                </button>

                {/* Floating Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl -z-10`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;