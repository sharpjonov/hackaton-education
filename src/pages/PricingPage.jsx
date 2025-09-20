import { BsFillXCircleFill } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FAQSection from "../components/FaqSection";

const PricingPage = () => {
  const [billing, setBilling] = useState("monthly");

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
      <FAQSection />
    </>
  );
};

export default PricingPage;
