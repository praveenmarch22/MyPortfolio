import React, { useState, useEffect } from 'react'

export default function Wallpaper() {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.src = '/wallpaper.jpg';
    img.onload = () => setImageLoaded(true);

    // Also check if already cached
    if (img.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {/* Gradient fallback - shows immediately */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #1a1a2e 75%, #0a0a0f 100%)',
        }}
      />

      {/* Animated gradient orbs for visual interest while loading */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(120, 80, 200, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(200, 100, 150, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse 50% 30% at 50% 80%, rgba(100, 150, 255, 0.1) 0%, transparent 50%)
          `,
          animation: 'wallpaper-pulse 8s ease-in-out infinite',
        }}
      />

      {/* Actual wallpaper image - fades in when loaded */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: 'url(/wallpaper.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: imageLoaded ? 1 : 0,
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/><feComponentTransfer><feFuncA type='table' tableValues='0 0.06'/></feComponentTransfer></filter><rect width='100%' height='100%' filter='url(%23n)' /></svg>")`,
        }}
      />

      {/* CSS keyframes */}
      <style>{`
        @keyframes wallpaper-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }
      `}</style>
    </div>
  );
}
