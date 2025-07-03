import React from 'react';

const GalleryHeader: React.FC<{ isDark: boolean }> = ({ isDark }) => (
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
      Our Masterpieces
    </h2>
    <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Discover the artistry and precision that defines our craft</p>
  </div>
);

export default GalleryHeader; 