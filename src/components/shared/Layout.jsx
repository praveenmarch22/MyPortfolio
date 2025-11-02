import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
import { DOCK_APPS } from '../../data/apps'

export default function Layout({ children }){
  const [isLocked, setIsLocked] = useState(true);
  const [openWindows, setOpenWindows] = useState([]);
  const [isDockVisible, setIsDockVisible] = useState(true);
  const [mouseY, setMouseY] = useState(0);

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
  };

  const handleAppClick = (app) => {
    // Check if window is already open
    const isOpen = openWindows.find(w => w.id === app.name);
    if (isOpen) return;

    // Open new window
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
    // Show dock when mouse is near bottom and there are open windows
    if (openWindows.length > 0) {
      const windowHeight = window.innerHeight;
      if (e.clientY > windowHeight - 100) {
        setIsDockVisible(true);
      } else {
        setIsDockVisible(false);
      }
    }
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
          className="fixed top-0 left-0 right-0 z-20"
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
        {openWindows.map((window) => {
          const WindowComponent = window.component;
          return (
            <AppWindow
              key={window.id}
              appId={window.id}
              title={window.title}
              initialPosition={window.position}
              onClose={() => handleCloseWindow(window.id)}
              onMinimize={() => console.log(`Minimize ${window.id}`)}
              onFullscreen={() => console.log(`Fullscreen ${window.id}`)}
            >
              {WindowComponent ? <WindowComponent /> :<div className="flex flex-col items-center justify-center text-gray-700 py-12">
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
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="fixed left-0 right-0 bottom-4 z-20 pointer-events-none transition-transform duration-300 ease-in-out"
          style={{
            transform: openWindows.length > 0 && !isDockVisible ? 'translateY(150%)' : 'translateY(0)'
          }}
        >
        <div className="flex justify-center pointer-events-auto">
          {/* Pass the apps list to the Dock. Dock will show only the first 4 on mobile */}
          <Dock
            apps={DOCK_APPS}
            onAppClick={handleAppClick}
          />
        </div>
      </motion.footer>
      )}

      {/* Decorative cursor glow (non-interactive) */}
      {!isLocked && <CursorGlow />}

      {/* AssistiveTouch floating button */}
      {!isLocked && (
        <AssistiveTouch  
          onFullscreen={handleFullscreen}
          onDarkMode={() => console.log("Dark Mode")}
          onLightMode={() => console.log("Light Mode")}
          onClose={() => console.log("Close")}
        />
      )}
    </div>
  )
}
