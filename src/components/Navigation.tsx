import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Home, Scissors, Calendar, MapPin, Phone, User, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'services', label: 'Services', icon: <Scissors className="w-4 h-4" /> },
    { id: 'gallery', label: 'Gallery', icon: <Star className="w-4 h-4" /> },
    { id: 'booking', label: 'Booking', icon: <Calendar className="w-4 h-4" /> },
    { id: 'location', label: 'Location', icon: <MapPin className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> }
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
      isDark 
        ? 'bg-slate-900/70 backdrop-blur-2xl border border-white/10' 
        : 'bg-white/70 backdrop-blur-2xl border border-gray-200/50'
    } rounded-full px-6 py-3 shadow-2xl hover:shadow-cyan-400/20`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 mr-8">
          <div className={`w-8 h-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300`}>
            <Scissors className="w-4 h-4 text-white" />
          </div>
          <span className={`text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hidden sm:block`}>
            Dizteb
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-400/30'
                  : isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isDark 
                ? 'bg-white/10 text-yellow-400 hover:bg-white/20 hover:shadow-lg hover:shadow-yellow-400/30' 
                : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:shadow-lg'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              isDark 
                ? 'bg-white/10 text-white hover:bg-white/20' 
                : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200/80'
            }`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`lg:hidden absolute top-full left-0 right-0 mt-2 py-4 rounded-2xl transition-all duration-300 ${
            isDark 
              ? 'bg-slate-900/90 backdrop-blur-2xl border border-white/10' 
              : 'bg-white/90 backdrop-blur-2xl border border-gray-200/50'
          } shadow-2xl`}>
            <div className="space-y-1 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                      : isDark
                      ? 'text-gray-300 hover:text-white hover:bg-white/10'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;