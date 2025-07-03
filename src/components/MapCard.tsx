import React from 'react';
import { MapPin } from 'lucide-react';

const MapCard: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 transition-all duration-500 ${
    isDark 
      ? 'bg-white/5 border-white/10 hover:bg-white/10'
      : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
  }`}>
    <div className={`aspect-video rounded-2xl flex items-center justify-center relative overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'
    }`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.08045709694!2d-0.044114423898774305!3d5.844284694139047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf7c504464ae97%3A0xce96965a6ec90a8e!2sAfienya%20-%20Dodowa%20Rd!5e0!3m2!1sen!2sgh!4v1751573193622!5m2!1sen!2sgh"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 240, borderRadius: '1rem' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        className="absolute inset-0 w-full h-full rounded-2xl"
      />
      {/* Overlay for dark mode effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 pointer-events-none" />
      {/* Pin and text overlay (optional, can remove if not needed) */}
      {/*
      <div className="relative z-10 text-center">
        <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
        <p className={`font-semibold text-base sm:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>Interactive Map</p>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Click to view full map</p>
      </div>
      <div className="absolute top-4 right-4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />
      */}
    </div>
  </div>
);

export default MapCard; 