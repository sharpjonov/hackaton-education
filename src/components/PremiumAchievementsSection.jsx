import { MdHandshake } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";

const PremiumAchievementsSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const achievements = [
    {
      id: 1,
      icon: <FaCrown style={{ color: "yellow" }} />,
      title: "Trusted by Thousands",
      description:
        "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      particles: 8,
      delay: 0.2,
    },
    {
      id: 2,
      icon: <FaTrophy style={{ color: "yellow" }} />,
      title: "Award-Winning Courses",
      description:
        "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      particles: 6,
      delay: 0.4,
    },
    {
      id: 3,
      icon: <AiFillMessage style={{ color: "wheat" }} />,
      title: "Positive Student Feedback",
      description:
        "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      particles: 10,
      delay: 0.6,
    },
    {
      id: 4,
      icon: <MdHandshake style={{ color: "yellow" }} />,
      title: "Industry Partnerships",
      description:
        "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      particles: 7,
      delay: 0.8,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards((prev) => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll(".achievement-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(
          0,
          Math.min(1, (window.innerHeight - rect.top) / window.innerHeight)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="premium-section">
      <style>{`
        .premium-section {
          min-height: 100vh;
            background: radial-gradient(
                circle at 20% 20%,
                rgba(255, 107, 53, 0.1) 0%,
                transparent 50%
                ),
                radial-gradient(
                circle at 80% 80%,
                rgba(74, 144, 226, 0.1) 0%,
                transparent 50%
                ),
                linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          overflow: hidden;
          padding: 6rem 2rem;
          font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .background-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 140, 0, 0.3) 0%,
            transparent 70%
          );
          animation: floatOrb 20s ease-in-out infinite;
          filter: blur(60px);
        }

        .floating-orb:nth-child(1) {
          width: 300px;
          height: 300px;
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        .floating-orb:nth-child(2) {
          width: 400px;
          height: 400px;
          top: 60%;
          right: -15%;
          animation-delay: -8s;
        }

        .floating-orb:nth-child(3) {
          width: 250px;
          height: 250px;
          top: 80%;
          left: 50%;
          animation-delay: -15s;
        }

        @keyframes floatOrb {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(30px, -50px) rotate(90deg);
          }
          50% {
            transform: translate(-20px, -30px) rotate(180deg);
          }
          75% {
            transform: translate(-40px, 20px) rotate(270deg);
          }
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(255, 140, 0, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(255, 140, 0, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 30s linear infinite;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
          position: relative;
          z-index: 10;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          color: transparent;
          background: linear-gradient(
            135deg,
            #ffffff 0%,
            #ffd700 50%,
            #ff8c00 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          margin: 0 0 1.5rem 0;
          letter-spacing: -0.02em;
          line-height: 1.1;
          transform: translateY(50px);
          opacity: 0;
          animation: titleSlideIn 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s
            forwards;
          position: relative;
        }

        .section-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #ff8c00, #ffd700);
          border-radius: 2px;
          animation: underlineExpand 1s ease-out 1.8s both;
        }

        @keyframes titleSlideIn {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes underlineExpand {
          from {
            width: 0;
          }
          to {
            width: 100px;
          }
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          transform: translateY(30px);
          opacity: 0;
          animation: subtitleSlideIn 1s ease-out 0.8s forwards;
        }

        @keyframes subtitleSlideIn {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        .achievement-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 32px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transform: translateY(100px) rotateX(15deg);
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          perspective: 1000px;
        }

        .achievement-card.visible {
          transform: translateY(0) rotateX(0deg);
          opacity: 1;
        }

        .achievement-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--card-gradient);
          opacity: 0;
          transition: opacity 0.5s ease;
          border-radius: 32px;
        }

        .achievement-card::after {
          content: "";
          position: absolute;
          inset: -2px;
          background: var(--card-gradient);
          border-radius: 34px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.5s ease;
          filter: blur(20px);
        }

        .achievement-card:hover::before,
        .achievement-card:hover::after {
          opacity: 0.1;
        }

        .achievement-card:hover {
          transform: translateY(-20px) scale(1.05);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.5),
            0 0 80px rgba(255, 140, 0, 0.2);
        }

        .card-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(255, 140, 0, 0.8);
          border-radius: 50%;
          animation: particleFloat 6s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(0);
            opacity: 0;
          }
          20% {
            transform: scale(1);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) translateX(50px) scale(0);
            opacity: 0;
          }
        }

        .achievement-icon {
          width: 120px;
          height: 120px;
          background: var(--card-gradient);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          margin-bottom: 2rem;
          position: relative;
          z-index: 2;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          animation: iconPulse 3s ease-in-out infinite;
        }

        @keyframes iconPulse {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
          50% {
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 30px 60px rgba(255, 140, 0, 0.4);
          }
        }

        .achievement-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin: 0 0 1.5rem 0;
          line-height: 1.3;
          position: relative;
          z-index: 2;
          background: linear-gradient(135deg, #ffffff, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .achievement-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin: 0;
          position: relative;
          z-index: 2;
        }

        .cta-section {
          margin-top: 8rem;
          padding: 4rem;
          background: linear-gradient(
            135deg,
            rgba(255, 140, 0, 0.1) 0%,
            rgba(255, 69, 0, 0.05) 100%
          );
          border-radius: 40px;
          border: 1px solid rgba(255, 140, 0, 0.2);
          text-align: center;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(20px);
        }

        .cta-section::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            transparent,
            rgba(255, 140, 0, 0.1),
            transparent
          );
          animation: rotateConic 20s linear infinite;
          border-radius: 50%;
        }

        @keyframes rotateConic {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin: 0 0 1.5rem 0;
          line-height: 1.2;
        }

        .cta-title .highlight {
          color: #ff8c00;
          position: relative;
        }

        .cta-title .highlight::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #ff8c00, #ffd700, #ff8c00);
          border-radius: 2px;
          animation: highlightShimmer 2s ease-in-out infinite;
        }

        @keyframes highlightShimmer {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        .cta-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 3rem 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 4rem;
          background: linear-gradient(135deg, #ff8c00 0%, #ffd700 100%);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 40px rgba(255, 140, 0, 0.3);
        }

        .cta-button::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #ffd700 0%, #ff8c00 100%);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }

        .cta-button:hover::before {
          transform: translateX(0);
        }

        .cta-button:hover {
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 30px 60px rgba(255, 140, 0, 0.5);
        }

        .button-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .button-icon {
          width: 24px;
          height: 24px;
          transition: transform 0.3s ease;
        }

        .cta-button:hover .button-icon {
          transform: translateX(5px);
        }

        .stats-container {
          display: flex;
          justify-content: center;
          gap: 4rem;
          margin-top: 4rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          animation: statFadeIn 1s ease-out forwards;
        }

        .stat-item:nth-child(1) {
          animation-delay: 0.2s;
        }
        .stat-item:nth-child(2) {
          animation-delay: 0.4s;
        }
        .stat-item:nth-child(3) {
          animation-delay: 0.6s;
        }

        @keyframes statFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          color: #ff8c00;
          margin: 0;
          line-height: 1;
          position: relative;
        }

        .stat-number::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(255, 140, 0, 0.2) 0%,
            transparent 70%
          );
          border-radius: 50%;
          animation: statGlow 2s ease-in-out infinite;
        }

        @keyframes statGlow {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
          }
        }

        .stat-label {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 0.5rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
          }

          .cta-title {
            font-size: 2.5rem;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .achievement-card {
            padding: 2rem;
          }

          .cta-section {
            padding: 3rem 2rem;
            margin-top: 4rem;
          }

          .stats-container {
            gap: 2rem;
          }
        }
      `}</style>

      <div className="background-elements">
        <div className="grid-pattern" />
        <div className="floating-orb" />
        <div className="floating-orb" />
        <div className="floating-orb" />
      </div>

      <div className="section-header">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div
            key={achievement.id}
            className={`achievement-card ${
              visibleCards.includes(achievement.id) ? "visible" : ""
            }`}
            data-card-id={achievement.id}
            style={{
              "--card-gradient": achievement.gradient,
              animationDelay: `${achievement.delay}s`,
            }}
            onMouseEnter={() => setActiveCard(achievement.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-particles">
              {Array.from({ length: achievement.particles }).map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 6}s`,
                    animationDuration: `${6 + Math.random() * 4}s`,
                  }}
                />
              ))}
            </div>

            <div className="achievement-icon">{achievement.icon}</div>

            <h3 className="achievement-title">{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title text-white">
            <span className="highlight">Together</span>, let's shape the future
            of digital innovation
          </h2>
          <p className="cta-subtitle">
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>

          <button className="cta-button">
            <div className="button-content">
              <span>Join Now</span>
              <div className="button-icon">→</div>
            </div>
          </button>

          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Courses</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumAchievementsSection;
