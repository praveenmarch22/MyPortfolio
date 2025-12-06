import React, { useEffect, useState } from "react";
import { Wifi, Volume2, Search, Battery } from "lucide-react";

/**
 * A React component that mimics the Apple macOS menu bar.
 */
export default function MenuBar() {
  const [timeString, setTimeString] = useState(() =>
    new Date().toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).replace(/,/g, '')
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeString(
        new Date().toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).replace(/,/g, '')
      );
    }, 30 * 1000);

    return () => clearInterval(interval);
  }, []);

  const MenuItem = ({ children, isBold = false }) => (
    <span
      className={`px-2.5 py-0.5 rounded hover:bg-black/10 cursor-default transition-colors ${isBold ? 'font-semibold' : ''}`}
    >
      {children}
    </span>
  );

  return (
    <div
      className="flex items-center justify-between px-3 py-0 text-[13px] text-black/90 select-none"
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(30px) saturate(180%)",
        WebkitBackdropFilter: "blur(30px) saturate(180%)",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
        height: "25px",
        zIndex: 10,
      }}
    >
      {/* Left section: Name, App name, Menu items */}
      <div className="flex items-center">
        {/* Name with emojis */}
        <span
          className="text-[14px] px-3 py-0.5 hover:bg-black/10 rounded cursor-default font-medium"
          aria-label="User menu"
        >
          Praveen 🥱😴
        </span>

        <MenuItem isBold>Finder</MenuItem>
        <MenuItem>File</MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuItem>View</MenuItem>
        <MenuItem>Go</MenuItem>
        <MenuItem>Window</MenuItem>
        <MenuItem>Help</MenuItem>
      </div>

      {/* Right section: Status icons and Date/Time */}
      <div className="flex items-center gap-3 text-black/80">
        <div className="flex items-center gap-2.5">
          <Battery
            size={18}
            strokeWidth={1.5}
            className="opacity-80"
            aria-label="Battery status"
          />
          <Wifi
            size={14}
            strokeWidth={2}
            className="opacity-80"
            aria-label="Wi-Fi"
          />
          <Volume2
            size={14}
            strokeWidth={2}
            className="opacity-80"
            aria-label="Volume"
          />
          <Search
            size={14}
            strokeWidth={2}
            className="opacity-80"
            aria-label="Spotlight"
          />
        </div>
        <span className="text-[13px] font-normal opacity-90" aria-label="Current time">
          {timeString}
        </span>
      </div>
    </div>
  );
}