import React from "react";
import PremiumAchievementsSection from "../components/PremiumAchievementsSection";

const AboutUsPage = () => {
  return (
    <section>
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
              About <span className="text-warning">Skillbridge</span>
            </h1>
          </div>

          <div className="col-lg-6">
            <div
              className="bg-white shadow rounded p-4 border-start border-4 border-warning"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <p className="text-muted">
                Welcome to our platform, where we are passionate about
                empowering individuals to master the world of design and
                development. We offer a wide range of online courses designed to
                equip learners with the skills and knowledge needed to succeed
                in the ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
      <PremiumAchievementsSection />
    </section>
  );
};

export default AboutUsPage;
