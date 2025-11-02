import React, { useState, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';

const AppWindow = ({
  title = 'Untitled',
  children,
  onClose,
  onMinimize,
  onFullscreen,
  initialPosition = { x: 100, y: 100 },
  appId,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const nodeRef = useRef(null);
  const dragControls = useDragControls();

  const handleDragStart = (event, info) => setDragging(true);
  const handleDragEnd = (event, info) => {
    setDragging(false);
  };

  const startDrag = (event) => {
    if (!isFullscreen) {
      dragControls.start(event);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete before calling onClose
    setTimeout(() => {
      onClose && onClose();
    }, 400);
  };

  const getDockIconPosition = () => {
    // Try to find the dock icon for this app
    const dockIcon = document.querySelector(`[data-app-id="${appId}"]`);
    if (dockIcon) {
      const rect = dockIcon.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    }
    // Fallback to bottom center if dock icon not found
    return {
      x: window.innerWidth / 2,
      y: window.innerHeight - 50,
    };
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
    onFullscreen && onFullscreen();
  };

  const windowStyle = {
    position: 'absolute',
    top: isFullscreen ? '48px' : initialPosition.y,
    left: isFullscreen ? 0 : initialPosition.x,
    width: isFullscreen ? '100vw' : 600,
    height: isFullscreen ? 'calc(100vh - 48px)' : 'auto',
    maxHeight: isFullscreen ? 'calc(100vh - 48px)' : '70vh',
    borderRadius: isFullscreen ? 0 : '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    overflow: 'hidden',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
  };

  const dockPosition = isClosing ? getDockIconPosition() : null;

  return (
    <motion.div
      ref={nodeRef}
      drag={!isFullscreen && !isClosing}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={
        isClosing
          ? {
              x: dockPosition ? dockPosition.x - initialPosition.x : 0,
              y: dockPosition ? dockPosition.y - initialPosition.y : window.innerHeight,
              scale: 0,
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              },
            }
          : {
              x: isFullscreen ? 0 : undefined,
              y: isFullscreen ? 0 : undefined,
              scale: 1,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              },
            }
      }
      style={windowStyle}
    >
      <div
        className="window-header"
        onPointerDown={startDrag}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '6px 12px',
          background: 'rgba(255,255,255,0.5)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          cursor: isFullscreen ? 'default' : (dragging ? 'grabbing' : 'grab'),
        }}
      >
        <div style={{ display: 'flex', gap: '8px', marginRight: '8px' }}>
          <button
            onClick={handleClose}
            onMouseEnter={() => setHoveredButton('close')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#ff5f56',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              color: hoveredButton === 'close' ? '#4a0000' : 'transparent',
              transition: 'color 0.2s',
              lineHeight: '12px',
            }}
          >
            ×
          </button>
          <button
            onClick={onMinimize}
            onMouseEnter={() => setHoveredButton('minimize')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#ffbd2e',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              color: hoveredButton === 'minimize' ? '#5a3a00' : 'transparent',
              transition: 'color 0.2s',
              lineHeight: '12px',
            }}
          >
            −
          </button>
          <button
            onClick={toggleFullscreen}
            onMouseEnter={() => setHoveredButton('fullscreen')}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#27c93f',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              fontWeight: 'bold',
              color: hoveredButton === 'fullscreen' ? '#003d0a' : 'transparent',
              transition: 'color 0.2s',
              lineHeight: '12px',
            }}
          >
            ⤢
          </button>
        </div>
        <span
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: 14,
            color: '#333',
            fontWeight: 500,
          }}
        >
          {title}
        </span>
      </div>

      <div
        className="window-content"
        style={{
          padding: '16px',
          backgroundColor: 'rgba(255,255,255,0.6)',
          flex: 1,
          overflow: 'auto',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default AppWindow;
