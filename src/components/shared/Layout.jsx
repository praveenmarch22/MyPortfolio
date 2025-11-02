import React, { useState } from 'react'
import Wallpaper from './Wallpaper'
import MenuBar from '../desktop/MenuBar'
import Dock from '../desktop/Dock'
import CursorGlow from './CursorGlow'
import ThemeToggle from './ThemeToggle'
import AssistiveTouch from './AssistiveTouch'
import AppWindow from '../desktop/AppWindow'
import HomeScreen from '../desktop/HomeScreen'
import About from '../../apps/About'
import Projects from '../../apps/Projects'
import Experience from '../../apps/Experience'
import Skills from '../../apps/Skills'
import Education from '../../apps/Education'
import Contact from '../../apps/Contact'
import { DOCK_APPS } from '../../data/apps'

export default function Layout({ children }){
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

  return (
    <div 
      className="app-layout min-h-screen min-w-screen relative text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Wallpaper is fixed and sits underneath everything */}
      <Wallpaper />

      {/* Top menu bar */}
      <header className="fixed top-0 left-0 right-0 z-20">
        <MenuBar />
      </header>

      {/* Main content area - leave space for the menu bar */}
      <main className="relative z-10 pt-12 pb-24 h-screen">
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
              {WindowComponent ? <WindowComponent /> : <div>Component not found</div>}
            </AppWindow>
          );
        })}
      </main>

      {/* Dock sits above wallpaper at the bottom */}
      <footer 
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
      </footer>

      {/* Decorative cursor glow (non-interactive) */}
      <CursorGlow />

      {/* AssistiveTouch floating button */}
      <AssistiveTouch  
        onFullscreen={handleFullscreen}
        onDarkMode={() => console.log("Dark Mode")}
        onLightMode={() => console.log("Light Mode")}
        onClose={() => console.log("Close")}
      />
    </div>
  )
}
