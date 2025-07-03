import React from 'react';
import { Phone } from 'lucide-react';

const ContactCard: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 transition-all duration-500 animate-fadeInUp ${
    isDark 
      ? 'bg-white/5 border-white/10 hover:bg-white/10'
      : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
  }`}>
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
        <Phone className="w-6 h-6 text-white" />
      </div>
      <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Contact Info</h3>
    </div>
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Phone className="w-5 h-5 text-cyan-400" />
        <span className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>+233 123 456 789</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-5 h-5 text-cyan-400">@</span>
        <span className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>info@diztebarber.com</span>
      </div>
    </div>
    <div className={`mt-6 pt-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Walk-ins welcome, but appointments recommended for guaranteed service times.</p>
    </div>
  </div>
);

export default ContactCard; 