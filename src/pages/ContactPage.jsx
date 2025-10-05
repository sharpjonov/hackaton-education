import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Send,
  User,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mblzkorv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",

        });
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please try again later.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      value: "support@skillbridge.com",
      description: "Send us your query anytime!",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 00000 00000",
      description: "Mon to Fri 9am to 6pm",
      color: "text-success",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Some Where in the World",
      description: "Come say hello at our office",
      color: "text-info",
    },
  ];

  const socialLinks = [
    { icon: Facebook, color: "btn-primary", label: "Facebook" },
    { icon: Twitter, color: "btn-info", label: "Twitter" },
    { icon: Linkedin, color: "btn-primary", label: "LinkedIn" },
  ];

  return (
    <div className="bg-white">
      <style>{`
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .form-control-modern {
          border: 2px solid #e9ecef;
          border-radius: 15px;
          padding: 12px 15px 12px 45px;
          transition: all 0.3s ease;
          background: white;
        }

        .form-control-modern:focus {
          border-color: #ffc107;
          box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
          transform: translateY(-2px);
        }

        .input-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 5;
          transition: color 0.3s ease;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #ffc107 0%, #ff8f00 100%);
        }

        .btn-gradient {
          background: linear-gradient(135deg, #ffc107 0%, #ff8f00 100%);
          border: none;
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .btn-gradient:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(255, 193, 7, 0.4);
        }

        .social-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 2px solid #e9ecef;
          background: white;
          color: #6c757d;
        }

        .social-btn:hover {
          transform: scale(1.1);
          border-color: #ffc107;
          color: #ffc107;
          box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
        }

        .pulse-animation {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 193, 7, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 193, 7, 0);
          }
        }

        .success-animation {
          animation: bounceIn 0.8s ease;
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

      <div
        className="container-fluid py-5"
        style={{

        }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3 floating-animation">
                Get In <span className="text-warning">Touch</span>
              </h1>
              <p className="lead text-muted mb-4">
                Have a question or want to work together? We'd love to hear from
                you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="d-flex align-items-center text-muted small">
                    <div
                      className="bg-success rounded-circle me-2 pulse-animation"
                      style={{ width: "8px", height: "8px" }}
                    ></div>
                    Quick Response
                  </div>
                </div>
                <div className="col-auto">
                  <div className="d-flex align-items-center text-muted small">
                    <div
                      className="bg-primary rounded-circle me-2 pulse-animation"
                      style={{
                        width: "8px",
                        height: "8px",
                        animationDelay: "0.5s",
                      }}
                    ></div>
                    Expert Support
                  </div>
                </div>
                <div className="col-auto">
                  <div className="d-flex align-items-center text-muted small">
                    <div
                      className="bg-warning rounded-circle me-2 pulse-animation"
                      style={{
                        width: "8px",
                        height: "8px",
                        animationDelay: "1s",
                      }}
                    ></div>
                    24/7 Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-8">
            <div
              className="card border-0 shadow-lg card-hover"
              style={{ borderRadius: "20px" }}
            >
              <div
                className="gradient-bg text-white p-4"
                style={{ borderRadius: "20px 20px 0 0" }}
              >
                <h3 className="h4 mb-2 d-flex align-items-center">
                  <MessageCircle className="me-2" size={24} />
                  Send us a Message
                </h3>
                <p className="mb-0 opacity-75">
                  Fill out the form below and we'll get back to you
                </p>
              </div>

              <div className="card-body p-4">
                {isSubmitted ? (
                  <div className="text-center py-5 success-animation">
                    <CheckCircle size={64} className="text-success mb-3" />
                    <h4 className="text-success mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-muted">
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-4">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label fw-semibold">
                          First Name
                        </label>
                        <div className="position-relative">
                          <User
                            className={`input-icon ${focusedField === "firstName" || formData.firstName
                              ? "text-warning"
                              : "text-muted"
                              }`}
                            size={18}
                          />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("firstName")}
                            onBlur={() => setFocusedField("")}
                            className="form-control form-control-modern"
                            placeholder="Enter First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">
                          Last Name
                        </label>
                        <div className="position-relative">
                          <User
                            className={`input-icon ${focusedField === "lastName" || formData.lastName
                              ? "text-warning"
                              : "text-muted"
                              }`}
                            size={18}
                          />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("lastName")}
                            onBlur={() => setFocusedField("")}
                            className="form-control form-control-modern"
                            placeholder="Enter Last Name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label className="form-label fw-semibold">Email</label>
                        <div className="position-relative">
                          <Mail
                            className={`input-icon ${focusedField === "email" || formData.email
                              ? "text-warning"
                              : "text-muted"
                              }`}
                            size={18}
                          />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField("")}
                            className="form-control form-control-modern"
                            placeholder="Enter your Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Phone</label>
                        <div className="position-relative">
                          <Phone
                            className={`input-icon ${focusedField === "phone" || formData.phone
                              ? "text-warning"
                              : "text-muted"
                              }`}
                            size={18}
                          />
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField("")}
                            className="form-control form-control-modern"
                            placeholder="Enter Phone Number"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField("")}
                        className="form-control form-control-modern"
                        placeholder="Enter your Subject"
                        style={{ paddingLeft: "15px" }}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField("")}
                        rows={5}
                        className="form-control form-control-modern"
                        placeholder="Enter your Message here..."
                        style={{ paddingLeft: "15px", resize: "none" }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-gradient text-white fw-semibold py-3 px-5 w-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="me-2" size={18} />
                          Send Your Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="row g-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="col-12">
                  <div
                    className="card border-0 shadow card-hover text-center h-100"
                    style={{ borderRadius: "15px" }}
                  >
                    <div className="card-body p-4">
                      <div
                        className={`d-inline-flex align-items-center justify-content-center rounded-circle mb-3 ${info.color}`}
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "rgba(255, 193, 7, 0.1)",
                        }}
                      >
                        <info.icon size={24} />
                      </div>
                      <h5 className="card-title fw-bold mb-2">{info.title}</h5>
                      <p className="card-text fw-semibold text-dark mb-1">
                        {info.value}
                      </p>
                      <p className="card-text text-muted small">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-12">
                <div
                  className="card border-0 shadow card-hover text-center"
                  style={{ borderRadius: "15px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid py-5 mt-5"

      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div
                className="card border-0 shadow-lg"
                style={{ borderRadius: "20px" }}
              >
                <div className="card-body p-5">
                  <h3 className="fw-bold mb-3">Ready to Get Started?</h3>
                  <p className="text-muted mb-4">
                    We're here to help you succeed. Don't hesitate to reach out!
                  </p>
                  <div className="row justify-content-center g-3">
                    <div className="col-auto">
                      <span className="badge bg-success rounded-pill px-3 py-2">
                        <i className="fas fa-check-circle me-1"></i>
                        Fast Response
                      </span>
                    </div>
                    <div className="col-auto">
                      <span className="badge bg-primary rounded-pill px-3 py-2">
                        <i className="fas fa-users me-1"></i>
                        Expert Team
                      </span>
                    </div>
                    <div className="col-auto">
                      <span className="badge bg-warning rounded-pill px-3 py-2">
                        <i className="fas fa-clock me-1"></i>
                        24/7 Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
