import { BiVolumeFull } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaPauseCircle } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";

const PremiumVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    videoRef.current.currentTime = newTime;
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!document.fullscreenElement) {
      container.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  const createRipple = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now() + Math.random(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 1000);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="premium-video-wrapper">
      <style>{`
        .premium-video-wrapper {
          position: relative;
          max-width: 1000px;
          margin: 2rem auto;
          padding: 20px;
        }

        .video-container {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          box-shadow: 
            0 50px 100px -20px rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: none;
        }

        .video-container:hover {
          transform: scale(1.02) translateY(-8px);
          box-shadow: 
            0 70px 140px -20px rgba(0, 0, 0, 0.6),
            0 0 0 1px rgba(255, 255, 255, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .video-container::before {
          content: '';
          position: absolute;
          inset: -3px;
          background: conic-gradient(from 0deg, #ff6b35, #f7931e, #ffd23f, #06ffa5, #4facfe, #00f2fe, #ff6b35);
          border-radius: 35px;
          z-index: -1;
          animation: rotateGradient 4s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .video-container:hover::before {
          opacity: 1;
        }

        @keyframes rotateGradient {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .video-element {
          width: 100%;
          height: auto;
          min-height: 400px;
          display: block;
          background: #000;
          object-fit: cover;
        }

        .custom-cursor {
          position: absolute;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, rgba(255, 165, 0, 0.8) 0%, rgba(255, 140, 0, 0.4) 60%, transparent 80%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: all 0.1s ease;
          z-index: 1000;
          mix-blend-mode: screen;
        }

        .custom-cursor::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .video-ripple {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 140, 0, 0.6) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: rippleExpand 1s ease-out forwards;
        }

        @keyframes rippleExpand {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            45deg,
            rgba(255, 140, 0, 0.1) 0%,
            transparent 30%,
            transparent 70%,
            rgba(255, 69, 0, 0.1) 100%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .video-container:hover .video-overlay {
          opacity: 1;
        }

        .controls-container {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.3) 40%,
            rgba(0, 0, 0, 0.8) 100%
          );
          backdrop-filter: blur(20px);
          padding: 2rem;
          transform: translateY(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .video-container:hover .controls-container,
        .controls-container.visible {
          transform: translateY(0);
        }

        .progress-container {
          position: relative;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          margin-bottom: 1rem;
          cursor: pointer;
          overflow: hidden;
        }

        .progress-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #ff6b35, #f7931e, #ffd23f);
          border-radius: 3px;
          transform: scaleX(0);
          transform-origin: left;
          animation: progressShimmer 2s ease-in-out infinite;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #ff6b35, #f7931e, #ffd23f);
          border-radius: 3px;
          position: relative;
          transition: all 0.2s ease;
          box-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
        }

        .progress-bar::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          width: 12px;
          height: 12px;
          background: #fff;
          border-radius: 50%;
          transform: translateY(-50%);
          box-shadow: 0 0 15px rgba(255, 107, 53, 0.7);
        }

        @keyframes progressShimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .controls-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .controls-left,
        .controls-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .control-button {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .control-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255, 140, 0, 0.3) 0%, transparent 70%);
          transform: scale(0);
          transition: transform 0.3s ease;
        }

        .control-button:hover::before {
          transform: scale(1);
        }

        .control-button:hover {
          background: rgba(255, 140, 0, 0.2);
          border-color: rgba(255, 140, 0, 0.4);
          transform: scale(1.1);
        }

        .play-button {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #ff6b35, #f7931e);
          box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
        }

        .play-button:hover {
          transform: scale(1.15);
          box-shadow: 0 12px 30px rgba(255, 107, 53, 0.6);
        }

        .time-display {
          color: white;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          font-weight: 500;
          min-width: 80px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .volume-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .volume-slider {
          width: 80px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          cursor: pointer;
          position: relative;
        }

        .volume-progress {
          height: 100%;
          background: linear-gradient(90deg, #ff6b35, #f7931e);
          border-radius: 2px;
          position: relative;
        }

        .floating-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 140, 0, 0.6);
          border-radius: 50%;
          animation: particleFloat 8s linear infinite;
        }

        .particle:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }
        .particle:nth-child(2) {
          top: 20%;
          left: 80%;
          animation-delay: -2s;
        }
        .particle:nth-child(3) {
          top: 70%;
          left: 20%;
          animation-delay: -4s;
        }
        .particle:nth-child(4) {
          top: 60%;
          left: 90%;
          animation-delay: -6s;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(0px) translateX(0px) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-400px) translateX(50px) scale(0);
            opacity: 0;
          }
        }

        .title-overlay {
          position: absolute;
          top: 2rem;
          left: 2rem;
          color: white;
          z-index: 10;
        }

        .video-title {
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
          background: linear-gradient(135deg, #ffffff, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .video-subtitle {
          font-size: 1rem;
          margin: 0.5rem 0 0 0;
          opacity: 0.9;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
        }

        .loading-indicator {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          border: 3px solid rgba(255, 140, 0, 0.3);
          border-top: 3px solid #ff8c00;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          z-index: 100;
        }

        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @media (max-width: 768px) {
          .video-container {
            border-radius: 20px;
          }
          
          .controls-container {
            padding: 1rem;
          }
          
          .video-title {
            font-size: 1.5rem;
          }
          
          .title-overlay {
            top: 1rem;
            left: 1rem;
          }
        }
      `}</style>

      <div
        ref={containerRef}
        className="video-container"
        onClick={createRipple}
      >
        <div
          className="custom-cursor"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        />

        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="video-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
            }}
          />
        ))}

        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="video-overlay" />

        <div className="title-overlay"></div>

        <video ref={videoRef} className="video-element" onClick={togglePlay}>
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {!duration && <div className="loading-indicator" />}

        <div className="controls-container">
          <div className="progress-container" onClick={handleProgressClick}>
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>

          <div className="controls-row">
            <div className="controls-left">
              <button
                className="control-button play-button"
                onClick={togglePlay}
              >
                {isPlaying ? (
                  <FaPauseCircle style={{ fontSize: "40px" }} />
                ) : (
                  <AiFillPlayCircle style={{ fontSize: "40px" }} />
                )}
              </button>

              <div className="time-display">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>

            <div className="controls-right">
              <div className="volume-container">
                <button className="control-button">
                  <BiVolumeFull />
                </button>
                <div className="volume-slider">
                  <div
                    className="volume-progress"
                    style={{ width: `${volume * 100}%` }}
                  />
                </div>
              </div>

              <button className="control-button" onClick={toggleFullscreen}>
                ⛶
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumVideo;
