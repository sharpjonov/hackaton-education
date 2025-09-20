import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Log1 from "../assets/Log1.svg";
import Log2 from "../assets/Log2.svg";
import Log3 from "../assets/Log3.svg";
import Log4 from "../assets/Log4.svg";
import Log5 from "../assets/Log5.svg";
import Log6 from "../assets/Log6.svg";
import Log7 from "../assets/Log7.svg";

import Img1 from "../assets/Img1.svg";
import Img2 from "../assets/Img2.svg";
import Img3 from "../assets/Img3.svg";
import Img4 from "../assets/Img4.svg";
import Img5 from "../assets/Img5.svg";
import Img6 from "../assets/Img6.svg";

import Sara from "../assets/Sara.svg";
import Jason from "../assets/Jason.svg";
import Emily from "../assets/Emily.svg";
import Michael from "../assets/Michael.svg";

function HeroSection() {
  const location = useLocation();

  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [showAllTestimonials, setShowAllTestimonials] = useState(false);

  const allBenefits = [
    {
      number: "01",
      title: "Flexible Learning Schedule",
      desc: "Fit your coursework around your existing commitments and obligations.",
    },
    {
      number: "02",
      title: "Expert Instruction",
      desc: "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      number: "03",
      title: "Diverse Course Offerings",
      desc: "Explore a wide range of design and development courses covering various topics.",
    },
    {
      number: "04",
      title: "Updated Curriculum",
      desc: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      number: "05",
      title: "Practical Projects and Assignments",
      desc: "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      number: "06",
      title: "Interactive Learning Environment",
      desc: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
    {
      number: "07",
      title: "Career Support",
      desc: "Get guidance on career paths, resumes, and interviews.",
    },
    {
      number: "08",
      title: "Certification",
      desc: "Receive a certificate after course completion to boost your resume.",
    },
    {
      number: "09",
      title: "Affordable Pricing",
      desc: "Access high-quality courses without breaking the bank.",
    },
    {
      number: "10",
      title: "Real-World Examples",
      desc: "Understand concepts better through real-life case studies.",
    },
    {
      number: "11",
      title: "Peer Feedback",
      desc: "Improve through constructive feedback from classmates.",
    },
    {
      number: "12",
      title: "Lifetime Access",
      desc: "Access your course materials anytime, even after completion.",
    },
  ];

  const courses = [
    {
      title: "Web Design Fundamentals",
      duration: "4 Weeks",
      level: "Beginner",
      author: "John Smith",
      image: Img1,
      description:
        "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles.",
    },
    {
      title: "Advanced JavaScript",
      duration: "6 Weeks",
      level: "Intermediate",
      author: "Jane Doe",
      image: Img2,
      description:
        "Master JavaScript concepts such as closures, async/await, and design patterns for scalable apps.",
    },
    {
      title: "UI/UX Design Mastery",
      duration: "8 Weeks",
      level: "Advanced",
      author: "Ali Karimov",
      image: Img3,
      description:
        "Design user interfaces that are both beautiful and intuitive using Figma, Sketch, and real case studies.",
    },
    {
      title: "React for Beginners",
      duration: "5 Weeks",
      level: "Beginner",
      author: "Sara Aliyeva",
      image: Img4,
      description:
        "Start building interactive web apps with React — from components to hooks and JSX.",
    },
    {
      title: "Backend with Node.js",
      duration: "7 Weeks",
      level: "Intermediate",
      author: "Daniel O'Connor",
      image: Img5,
      description:
        "Build fast, scalable backend systems with Node.js, Express, and MongoDB.",
    },
    {
      title: "Fullstack Web Development",
      duration: "10 Weeks",
      level: "Advanced",
      author: "Nodira Ergasheva",
      image: Img6,
      description:
        "Become a fullstack developer by mastering both frontend and backend with real-world projects.",
    },
  ];

  const testimonials = [
    {
      text: "This course changed my life. I went from knowing nothing to landing my first job in just 3 months!",
      name: "Sarah L.",
      role: "Frontend Developer",
      image: Sara,
    },
    {
      text: "The instructors were very helpful and the course content was up to date with real-world examples.",
      name: "Mike D.",
      role: "UI/UX Designer",
      image: Jason,
    },
    {
      text: "I loved the flexibility of the learning schedule and the support I got from the community.",
      name: "Elena K.",
      role: "Fullstack Developer",
      image: Emily,
    },
    {
      text: "The hands-on projects and feedback really helped me improve my skills fast!",
      name: "Alex B.",
      role: "Backend Engineer",
      image: Michael,
    },
    {
      text: "Thanks to this platform, I created my first portfolio and got freelance work immediately.",
      name: "Layla M.",
      role: "Freelance Designer",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      text: "Their mentorship was outstanding. They helped me prepare for interviews and ace them confidently.",
      name: "David T.",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      text: "I'm impressed with the depth and structure of each course. Every topic was clearly explained.",
      name: "Alina V.",
      role: "UX Researcher",
      image: "https://randomuser.me/api/portraits/women/27.jpg",
    },
    {
      text: "Super helpful support and a great community. I didn't feel alone during my learning journey.",
      name: "Rashid H.",
      role: "Junior Developer",
      image: "https://randomuser.me/api/portraits/men/24.jpg",
    },
  ];

  const handleViewAllBenefits = () => setVisibleCount((prev) => prev + 6);
  const handleHideAllBenefits = () => setVisibleCount(6);

  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleGetStarted = (planType) => {
    setSelectedPlan(planType);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  const [openAccordion, setOpenAccordion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      id: 2,
      question: "Enrollment Process for Different Courses",
      answer:
        "Our enrollment process is simple and straightforward. Choose your desired course, select your plan, complete the registration form, and start learning immediately. Each course has its own dedicated dashboard where you can track your progress.",
    },
    {
      id: 3,
      question: "What kind of support can I expect from instructors?",
      answer:
        "Our instructors provide comprehensive support including live Q&A sessions, personalized feedback on assignments, discussion forums, and one-on-one mentoring sessions for Pro Plan members. You'll never feel alone in your learning journey.",
    },
    {
      id: 4,
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
      answer:
        "Most of our courses are self-paced, allowing you to learn at your own schedule. However, some advanced courses have cohort-based learning with specific start dates to facilitate group discussions and collaborative projects.",
    },
    {
      id: 5,
      question: "Are there any prerequisites for the courses?",
      answer:
        "Prerequisites vary by course complexity. Beginner courses have no prerequisites, while intermediate and advanced courses may require foundational knowledge. Each course page clearly lists any required skills or previous experience needed.",
    },
    {
      id: 6,
      question: "Can I download the course materials for offline access?",
      answer:
        "Yes! Pro Plan members can download video lectures, PDFs, and other course materials for offline access. Free Plan members have limited download options but can access most content online anytime.",
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleSeeAllFAQs = () => {
    setShowModal(true);
  };

  return (
    <>
      <section className="text-center py-5 bg-light mb-5 bg-white">
        <div className="d-inline-flex align-items-center px-3 py-2 rounded">
          <div
            className="d-flex justify-content-center align-items-center rounded-circle me-2"
            style={{
              width: "32px",
              height: "32px",
            }}
          >
            <span role="img" aria-label="flash">
              ⚡️
            </span>
          </div>
          <h2 className="m-0 fw-bold">
            <span style={{ color: "#FFA500" }}>Unlock</span>{" "}
            <span style={{ color: "#212529" }}>Your Creative Potential</span>
          </h2>
        </div>
        <h4 className="mt-4 fw-semibold">
          with Online Design and Development Courses.
        </h4>
        <p className="text-muted mb-4">
          Learn from Industry Experts and Enhance Your Skills.
        </p>

        <div className="mt-3 d-flex gap-3 justify-content-center flex-wrap">
          <button className="btn btn-warning text-white">
            Explore Courses
          </button>
          <button className={"btn btn-warning text-white"}>View Pricing</button>
        </div>
      </section>
      <section className="py-4 overflow-hidden container">
        <div className="logo-track d-flex align-items-center">
          {[...Array(2)].map((_, i) => (
            <div className="d-flex" key={i}>
              {[Log1, Log2, Log3, Log4, Log5, Log6, Log7].map((logo, j) => (
                <img
                  key={j}
                  src={logo}
                  alt={`Logo ${j}`}
                  className="mx-4 logo-img"
                />
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <div style={{ maxWidth: "600px" }}>
            <h2 className="fw-bold">Benefits</h2>
            <p className="text-muted">
              Learn design and development from scratch with real-world use
              cases and expert mentors.
            </p>
          </div>
          <div className="mt-3 mt-md-0 d-flex gap-2">
            {visibleCount < allBenefits.length && (
              <button
                onClick={handleViewAllBenefits}
                className="btn btn-outline-primary"
              >
                View All
              </button>
            )}
            {visibleCount > 6 && (
              <button
                onClick={handleHideAllBenefits}
                className="btn btn-outline-danger"
              >
                Hide All
              </button>
            )}
          </div>
        </div>

        <div className="row g-4">
          {allBenefits.slice(0, visibleCount).map(({ number, title, desc }) => (
            <div key={number} className="col-12 col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <span className="d-block text-warning fw-bold">{number}</span>
                <h5 className="mt-2">{title}</h5>
                <p className="text-muted">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {(location.pathname === "/" || location.pathname === "/explore") && (
        <section className="container py-5">
          <h2 className="fw-bold text-center mb-4">Available Courses</h2>
          <div className="row g-4">
            {courses.map((course, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={course.image}
                    className="card-img-top"
                    alt={course.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="text-muted mb-1">
                      <strong>Duration:</strong> {course.duration}
                    </p>
                    <p className="text-muted mb-1">
                      <strong>Level:</strong> {course.level}
                    </p>
                    <p className="text-muted mb-2">
                      <strong>Instructor:</strong> {course.author}
                    </p>
                    <p className="card-text">{course.description}</p>
                  </div>
                  <div className="card-footer bg-transparent">
                    <button
                      className="btn btn-warning w-100 text-white"
                      onClick={() => handleGetItNow(course)}
                    >
                      Get it Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {showModal && selectedCourse && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content rounded-4 shadow">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title fs-4">
                  🎉 <span className="text-success">Congratulations!</span>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body text-center py-4">
                <p className="fs-5 mb-3">
                  <strong className="text-primary">
                    {selectedCourse.title}
                  </strong>{" "}
                  kursiga muvaffaqiyatli ro'yxatdan o'tdingiz!
                </p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                  alt="success check"
                  width="80"
                  height="80"
                />
              </div>
              <div className="modal-footer border-0 pt-0 justify-content-center">
                <button
                  className="btn btn-outline-secondary px-4"
                  onClick={handleCloseModal}
                >
                  Yopish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold text-dark mb-3">Our Testimonials</h2>
            <p className="text-muted mb-0" style={{ maxWidth: "600px" }}>
              See how our courses have helped others achieve their goals.
            </p>
          </div>
          <div>
            <button
              className="btn btn-outline-primary"
              onClick={() => setShowAllTestimonials((prev) => !prev)}
            >
              {showAllTestimonials ? "Hide" : "View All"}
            </button>
          </div>
        </div>

        <div className="row g-4">
          {(showAllTestimonials ? testimonials : testimonials.slice(0, 4)).map(
            (testimonial, index) => (
              <div className="col-md-6" key={index}>
                <div className="card border-0 shadow p-4 h-100">
                  <p className="text-muted lh-lg">{testimonial.text}</p>
                  <div className="d-flex align-items-center mt-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <div>
                      <h6 className="mb-0 fw-semibold">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-start mb-5">
          <div style={{ maxWidth: "600px" }}>
            <h2 className="fw-bold text-dark mb-3">Our Pricing</h2>
            <p className="text-muted mb-0">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <div className="d-flex bg-light rounded p-1">
            <button
              className={`btn px-3 py-2 ${
                isMonthly ? "btn-warning text-white" : "btn-light text-dark"
              }`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
            <button
              className={`btn px-3 py-2 ${
                !isMonthly ? "btn-warning text-white" : "btn-light text-dark"
              }`}
              onClick={() => setIsMonthly(false)}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div
              className="card border-0 shadow-sm h-100"
              style={{ backgroundColor: "#F8F9FA" }}
            >
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <h5 className="fw-semibold mb-3">Free Plan</h5>
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <span className="fs-1 fw-bold">$0</span>
                    <span className="text-muted ms-1">
                      /{isMonthly ? "month" : "year"}
                    </span>
                  </div>
                </div>

                <h6 className="fw-semibold mb-3">Available Features</h6>

                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-success me-2 mt-1">✓</i>
                    <span className="text-muted">
                      Access to selected free courses.
                    </span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-success me-2 mt-1">✓</i>
                    <span className="text-muted">
                      Limited course materials and resources.
                    </span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-success me-2 mt-1">✓</i>
                    <span className="text-muted">Basic community support.</span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-success me-2 mt-1">✓</i>
                    <span className="text-muted">
                      No certification upon completion.
                    </span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-success me-2 mt-1">✓</i>
                    <span className="text-muted">Ad-supported platform.</span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-danger me-2 mt-1">✗</i>
                    <span className="text-muted">
                      Access to exclusive Pro Plan community forums.
                    </span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-danger me-2 mt-1">✗</i>
                    <span className="text-muted">
                      Early access to new courses and updates.
                    </span>
                  </div>
                </div>

                <button
                  className="btn btn-warning w-100 text-white"
                  onClick={() => handleGetStarted("Free")}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div
              className="card border-0 shadow-sm h-100"
              style={{ backgroundColor: "#F8F9FA" }}
            >
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <h5 className="fw-semibold mb-3">Pro Plan</h5>
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <span className="fs-1 fw-bold">
                      ${isMonthly ? "79" : "790"}
                    </span>
                    <span className="text-muted ms-1">
                      /{isMonthly ? "month" : "year"}
                    </span>
                  </div>
                </div>

                <h6 className="fw-semibold mb-3">Available Features</h6>

                <div className="mb-4">
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-success me-2 mt-1">✓</i>
                    <span className="text-muted">
                      Unlimited access to all courses.
                    </span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-success me-2 mt-1">✓</i>
                    <span className="text-muted">
                      Unlimited course materials and resources.
                    </span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-success me-2 mt-1">✓</i>
                    <span className="text-muted">
                      Priority support from instructors.
                    </span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-success me-2 mt-1">✓</i>
                    <span className="text-muted">
                      Course completion certificates.
                    </span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-success me-2 mt-1">✓</i>
                    <span className="text-muted">Ad-free experience.</span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-success me-2 mt-1">✓</i>
                    <span className="text-muted">
                      Access to exclusive Pro Plan community forums.
                    </span>
                  </div>
                  <div className="d-flex align-items-start mb-3">
                    <i className="text-success me-2 mt-1">✓</i>
                    <span className="text-muted">
                      Early access to new courses and updates.
                    </span>
                  </div>
                </div>

                <button
                  className="btn btn-warning w-100 text-white"
                  onClick={() => handleGetStarted("Pro")}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        {showModal && selectedPlan && (
          <div
            className="modal d-block"
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            onClick={handleCloseModal}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-lg"
              role="document"
            >
              <div
                className="modal-content rounded-4 shadow"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fs-4">
                    {selectedPlan === "Free" ? "🆓" : "💎"}
                    <span
                      className={
                        selectedPlan === "Free"
                          ? "text-success"
                          : "text-primary"
                      }
                    >
                      {selectedPlan === "Free"
                        ? " Welcome to Free Plan!"
                        : " Welcome to Pro Plan!"}
                    </span>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body text-center py-4">
                  {selectedPlan === "Free" ? (
                    <div>
                      <p className="fs-5 mb-3">
                        <strong className="text-success">Free Plan</strong>ga
                        muvaffaqiyatli ro'yxatdan o'tdingiz!
                      </p>
                      <p className="text-muted mb-3">
                        Endi siz tanlangan bepul kurslarga kirishingiz mumkin.
                      </p>
                      <div
                        className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "80px" }}
                      >
                        <span className="text-white fs-2">✓</span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="fs-5 mb-3">
                        <strong className="text-primary">Pro Plan</strong>ga
                        muvaffaqiyatli ro'yxatdan o'tdingiz!
                      </p>
                      <p className="text-muted mb-3">
                        Endi sizda barcha kurslarga cheksiz kirish imkoniyati
                        bor!
                      </p>
                      <div className="mb-3">
                        <span className="fs-4 fw-bold text-primary">
                          ${isMonthly ? "79" : "790"}/{isMonthly ? "oy" : "yil"}
                        </span>
                      </div>
                      <div
                        className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "80px" }}
                      >
                        <span className="text-white fs-2">★</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="modal-footer border-0 pt-0 justify-content-center">
                  <button
                    className="btn btn-outline-secondary px-4"
                    onClick={handleCloseModal}
                  >
                    Yopish
                  </button>
                  <button
                    className="btn btn-warning text-white px-4"
                    onClick={handleCloseModal}
                  >
                    Davom etish
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h2 className="fw-bold text-dark mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted mb-4">
              Still you have any questions? Contact our Team via
              support@skillbridge.com
            </p>
            <button
              className="btn btn-outline-warning px-4 btn-see"
              onClick={handleSeeAllFAQs}
            >
              See All FAQ's
            </button>
          </div>

          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {faqData.map((faq) => (
                <div key={faq.id} className="accordion-item border-0 mb-3">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        openAccordion === faq.id ? "" : "collapsed"
                      } bg-white border rounded shadow-sm`}
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      style={{
                        boxShadow:
                          openAccordion === faq.id
                            ? "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)"
                            : "none",
                      }}
                    >
                      <span className="fw-medium">{faq.question}</span>
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      openAccordion === faq.id ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body bg-light rounded-bottom p-4">
                      <p className="text-muted mb-0 lh-lg">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {showModal && (
          <div
            className="modal d-block"
            tabIndex="-1"
            role="dialog"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            onClick={handleCloseModal}
          >
            <div
              className="modal-dialog modal-dialog-centered modal-xl"
              role="document"
            >
              <div
                className="modal-content rounded-4 shadow"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header border-0 pb-0">
                  <h5 className="modal-title fs-4">
                    📋{" "}
                    <span className="text-primary">
                      All Frequently Asked Questions
                    </span>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div
                  className="modal-body py-4"
                  style={{ maxHeight: "70vh", overflowY: "auto" }}
                >
                  <div className="row g-4">
                    {faqData
                      .concat([
                        {
                          id: 7,
                          question:
                            "Do you offer certificates upon course completion?",
                          answer:
                            "Yes, we provide certificates of completion for all our courses. Pro Plan members receive verified certificates that can be shared on LinkedIn and added to professional portfolios.",
                        },
                        {
                          id: 8,
                          question: "What is your refund policy?",
                          answer:
                            "We offer a 30-day money-back guarantee for all paid courses. If you're not satisfied with your learning experience, you can request a full refund within 30 days of enrollment.",
                        },
                        {
                          id: 9,
                          question:
                            "Can I switch from Free to Pro Plan anytime?",
                          answer:
                            "Absolutely! You can upgrade to Pro Plan at any time. Your learning progress will be preserved, and you'll immediately gain access to all Pro features and content.",
                        },
                        {
                          id: 10,
                          question:
                            "Are there any age restrictions for enrollment?",
                          answer:
                            "Our courses are designed for learners aged 16 and above. Minors (under 18) need parental consent for enrollment. Most of our content is suitable for professional development and career advancement.",
                        },
                        {
                          id: 11,
                          question: "Do you provide job placement assistance?",
                          answer:
                            "Pro Plan members have access to our career services including resume review, interview preparation, job search strategies, and connections to our partner companies actively hiring our graduates.",
                        },
                        {
                          id: 12,
                          question: "How often is the course content updated?",
                          answer:
                            "We regularly update our course content to reflect industry trends and technological advances. Major updates occur quarterly, while minor improvements and additions happen monthly based on student feedback and industry changes.",
                        },
                      ])
                      .map((faq) => (
                        <div key={faq.id} className="col-md-6">
                          <div className="card h-100 border-0 bg-light">
                            <div className="card-body p-4">
                              <h6 className="card-title fw-semibold mb-3 text-primary">
                                {faq.question}
                              </h6>
                              <p className="card-text text-muted lh-lg">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="text-center mt-5 p-4 bg-warning bg-opacity-10 rounded">
                    <h5 className="text-warning mb-2">Still have questions?</h5>
                    <p className="text-muted mb-3">
                      Our support team is here to help you 24/7
                    </p>
                    <a
                      href="mailto:support@skillbridge.com"
                      className="btn btn-warning text-white"
                    >
                      Contact Support
                    </a>
                  </div>
                </div>
                <div className="modal-footer border-0 pt-0 justify-content-center">
                  <button
                    className="btn btn-outline-secondary px-4"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default HeroSection;
