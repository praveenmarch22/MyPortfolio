import React, { useState, useRef, useEffect } from 'react';
import { HOME_SCREEN_APPS } from '../../data/apps';
import ICONS from '../../utils/icons';

export default function HomeScreen({ onAppClick }) {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollContainerRef = useRef(null);
  const totalPages = HOME_SCREEN_APPS.length;

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const containerWidth = scrollContainerRef.current.clientWidth;
      const page = Math.round(scrollLeft / containerWidth);
      setCurrentPage(page);
    }
  };

  const scrollToPage = (pageIndex) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: pageIndex * containerWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="home-screen h-full flex flex-col">
      {/* Scrollable pages container */}
      <div
        ref={scrollContainerRef}
        className="flex-1 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {HOME_SCREEN_APPS.map((page, pageIndex) => (
          <div
            key={pageIndex}
            className="min-w-full snap-center flex items-start justify-center pt-20 px-8"
          >
            {/* App grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl">
              {page.map((app) => (
                <AppIcon
                  key={app.id}
                  app={app}
                  onClick={() => onAppClick(app)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Page indicators - positioned above dock */}
      <div className="flex justify-center items-center gap-2 pb-2 mb-24">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToPage(index)}
            className="transition-all duration-300"
            style={{
              width: currentPage === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: currentPage === index 
                ? 'rgba(255, 255, 255, 0.9)' 
                : 'rgba(255, 255, 255, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

function AppIcon({ app, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center justify-center cursor-pointer select-none transition-transform duration-200"
      style={{
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
      }}
    >
      {/* App icon */}
      <div
        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl mb-2 shadow-lg transition-all duration-200"
        style={{
          filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
        }}
        dangerouslySetInnerHTML={{ __html: ICONS[app.iconKey] }}
      />
      
      {/* App name */}
      <span
        className="text-xs md:text-sm font-medium text-white text-center max-w-20"
        style={{
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
        }}
      >
        {app.name}
      </span>
    </div>
  );
}
