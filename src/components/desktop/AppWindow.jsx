import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const AppWindow = ({
  title = 'Untitled',
  children,
  onClose,
  onMinimize,
  onFullscreen,
  initialPosition = { x: 100, y: 100 },
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const nodeRef = useRef(null);

  const handleDragStart = (event, info) => setDragging(true);
  const handleDragEnd = (event, info) => {
    setDragging(false);
    // Update position based on drag movement
    setPosition((prev) => ({
      x: prev.x + info.offset.x,
      y: prev.y + info.offset.y,
    }));
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
    onFullscreen && onFullscreen();
  };

  const windowStyle = {
    position: 'absolute',
    top: isFullscreen ? '48px' : position.y,
    left: isFullscreen ? 0 : position.x,
    width: isFullscreen ? '100vw' : 600,
    height: isFullscreen ? 'calc(100vh - 48px)' : 'auto',
    borderRadius: isFullscreen ? 0 : '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    zIndex: 10,
  };

  return (
    <div
      ref={nodeRef}
      style={windowStyle}
    >
      <motion.div
        className="window-header"
        drag={!isFullscreen}
        dragMomentum={false}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
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
            onClick={onClose}
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
              paddingTop: '1px',
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
              paddingBottom: '2px',
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
      </motion.div>

      <div
        className="window-content"
        style={{
          padding: '16px',
          backgroundColor: 'rgba(255,255,255,0.6)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AppWindow;
