"use client";

import { useState, useRef, useEffect } from "react";
import {
  Maximize2,
  Moon,
  Home,
  ArrowLeft,
  X,
} from "lucide-react";
import useMediaQuery from "../../hooks/useMediaQuery";

const AssistiveIcon = () => (
  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <rect width="1024" height="1024" rx="225" fill="#1C1C1E" />
    <g fill="white" opacity="0.9">
      <circle cx="512" cy="512" r="280" opacity="0.3" />
      <circle cx="512" cy="512" r="200" opacity="0.5" />
      <circle cx="512" cy="512" r="120" />
    </g>
  </svg>
);

export default function AssistiveTouch({
  onFullscreen = () => { },
  onDarkMode = () => { },
  onHome = () => { },
  onBack = () => { },
  onClose = () => { },          // not used in mobile, kept for API parity
  onLightMode = () => { },      // not used in mobile
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [position, setPosition] = useState(() => ({
    x: typeof window !== "undefined" ? window.innerWidth - 44 : 1000,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 400,
  }));
  const [isDragging, setIsDragging] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  const dragOffset = useRef({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const closedPositionRef = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);
  const isDraggingRef = useRef(false);
  const idleTimerRef = useRef(null);
  const containerRef = useRef(null);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const buttonWidth = 48;               // mobile only
  const padding = 16;
  const dragThreshold = 5;

  /* ------------------------------------------------------------------ */
  /*  Resize → keep button inside viewport (mobile can be anywhere)      */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const handleResize = () => {
      if (!isDragging && !isOpen && !isReturning) {
        snapToEdge();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDragging, isOpen, isReturning]);

  /* ------------------------------------------------------------------ */
  /*  Idle opacity (fade after 3 s)                                      */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    if (isOpen) {
      setIsIdle(false);
      return;
    }
    idleTimerRef.current = setTimeout(() => setIsIdle(true), 3000);
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [isOpen, position]);

  /* ------------------------------------------------------------------ */
  /*  Click-outside to close                                             */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        handleCloseMenu();
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isOpen]);

  /* ------------------------------------------------------------ */
  /*  Helpers                                                     */
  /* ------------------------------------------------------------ */
  const getEventCoords = (e) =>
    (e.touches ? e.touches[0] : e);

  const snapToEdge = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const newX = Math.max(
      padding + buttonWidth / 2,
      Math.min(position.x, w - (padding + buttonWidth / 2))
    );
    const newY = Math.max(
      padding + buttonWidth / 2,
      Math.min(position.y, h - (padding + buttonWidth / 2))
    );
    const final = { x: newX, y: newY };
    setPosition(final);
    closedPositionRef.current = final;
  };

  /* ------------------------------------------------------------ */
  /*  Drag handlers                                               */
  /* ------------------------------------------------------------ */
  const handleDragMove = (e) => {
    if (!isDraggingRef.current) return;
    const c = getEventCoords(e);
    if (!c) return;

    const deltaX = Math.abs(c.clientX - dragStartPos.current.x);
    const deltaY = Math.abs(c.clientY - dragStartPos.current.y);
    if (!hasMoved.current && (deltaX > dragThreshold || deltaY > dragThreshold)) {
      hasMoved.current = true;
    }
    if (isIdle) setIsIdle(false);

    setPosition({
      x: c.clientX - dragOffset.current.x,
      y: c.clientY - dragOffset.current.y,
    });
  };

  const handleDragEnd = () => {
    const wasDragging = hasMoved.current;
    isDraggingRef.current = false;
    setIsDragging(false);

    window.removeEventListener("mousemove", handleDragMove);
    window.removeEventListener("mouseup", handleDragEnd);
    window.removeEventListener("touchmove", handleDragMove);
    window.removeEventListener("touchend", handleDragEnd);

    if (!wasDragging) {
      hasMoved.current = false;
      handleOpenMenu();
    } else {
      snapToEdge();
      hasMoved.current = false;
    }
  };

  const handleDragStart = (e) => {
    if (isOpen) return;
    if (e.type === "touchstart") e.preventDefault();

    const c = getEventCoords(e.nativeEvent);
    dragStartPos.current = { x: c.clientX, y: c.clientY };
    hasMoved.current = false;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragOffset.current = {
      x: c.clientX - position.x,
      y: c.clientY - position.y,
    };

    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchmove", handleDragMove, { passive: false });
    window.addEventListener("touchend", handleDragEnd);
  };

  /* ------------------------------------------------------------ */
  /*  Menu open / close                                            */
  /* ------------------------------------------------------------ */
  const handleOpenMenu = () => {
    if (isOpen) return;
    closedPositionRef.current = { x: position.x, y: position.y };

    // move to centre *without* transition
    setIsReturning(true);
    setPosition({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
    requestAnimationFrame(() => setIsReturning(false));

    setTimeout(() => setIsOpen(true), 50);
  };

  const handleCloseMenu = () => {
    if (!isOpen) return;
    setIsOpen(false);

    // wait for the close animation (250 ms) + tiny buffer
    setTimeout(() => {
      setIsReturning(true);
      setPosition(closedPositionRef.current);
      requestAnimationFrame(() => setIsReturning(false));
    }, 280);
  };

  const handleAction = (action) => {
    if (!isOpen) return;
    const saved = { ...closedPositionRef.current };

    setIsOpen(false); // start close animation

    setTimeout(() => {
      // snap back instantly (no transition)
      setIsReturning(true);
      setPosition(saved);
      requestAnimationFrame(() => setIsReturning(false));

      // run the real callback a bit after the return starts
      setTimeout(() => action(), 50);
    }, 280);
  };

  /* ------------------------------------------------------------ */
  /*  Mobile-only button list                                      */
  /* ------------------------------------------------------------ */
  const buttons = [
    { name: "Home", icon: <Home size={20} color="white" strokeWidth={2} />, action: onHome },
    { name: "Back", icon: <ArrowLeft size={20} color="white" strokeWidth={2} />, action: onBack },
    { name: "Fullscreen", icon: <Maximize2 size={20} color="white" strokeWidth={2} />, action: onFullscreen },
    { name: "Dark", icon: <Moon size={20} color="white" strokeWidth={2} />, action: onDarkMode },
    { name: "Menu", icon: <AssistiveIcon />, action: handleCloseMenu },
  ];

  /* ------------------------------------------------------------ */
  /*  Render                                                       */
  /* ------------------------------------------------------------ */
  return (
    <>
      <div
        ref={containerRef}
        className="fixed z-50 cursor-pointer select-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition:
            isDragging || isOpen || isReturning
              ? "none"
              : "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          opacity: isIdle && !isOpen ? 0.5 : 1,
        }}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        onClick={(e) => {
          e.stopPropagation();
          if (hasMoved.current) e.preventDefault();
        }}
      >
        {/* Floating button */}
        <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
          <AssistiveIcon />
        </div>

        {/* Expanded menu */}
        {isOpen && (
          <div
            className="absolute pointer-events-auto"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className="relative w-56 h-56 flex items-center justify-center rounded-full"
              style={{
                background: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
                animation: "expandFromCenter 0.25s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            >
              {buttons.map((btn, i) => {
                if (i === 4) {
                  // centre "Menu" button
                  return (
                    <button
                      key={btn.name}
                      onClick={() => handleAction(btn.action)}
                      className="absolute flex items-center justify-center w-14 h-14 rounded-lg"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {btn.icon}
                    </button>
                  );
                }

                const angle = (i / 4) * 2 * Math.PI;
                const radius = 75;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <button
                    key={btn.name}
                    onClick={() => handleAction(btn.action)}
                    className="absolute flex flex-col items-center justify-center gap-1"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full">
                      {btn.icon}
                    </div>
                    <span
                      className="text-xs font-medium text-white"
                      style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
                    >
                      {btn.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes expandFromCenter {
          from {
            opacity: 0;
            transform: scale(0.3);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}