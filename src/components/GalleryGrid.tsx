import React from 'react';
import GalleryCard from './GalleryCard';

interface GalleryGridProps {
  images: { id: number; image: string; title: string; category: string }[];
  isDark: boolean;
  onImageView: (id: number) => void;
  onFav: (id: number) => void;
  onShare: (id: number) => void;
  favourites: number[];
  shared: number[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, isDark, onImageView, onFav, onShare, favourites, shared }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {images.map((item) => (
      <GalleryCard
        key={item.id}
        item={item}
        isDark={isDark}
        onView={() => onImageView(item.id)}
        onFav={() => onFav(item.id)}
        onShare={() => onShare(item.id)}
        faved={favourites.includes(item.id)}
        shared={shared.includes(item.id)}
      />
    ))}
  </div>
);

export default GalleryGrid; 