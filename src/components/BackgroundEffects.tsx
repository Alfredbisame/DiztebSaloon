import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const BackgroundEffects: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated grid background */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900'
          : 'bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50'
      }`}>
        <div className="absolute inset-0" style={{
          backgroundImage: isDark 
            ? `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`
            : `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>
      
      {/* Floating neon orbs */}
      <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse ${
        isDark ? 'bg-cyan-500/20' : 'bg-blue-500/20'
      }`} />
      <div className={`absolute top-3/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-bounce ${
        isDark ? 'bg-purple-500/20' : 'bg-indigo-500/20'
      }`} style={{ animationDuration: '3s' }} />
      <div className={`absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full blur-3xl animate-ping ${
        isDark ? 'bg-yellow-500/20' : 'bg-amber-500/20'
      }`} style={{ animationDuration: '4s' }} />
      
      {/* Scanning lines */}
      <div className="absolute inset-0">
        <div className={`absolute w-full h-px bg-gradient-to-r from-transparent to-transparent animate-scan ${
          isDark ? 'via-cyan-400/50' : 'via-blue-500/50'
        }`} />
      </div>
    </div>
  );
};

export default BackgroundEffects;