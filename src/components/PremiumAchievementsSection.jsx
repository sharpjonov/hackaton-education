import React from 'react';

const PremiumAchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      icon: "👑",
      title: "Trusted by Thousands",
      description:
        "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
    },
    {
      id: 2,
      icon: "🏆",
      title: "Award-Winning Courses",
      description:
        "Our courses have received recognition and accolades in the industry for their quality and effectiveness.",
    },
    {
      id: 3,
      icon: "💬",
      title: "Positive Student Feedback",
      description:
        "We take pride in the positive feedback we receive from our students.",
    },
    {
      id: 4,
      icon: "🤝",
      title: "Industry Partnerships",
      description:
        "We have partnerships with industry leaders providing students access to real-world tools and knowledge.",
    },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headerSection}>
          <div style={styles.badge}>Our Success</div>
          <h2 style={styles.title}>Achievements</h2>
          <p style={styles.subtitle}>
            Our commitment to excellence has led us to achieve significant milestones along our journey.
          </p>
        </div>

        <div style={styles.grid}>
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              style={{
                ...styles.card,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div style={styles.iconWrapper}>
                <div style={styles.iconCircle}>
                  <span style={styles.icon}>{achievement.icon}</span>
                </div>
                <div style={styles.decorCircle}></div>
              </div>
              <h3 style={styles.cardTitle}>{achievement.title}</h3>
              <p style={styles.cardDesc}>{achievement.description}</p>
            </div>
          ))}
        </div>

        <div style={styles.ctaSection}>
          <div style={styles.ctaBackground}></div>
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>
              <span style={styles.highlight}>Together</span>, let's shape the future
            </h2>
            <p style={styles.ctaSubtitle}>
              Join us and unlock your potential in design and development.
            </p>
            <button style={styles.ctaButton}>
              <span style={styles.buttonText}>Join Now</span>
              <span style={styles.buttonArrow}>→</span>
            </button>

            <div style={styles.stats}>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>10K+</div>
                <div style={styles.statLabel}>Active Students</div>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>50+</div>
                <div style={styles.statLabel}>Expert Courses</div>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>98%</div>
                <div style={styles.statLabel}>Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    padding: "5rem 1.5rem",
    background: "linear-gradient(180deg, #ffffff 0%, #fff8f0 100%)",
    fontFamily: "'Poppins', sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  headerSection: {
    textAlign: "center",
    marginBottom: "4rem",
  },
  badge: {
    display: "inline-block",
    padding: "0.5rem 1.5rem",
    backgroundColor: "#fff",
    color: "#ff8c00",
    borderRadius: "50px",
    fontSize: "0.9rem",
    fontWeight: "600",
    marginBottom: "1.5rem",
    boxShadow: "0 4px 15px rgba(255, 140, 0, 0.2)",
    border: "2px solid #ff8c00",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    background: "linear-gradient(135deg, #ff8c00 0%, #ff6600 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.8",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    marginBottom: "5rem",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2.5rem 2rem",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    animation: "fadeInUp 0.6s ease-out forwards",
    border: "1px solid rgba(255, 140, 0, 0.1)",
  },
  iconWrapper: {
    position: "relative",
    display: "inline-block",
    marginBottom: "1.5rem",
  },
  iconCircle: {
    width: "90px",
    height: "90px",
    background: "linear-gradient(135deg, #ff9500 0%, #ff6600 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 2,
    boxShadow: "0 10px 30px rgba(255, 140, 0, 0.3)",
    transition: "all 0.4s ease",
  },
  decorCircle: {
    position: "absolute",
    top: "-5px",
    left: "-5px",
    right: "-5px",
    bottom: "-5px",
    borderRadius: "50%",
    border: "3px solid rgba(255, 140, 0, 0.2)",
    animation: "pulse 2s ease-in-out infinite",
  },
  icon: {
    fontSize: "2.5rem",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#222",
    transition: "color 0.3s ease",
  },
  cardDesc: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: "1.7",
  },
  ctaSection: {
    position: "relative",
    padding: "4rem 3rem",
    borderRadius: "30px",
    overflow: "hidden",
    textAlign: "center",
  },
  ctaBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, #ff9500 0%, #ff6600 100%)",
    opacity: 1,
    zIndex: 1,
  },
  ctaContent: {
    position: "relative",
    zIndex: 2,
  },
  ctaTitle: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#fff",
    textShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  highlight: {
    color: "#fff",
    fontWeight: "800",
    textShadow: "0 0 20px rgba(255,255,255,0.5)",
  },
  ctaSubtitle: {
    fontSize: "1.2rem",
    color: "rgba(255, 255, 255, 0.95)",
    marginBottom: "2.5rem",
    maxWidth: "600px",
    margin: "0 auto 2.5rem",
  },
  ctaButton: {
    padding: "1rem 3rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    backgroundColor: "#fff",
    color: "#ff8c00",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    position: "relative",
    overflow: "hidden",
  },
  buttonText: {
    position: "relative",
    zIndex: 2,
  },
  buttonArrow: {
    transition: "transform 0.3s ease",
    position: "relative",
    zIndex: 2,
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
    marginTop: "3.5rem",
    flexWrap: "wrap",
    padding: "2rem",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
  },
  statItem: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: "2.8rem",
    fontWeight: "800",
    color: "#fff",
    textShadow: "0 2px 10px rgba(0,0,0,0.2)",
    marginBottom: "0.5rem",
  },
  statLabel: {
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "500",
    letterSpacing: "0.5px",
  },
  statDivider: {
    width: "2px",
    height: "60px",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
};

export default PremiumAchievementsSection;