import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import MobileNavBar from './MobileNavBar';

export default function MobileAppView({
  app,
  onClose,
  onShowAppSwitcher,
  children
}) {
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [0, 150], [1, 0.5]);
  const containerRef = useRef(null);

  // Handle edge swipe for back navigation
  const handleDragStart = (event, info) => {
    // Only allow drag if starting from left edge (first 50px)
    const startX = info.point.x;
    if (startX < 50) {
      setIsDragging(true);
    } else {
      return false; // Prevent drag
    }
  };

  const handleDrag = (event, info) => {
    // Only allow rightward drag
    if (x.get() < 0) {
      x.set(0);
    }
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);

    // If dragged more than 150px, go back
    if (x.get() > 150) {
      animate(x, window.innerWidth, {
        duration: 0.3,
        onComplete: onClose
      });
    } else {
      // Snap back
      animate(x, 0, {
        type: 'spring',
        stiffness: 400,
        damping: 30
      });
    }
  };

  return (
    <motion.div
      ref={containerRef}
      key={app.id}
      initial={{ x: '100%' }}
      animate={{ x: isDragging ? x : 0 }}
      exit={{ x: '100%' }}
      transition={isDragging ? undefined : {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }}
      drag="x"
      dragConstraints={{ left: 0, right: window.innerWidth }}
      dragElastic={0.2}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      style={{ x: isDragging ? x : 0, opacity }}
      className="absolute inset-0 flex flex-col bg-gradient-to-b from-black/40 to-black/20 backdrop-blur-xl z-30"
    >
      {/* Navigation Bar */}
      <MobileNavBar
        title={app.title}
        onBack={onClose}
        rightAction={onShowAppSwitcher ? {
          label: '◻◻',
          onClick: onShowAppSwitcher
        } : undefined}
      />

      {/* App Content - Scrollable */}
      <div className="flex-1 overflow-auto" style={{ pointerEvents: isDragging ? 'none' : 'auto' }}>
        <div className="min-h-full">
          {children}
        </div>
      </div>

      {/* Safe Area Bottom Padding (for devices with home indicator) */}
      <div className="h-6 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

      {/* Edge Swipe Indicator - Shows when dragging */}
      {isDragging && x.get() > 20 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-50"
        >
          <svg
            className="w-8 h-8 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
}
