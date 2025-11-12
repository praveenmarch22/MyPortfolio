import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function LockScreen({ onUnlock }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragY(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const startY = window.innerHeight * 0.7; // Approximate starting position
    const currentY = touch.clientY;
    const deltaY = startY - currentY;
    
    // Only allow upward drag
    if (deltaY > 0) {
      setDragY(Math.min(deltaY, 200));
    }
  };

  const handleTouchEnd = () => {
    if (dragY > 100) {
      // Swipe was sufficient, unlock
      onUnlock();
    } else {
      // Reset position
      setDragY(0);
    }
    setIsDragging(false);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed inset-0 z-50 flex flex-col items-center ${isMobile ? 'justify-start overflow-y-auto' : 'justify-center'}`}
      style={{
        background: 'linear-gradient(to bottom, #667eea 0%, #764ba2 100%)',
        backgroundImage: 'url(/wallpaper.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Time and Date */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`relative z-10 text-center ${isMobile ? 'mt-32 mb-8' : 'mb-auto mt-32'}`}
      >
        <div className={`${isMobile ? 'text-6xl' : 'text-8xl'} font-bold text-white mb-2 tracking-tight drop-shadow-lg`}>
          {formatTime(currentTime)}
        </div>
        <div className={`${isMobile ? 'text-xl' : 'text-2xl'} font-medium text-white/90 drop-shadow-md`}>
          {formatDate(currentTime)}
        </div>
      </motion.div>

      {/* Unlock Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className={`relative z-10 ${isMobile ? 'mb-32 mt-auto' : 'mb-20'}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateY(-${dragY}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        <motion.button
          onClick={onUnlock}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative"
        >
          {/* Container without background and border */}
          <div className="px-12 py-6">
            <div className="flex flex-col items-center gap-3">
              {/* Double arrow up icon */}
              <div className="flex flex-col gap-0">
                <svg 
                  className="w-8 h-8 text-white drop-shadow-lg animate-bounce"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ animationDelay: '0s' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                </svg>
                <svg 
                  className="w-8 h-8 text-white drop-shadow-lg animate-bounce -mt-4"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  style={{ animationDelay: '0.15s' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                </svg>
              </div>
              
              <div className="text-white text-xl font-semibold drop-shadow-lg">
                Swipe up to unlock
              </div>
            </div>
          </div>

          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
        </motion.button>

        {/* Alternative text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-6 text-white/70 text-sm"
        >
          or press to continue
        </motion.div>
      </motion.div>

      {/* Bottom indicator bar (iOS style) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-32 h-1.5 bg-white/30 rounded-full backdrop-blur-sm"></div>
      </motion.div>
    </motion.div>
  );
}
