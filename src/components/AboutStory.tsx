import React from 'react';
import { Scissors } from 'lucide-react';

const AboutStory: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 ${
    isDark ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200/50'
  }`}>
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
        <Scissors className="w-6 h-6 text-white" />
      </div>
      <h3 className={`text-xl sm:text-2xl font-bold ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Our Story
      </h3>
    </div>
    <p className={`text-sm sm:text-base leading-relaxed mb-4 ${
      isDark ? 'text-gray-300' : 'text-gray-700'
    }`}>
      What started as a small neighborhood barbershop has grown into Ghana's premier grooming destination. Our founder, Marcus Johnson, brought his vision of combining traditional craftsmanship with modern luxury to create an unparalleled experience.
    </p>
    <p className={`text-sm sm:text-base leading-relaxed ${
      isDark ? 'text-gray-300' : 'text-gray-700'
    }`}>
      Every cut, every shave, every service is performed with meticulous attention to detail and a commitment to excellence that has earned us the trust of thousands of satisfied clients.
    </p>
  </div>
);

export default AboutStory; 