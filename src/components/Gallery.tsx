import React, { useState } from 'react';
import GalleryHeader from './GalleryHeader';
import GalleryGrid from './GalleryGrid';
import GalleryModal from './GalleryModal';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [favourites, setFavourites] = useState<number[]>([]);
  const [shared, setShared] = useState<number[]>([]);
  const isDark = false; // Replace with your theme context if needed

  const portfolioImages = [
    { id: 1, image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Classic Fade", category: "Haircut" },
    { id: 2, image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Beard Sculpting", category: "Beard" },
    { id: 3, image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Modern Pompadour", category: "Styling" },
    { id: 4, image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Precision Cut", category: "Haircut" },
    { id: 5, image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Executive Style", category: "Business" },
    { id: 6, image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600", title: "Creative Design", category: "Artistic" }
  ];

  const selected = portfolioImages.find(img => img.id === selectedImage) || null;

  const handleFav = (id: number) => {
    setFavourites(favs => favs.includes(id) ? favs : [...favs, id]);
  };
  const handleShare = (id: number) => {
    setShared(shs => shs.includes(id) ? shs : [...shs, id]);
  };

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <GalleryHeader isDark={isDark} />
        <GalleryGrid
          images={portfolioImages}
          isDark={isDark}
          onImageView={setSelectedImage}
          onFav={handleFav}
          onShare={handleShare}
          favourites={favourites}
          shared={shared}
        />
        <div className="text-center mt-8 sm:mt-12">
          <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25">
            <span className="flex items-center justify-center gap-2">
              View Complete Portfolio
            </span>
          </button>
        </div>
      </div>
      <GalleryModal image={selected} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

export default Gallery;