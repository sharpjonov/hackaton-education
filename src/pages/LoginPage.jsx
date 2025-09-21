import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Check,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Shield,
  Zap,
  Award,
} from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeTerms: false,
  });
  const [focusedField, setFocusedField] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const testimonials = [
    {
      text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      name: "Sarah L",
      role: "Web Developer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      text: "Amazing experience! The curriculum is well-structured and the projects are practical. I landed my dream job right after completing the course.",
      name: "John D",
      role: "Frontend Developer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      text: "Best investment I ever made! The mentorship and community support made all the difference in my learning journey.",
      name: "Emily R",
      role: "UI/UX Designer",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
    },
  ];

  const features = [
    { icon: Shield, text: "Secure Learning Platform", color: "#10b981" },
    { icon: Zap, text: "Interactive Lessons", color: "#3b82f6" },
    { icon: Award, text: "Industry Certification", color: "#f59e0b" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "password") {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 25;
    setPasswordStrength(strength);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Account created successfully!");
    }, 2000);
  };

  return (
    <div
      style={{ background: "#ffffff", minHeight: "100vh", padding: "40px 0" }}
    >
      <style>{`
        .floating-card {
          animation: floatCard 6s ease-in-out infinite;
        }
        
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .testimonial-card {
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(0);
          opacity: 1;
        }
        
        .testimonial-card.slide-out {
          transform: translateX(-100px);
          opacity: 0;
        }
        
        .testimonial-card.slide-in {
          transform: translateX(100px);
          opacity: 0;
        }
        
        .form-control-modern {
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 12px 15px 12px 45px;
          transition: all 0.3s ease;
          background: white;
          font-size: 16px;
        }
        
        .form-control-modern:focus {
          border-color: #f59e0b;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
          outline: none;
        }
        
        .input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          transition: color 0.3s ease;
        }
        
        .password-strength {
          height: 4px;
          background: #e5e7eb;
          border-radius: 2px;
          overflow: hidden;
          margin-top: 5px;
        }
        
        .password-strength-fill {
          height: 100%;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        
        .btn-gradient {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          padding: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(245, 158, 11, 0.4);
        }
        
        .btn-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-gradient:hover::before {
          left: 100%;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        }
        
        .feature-badge {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          padding: 8px 16px;
          margin: 5px;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .feature-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .star-rating {
          color: #fbbf24;
          filter: drop-shadow(0 0 3px rgba(251, 191, 36, 0.5));
        }
        
        .testimonial-quote {
          position: relative;
          padding: 20px;
        }
        
        .testimonial-quote::before {
          content: '"';
          position: absolute;
          top: -10px;
          left: 10px;
          font-size: 4rem;
          color: rgba(245, 158, 11, 0.2);
          font-family: serif;
        }
        
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #ffffff;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 8px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .social-btn {
          background: white;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          padding: 12px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
        }
        
        .social-btn:hover {
          border-color: #9ca3af;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
            gap: "40px",
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "15px",
                }}
              >
                Students Testimonials
              </h2>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                }}
              >
                Discover what our successful students say about their
                transformative learning experience with us.
              </p>
            </div>

            <div
              style={{
                marginBottom: "30px",
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {features.map((feature, index) => (
                <div key={index} className="feature-badge">
                  <feature.icon
                    size={16}
                    style={{ color: feature.color, marginRight: "8px" }}
                  />
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="glass-card testimonial-card floating-card"
              style={{ padding: "30px", marginBottom: "25px" }}
            >
              <div className="testimonial-quote">
                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.6",
                    color: "#374151",
                    marginBottom: "25px",
                    fontStyle: "italic",
                  }}
                >
                  {testimonials[currentTestimonial].text}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt="User"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        marginRight: "15px",
                        border: "3px solid #f59e0b",
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontWeight: "600",
                          color: "#1f2937",
                          fontSize: "1.1rem",
                        }}
                      >
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div style={{ color: "#6b7280", fontSize: "0.9rem" }}>
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="star-rating"
                          fill="currentColor"
                        />
                      )
                    )}
                  </div>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background:
                          index === currentTestimonial ? "#f59e0b" : "#d1d5db",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={prevTestimonial}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "12px",
                  padding: "12px",
                  color: "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.3)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.2)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  borderRadius: "12px",
                  padding: "12px",
                  color: "white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.3)";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.2)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div>
            <div className="glass-card" style={{ padding: "40px" }}>
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <h3
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: "#1f2937",
                    marginBottom: "10px",
                  }}
                >
                  Login
                </h3>
                <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>
                  Welcome back! Please log in to access your account.
                </p>
              </div>

              <div onSubmit={handleSubmit}>
                <div style={{ marginBottom: "25px" }}></div>

                <div style={{ marginBottom: "25px" }}>
                  <label
                    style={{
                      display: "block",
                      fontWeight: "600",
                      marginBottom: "8px",
                      color: "#374151",
                    }}
                  >
                    Email Address
                  </label>
                  <div style={{ position: "relative" }}>
                    <Mail
                      className="input-icon"
                      size={18}
                      style={{
                        color:
                          focusedField === "email" || formData.email
                            ? "#f59e0b"
                            : "#9ca3af",
                      }}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField("")}
                      className="form-control-modern"
                      placeholder="Enter your email address"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "25px" }}>
                  <label
                    style={{
                      display: "block",
                      fontWeight: "600",
                      marginBottom: "8px",
                      color: "#374151",
                    }}
                  >
                    Password
                  </label>
                  <div style={{ position: "relative" }}>
                    <Lock
                      className="input-icon"
                      size={18}
                      style={{
                        color:
                          focusedField === "password" || formData.password
                            ? "#f59e0b"
                            : "#9ca3af",
                      }}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("password")}
                      onBlur={() => setFocusedField("")}
                      className="form-control-modern"
                      placeholder="Create a strong password"
                      style={{ width: "100%", paddingRight: "50px" }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "none",
                        border: "none",
                        color: "#9ca3af",
                        cursor: "pointer",
                        padding: "0",
                      }}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {formData.password && (
                    <div>
                      <div className="password-strength">
                        <div
                          className="password-strength-fill"
                          style={{
                            width: `${passwordStrength}%`,
                            background:
                              passwordStrength < 50
                                ? "#ef4444"
                                : passwordStrength < 75
                                ? "#f59e0b"
                                : "#10b981",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          marginTop: "5px",
                          color: "#6b7280",
                        }}
                      >
                        Password strength:{" "}
                        {passwordStrength < 50
                          ? "Weak"
                          : passwordStrength < 75
                          ? "Medium"
                          : "Strong"}
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ marginBottom: "30px" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      style={{
                        marginRight: "10px",
                        marginTop: "3px",
                        accentColor: "#f59e0b",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        lineHeight: "1.5",
                      }}
                    >
                      Remember me{" "}
                    </span>
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !formData.agreeTerms}
                  className="btn-gradient"
                  style={{
                    width: "100%",
                    marginBottom: "25px",
                    opacity: !formData.agreeTerms ? 0.6 : 1,
                    cursor: !formData.agreeTerms ? "not-allowed" : "pointer",
                  }}
                >
                  {isLoading ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="spinner" />
                      Creating Account...
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Check size={18} style={{ marginRight: "8px" }} />
                      Create Account
                    </div>
                  )}
                </button>

                <div
                  style={{
                    textAlign: "center",
                    margin: "25px 0",
                    color: "#9ca3af",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: "#e5e7eb",
                    }}
                  />
                  <span
                    style={{
                      background: "white",
                      padding: "0 20px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    OR
                  </span>
                </div>

                <button
                  className="social-btn"
                  style={{ width: "100%", marginBottom: "25px" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    style={{ marginRight: "12px" }}
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>

                <div style={{ textAlign: "center" }}>
                  <span style={{ color: "#6b7280", fontSize: "15px" }}>
                    Already have an account?{" "}
                  </span>
                  <a
                    href="#"
                    style={{
                      color: "#f59e0b",
                      textDecoration: "none",
                      fontWeight: "600",
                    }}
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
