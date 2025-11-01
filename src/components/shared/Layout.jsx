import React from 'react'
import Wallpaper from './Wallpaper'
import MenuBar from '../desktop/MenuBar'
import Dock from '../desktop/Dock'
import CursorGlow from './CursorGlow'
import ThemeToggle from './ThemeToggle'
import AssistiveTouch from './AssistiveTouch'

export default function Layout({ children }){
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
    <div className="app-layout min-h-screen min-w-screen relative text-white">
      {/* Wallpaper is fixed and sits underneath everything */}
      <Wallpaper />

      {/* Top menu bar */}
      <header className="fixed top-0 left-0 right-0 z-20">
        <MenuBar />
      </header>

      {/* Main content area - leave space for the menu bar */}
      <main className="relative z-10 pt-12 pb-24 px-4 md:px-8">
        {children}
      </main>

      {/* Dock sits above wallpaper at the bottom */}
      <footer className="fixed left-0 right-0 bottom-4 z-20 pointer-events-none">
        <div className="flex justify-center pointer-events-auto">
          {/* Pass the apps list to the Dock. Dock will show only the first 4 on mobile */}
          <Dock
            apps={[
              { name: 'Bio', iconKey: 'bio' },
              { name: 'Projects', iconKey: 'projects' },
              { name: 'Terminal', iconKey: 'terminal' },
              { name: 'Gallery', iconKey: 'gallery' },
              { name: 'Contact', iconKey: 'contact' },
              { name: 'About', iconKey: 'about' },
              { name: 'Finder', iconKey: 'finder' },
              { name: 'Settings', iconKey: 'settings' },
            ]}
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
