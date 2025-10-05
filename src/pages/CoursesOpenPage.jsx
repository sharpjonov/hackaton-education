import React, { useState, useEffect } from "react";
import PremiumVideo from "../components/PremiumVideo";

const PremiumCourseCards = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const courses = [
    {
      id: 1,
      number: "01",
      title: "Web Development",
      theme: "purple",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      lessons: [
        {
          title: "Understanding UI/UX Principles",
          lesson: "Lesson 01",
          duration: "45 Minutes",
          type: "basic",
        },
        {
          title: "Importance of User-Centered Design",
          lesson: "Lesson 02",
          duration: "1 Hour",
          type: "highlighted",
        },
        {
          title: "The Role of UI/UX Design in Product Development",
          lesson: "Lesson 03",
          duration: "45 Minutes",
          type: "basic",
        },
      ],
    },
    {
      id: 2,
      number: "02",
      title: "Advanced Design Systems",
      theme: "blue",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      lessons: [
        {
          title: "Creating Scalable Design Systems",
          lesson: "Lesson 01",
          duration: "50 Minutes",
          type: "basic",
        },
        {
          title: "Component Libraries and Style Guides",
          lesson: "Lesson 02",
          duration: "1.5 Hours",
          type: "highlighted",
        },
        {
          title: "Design Tokens and Automation",
          lesson: "Lesson 03",
          duration: "40 Minutes",
          type: "basic",
        },
      ],
    },
    {
      id: 3,
      number: "03",
      title: "Cyber Security",
      theme: "green",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      lessons: [
        {
          title: "Conducting User Interviews",
          lesson: "Lesson 01",
          duration: "35 Minutes",
          type: "basic",
        },
        {
          title: "A/B Testing and Analytics",
          lesson: "Lesson 02",
          duration: "55 Minutes",
          type: "highlighted",
        },
        {
          title: "Usability Testing Methods",
          lesson: "Lesson 03",
          duration: "1 Hour",
          type: "basic",
        },
      ],
    },
    {
      id: 4,
      number: "04",
      title: "Prototyping & Animation",
      theme: "orange",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      lessons: [
        {
          title: "Interactive Prototyping with Figma",
          lesson: "Lesson 01",
          duration: "1 Hour",
          type: "basic",
        },
        {
          title: "Micro-interactions and Animations",
          lesson: "Lesson 02",
          duration: "45 Minutes",
          type: "highlighted",
        },
        {
          title: "Advanced Prototyping Techniques",
          lesson: "Lesson 03",
          duration: "1.2 Hours",
          type: "basic",
        },
      ],
    },
    {
      id: 5,
      number: "05",
      title: "Mobile & Responsive Design",
      theme: "pink",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      lessons: [
        {
          title: "Mobile-First Design Principles",
          lesson: "Lesson 01",
          duration: "40 Minutes",
          type: "basic",
        },
        {
          title: "Responsive Grid Systems",
          lesson: "Lesson 02",
          duration: "50 Minutes",
          type: "highlighted",
        },
        {
          title: "Touch Interface Design",
          lesson: "Lesson 03",
          duration: "35 Minutes",
          type: "basic",
        },
      ],
    },
  ];

  return (
    <>
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

        * {
          box-sizing: border-box;
        }

        .courses-container {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          font-family: "Inter", sans-serif;
          padding: 4rem 2rem;
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: particleFloat 15s infinite linear;
        }

        .particle:nth-child(1) {
          width: 4px;
          height: 4px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        .particle:nth-child(2) {
          width: 6px;
          height: 6px;
          top: 60%;
          left: 90%;
          animation-delay: -3s;
        }
        .particle:nth-child(3) {
          width: 3px;
          height: 3px;
          top: 80%;
          left: 20%;
          animation-delay: -6s;
        }
        .particle:nth-child(4) {
          width: 5px;
          height: 5px;
          top: 30%;
          left: 80%;
          animation-delay: -9s;
        }
        .particle:nth-child(5) {
          width: 4px;
          height: 4px;
          top: 70%;
          left: 60%;
          animation-delay: -12s;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }

        .main-title {
          text-align: center;
          color: white;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 3rem;
          position: relative;
          z-index: 2;
          opacity: 0;
          animation: titleSlideIn 1s ease-out 0.3s forwards;
        }

        @keyframes titleSlideIn {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
          gap: 2rem;
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 20px auto 40px auto;
        }

        .course-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transform: translateY(100px);
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .course-card:nth-child(1) {
          animation: cardSlideUp 0.8s ease-out 0.5s forwards;
        }
        .course-card:nth-child(2) {
          animation: cardSlideUp 0.8s ease-out 0.7s forwards;
        }
        .course-card:nth-child(3) {
          animation: cardSlideUp 0.8s ease-out 0.9s forwards;
        }
        .course-card:nth-child(4) {
          animation: cardSlideUp 0.8s ease-out 1.1s forwards;
        }
        .course-card:nth-child(5) {
          animation: cardSlideUp 0.8s ease-out 1.3s forwards;
        }

        @keyframes cardSlideUp {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .course-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: var(--card-gradient);
          border-radius: 24px 24px 0 0;
          transform: scaleX(0);
          transition: transform 0.5s ease;
          transform-origin: left;
        }

        .course-card:hover::before {
          transform: scaleX(1);
        }

        .course-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 35px 70px -12px rgba(0, 0, 0, 0.3);
        }

        .course-card.purple {
          --card-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .course-card.blue {
          --card-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }
        .course-card.green {
          --card-gradient: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }
        .course-card.orange {
          --card-gradient: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
        }
        .course-card.pink {
          --card-gradient: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
        }

        .card-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: var(--card-gradient);
          opacity: 0;
          filter: blur(40px);
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: -1;
        }

        .course-card:hover .card-glow {
          opacity: 0.3;
        }

        .course-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .course-number {
          font-size: 4rem;
          font-weight: 700;
          background: var(--card-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
          line-height: 1;
          position: relative;
        }

        .course-number::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--card-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          top: 0;
          left: 0;
          animation: numberPulse 3s ease-in-out infinite;
        }

        @keyframes numberPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .course-icon {
          width: 60px;
          height: 60px;
          background: var(--card-gradient);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          animation: iconRotate 10s linear infinite;
        }

        @keyframes iconRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .course-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a202c;
          margin: 0 0 2rem 0;
          line-height: 1.3;
        }

        .lessons-container {
          space-y: 1rem;
        }

        .lesson-item {
          background: transparent;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 1.25rem;
          margin-bottom: 1rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .lesson-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.6),
            transparent
          );
          transition: left 0.6s ease;
        }

        .lesson-item:hover::before {
          left: 100%;
        }

        .lesson-item:hover {
          transform: translateX(8px);
          border-color: transparent;
          background: var(--card-gradient);
          color: white;
          box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.2);
        }

        .lesson-item.highlighted {
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1),
            rgba(147, 51, 234, 0.1)
          );
          border-color: #3b82f6;
        }

        .lesson-item.highlighted:hover {
          background: var(--card-gradient);
          color: white;
        }

        .lesson-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
        }

        .lesson-title {
          font-size: 1rem;
          font-weight: 500;
          margin: 0;
          line-height: 1.4;
          flex: 1;
          margin-right: 1rem;
        }

        .lesson-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .lesson-number {
          font-size: 0.875rem;
          font-weight: 500;
          opacity: 0.7;
        }

        .lesson-duration {
          display: flex;
          align-items: center;
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .lesson-duration::before {
          content: "⏱";
          margin-right: 0.375rem;
        }

        .lesson-item:hover .lesson-duration {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        }

        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }

        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-shape {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: floatUpDown 6s ease-in-out infinite;
        }

        .floating-shape:nth-child(1) {
          width: 20px;
          height: 20px;
          top: 10%;
          right: 10%;
          animation-delay: 0s;
        }

        .floating-shape:nth-child(2) {
          width: 15px;
          height: 15px;
          top: 60%;
          right: 20%;
          animation-delay: -2s;
        }

        .floating-shape:nth-child(3) {
          width: 12px;
          height: 12px;
          top: 80%;
          right: 15%;
          animation-delay: -4s;
        }

        @keyframes floatUpDown {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 1rem;
          }

          .course-card {
            padding: 2rem 1.5rem;
          }

          .course-number {
            font-size: 3rem;
          }

          .main-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
        }

        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
          }
        }

.video-container {
  position: relative;
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: #000;
  z-index: 5;
}

.video-container:hover {
  transform: scale(1.02);
  box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.5);
}

.video-container video {
  width: 100%;
  display: block;
  border-radius: 20px;
  outline: none;
  background-color: #000;
  object-fit: cover;
}

.video-container video::-webkit-media-controls-panel {
  background: rgba(0, 0, 0, 0.6);
  border-radius: 0 0 20px 20px;
}

.video-container video::-webkit-media-controls-play-button,
.video-container video::-webkit-media-controls-pause-button {
  color: white;
}

.video-container video::-webkit-media-controls-timeline {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  height: 4px;
}

.video-container video::-webkit-media-controls-volume-slider {
  background: rgba(255, 255, 255, 0.2);
}

.video-overlay-title {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 1.5rem;
  color: white;
  font-weight: 600;
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.6);
  z-index: 10;
  pointer-events: none;
}

.video-container::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(255, 165, 0, 0.4), rgba(255, 69, 0, 0.4));
  filter: blur(30px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.video-container:hover::before {
  opacity: 1;
}

@media (max-width: 768px) {
  .video-container {
    max-width: 100%;
    margin: 1.5rem;
    border-radius: 15px;
  }

  .video-overlay-title {
    font-size: 1.2rem;
  }
}

      `}</style>
      <div className="container">
        <div
          className="d-flex flex-column flex-lg-row align-items-center justify-content-between text-center text-lg-start mb-5"
          style={{
            padding: "100px 0",
            gap: "40px",
          }}
        >
          <div className="col-lg-5">
            <h1 className="fw-bold display-5 text-dark mb-3">
              UI/UX <span className="text-warning">Design</span> Course
            </h1>
            <p className="text-muted fs-5">
              Choose the perfect plan for your journey. Whether you're just
              getting started or looking to scale, our flexible options are
              designed to fit your goals and budget.
            </p>
          </div>

          <div className="col-lg-6">
            <div
              className="bg-white shadow rounded p-4 border-start border-4 border-warning"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <p className="text-muted">
                Welcome to our UI/UX Design course! This comprehensive program
                will equip you with the knowledge and skills to create
                exceptional user interfaces (UI) and enhance user experiences
                (UX). Dive into the world of design thinking, wireframing,
                prototyping, and usability testing. Below is an overview of the
                curriculum
              </p>
            </div>
          </div>
        </div>
      </div>

      <PremiumVideo />

      <div className="container">
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="cards-grid">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`course-card ${course.theme}`}
              onMouseEnter={() => setActiveCard(course.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={(e) => {
                const ripple = document.createElement("span");
                const rect = e.currentTarget.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                ripple.className = "ripple-effect";
                ripple.style.width = ripple.style.height = size + "px";
                ripple.style.left = e.clientX - rect.left - size / 2 + "px";
                ripple.style.top = e.clientY - rect.top - size / 2 + "px";
                e.currentTarget.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
              }}
            >
              <div className="card-glow"></div>
              <div className="floating-elements">
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
                <div className="floating-shape"></div>
              </div>

              <div className="course-header">
                <h1 className="course-number">{course.number}</h1>
              </div>

              <h2 className="course-title">{course.title}</h2>

              <div className="lessons-container">
                {course.lessons.map((lesson, index) => (
                  <div
                    key={index}
                    className={`lesson-item ${
                      lesson.type === "highlighted" ? "highlighted" : ""
                    }`}
                  >
                    <div className="lesson-header">
                      <h3 className="lesson-title">{lesson.title}</h3>
                    </div>
                    <div className="lesson-meta">
                      <span className="lesson-number">{lesson.lesson}</span>
                      <span className="lesson-duration">{lesson.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PremiumCourseCards;
