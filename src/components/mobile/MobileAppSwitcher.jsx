import React from 'react';
import { motion } from 'framer-motion';
import { ICONS } from '../../utils/icons';

export default function MobileAppSwitcher({
  openApps,
  currentApp,
  onSelectApp,
  onCloseApp,
  onClose
}) {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 40,
        mass: 1
      }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* App Switcher Header */}
      <div className="h-16 flex items-center justify-between px-6">
        <h2 className="text-xl font-semibold text-white">Apps</h2>
        <button
          onClick={onClose}
          className="text-blue-400 font-semibold text-lg"
        >
          Done
        </button>
      </div>

      {/* App Cards Container */}
      <div className="px-4 py-6 overflow-y-auto" style={{ height: 'calc(100vh - 120px)' }}>
        {openApps.length === 0 ? (
          /* No Apps Open */
          <div className="flex flex-col items-center justify-center h-full text-white/50">
            <svg
              className="w-24 h-24 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
            <p className="text-lg">No open apps</p>
          </div>
        ) : (
          /* App Cards */
          <div className="space-y-4">
            {openApps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectApp(app);
                }}
              >
                {/* App Card */}
                <div
                  className={`relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 ${currentApp?.id === app.id
                      ? 'ring-4 ring-blue-500 scale-105'
                      : 'hover:scale-105'
                    }`}
                  style={{ height: '280px' }}
                >
                  {/* App Preview/Screenshot */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm flex items-center justify-center">
                    {/* App Icon */}
                    <div
                      className="w-20 h-20 rounded-2xl shadow-2xl overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: ICONS[app.iconKey] || ICONS.folder }}
                    />
                  </div>

                  {/* App Title Bar */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-black/40 backdrop-blur-md flex items-center justify-center border-b border-white/10">
                    <span className="text-sm font-semibold text-white truncate px-4">
                      {app.title}
                    </span>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCloseApp(app.id);
                    }}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 active:scale-95 transition-all shadow-lg flex items-center justify-center z-10"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Current App Indicator */}
                  {currentApp?.id === app.id && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
                      <div className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold">
                        Current
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Gesture Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-32 h-1.5 bg-white/40 rounded-full"></div>
      </div>
    </motion.div>
  );
}
