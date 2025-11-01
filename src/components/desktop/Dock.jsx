import React, { useState, useRef } from "react";
import ICONS from "../../utils/icons";

export default function Dock({ apps = null, onAppClick = () => {} }) {
  const [mouseX, setMouseX] = useState(null);
  const containerRef = useRef(null);

  const defaultApps = [
    { name: "Bio", iconKey: "bio", id: "bio" },
    { name: "Projects", iconKey: "projects", id: "projects" },
    { name: "Terminal", iconKey: "terminal", id: "terminal" },
    { name: "Gallery", iconKey: "gallery", id: "gallery" },
    { name: "Contact", iconKey: "contact", id: "contact" },
    { name: "About", iconKey: "about", id: "about" },
    { name: "Finder", iconKey: "finder", id: "finder" },
    { name: "Settings", iconKey: "settings", id: "settings" },
  ];

  const renderedApps = apps?.length ? apps : defaultApps;

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouseX(e.clientX - rect.left);
  };

  const handleMouseLeave = () => setMouseX(null);

  return (
    <div className="w-full flex justify-center items-end pb-3">
      <div
        ref={containerRef}
        className="relative flex items-end px-2 py-2 rounded-3xl gap-[6px]"
        style={{
          background: "rgba(255,255,255,0.10)",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.20)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          transition: "gap 0.25s ease-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {renderedApps.map((app) => (
          <DockIcon
            key={app.id || app.name}
            app={app}
            mouseX={mouseX}
            containerRef={containerRef}
            onClick={() => onAppClick(app)}
          />
        ))}
      </div>
    </div>
  );
}

function DockIcon({ app, mouseX, containerRef, onClick }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const iconRef = useRef(null);

  const getIcon = () => {
    if (app.iconKey && ICONS[app.iconKey]) return { type: "svg", content: ICONS[app.iconKey] };
    if (app.icon) return { type: "url", content: app.icon };
    return null;
  };

  const iconData = getIcon();

  const getTransform = (iconX, iconWidth) => {
    if (mouseX === null) return { scale: 1, offset: 0 };
    const iconCenter = iconX + iconWidth / 2;
    const distance = Math.abs(mouseX - iconCenter);
    const maxDistance = 160;

    if (distance > maxDistance) return { scale: 1, offset: 0 };

    const influence = 1 - distance / maxDistance;
    const scale = 1 + 0.7 * influence;
    const offset = -35 * influence;
    return { scale, offset };
  };

  const { scale, offset } = iconRef.current
    ? getTransform(iconRef.current.offsetLeft, iconRef.current.offsetWidth)
    : { scale: 1, offset: 0 };

  const baseSize = 58;
  const spacing = 8 + (scale - 1) * 18;

  return (
    <div
      ref={iconRef}
      className="relative flex flex-col items-center cursor-pointer select-none"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={onClick}
      style={{
        transform: `translateY(${offset}px) scale(${scale})`,
        transformOrigin: "bottom center",
        transition: "transform 0.15s ease-out, margin 0.2s ease-out",
        marginLeft: `${spacing / 2}px`,
        marginRight: `${spacing / 2}px`,
      }}
    >
      <div
        className="flex items-center justify-center rounded-2xl overflow-hidden"
        style={{
          width: baseSize,
          height: baseSize,
          willChange: "transform",
        }}
      >
        {iconData?.type === "svg" ? (
          <span
            style={{ width: "85%", height: "85%", display: "inline-block" }}
            dangerouslySetInnerHTML={{ __html: iconData.content }}
          />
        ) : (
          <img
            src={iconData?.content || app.icon}
            alt={app.name}
            className="w-full h-full object-cover"
            draggable="false"
          />
        )}
      </div>

      {/* Tooltip */}
      <div
        className={`absolute -top-12 px-3 py-1.5 rounded-md text-white text-xs font-medium whitespace-nowrap transition-all duration-200 ease-out ${
          showTooltip && scale > 1.1
            ? "opacity-100 -translate-y-1"
            : "opacity-0 translate-y-0"
        }`}
        style={{
          background: "rgba(40,40,40,0.9)",
          backdropFilter: "blur(10px)",
        }}
      >
        {app.name}
      </div>
    </div>
  );
}