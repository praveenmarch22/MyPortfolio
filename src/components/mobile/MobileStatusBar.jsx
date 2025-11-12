import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MobileStatusBar({ theme = 'dark' }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [batteryLevel, setBatteryLevel] = useState(100);

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    // Get battery level if available
    if ('getBattery' in navigator) {
      navigator.getBattery().then((battery) => {
        setBatteryLevel(Math.round(battery.level * 100));
        
        battery.addEventListener('levelchange', () => {
          setBatteryLevel(Math.round(battery.level * 100));
        });
      });
    }

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const textColor = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`h-12 flex items-center justify-between px-6 relative z-50 ${textColor}`}
      style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 100%)',
      }}
    >
      {/* Left: Time */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-semibold tracking-tight drop-shadow-lg">
          {formatTime(currentTime)}
        </span>
      </div>

      {/* Right: Signal, WiFi, Battery */}
      <div className="flex items-center gap-2">
        {/* Signal Strength */}
        <div className="flex items-center gap-0.5">
          <div className="w-0.5 h-2 bg-current rounded-full opacity-90"></div>
          <div className="w-0.5 h-3 bg-current rounded-full opacity-90"></div>
          <div className="w-0.5 h-4 bg-current rounded-full opacity-90"></div>
          <div className="w-0.5 h-5 bg-current rounded-full opacity-60"></div>
        </div>

        {/* WiFi Icon */}
        <svg 
          className="w-4 h-4 drop-shadow-lg" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.05 14.05c1.17-1.17 2.73-1.82 4.38-1.82s3.21.65 4.38 1.82l1.41-1.41C15.68 11.1 13.93 10.3 12 10.3s-3.68.8-5.22 2.34l1.41 1.41zM1.41 8.41C4.23 5.59 8.02 4 12 4s7.77 1.59 10.59 4.41l1.41-1.41C21.02 4.02 16.73 2 12 2S2.98 4.02.59 7l1.41 1.41z"/>
        </svg>

        {/* Battery Icon */}
        <div className="flex items-center gap-1">
          <div className="relative w-6 h-3 border border-current rounded-sm opacity-90">
            {/* Battery Fill */}
            <div 
              className="absolute top-0.5 left-0.5 bottom-0.5 bg-current rounded-sm transition-all"
              style={{ width: `${Math.max(0, batteryLevel - 10)}%` }}
            ></div>
            {/* Battery Tip */}
            <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-current rounded-r-sm"></div>
          </div>
          <span className="text-[10px] font-medium">{batteryLevel}%</span>
        </div>
      </div>
    </motion.div>
  );
}
