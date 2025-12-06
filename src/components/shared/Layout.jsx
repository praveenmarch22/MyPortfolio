import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import useMediaQuery from '../../hooks/useMediaQuery'
import MobileLayout from '../mobile/MobileLayout'
import Wallpaper from './Wallpaper'
import MenuBar from '../desktop/MenuBar'
import Dock from '../desktop/Dock'
import CursorGlow from './CursorGlow'
import ThemeToggle from './ThemeToggle'
import AssistiveTouch from './AssistiveTouch'
import AppWindow from '../desktop/AppWindow'
import HomeScreen from '../desktop/HomeScreen'
import LockScreen from './LockScreen'
import About from '../../apps/About'
import Projects from '../../apps/Projects'
import Experience from '../../apps/Experience'
import Skills from '../../apps/Skills'
import Education from '../../apps/Education'
import Contact from '../../apps/Contact'
import Resume from '../../apps/Resume'
import Finder from '../../apps/Finder'
import Settings from '../../apps/Settings'
import Terminal from '../../apps/Terminal'
import Gallery from '../../apps/Gallery'
import Achievements from '../../apps/Achievements'
import Music from '../../apps/Music'
import { DOCK_APPS } from '../../data/apps'

export default function Layout({ children }) {
  // Detect mobile and tablet viewports
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const [isClient, setIsClient] = useState(false);

  // Ensure hydration on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Show loading state during hydration
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
        <div className="text-white text-2xl font-semibold">Loading...</div>
      </div>
    );
  }

  // If mobile or tablet, render MobileLayout instead
  if (isMobile || isTablet) {
    return <MobileLayout />;
  }

  // Desktop Layout - return DesktopLayout component
  return <DesktopLayout />;
}

// Desktop Layout Component
function DesktopLayout() {
  const [isLocked, setIsLocked] = useState(true);
  const [openWindows, setOpenWindows] = useState([]);
  const [isDockVisible, setIsDockVisible] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('portfolioSettings');
    return saved ? JSON.parse(saved) : {
      showAssistiveTouch: true,
      cursorGlow: true,
      animations: true,
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
    blog: Education,  // education uses 'blog' iconKey
    education: Education,
    contact: Contact,
    resume: Resume,
    finder: Finder,
    settings: Settings,
    terminal: Terminal,
    gallery: Gallery,
    achievements: Achievements,
    certificates: Achievements,  // achievements uses 'certificates' iconKey
    music: Music,
  };

  const handleAppClick = (app) => {
    // Check if window is already open
    const isOpen = openWindows.find(w => w.id === app.name);
    if (isOpen) return;

    // Open new window (it will get a higher z-index based on order)
    setOpenWindows([...openWindows, {
      id: app.name,
      title: app.name,
      component: appComponents[app.iconKey] || null,
      position: { x: 100 + openWindows.length * 30, y: 100 + openWindows.length * 30 }
    }]);
  };

  const handleCloseWindow = (windowId) => {
    setOpenWindows(openWindows.filter(w => w.id !== windowId));
  };

  const handleMouseMove = (e) => {
    setMouseY(e.clientY);
    const windowHeight = window.innerHeight;

    // Show dock when mouse is near bottom (within 100px)
    // Show dock when mouse is very close to bottom (within 50px) to reduce interference
    if (e.clientY > windowHeight - 50) {
      setIsDockVisible(true);
    } else if (e.clientY < windowHeight - 100) {
      // Hide dock when mouse is far from bottom (above 100px zone)
      // and there are open windows
      if (openWindows.length > 0) {
        setIsDockVisible(false);
      } else {
        // Keep dock visible if no windows are open
        setIsDockVisible(true);
      }
    }
    // Between 50px and 100px: do nothing (buffer zone)
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleUnlock = () => {
    setIsLocked(false);
  };

  return (
    <div
      className="app-layout min-h-screen min-w-screen relative text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Lock Screen */}
      <AnimatePresence>
        {isLocked && <LockScreen onUnlock={handleUnlock} />}
      </AnimatePresence>

      {/* Wallpaper is fixed and sits underneath everything */}
      <Wallpaper />

      {/* Top menu bar */}
      {!isLocked && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="fixed top-0 left-0 right-0 z-10"
        >
          <MenuBar />
        </motion.header>
      )}

      {/* Main content area - leave space for the menu bar */}
      {!isLocked && (
        <motion.main
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative z-10 pt-12 pb-24 h-screen"
        >
          {/* Home Screen with apps */}
          <HomeScreen onAppClick={handleAppClick} />

          {/* Render open windows */}
          {openWindows.map((window, index) => {
            const WindowComponent = window.component;
            return (
              <AppWindow
                key={window.id}
                appId={window.id}
                title={window.title}
                initialPosition={window.position}
                windowIndex={index}
                onClose={() => handleCloseWindow(window.id)}
                onMinimize={() => console.log(`Minimize ${window.id}`)}
                onFullscreen={() => console.log(`Fullscreen ${window.id}`)}
              >
                {WindowComponent ? <WindowComponent /> : <div className="flex flex-col items-center justify-center text-gray-700 py-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 mb-4 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-lg font-medium">These apps are still loading…</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Grab a cup of coffee ☕ — they’ll show up soon.
                  </p>
                </div>
                }
              </AppWindow>
            );
          })}
        </motion.main>
      )}

      {/* Dock sits above wallpaper at the bottom */}
      {!isLocked && (
        <motion.footer
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: isDockVisible ? 0 : 100,
            opacity: isDockVisible ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`fixed left-0 right-0 bottom-0 z-10 pb-4 ${isDockVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
          onMouseEnter={() => setIsDockVisible(true)}
          onMouseLeave={(e) => {
            // Only hide if we're not near the bottom and there are open windows
            if (e.clientY < window.innerHeight - 100 && openWindows.length > 0) {
              setIsDockVisible(false);
            }
          }}
        >
          <div className="flex justify-center">
            <Dock
              apps={DOCK_APPS}
              onAppClick={handleAppClick}
            />
          </div>
        </motion.footer>
      )}

      {/* Decorative cursor glow (non-interactive) */}
      {!isLocked && settings.cursorGlow && <CursorGlow />}

      {/* AssistiveTouch floating button */}
      {!isLocked && settings.showAssistiveTouch && (
        <AssistiveTouch
          onFullscreen={handleFullscreen}
          onHome={() => setOpenWindows([])}
          onBack={() => setOpenWindows(prev => prev.slice(0, -1))}
          onDarkMode={() => console.log("Dark Mode")}
          onLightMode={() => console.log("Light Mode")}
          onClose={() => console.log("Close")}
        />
      )}
    </div>
  )
}
