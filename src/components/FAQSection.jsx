import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";

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

const FAQSectionn = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
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
  );
};

export default FAQSectionn;
