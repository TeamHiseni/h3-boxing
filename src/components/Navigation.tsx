import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Hexagon, Cpu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/uber-uns', label: 'H3 Boxing' },
    { path: '/mitgliedschaften', label: 'Mitgliedschaften' },
    { path: '/galerie', label: 'Galerie' },
    { path: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-red-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Holographic Scan Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group relative">
            {/* Holographic Logo Background */}
            <div className="absolute inset-0 bg-red-600/20 blur-xl group-hover:bg-red-500/30 transition-all duration-500 rounded-full"></div>
            
            {/* Animated Logo Elements */}
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="H3 Boxing Logo" 
                className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]"
              />
              <div className="absolute inset-0 border border-red-500/30 rounded-lg animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            <span className="text-xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(220,38,38,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(220,38,38,0.8)] transition-all duration-300">
              H3 Boxing
            </span>
            
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative px-4 py-2 font-medium transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]'
                    : 'text-gray-300 hover:text-red-500'
                }`}
              >
                {/* Holographic Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                {/* Active Indicator */}
                {location.pathname === item.path && (
                  <>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 via-red-500 to-purple-500 animate-pulse"></div>
                    <div className="absolute inset-0 border border-red-500/30 rounded-lg animate-pulse"></div>
                  </>
                )}
                
                {/* Corner Indicators */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 text-gray-300 hover:text-red-500 transition-colors duration-300 group"
          >
            {/* Button Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800 group-hover:border-red-500/50 transition-all duration-300"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              {isOpen ? (
                <X className="h-6 w-6 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
              ) : (
                <Menu className="h-6 w-6 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden relative">
            {/* Mobile Menu Background */}
            <div className="absolute inset-0 bg-black/95 backdrop-blur-md border-t border-red-500/20 rounded-b-2xl"></div>
            
            {/* Holographic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-transparent to-purple-500/5 rounded-b-2xl"></div>
            
            <div className="relative z-10 px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative block px-4 py-3 font-medium transition-all duration-300 transform hover:scale-105 rounded-lg ${
                    location.pathname === item.path
                      ? 'text-red-500 bg-red-900/20 border border-red-500/30'
                      : 'text-gray-300 hover:text-red-500 hover:bg-red-900/10 border border-transparent hover:border-red-500/30'
                  }`}
                >
                  {/* Holographic Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  
                  {/* Corner Indicators */}
                  <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                    {item.label}
                  </span>
                  
                  {/* Scan Line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;