import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const AddressCard: React.FC<{ isDark: boolean }> = ({ isDark }) => (
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
        <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Location</h3>
        <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          123 Premium Street<br />
          Afienya Dodowa District<br />
          Accra, Ghana
        </p>
      </div>
    </div>
    <a
      href="https://maps.app.goo.gl/JERa4vwZMUw2ASPC7"
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <button
        className="w-full py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/40 flex items-center justify-center gap-2 group text-lg"
        style={{ boxShadow: '0 4px 24px 0 rgba(0, 255, 255, 0.10)' }}
      >
        <span className="relative flex items-center">
          <Navigation className="w-5 h-5 mr-2 group-hover:animate-bounce-right" />
          Get Directions
        </span>
      </button>
    </a>
    <style>{`
      @keyframes bounce-right {
        0%, 100% { transform: translateX(0); }
        30% { transform: translateX(6px); }
        60% { transform: translateX(-2px); }
        80% { transform: translateX(2px); }
      }
      .group-hover\\:animate-bounce-right:hover {
        animation: bounce-right 0.5s;
      }
    `}</style>
  </div>
);

export default AddressCard; 