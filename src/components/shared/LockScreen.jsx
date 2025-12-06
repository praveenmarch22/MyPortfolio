import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function LockScreen({ onUnlock }) {
  const [currentTime, setCurrentTime] = useState(new Date());
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

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      onClick={onUnlock}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer select-none"
      style={{
        background: 'linear-gradient(to bottom, #667eea 0%, #764ba2 100%)',
        backgroundImage: 'url(/wallpaper.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Time and Date */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <div className={`${isMobile ? 'text-7xl' : 'text-9xl'} font-thin text-white mb-2 tracking-tight drop-shadow-lg`}
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
        >
          {formatTime(currentTime)}
        </div>
        <div className={`${isMobile ? 'text-xl' : 'text-2xl'} font-normal text-white/90 drop-shadow-md`}>
          {formatDate(currentTime)}
        </div>
      </motion.div>

      {/* Click anywhere hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-20 text-center text-white/60 text-sm"
      >
        Click anywhere to unlock
      </motion.div>

      {/* Bottom indicator bar (iOS style) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-32 h-1 bg-white/30 rounded-full"></div>
      </motion.div>
    </motion.div>
  );
}
