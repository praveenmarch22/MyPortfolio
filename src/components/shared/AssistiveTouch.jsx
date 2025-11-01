import React, { useState, useRef, useEffect } from "react";
import { Maximize2, Moon, Sun, X } from "lucide-react";

export default function AssistiveTouch({
  onFullscreen = () => {},
  onDarkMode = () => {},
  onLightMode = () => {},
  onClose = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({
    x: window.innerWidth - 80,
    y: window.innerHeight / 2,
  });
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);
  const isDraggingRef = useRef(false);

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    hasMoved.current = true;
    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
    
    // Only open menu if didn't drag
    if (!hasMoved.current) {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseDown = (e) => {
    if (isOpen) return;
    e.preventDefault();
    hasMoved.current = false;
    isDraggingRef.current = true;
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    
    // Attach listeners immediately
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const handleAction = (action) => {
    action();
    setIsOpen(false);
  };

  const buttons = [
    {
      name: "Fullscreen",
      icon: <Maximize2 size={20} color="white" strokeWidth={2} />,
      action: onFullscreen,
    },
    {
      name: "Dark",
      icon: <Moon size={20} color="white" strokeWidth={2} />,
      action: onDarkMode,
    },
    {
      name: "Light",
      icon: <Sun size={20} color="white" strokeWidth={2} />,
      action: onLightMode,
    },
    {
      name: "Close",
      icon: <X size={20} color="white" strokeWidth={2} />,
      action: onClose,
    },
    {
      name: "Menu",
      icon: null,
      action: () => setIsOpen(false),
    },
  ];

  return (
    <>
      {/* Floating AssistiveTouch Bubble */}
      <div
        className="fixed z-50 cursor-pointer select-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: isDragging ? "none" : "all 0.25s ease",
        }}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      >
        <div
          className="w-14 h-14 rounded-lg flex items-center justify-center shadow-lg"
          style={{
            background: "#A9A9A9",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <svg className="rounded-lg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="100%" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
            <path fill="#FFFFFF" opacity="1.000000" stroke="none" 
                d="
            M345.000000,513.000000 
                C230.027939,513.000000 115.555870,513.000000 1.041900,513.000000 
                C1.041900,342.402924 1.041900,171.805817 1.041900,1.104355 
                C171.555405,1.104355 342.110901,1.104355 512.833191,1.104355 
                C512.833191,171.666534 512.833191,342.333252 512.833191,513.000000 
                C457.139069,513.000000 401.319550,513.000000 345.000000,513.000000 
            M76.061012,257.884949 
                C76.025925,276.688843 78.961601,295.035065 84.854866,312.873444 
                C128.326630,444.458679 295.028503,481.258087 389.656342,379.933655 
                C421.818756,345.495239 437.730347,304.197632 437.952484,256.039276 
                C436.983765,245.607208 436.643433,235.071777 434.946869,224.759445 
                C421.490387,142.966690 347.923767,78.637840 265.036774,76.156868 
                C209.047211,74.480988 161.431351,93.845451 123.458473,135.057800 
                C91.896622,169.312195 76.289986,210.254272 76.061012,257.884949 
            z"/>
            <path fill="#2D2D2D" opacity="1.000000" stroke="none" 
                d="
            M437.839844,256.954285 
                C437.730347,304.197632 421.818756,345.495239 389.656342,379.933655 
                C295.028503,481.258087 128.326630,444.458679 84.854866,312.873444 
                C78.961601,295.035065 76.025925,276.688843 76.568916,257.426941 
                C90.964844,256.983643 104.852859,256.998383 118.808113,257.466858 
                C119.333488,263.728333 119.498840,269.576538 120.295151,275.337524 
                C128.106583,331.849518 169.546570,377.127625 225.517624,390.454865 
                C279.953766,403.416626 337.620575,381.025330 369.756500,334.478210 
                C385.856628,311.158142 393.415039,285.151215 394.711487,257.011536 
                C409.389191,256.991394 423.614532,256.972839 437.839844,256.954285 
            z"/>
            <path fill="#3A3A3A" opacity="1.000000" stroke="none" 
                d="
            M437.896179,256.496765 
                C423.614532,256.972839 409.389191,256.991394 394.594910,256.997803 
                C394.025970,256.985718 393.791626,256.973236 393.853699,256.517365 
                C393.535034,249.918716 393.730042,243.676041 392.684174,237.648697 
                C382.737427,180.326035 350.471588,141.013000 294.614044,124.821243 
                C238.959274,108.688248 190.443436,124.217545 151.908447,167.556824 
                C129.492401,192.767548 118.892624,223.064651 119.091141,256.979431 
                C118.973961,256.985718 118.740883,257.013153 118.740883,257.013123 
                C104.852859,256.998383 90.964844,256.983643 76.618477,256.961456 
                C76.289986,210.254272 91.896622,169.312195 123.458473,135.057800 
                C161.431351,93.845451 209.047211,74.480988 265.036774,76.156868 
                C347.923767,78.637840 421.490387,142.966690 434.946869,224.759445 
                C436.643433,235.071777 436.983765,245.607208 437.896179,256.496765 
            z"/>
            <path fill="#4A4A4A" opacity="1.000000" stroke="none" 
                d="
            M394.142517,256.999420 
                C393.415039,285.151215 385.856628,311.158142 369.756500,334.478210 
                C337.620575,381.025330 279.953766,403.416626 225.517624,390.454865 
                C169.546570,377.127625 128.106583,331.849518 120.295151,275.337524 
                C119.498840,269.576538 119.333488,263.728333 118.808113,257.466888 
                C118.740883,257.013153 118.973961,256.985718 119.546066,256.985352 
                C134.357590,257.033752 148.597000,257.082489 162.872391,257.575104 
                C163.280838,262.159698 163.467072,266.326965 164.053711,270.437103 
                C172.744385,331.323425 237.272079,368.048615 293.570740,343.381744 
                C330.683960,327.120789 349.235016,297.415009 351.621460,257.105865 
                C365.983368,257.044739 379.887512,257.009003 393.791626,256.973236 
                C393.791626,256.973236 394.025970,256.985718 394.142517,256.999420 
            z"/>
            <path fill="#5A5A5A" opacity="1.000000" stroke="none" 
                d="
            M162.836411,257.131226 
                C148.597000,257.082489 134.357590,257.033752 119.663239,256.979065 
                C118.892624,223.064651 129.492401,192.767548 151.908447,167.556824 
                C190.443436,124.217545 238.959274,108.688248 294.614044,124.821243 
                C350.471588,141.013000 382.737427,180.326035 392.684174,237.648697 
                C393.730042,243.676041 393.535034,249.918716 393.853699,256.517365 
                C379.887512,257.009003 365.983368,257.044739 351.531433,257.032471 
                C350.983582,256.984406 350.803955,256.837006 350.840698,256.396301 
                C350.545502,251.652878 350.501740,247.305084 349.837463,243.054276 
                C342.511322,196.175491 303.281708,162.534470 255.810730,163.109238 
                C226.093674,163.469070 201.669373,175.829330 183.148483,199.018600 
                C169.743118,215.802902 162.995178,235.199585 163.106079,256.910522 
                C163.016342,256.984283 162.836411,257.131256 162.836411,257.131226 
            z"/>
            <path fill="#6A6A6A" opacity="1.000000" stroke="none" 
                d="
            M351.073608,257.057800 
                C349.235016,297.415009 330.683960,327.120789 293.570740,343.381744 
                C237.272079,368.048615 172.744385,331.323425 164.053711,270.437103 
                C163.467072,266.326965 163.280838,262.159698 162.872391,257.575134 
                C162.836411,257.131256 163.016342,256.984283 163.558167,256.941223 
                C198.712204,256.932526 233.324432,256.998199 267.936646,256.991272 
                C295.559082,256.985748 323.181519,256.891724 350.803955,256.837006 
                C350.803955,256.837006 350.983582,256.984406 351.073608,257.057800 
            z"/>
            <path fill="#7A7A7A" opacity="1.000000" stroke="none" 
                d="
            M350.840698,256.396301 
                C323.181519,256.891724 295.559082,256.985748 267.936646,256.991272 
                C233.324432,256.998199 198.712204,256.932526 163.647903,256.867493 
                C162.995178,235.199585 169.743118,215.802902 183.148483,199.018600 
                C201.669373,175.829330 226.093674,163.469070 255.810730,163.109238 
                C303.281708,162.534470 342.511322,196.175491 349.837463,243.054276 
                C350.501740,247.305084 350.545502,251.652878 350.840698,256.396301 
            z"/>
            </svg>
        </div>
      </div>

      {/* Circular Expanding Menu */}
      {isOpen && (
        <div
          className="fixed z-40"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
            animation: "fadeIn 0.2s ease-out",
          }}
        >
          <div
            className="relative w-64 h-64 flex items-center justify-center rounded-full"
            style={{
              background: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
            }}
          >
            {buttons.map((btn, i) => {
              if (i === 4) {
                // Center AssistiveTouch button
                return (
                  <button
                    key={btn.name}
                    onClick={() => handleAction(btn.action)}
                    className="absolute flex items-center justify-center w-14 h-14 rounded-full"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      background: "#A9A9A9",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {btn.icon || null}
                  </button>
                );
              }

              const angle = (i / 4) * 2 * Math.PI;
              const radius = 90;
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
                  <div
                    className="flex items-center justify-center w-12 h-12 rounded-full"
                    style={{
                    }}
                  >
                    {btn.icon}
                  </div>
                  <span
                    className="text-xs font-medium text-white"
                    style={{
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {btn.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </>
  );
}