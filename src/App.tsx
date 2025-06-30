import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTheme } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Location from './components/Location';
import Contact from './components/Contact';
import About from './components/About';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { isDark } = useTheme();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <Services />
            <Gallery />
          </>
        );
      case 'services':
        return <Services />;
      case 'gallery':
        return <Gallery />;
      case 'booking':
        return <Booking />;
      case 'location':
        return <Location />;
      case 'contact':
        return <Contact />;
      case 'about':
        return <About />;
      default:
        return (
          <>
            <Hero />
            <Services />
            <Gallery />
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <BackgroundEffects />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <div className="relative z-10 pt-16">
        {renderPage()}
        
        {/* Footer */}
        <footer className={`py-6 sm:py-8 px-4 sm:px-6 border-t transition-colors duration-300 ${
          isDark 
            ? 'border-white/10' 
            : 'border-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Premium Barber Studio
              </h3>
            </div>
            <p className={`mb-4 text-sm sm:text-base ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Crafting excellence in men's grooming since 2015
            </p>
            <div className={`flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-500'
            }`}>
              <span>&copy; {new Date().getFullYear()} Premium Barber Studio</span>
              <span className="hidden sm:inline">•</span>
              <span>All Rights Reserved</span>
              <span className="hidden sm:inline">•</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;