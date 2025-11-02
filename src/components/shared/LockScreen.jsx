import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LockScreen({ onUnlock }) {
  const [currentTime, setCurrentTime] = useState(new Date());

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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(to bottom, #667eea 0%, #764ba2 100%)',
        backgroundImage: 'url(/wallpaper.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Time and Date */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 text-center mb-auto mt-32"
      >
        <div className="text-8xl font-light text-white mb-2 tracking-tight drop-shadow-lg">
          {formatTime(currentTime)}
        </div>
        <div className="text-2xl font-medium text-white/90 drop-shadow-md">
          {formatDate(currentTime)}
        </div>
      </motion.div>

      {/* Unlock Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 mb-20"
      >
        <motion.button
          onClick={onUnlock}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative"
        >
          {/* Glassmorphism container */}
          <div className="px-12 py-6 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl">
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
