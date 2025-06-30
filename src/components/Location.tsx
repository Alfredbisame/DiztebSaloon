import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Location: React.FC = () => {
  const { isDark } = useTheme();

  const hours = [
    { day: 'Monday', time: '9:00 AM - 8:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 8:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 8:00 PM' },
    { day: 'Thursday', time: '9:00 AM - 8:00 PM' },
    { day: 'Friday', time: '9:00 AM - 9:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 6:00 PM' }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Visit Our Studio
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Located in the heart of the city, experience luxury grooming in our state-of-the-art facility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Map/Address Section */}
          <div className="space-y-6 sm:space-y-8">
            {/* Address Card */}
            <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 transition-all duration-500 ${
              isDark 
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
            }`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Our Location
                  </h3>
                  <p className={`text-base sm:text-lg leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    123 Premium Street<br />
                    Downtown District<br />
                    Accra, Ghana
                  </p>
                </div>
              </div>
              
              <button className="w-full py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 flex items-center justify-center gap-2">
                <Navigation className="w-5 h-5" />
                Get Directions
              </button>
            </div>

            {/* Map Placeholder */}
            <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 transition-all duration-500 ${
              isDark 
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
            }`}>
              <div className={`aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden ${
                isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20" />
                <div className="relative z-10 text-center">
                  <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 mx-auto mb-4" />
                  <p className={`font-semibold text-base sm:text-lg ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Interactive Map
                  </p>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Click to view full map
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Hours & Contact Section */}
          <div className="space-y-6 sm:space-y-8">
            {/* Hours Card */}
            <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 transition-all duration-500 ${
              isDark 
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Business Hours
                </h3>
              </div>
              
              <div className="space-y-3">
                {hours.map((hour, index) => (
                  <div key={index} className={`flex justify-between items-center py-2 border-b last:border-b-0 ${
                    isDark ? 'border-white/10' : 'border-gray-200'
                  }`}>
                    <span className={`font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {hour.day}
                    </span>
                    <span className="text-cyan-400 font-semibold text-sm sm:text-base">{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 transition-all duration-500 ${
              isDark 
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Contact Info
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className={`text-base sm:text-lg ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    +233 123 456 789
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 text-cyan-400">@</span>
                  <span className={`text-base sm:text-lg ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    info@premiumbarber.com
                  </span>
                </div>
              </div>
              
              <div className={`mt-6 pt-6 border-t ${
                isDark ? 'border-white/10' : 'border-gray-200'
              }`}>
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Walk-ins welcome, but appointments recommended for guaranteed service times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;