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
  const nodeRef = useRef(null);

  const handleDragStart = (event, info) => setDragging(true);
  const handleDragEnd = (event, info) => {
    setDragging(false);
    setPosition({ x: info.point.x, y: info.point.y });
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
    onFullscreen && onFullscreen();
  };

  const windowStyle = {
    position: 'absolute',
    top: isFullscreen ? 0 : position.y,
    left: isFullscreen ? 0 : position.x,
    width: isFullscreen ? '100vw' : 600,
    height: isFullscreen ? '100vh' : 'auto',
    borderRadius: isFullscreen ? 0 : '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    zIndex: 10,
  };

  return (
    <motion.div
      ref={nodeRef}
      drag={!isFullscreen}
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={windowStyle}
    >
      <div
        className="window-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '6px 12px',
          background: 'rgba(255,255,255,0.5)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          cursor: isFullscreen ? 'default' : 'grab',
        }}
      >
        <div style={{ display: 'flex', gap: '8px', marginRight: '8px' }}>
          <button
            onClick={onClose}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#ff5f56',
              border: 'none',
              cursor: 'pointer',
            }}
          />
          <button
            onClick={onMinimize}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#ffbd2e',
              border: 'none',
              cursor: 'pointer',
            }}
          />
          <button
            onClick={toggleFullscreen}
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#27c93f',
              border: 'none',
              cursor: 'pointer',
            }}
          />
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
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default AppWindow;
