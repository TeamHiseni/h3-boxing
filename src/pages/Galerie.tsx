import React, { useState } from 'react';
import { Camera, Video, Play, Cpu, Shield, Hexagon, Sparkles, Image as ImageIcon, X, Filter, ChevronDown } from 'lucide-react';

const Galerie = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'images' | 'videos'>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: '/Kim Hiseni.JPG',
      alt: 'Kim Hiseni - H3 Boxing',
      type: 'image',
      objectPosition: 'object-top'
    },
    {
      src: '/IMG_0150.JPG ',
      alt: 'H3 Boxing Training',
      type: 'image',
      objectPosition: 'object-top'
    },
    {
      src: '/Ramadan.jpeg',
      alt: 'Ramadan',
      type: 'image',
      objectPosition: 'object-center'
    },
    { 
      src: '/IMG_0155 (1).JPG',
      alt: 'Ramadan Training',
      type: 'image',
      objectPosition: 'object-center'
    },
    {
      src: '/Ramadan vs Shamil.jpg',
      alt: 'Ramadan vs Shamil',
      type: 'image',
      objectPosition: 'object-center'
    },
    {
      src: '/1FDBA8B8-EDF8-441F-BBA4-4B59E37E6814.JPG',
      alt: 'Drausen an die Natur',
      type: 'image',
      objectPosition: 'object-center'
    },
    {
      src: '/WhatsApp Image 2025-07-21 at 21.21.49.jpeg',
      alt: 'H3 Boxing Training Session',
      type: 'image',
      objectPosition: 'object-top'
    },
    {
      src: '/WhatsApp Image 2025-07-21 at 21.23.36.jpeg',
      alt: 'H3 Boxing Gym Interior',
      type: 'image',
      objectPosition: 'object-center'
    },
    {
      src: '/WhatsApp Image 2025-09-18 at 18.31.04_2db27b80.jpg',
      alt: 'Gewaltprävention',
      type: 'image',
      objectPosition: 'object-center'
    }
  ];

  const videos = [
    {
      src: '/Ramadan Ringwalk.mp4',
      thumbnail: '/Screenshot 2025-09-01 155202.png',
      alt: 'Ramadan Ringwalk Video',
      type: 'video',
      objectPosition: 'object-center'
    },
    {
      src: '/Ramadan & christian.mp4',
      thumbnail: '/Screenshot 2025-09-01 155437.png',
      alt: 'Ramadan & Christian',
      type: 'video',
      objectPosition: 'object-center'
    },
    {
      src: '/WhatsApp Video 2025-09-02 at 15.55.21_ffa6ecde.mp4',
      thumbnail: '/Screenshot 2025-09-02 160007.png',
      alt: 'Kim Boxkampf',
      type: 'video',
      objectPosition: 'object-center'
    }
  ];

  const allMedia = [...images, ...videos];

  const filteredMedia = activeFilter === 'all' 
    ? allMedia 
    : activeFilter === 'images' 
    ? images 
    : videos;

  const filters = [
    { key: 'all', label: 'Alle', icon: Sparkles, count: allMedia.length },
    { key: 'images', label: 'Bilder', icon: ImageIcon, count: images.length },
    { key: 'videos', label: 'Videos', icon: Video, count: videos.length }
  ];

  const handleVideoClick = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleFilterChange = (filterKey: 'all' | 'images' | 'videos') => {
    setActiveFilter(filterKey);
    setIsDropdownOpen(false);
  };

  const activeFilterData = filters.find(f => f.key === activeFilter);

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full mx-4">
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-300 z-10 group"
            >
              <div className="relative p-2 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm rounded-full border border-gray-800 group-hover:border-red-500/50 transition-all duration-300">
                <X className="h-6 w-6 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
              </div>
            </button>
            
            {/* Video Container */}
            <div className="relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500/50 z-10"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 z-10"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/50 z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/50 z-10"></div>
              
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-6xl w-full mx-4">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors duration-300 z-10 group"
            >
              <div className="relative p-2 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm rounded-full border border-gray-800 group-hover:border-red-500/50 transition-all duration-300">
                <X className="h-6 w-6 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
              </div>
            </button>
            
            {/* Image Container */}
            <div className="relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-500/50 z-10"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50 z-10"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/50 z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500/50 z-10"></div>
              
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Animated Circuit Background */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 10% 90%, rgba(34, 197, 94, 0.4) 0%, transparent 50%)
          `,
          animation: 'circuit-pulse 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("/IMG_0155 (1).JPG")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        {/* Matrix Grid Overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-move 15s linear infinite'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-red-600/30 blur-3xl animate-pulse group-hover:bg-red-500/40 transition-all duration-500"></div>
            <Hexagon className="h-20 w-20 text-red-500 mx-auto animate-spin-slow opacity-30 absolute" />
            <Camera className="h-16 w-16 text-red-600 mx-auto animate-pulse relative z-10 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]" />
            <div className="absolute inset-0 border-2 border-red-500/30 rounded-full animate-ping"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              Galerie
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Entdecke die Atmosphäre und Action bei H3 Boxing durch unsere Bilder und Videos
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Desktop Filter Bar */}
          <div className="hidden md:flex justify-center mb-8">
            <div className="flex space-x-4 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm p-2 rounded-2xl border border-gray-800">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => handleFilterChange(filter.key as 'all' | 'images' | 'videos')}
                  className={`group relative flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]'
                      : 'text-gray-400 hover:text-white hover:bg-red-900/20'
                  }`}
                >
                  {/* Holographic Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-center space-x-2">
                    <filter.icon className="h-5 w-5" />
                    <span>{filter.label}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeFilter === filter.key 
                        ? 'bg-white/20' 
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {filter.count}
                    </span>
                  </div>

                  {/* Scan Line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Filter Dropdown */}
          <div className="md:hidden flex justify-center mb-8">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="group relative flex items-center space-x-3 px-6 py-3 bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 text-white font-semibold"
              >
                {/* Holographic Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300"></div>

                <div className="relative z-10 flex items-center space-x-3">
                  <Filter className="h-5 w-5 text-red-500" />
                  <div className="flex items-center space-x-2">
                    <activeFilterData.icon className="h-5 w-5" />
                    <span>{activeFilterData.label}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-red-600/20 text-red-400">
                      {activeFilterData.count}
                    </span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-md rounded-2xl border border-gray-800 shadow-2xl z-50">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-500/50"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500/50"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-500/50"></div>
                  
                  <div className="p-2">
                    {filters.map((filter, index) => (
                      <button
                        key={filter.key}
                        onClick={() => handleFilterChange(filter.key as 'all' | 'images' | 'videos')}
                        className={`group relative w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                          activeFilter === filter.key
                            ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]'
                            : 'text-gray-300 hover:text-white hover:bg-red-900/20'
                        } ${index !== filters.length - 1 ? 'border-b border-gray-800' : ''}`}
                      >
                        {/* Holographic Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        
                        <div className="relative z-10 flex items-center justify-between w-full">
                          <div className="flex items-center space-x-3">
                            <filter.icon className="h-5 w-5" />
                            <span>{filter.label}</span>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            activeFilter === filter.key 
                              ? 'bg-white/20' 
                              : 'bg-gray-700 text-gray-300'
                          }`}>
                            {filter.count}
                          </span>
                        </div>
                        
                        {/* Scan Line */}
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
        {/* Animated Matrix Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(220, 38, 38, 0.3) 25%, rgba(220, 38, 38, 0.3) 26%, transparent 27%),
              linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.3) 25%, rgba(6, 182, 212, 0.3) 26%, transparent 27%),
              linear-gradient(45deg, transparent 24%, rgba(168, 85, 247, 0.3) 25%, rgba(168, 85, 247, 0.3) 26%, transparent 27%)
            `,
            backgroundSize: '50px 50px, 50px 50px, 50px 50px',
            animation: 'matrix-flow 25s linear infinite'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {filteredMedia.length === 0 ? (
            <div className="text-center py-20">
              <div className="relative inline-block mb-6">
                <Shield className="h-16 w-16 text-gray-500 mx-auto" />
                <div className="absolute inset-0 bg-gray-500/20 blur-xl animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Keine Medien gefunden</h3>
              <p className="text-gray-500">Für diesen Filter sind keine Inhalte verfügbar.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMedia.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden w-full"
                >
                  {/* Holographic Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Corner Frames */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300 z-10"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50 group-hover:border-cyan-300 transition-colors duration-300 z-10"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-purple-500/50 group-hover:border-purple-400 transition-colors duration-300 z-10"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-500/50 group-hover:border-red-400 transition-colors duration-300 z-10"></div>

                  <div className="aspect-square sm:aspect-[4/3] relative overflow-hidden rounded-t-2xl">
                    {item.type === 'video' ? (
                      <div 
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => handleVideoClick(item.src)}
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.alt}
                          className={`w-full h-full object-cover ${item.objectPosition} transition-transform duration-500 group-hover:scale-110`}
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                          <div className="relative">
                            <div className="absolute inset-0 bg-red-500/30 blur-xl animate-pulse"></div>
                            <Play className="h-12 w-12 text-white drop-shadow-[0_0_20px_rgba(220,38,38,0.8)] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                            <div className="absolute inset-0 border-2 border-red-500/50 rounded-full animate-ping"></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className={`w-full h-full object-cover ${item.objectPosition} transition-transform duration-500 group-hover:scale-110 cursor-pointer`}
                        onClick={() => handleImageClick(item.src)}
                      />
                    )}
                  </div>

                  <div className="p-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-semibold group-hover:text-red-400 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] text-sm sm:text-base truncate">
                        {item.alt}
                      </h3>
                      <div className="flex items-center space-x-1">
                        {item.type === 'video' ? (
                          <Video className="h-4 w-4 text-red-500 flex-shrink-0" />
                        ) : (
                          <Camera className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Scan Line Effect */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-cyan-400/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Galerie;