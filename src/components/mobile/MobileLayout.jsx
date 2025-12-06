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
import Gallery from '../../apps/Gallery'
import Achievements from '../../apps/Achievements'
import Music from '../../apps/Music'

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
    gallery: Gallery,
    achievements: Achievements,
    certificates: Achievements,
    music: Music,
  };

  const handleAppClick = useCallback((app) => {
    const appData = {
      id: app.name,
      title: app.name,
      iconKey: app.iconKey,
      component: appComponents[app.iconKey] || null,
    };

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
    setShowAppSwitcher(false);
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
    onSwipeUp: () => { },
    onSwipeRight: () => {
      if (currentApp && !showAppSwitcher) {
        handleBackToHome();
      }
    },
    enabled: !isLocked && !showAppSwitcher,
    threshold: 80,
  });


  // Mobile dock apps - custom selection (no finder or terminal on mobile)
  const mobileDockApps = [
    { id: 'bio', name: 'About Me', iconKey: 'bio' },
    { id: 'projects', name: 'Projects', iconKey: 'projects' },
    { id: 'gallery', name: 'Gallery', iconKey: 'gallery' },
    { id: 'settings', name: 'Settings', iconKey: 'settings' },
  ];

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
                <MobileAppView
                  app={currentApp}
                  onClose={handleBackToHome}
                  onShowAppSwitcher={handleToggleAppSwitcher}
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

          {/* Mobile Dock - Only show when on home screen (no app open) */}
          {!currentApp && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="pb-6 px-4 relative z-20"
            >
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 shadow-2xl">
                <div className="flex items-center justify-around gap-2">
                  {/* Regular Dock Apps */}
                  {mobileDockApps.map((app) => (
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

      {/* AssistiveTouch */}
      {!isLocked && settings.showAssistiveTouch && (
        <AssistiveTouch
          isMobileApp={true}
          onHome={handleBackToHome}
          onBack={handleBackToHome}
          onFullscreen={handleFullscreen}
          onDarkMode={() => { }}
          onLightMode={() => { }}
        />
      )}
    </div>
  );
}
