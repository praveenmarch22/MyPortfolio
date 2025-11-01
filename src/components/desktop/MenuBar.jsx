import React, { useEffect, useState } from "react";
import { Wifi, Settings, Volume2, Search } from "lucide-react";

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

  // Update time every 30 seconds
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

  return (
    <div
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-5 py-1.5 text-[13px] text-black select-none"
      style={{
        background:
          "linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.2))",
        backdropFilter: "blur(30px) saturate(180%)",
        WebkitBackdropFilter: "blur(30px) saturate(180%)",
        borderBottom: "1px solid rgba(255,255,255,0.25)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif',
        fontWeight: 500,
        height: "28px",
        zIndex: 100,
      }}
    >
      {/* Left section */}
      <div className="flex items-center space-x-5 text-[13px]">
        <span className="text-lg font-semibold leading-none" style={{ fontFamily: "SF Pro Display" }}>
        <svg
      width={18}
      height={18}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        borderRadius: "20%",
      }}
    >
      <text
        x="50%"
        y="52%"
        textAnchor="middle"
        fontSize="44"
        fontWeight="600"
        fill={"#ffffff"}
        fontFamily='-apple-system, "SF Pro Display", "Helvetica Neue", sans-serif'
        dominantBaseline="middle"
      >
        P
      </text>
    </svg>
        </span>
        <span className="font-semibold">Finder</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Window</span>
        <span>Help</span>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4 text-gray-900">
        
        <Settings size={15} strokeWidth={1.6} />
        <span className="ml-1 tracking-tight">{timeString}</span>
      </div>
    </div>
  );
}
