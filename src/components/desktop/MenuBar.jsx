import React, { useEffect, useState } from "react";
import { Wifi, Settings, Volume2, Search, Battery } from "lucide-react";

/**
 * A React component that mimics the Apple macOS menu bar.
 *
 * It features a translucent, blurry background, the Apple logo,
 * a placeholder application name, standard menu items,
 * and a set of system status icons on the right, along with the current date and time.
 *
 * The time string updates every 30 seconds.
 */
export default function MenuBar() {
  // State to hold the formatted date and time string
  const [timeString, setTimeString] = useState(() =>
    new Date().toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).replace(/,/g, '') // Remove comma after day
  );

  // Update time every 30 seconds to keep it current
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
    }, 30 * 1000); // Update every 30 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-1 text-[13px] text-black select-none"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.3))",
        backdropFilter: "blur(30px) saturate(180%)",
        WebkitBackdropFilter: "blur(30px) saturate(180%)", // For Safari
        borderBottom: "1px solid rgba(200,200,200,0.3)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
        height: "28px", // Standard macOS menu bar height
        zIndex: 100,
      }}
    >
      {/* Left section: Apple logo, App name, Menu items */}
      <div className="flex items-center space-x-5">
        {/* Apple Logo Character */}
        <span
          className="text-[17px] -mt-0.5"
          aria-label="Apple menu"
          role="button"
        >
          Praveen 🥱😴
        </span>
        <span className="font-semibold" aria-label="Current application">
          Finder
        </span>
        <span className="opacity-90" role="menuitem">File</span>
        <span className="opacity-90" role="menuitem">Edit</span>
        <span className="opacity-90" role="menuitem">View</span>
        <span className="opacity-90" role="menuitem">Go</span>
        <span className="opacity-90" role="menuitem">Window</span>
        <span className="opacity-90" role="menuitem">Help</span>
      </div>

      {/* Right section: Status icons and Date/Time */}
      <div className="flex items-center space-x-4 text-gray-900">
        <Battery
          size={18}
          strokeWidth={1.5}
          fill="black"
          className="opacity-90"
          aria-label="Battery status: full"
        />
        <Wifi
          size={15}
          strokeWidth={2}
          className="opacity-90"
          aria-label="Wi-Fi: connected"
        />
        <Volume2
          size={15}
          strokeWidth={2}
          className="opacity-90"
          aria-label="Volume: high"
        />
        <Search
          size={15}
          strokeWidth={2}
          className="opacity-90"
          aria-label="Spotlight search"
          role="search"
        />
        <Settings
          size={15}
          strokeWidth={2}
          className="opacity-90"
          aria-label="Control Center"
        />
        <span className="ml-1 tracking-tight font-medium" aria-label="Current time">
          {timeString}
        </span>
      </div>
    </div>
  );
}