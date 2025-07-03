import React from 'react';
import { Clock } from 'lucide-react';

interface HoursCardProps {
  isDark: boolean;
  hours: { day: string; time: string }[];
}

const HoursCard: React.FC<HoursCardProps> = ({ isDark, hours }) => (
  <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 transition-all duration-500 animate-fadeInUp ${
    isDark 
      ? 'bg-white/5 border-white/10 hover:bg-white/10'
      : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
  }`}>
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
        <Clock className="w-6 h-6 text-white" />
      </div>
      <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Business Hours</h3>
    </div>
    <div className="space-y-3">
      {hours.map((hour, index) => (
        <div key={index} className={`flex justify-between items-center py-2 border-b last:border-b-0 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
          <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{hour.day}</span>
          <span className="text-cyan-400 font-semibold text-sm sm:text-base">{hour.time}</span>
        </div>
      ))}
    </div>
  </div>
);

export default HoursCard; 