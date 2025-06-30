import React, { useState } from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { isDark } = useTheme();

  const portfolioImages = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Classic Fade",
      category: "Haircut"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Beard Sculpting",
      category: "Beard"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Modern Pompadour",
      category: "Styling"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Precision Cut",
      category: "Haircut"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Executive Style",
      category: "Business"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Creative Design",
      category: "Artistic"
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Our Masterpieces
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Discover the artistry and precision that defines our craft
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {portfolioImages.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border transition-all duration-500 hover:scale-105 cursor-pointer ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10'
                  : 'bg-white/80 border-gray-200/50 hover:bg-white/90'
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
              onClick={() => setSelectedImage(item.id)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* View Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-400/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-400/50">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`text-base sm:text-lg font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    <span className="text-sm text-cyan-400 font-medium">{item.category}</span>
                  </div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25">
            <span className="flex items-center justify-center gap-2">
              <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              View Complete Portfolio
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;