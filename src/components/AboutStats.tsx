import React from 'react';
import CountUp from 'react-countup';

interface Stat {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const parseNumber = (num: string) => {
  if (num.endsWith('+')) return parseInt(num) || 0;
  if (num.includes('.')) return parseFloat(num);
  return parseInt(num) || 0;
};

const AboutStats: React.FC<{ stats: Stat[]; isDark: boolean }> = ({ stats, isDark }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-20">
      {stats.map((stat, index) => {
        const target = parseNumber(stat.number);
        const isPlus = stat.number.endsWith('+');
        return (
          <div
            key={index}
            className={`group text-center p-4 sm:p-6 backdrop-blur-xl border rounded-2xl transition-all duration-500 hover:scale-105 focus-within:scale-105 shadow-lg ring-0 hover:ring-2 focus-within:ring-2 ring-cyan-400/40 ${
              isDark
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
            }`}
            tabIndex={0}
            aria-label={stat.label}
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4 group-hover:scale-110 group-focus:scale-110 transition-transform duration-300 shadow-md">
              {stat.icon}
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <CountUp
                end={target}
                duration={1.4 + index * 0.2}
                separator="," 
                decimals={stat.number.includes('.') ? 1 : 0}
                suffix={isPlus ? '+' : ''}
                start={0}
                useEasing
              />
            </h3>
            <p className={`text-sm sm:text-base ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AboutStats; 