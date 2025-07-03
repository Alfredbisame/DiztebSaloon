import React, { useState } from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';

interface GalleryCardProps {
  item: { id: number; image: string; title: string; category: string };
  isDark: boolean;
  onView: () => void;
  onFav: () => void;
  onShare: () => void;
  faved: boolean;
  shared: boolean;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, isDark, onView, onFav, onShare, faved, shared }) => {
  const [favAnim, setFavAnim] = useState(false);
  const [shareAnim, setShareAnim] = useState(false);
  const handleFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavAnim(true);
    onFav();
    setTimeout(() => setFavAnim(false), 1200);
  };
  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShareAnim(true);
    onShare();
    setTimeout(() => setShareAnim(false), 1200);
  };
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1 cursor-pointer
        ${isDark
          ? 'bg-gradient-to-br from-white/10 via-gray-900/60 to-gray-900/80 border-white/10 hover:border-cyan-400/60'
          : 'bg-gradient-to-br from-white/80 via-cyan-50 to-blue-50 border-gray-200/60 hover:border-cyan-400/60'}
        backdrop-blur-xl
      `}
      style={{ animation: `fadeInUp 0.6s ease-out ${item.id * 0.1}s both` }}
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
          <button
            className={`w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${faved || favAnim ? 'bg-pink-500 text-white' : 'text-white hover:bg-cyan-400 hover:text-white'}`}
            onClick={handleFav}
            aria-label="Add to Favourites"
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button
            className={`w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${shared || shareAnim ? 'bg-blue-500 text-white' : 'text-white hover:bg-cyan-400 hover:text-white'}`}
            onClick={handleShare}
            aria-label="Share"
          >
            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
        {/* View Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            className="w-12 h-12 sm:w-16 sm:h-16 bg-cyan-400/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-400/50 hover:bg-cyan-400/40 transition-colors"
            onClick={e => { e.stopPropagation(); onView(); }}
            aria-label="View Details"
          >
            <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
          </button>
        </div>
        {/* Glow/Glass effect on hover */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl transition-all duration-500 group-hover:opacity-80 opacity-0 group-hover:scale-105 group-hover:blur-md
          bg-gradient-to-br from-cyan-400/10 via-cyan-200/10 to-blue-400/10 z-10" />
      </div>
      {/* Info */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className={`text-base sm:text-lg font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'} drop-shadow-sm`}>{item.title}</h3>
            <span className="text-sm text-cyan-400 font-medium">{item.category}</span>
          </div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10" />
    </div>
  );
};

export default GalleryCard; 