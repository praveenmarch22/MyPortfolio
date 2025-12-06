import React from 'react';
import { motion } from 'framer-motion';

export default function MobileNavBar({ title, onBack, rightAction }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="h-14 flex items-center justify-between px-4 border-b border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Left: Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 active:opacity-70 transition-all"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-semibold">Back</span>
      </button>

      {/* Center: App Title */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-base font-semibold text-white truncate max-w-[200px]">
          {title}
        </h1>
      </div>

      {/* Right: Optional Action Button */}
      {rightAction && (
        <button
          onClick={rightAction.onClick}
          className="text-blue-400 hover:text-blue-300 active:opacity-70 transition-all font-semibold"
        >
          {rightAction.label}
        </button>
      )}
    </motion.div>
  );
}
