import React, { useEffect } from 'react';

interface GalleryModalProps {
  image: { id: number; image: string; title: string; category: string } | null;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!image) return null;
  const details = {
    description: 'This style is a favorite among our clients for its clean lines and modern look. Our barbers use premium tools and techniques to achieve this result.',
    date: '2024-05-01',
  };
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all" onClick={onClose}>
      <div
        className="relative max-w-lg w-full mx-4 sm:mx-0 animate-bounceInModal"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close" className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-900 shadow-lg transition-colors">
          <span className="text-xl font-bold">&times;</span>
        </button>
        <img src={image.image} alt={image.title} className="w-full rounded-2xl shadow-2xl object-cover aspect-square" />
        <div className="mt-4 text-center px-2">
          <h3 className="text-xl font-bold mb-1 text-white drop-shadow-lg">{image.title}</h3>
          <span className="text-cyan-300 font-medium block mb-2">{image.category}</span>
          <p className="text-gray-200 text-sm mb-2">{details.description}</p>
          <div className="text-xs text-gray-400 mb-4">Added: {details.date}</div>
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400">
            Book Now
          </button>
        </div>
      </div>
      <style>{`
        @keyframes bounceInModal {
          0% { opacity: 0; transform: scale(0.7) translateY(60px); }
          60% { opacity: 1; transform: scale(1.05) translateY(-10px); }
          80% { transform: scale(0.98) translateY(2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-bounceInModal {
          animation: bounceInModal 0.7s cubic-bezier(.68,-0.55,.27,1.55);
        }
      `}</style>
    </div>
  );
};

export default GalleryModal; 