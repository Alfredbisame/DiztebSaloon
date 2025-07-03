import React from 'react';
import { Crown } from 'lucide-react';

const AboutMission: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 ${
    isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200/50'
  }`}>
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
        <Crown className="w-6 h-6 text-white" />
      </div>
      <h3 className={`text-xl sm:text-2xl font-bold ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Our Mission
      </h3>
    </div>
    <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
      isDark ? 'text-gray-300' : 'text-gray-700'
    }`}>
      To redefine the barbering experience by combining time-honored techniques with contemporary innovation, creating a space where every client feels valued, confident, and impeccably groomed.
    </p>
    <p className={`text-sm sm:text-base leading-relaxed ${
      isDark ? 'text-gray-300' : 'text-gray-700'
    }`}>
      We believe that great grooming is more than just a service—it's an art form that enhances confidence and celebrates individual style.
    </p>
  </div>
);

export default AboutMission; 