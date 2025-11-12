import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Wallpaper from '../shared/Wallpaper'
import LockScreen from '../shared/LockScreen'
import MobileStatusBar from './MobileStatusBar'
import MobileAppView from './MobileAppView'
import MobileAppSwitcher from './MobileAppSwitcher'
import HomeScreen from '../desktop/HomeScreen'
import AssistiveTouch from '../shared/AssistiveTouch'
import useSwipeGesture from '../../hooks/useSwipeGesture'
import { DOCK_APPS } from '../../data/apps'
import { ICONS } from '../../utils/icons'
import About from '../../apps/About'
import Projects from '../../apps/Projects'
import Experience from '../../apps/Experience'
import Skills from '../../apps/Skills'
import Education from '../../apps/Education'
import Contact from '../../apps/Contact'
import Resume from '../../apps/Resume'
import Finder from '../../apps/Finder'
import Settings from '../../apps/Settings'

export default function MobileLayout() {
  const [isLocked, setIsLocked] = useState(true);
  const [currentApp, setCurrentApp] = useState(null);
  const [openApps, setOpenApps] = useState([]);
  const [showAppSwitcher, setShowAppSwitcher] = useState(false);
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('portfolioSettings');
    return saved ? JSON.parse(saved) : {
      showAssistiveTouch: true,
    };
  });

  // Listen for settings changes
  useEffect(() => {
    const handleSettingsChange = (e) => {
      setSettings(e.detail);
    };
    window.addEventListener('settingsChanged', handleSettingsChange);
    return () => window.removeEventListener('settingsChanged', handleSettingsChange);
  }, []);
  
  const appComponents = {
    bio: About,
    about: About,
    projects: Projects,
    experience: Experience,
    skills: Skills,
    blog: Education,
    education: Education,
    contact: Contact,
    resume: Resume,
    finder: Finder,
    settings: Settings,
  };

  const handleAppClick = useCallback((app) => {
    const appData = {
      id: app.name,
      title: app.name,
      iconKey: app.iconKey, // Add iconKey for displaying icon
      component: appComponents[app.iconKey] || null,
    };
    
    // Add to openApps if not already open
    setOpenApps(prev => {
      if (prev.find(a => a.id === appData.id)) {
        return prev;
      }
      return [...prev, appData];
    });
    
    setCurrentApp(appData);
    setShowAppSwitcher(false);
  }, []);

  const handleBackToHome = useCallback(() => {
    setCurrentApp(null);
    setShowAppSwitcher(false); // Close app switcher too if open
  }, []);

  const handleCloseApp = useCallback((appId) => {
    setOpenApps(prev => prev.filter(a => a.id !== appId));
    setCurrentApp(prev => prev?.id === appId ? null : prev);
  }, []);

  const handleSelectApp = useCallback((app) => {
    setCurrentApp(app);
    setShowAppSwitcher(false);
  }, []);

  const handleToggleAppSwitcher = useCallback(() => {
    setShowAppSwitcher(prev => !prev);
  }, []);

  const handleUnlock = useCallback(() => {
    setIsLocked(false);
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log('Error attempting to enable fullscreen:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, []);

  // Swipe Gestures
  useSwipeGesture({
    onSwipeUp: () => {
      // Disabled: App switcher on swipe up removed
      // Users can still access app switcher via AssistiveTouch if needed
    },
    onSwipeRight: () => {
      // Swipe from left: Go back to home (only when in app)
      if (currentApp && !showAppSwitcher) {
        handleBackToHome();
      }
    },
    enabled: !isLocked && !showAppSwitcher, // Disable during lock screen and app switcher
    threshold: 80, // Require more deliberate swipe
  });

  return (
    <div className="mobile-layout min-h-screen min-w-screen relative text-white overflow-hidden fixed inset-0">
      {/* Lock Screen */}
      <AnimatePresence>
        {isLocked && <LockScreen onUnlock={handleUnlock} />}
      </AnimatePresence>

      {/* Wallpaper */}
      <Wallpaper theme={settings.theme} />

      {/* Main Mobile Content */}
      {!isLocked && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 h-screen flex flex-col"
        >
          {/* Mobile Status Bar */}
          <MobileStatusBar theme="dark" />

          {/* App Content Area */}
          <div className="flex-1 overflow-hidden relative">
            <AnimatePresence mode="wait">
              {currentApp ? (
                /* Full Screen App View */
                <MobileAppView
                  app={currentApp}
                  onClose={handleBackToHome}
                >
                  {currentApp.component ? (
                    React.createElement(currentApp.component)
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <div className="text-center">
                        <div className="text-5xl mb-4">⏳</div>
                        <p>App loading...</p>
                      </div>
                    </div>
                  )}
                </MobileAppView>
              ) : (
                /* Home Screen */
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full"
                >
                  <HomeScreen onAppClick={handleAppClick} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Dock - Simplified */}
          {!currentApp && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="pb-6 px-4 relative z-20"
            >
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 shadow-2xl">
                <div className="flex items-center justify-around gap-2">
                  {DOCK_APPS.slice(0, 4).map((app) => (
                    <button
                      key={app.id}
                      onClick={() => handleAppClick(app)}
                      className="flex flex-col items-center active:scale-90 transition-transform"
                    >
                      <div 
                        className="w-14 h-14 rounded-2xl shadow-lg overflow-hidden"
                        dangerouslySetInnerHTML={{ __html: ICONS[app.iconKey] || ICONS.folder }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* App Switcher Button - Floating when app is open */}
          {currentApp && openApps.length > 0 && (
            <>
              {/* Swipe Up Indicator - Bottom edge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="fixed bottom-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
              >
                <div className="flex flex-col items-center gap-1">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="w-12 h-1 bg-white/40 rounded-full"
                  ></motion.div>
                  <span className="text-xs text-white/50 font-medium">Swipe up</span>
                </div>
              </motion.div>

              {/* App Switcher Button - Alternative to swipe */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={handleToggleAppSwitcher}
                className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 active:scale-95 shadow-2xl flex items-center justify-center transition-all"
              >
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </motion.button>
            </>
          )}
        </motion.div>
      )}

      {/* App Switcher Overlay */}
      <AnimatePresence>
        {showAppSwitcher && (
          <MobileAppSwitcher
            openApps={openApps}
            currentApp={currentApp}
            onSelectApp={handleSelectApp}
            onCloseApp={handleCloseApp}
            onClose={() => setShowAppSwitcher(false)}
          />
        )}
      </AnimatePresence>

      {/* AssistiveTouch - Mobile specific actions */}
      {!isLocked && settings.showAssistiveTouch && (
        <AssistiveTouch
          isMobileApp={true}
          onHome={handleBackToHome}
          onBack={handleBackToHome}
          onFullscreen={handleFullscreen}
          onDarkMode={() => {}}
          onLightMode={() => {}}
        />
      )}
    </div>
  );
}
