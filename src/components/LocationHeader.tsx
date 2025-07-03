import React from 'react';

const LocationHeader: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
      Visit Our Studio
    </h2>
    <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Located in the heart of the city, experience luxury grooming in our state-of-the-art facility</p>
  </div>
);

export default LocationHeader; 