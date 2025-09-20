import { BsFillXCircleFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";

const PricingPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const [billing, setBilling] = useState("monthly");
  const faqData = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
      link: "Enrollment Process for Different Courses",
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer:
        "Our instructors provide dedicated guidance and resources to help you succeed throughout your learning journey.",
    },
    {
      question:
        "Are the courses self-paced or do they have specific start and end dates?",
      answer:
        "Most of our courses are self-paced, but some have specific schedules depending on the program.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Some advanced courses may require prior knowledge, which will be clearly mentioned in the course description.",
    },
    {
      question: "Can I download the course materials for offline access?",
      answer:
        "Yes, with a Pro or Business plan, you can download materials and access them offline anytime.",
    },
  ];
  return (
    <>
      <section className="pricing py-5 bg-light">
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
                Flexible <span className="text-warning">Pricing</span> Plans
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
                <h4 className="fw-semibold mb-3 text-dark">
                  Why Choose Our Plans?
                </h4>
                <ul className="list-unstyled m-0">
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-warning me-2"></i>
                    Affordable and transparent pricing
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-warning me-2"></i>
                    Cancel or switch plans anytime
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <i className="bi bi-check-circle-fill text-warning me-2"></i>
                    Perfect for individuals and teams
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="btn-group">
              <button
                className={`btn ${
                  billing === "monthly" ? "btn-warning text-white" : "btn-light"
                }`}
                onClick={() => setBilling("monthly")}
              >
                Monthly
              </button>
              <button
                className={`btn ${
                  billing === "yearly" ? "btn-warning text-white" : "btn-light"
                }`}
                onClick={() => setBilling("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-md-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">Free</h5>
                  <p className="card-text text-muted">
                    Basic features to get you started.
                  </p>
                  <h3 className="fw-bold">
                    $0<span className="fs-6 text-muted"> / {billing}</span>
                  </h3>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      <AiFillCheckCircle style={{ color: "grey" }} /> Access to
                      basic courses
                    </li>
                    <li>
                      <AiFillCheckCircle style={{ color: "grey" }} /> Limited
                      support
                    </li>
                    <li>
                      <BsFillXCircleFill style={{ color: "red" }} /> No
                      certificates
                    </li>
                    <li>
                      <BsFillXCircleFill style={{ color: "red" }} /> No offline
                      access
                    </li>
                  </ul>
                  <button className="btn btn-outline-warning w-100">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow border-2 border-warning">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">Premium</h5>
                  <p className="card-text text-muted">
                    For individuals who want to level up skills.
                  </p>
                  <h3 className="fw-bold">
                    {billing === "monthly" ? "$49" : "$299"}
                    <span className="fs-6 text-muted"> / {billing}</span>
                  </h3>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      <AiFillCheckCircle style={{ color: "#ff8c00" }} />{" "}
                      Unlimited course access
                    </li>
                    <li>
                      <AiFillCheckCircle style={{ color: "#ff8c00" }} />{" "}
                      Priority support
                    </li>
                    <li>
                      <AiFillCheckCircle style={{ color: "#ff8c00" }} />{" "}
                      Certificates included
                    </li>
                    <li>
                      <AiFillCheckCircle style={{ color: "#ff8c00" }} /> Offline
                      access
                    </li>
                  </ul>
                  <button className="btn btn-warning text-white w-100">
                    Upgrade Now
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">Pro</h5>
                  <p className="card-text text-muted">
                    For teams and organizations.
                  </p>
                  <h3 className="fw-bold">
                    {billing === "monthly" ? "$29" : "$99"}
                    <span className="fs-6 text-muted"> / {billing}</span>
                  </h3>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>
                      <AiFillCheckCircle style={{ color: "#ff8c00" }} /> Team
                      management tools
                    </li>
                    <li>
                      <AiFillCheckCircle style={{ color: "#ff8c00" }} /> Custom
                      reports
                    </li>
                    <li>
                      <AiFillCheckCircle style={{ color: "#ff8c00" }} />{" "}
                      Certificates included
                    </li>
                    <li>
                      <AiFillCheckCircle style={{ color: "#ff8c00" }} />{" "}
                      Priority support
                    </li>
                  </ul>
                  <button className="btn btn-outline-warning w-100">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h2 className="fw-bold">Frequently Asked Questions</h2>
              <p className="text-muted" style={{ width: "300px" }}>
                Still you have any questions? Contact our Team via{" "}
                <a
                  href="mailto:support@skillbridge.com"
                  className="text-warning text-decoration-none"
                >
                  support@skillbridge.com
                </a>
              </p>
              <button className="btn btn-outline-warning mt-2">
                See All FAQ's
              </button>
            </div>

            <div className="col-lg-8">
              <div className="list-group">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className="mb-3 border rounded p-3 shadow-sm"
                    style={{ background: "#fff" }}
                  >
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleFAQ(index)}
                    >
                      <h6 className="mb-0">{item.question}</h6>
                      {activeIndex === index ? (
                        <IoMdClose className="text-warning" size={20} />
                      ) : (
                        <BsPlusLg className="text-warning" size={20} />
                      )}
                    </div>

                    {activeIndex === index && (
                      <div className="mt-3">
                        <p className="text-muted mb-2">{item.answer}</p>
                        {item.link && (
                          <button className="btn btn-light border">
                            {item.link} <span className="ms-2">→</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
