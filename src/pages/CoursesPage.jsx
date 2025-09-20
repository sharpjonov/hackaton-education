import React from "react";

import image1_1 from "../assets/Image2.png";
import image1_2 from "../assets/Image3.png";
import image1_3 from "../assets/Image4.png";

import image2_1 from "../assets/Image (6).png";
import image2_2 from "../assets/Image (7).png";
import image2_3 from "../assets/Image (8).png";

import image3_1 from "../assets/Image (10).png";
import image3_2 from "../assets/Image (11).png";
import image3_3 from "../assets/Image (12).png";

import image4_1 from "../assets/Image (13).png";
import image4_2 from "../assets/Image (14).png";
import image4_3 from "../assets/Image (15).png";

import image5_1 from "../assets/Image (16).png";
import image5_2 from "../assets/Image (17).png";
import image5_3 from "../assets/Image (18).png";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Web Design Fundamentals",
    description:
      "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    images: [image1_1, image1_2, image1_3],
    duration: "4 Weeks",
    level: "Beginners",
    author: "John Smith",
    curriculum: [
      "Introduction to HTML",
      "Styling with CSS",
      "Introduction to Responsive Design",
      "Design Principles for Web",
      "Building a Basic Website",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    images: [image2_1, image2_2, image2_3],
    duration: "6 Weeks",
    level: "Intermediate",
    author: "Emily Johnson",
    curriculum: [
      "Introduction to UI/UX Design",
      "User Research and Personas",
      "Wireframing and Prototyping",
      "Visual Design and Branding",
      "Usability Testing and Iteration",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    images: [image3_1, image3_2, image3_3],
    duration: "8 Weeks",
    level: "Intermediate",
    author: "David Brown",
    curriculum: [
      "Introduction to Mobile App Development",
      "Fundamentals of Swift Programming (iOS)",
      "Fundamentals of Kotlin Programming (Android)",
      "Building User Interfaces",
      "App Deployment and Testing",
    ],
  },
  {
    title: "Graphic Design for Beginners",
    description:
      "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    images: [image4_1, image4_2, image4_3],
    duration: "10 Weeks",
    level: "Beginner",
    author: "Sarah Thompson",
    curriculum: [
      "Introduction to Graphic Design",
      "Typography and Color Theory",
      "Layout Design and Composition",
      "Image Editing and Manipulation",
      "Designing for Print and Digital Media",
    ],
  },
  {
    title: "Front-End Web Development",
    description:
      "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    images: [image5_1, image5_2, image5_3],
    duration: "10 Weeks",
    level: "Intermediate",
    author: "Michael Adams",
    curriculum: [
      "HTML Fundamentals",
      "CSS Styling and Layouts",
      "JavaScript Basics",
      "Building Responsive Websites",
      "Introduction to Bootstrap and React",
    ],
  },
];

const CoursesPage = () => {
  return (
    <div className="container my-5">
      {courses.map((course, index) => (
        <div key={index} className="p-5 mb-5 bg-light rounded shadow">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold mb-1">{course.title}</h5>
              <p className="text-muted mb-0" style={{ maxWidth: "600px" }}>
                {course.description}
              </p>
            </div>
            <button className="border-0 bg-light">
              <Link
                className="text-decoration-none text-dark"
                to="/courses/information"
              >
                View Course
              </Link>
            </button>
          </div>

          <div
            className="d-flex gap-3 mb-3 justify-content-center"
            style={{ maxWidth: "960px", margin: "0 auto" }}
          >
            {course.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`design ${idx + 1}`}
                className="rounded"
                style={{
                  width: "390px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>

          <div className="mt-3 d-flex justify-content-between">
            <ul className="list-unstyled d-flex gap-3">
              <li>
                <button className="btn">{course.duration}</button>
              </li>
              <li>
                <button className="btn">{course.level}</button>
              </li>
            </ul>
            <h4>By {course.author}</h4>
          </div>

          <div className="border rounded p-3 bg-white">
            <h3 className="fw-bold mb-3">Curriculum</h3>
            <div className="d-flex justify-content-center">
              <ul className="d-flex gap-3 justify-content-start list-unstyled flex-nowrap overflow-auto">
                {course.curriculum.map((item, idx) => (
                  <li key={idx} className=" px-5 py-3 rounded mb-2 border">
                    <div>
                      <div className="fs-1 fw-bold">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div>{item}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
