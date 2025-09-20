import React, { useEffect, useState, useRef } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const timeoutRef = useRef(null);
  const clickTimeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set moving state to false after movement stops
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    const handleClick = () => {
      setClicked(true);

      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }

      clickTimeoutRef.current = setTimeout(() => {
        setClicked(false);
      }, 400);
    };

    const handleMouseLeave = () => {
      setIsMoving(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseleave", handleMouseLeave);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const size = clicked ? 120 : isMoving ? 80 : 50;
  const opacity = clicked ? 0.9 : isMoving ? 0.7 : 0.4;
  const coreSize = clicked ? 20 : isMoving ? 12 : 6;

  return (
    <>
      {/* Outer glow layer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${size * 1.4}px`,
          height: `${size * 1.4}px`,
          background: `radial-gradient(circle, 
            rgba(255, 140, 0, ${opacity * 0.3}) 0%, 
            rgba(255, 165, 0, ${opacity * 0.2}) 30%, 
            transparent 60%)`,
          borderRadius: "50%",
          pointerEvents: "none",
          transform: `translate(${position.x - (size * 1.4) / 2}px, ${
            position.y - (size * 1.4) / 2
          }px)`,
          transition: clicked
            ? "all 0.25s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
            : "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          zIndex: 9996,
          filter: "blur(2px)",
        }}
      />

      {/* Main glow */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${size}px`,
          height: `${size}px`,
          background: `radial-gradient(circle, 
            rgba(255, 140, 0, ${opacity}) 0%, 
            rgba(255, 165, 0, ${opacity * 0.6}) 35%, 
            rgba(255, 140, 0, ${opacity * 0.3}) 60%,
            transparent 80%)`,
          borderRadius: "50%",
          pointerEvents: "none",
          transform: `translate(${position.x - size / 2}px, ${
            position.y - size / 2
          }px)`,
          transition: clicked
            ? "all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
            : "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          zIndex: 9998,
          mixBlendMode: "screen",
        }}
      />

      {/* Inner bright core */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${coreSize}px`,
          height: `${coreSize}px`,
          background: clicked
            ? `radial-gradient(circle, 
                rgba(255, 255, 255, 1) 0%, 
                rgba(255, 200, 100, 0.9) 50%, 
                rgba(255, 140, 0, 0.7) 100%)`
            : `radial-gradient(circle, 
                rgba(255, 200, 100, 0.95) 0%, 
                rgba(255, 140, 0, 0.8) 100%)`,
          borderRadius: "50%",
          pointerEvents: "none",
          transform: `translate(${position.x - coreSize / 2}px, ${
            position.y - coreSize / 2
          }px)`,
          transition: clicked ? "all 0.15s ease-out" : "all 0.25s ease-out",
          zIndex: 9999,
          boxShadow: clicked
            ? "0 0 30px rgba(255, 140, 0, 0.8), 0 0 60px rgba(255, 140, 0, 0.4)"
            : `0 0 15px rgba(255, 140, 0, ${opacity * 0.6})`,
          filter: clicked ? "brightness(1.2)" : "brightness(1)",
        }}
      />

      {/* Click ripple effect */}
      {clicked && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "160px",
            height: "160px",
            border: "3px solid rgba(255, 140, 0, 0.6)",
            borderRadius: "50%",
            pointerEvents: "none",
            transform: `translate(${position.x - 80}px, ${position.y - 80}px)`,
            animation: "ripple 0.8s ease-out",
            zIndex: 9997,
            boxShadow: "0 0 20px rgba(255, 140, 0, 0.3)",
          }}
        />
      )}

      {/* Sparkle particles on click */}
      {clicked &&
        Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "4px",
              height: "4px",
              background: "rgba(255, 215, 0, 0.9)",
              borderRadius: "50%",
              pointerEvents: "none",
              transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
              animation: `sparkle-${i} 0.6s ease-out`,
              zIndex: 10000,
            }}
          />
        ))}

      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: translate(${position.x - 80}px, ${position.y - 80}px)
              scale(0.1);
            opacity: 0.8;
            filter: brightness(1.5);
          }
          100% {
            transform: translate(${position.x - 80}px, ${position.y - 80}px)
              scale(1);
            opacity: 0;
            filter: brightness(1);
          }
        }

        ${Array.from({ length: 6 })
          .map(
            (_, i) => `
          @keyframes sparkle-${i} {
            0% {
              transform: translate(${position.x - 2}px, ${
              position.y - 2
            }px) scale(0);
              opacity: 1;
            }
            50% {
              transform: translate(${
                position.x - 2 + Math.cos((i * 60 * Math.PI) / 180) * 25
              }px, ${
              position.y - 2 + Math.sin((i * 60 * Math.PI) / 180) * 25
            }px) scale(1);
              opacity: 0.8;
            }
            100% {
              transform: translate(${
                position.x - 2 + Math.cos((i * 60 * Math.PI) / 180) * 40
              }px, ${
              position.y - 2 + Math.sin((i * 60 * Math.PI) / 180) * 40
            }px) scale(0);
              opacity: 0;
            }
          }
        `
          )
          .join("")}
      `}</style>
    </>
  );
};

export default CursorGlow;
