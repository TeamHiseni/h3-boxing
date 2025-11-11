import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Music2, Zap, MapPin, Cpu, Hexagon, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 border-t border-red-500/20 relative overflow-hidden">
      {/* Holographic Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(220, 38, 38, 0.3) 25%, rgba(220, 38, 38, 0.3) 26%, transparent 27%),
            linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%),
            linear-gradient(45deg, transparent 24%, rgba(168, 85, 247, 0.3) 25%, rgba(168, 85, 247, 0.3) 26%, transparent 27%)
          `,
          backgroundSize: '60px 60px, 60px 60px, 60px 60px'
        }}></div>
      </div>

      {/* Animated Scan Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600/20 blur-xl group-hover:bg-red-500/30 transition-all duration-500 rounded-full"></div>
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
          </div>

          {/* Social Media & Address */}
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
              {[
                { 
                  icon: Instagram, 
                  href: "https://www.instagram.com/h3boxing/", 
                  color: "hover:text-pink-500",
                  glow: "pink-500"
                },
                { 
                  icon: Youtube, 
                  href: "http://www.youtube.com/@H3Boxing-GmbH", 
                  color: "hover:text-red-600",
                  glow: "red-600"
                },
                { 
                  icon: Music2, 
                  href: "https://www.tiktok.com/@h3boxing", 
                  color: "hover:text-purple-500",
                  glow: "purple-500"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                >
                  {/* Holographic Background */}
                  <div className={`absolute inset-0 bg-${social.glow}/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}></div>
                  
                  {/* Icon Container */}
                  <div className="relative p-2 bg-gradient-to-br from-gray-900/50 via-black/70 to-gray-900/50 backdrop-blur-sm rounded-full border border-gray-800 group-hover:border-red-500/50 transition-all duration-300">
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <social.icon className="h-6 w-6 relative z-10 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
                  </div>
                </a>
              ))}
            </div>
            
            <div className="relative group">
              <div className="flex items-center justify-center text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                <div className="relative mr-2">
                  <MapPin className="h-4 w-4 drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]" />
                  <div className="absolute inset-0 bg-red-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">
                  Industriestrasse 2A, 8604 Volketswil, Schweiz
                </span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-right">
            <div className="space-y-2">
              {[
                { to: "/agb", label: "Allgemeine Geschäftsbedingungen" },
                { to: "/datenschutz", label: "Datenschutzrichtlinie" }
              ].map((link, index) => (
                <Link 
                  key={index}
                  to={link.to} 
                  className="group relative block text-gray-400 hover:text-red-500 transition-all duration-300 text-sm transform hover:scale-105"
                >
                  {/* Holographic Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  
                  {/* Corner Indicators */}
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm relative">
          {/* Holographic Divider */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse"></div>
          
          <div className="relative group">
            <p className="drop-shadow-[0_0_5px_rgba(255,255,255,0.1)] group-hover:text-gray-400 transition-colors duration-300">
              &copy; 2025 H3 Boxing GmbH. Alle Rechte vorbehalten.
            </p>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-3 h-3 border-t border-l border-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/20 via-cyan-400/20 to-purple-500/20 blur-sm"></div>
    </footer>
  );
};

export default Footer;