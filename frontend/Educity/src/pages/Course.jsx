import React from "react";
import { Link } from "react-router-dom";
import "./Course.css";
// import assets from "../assets/asset";

const courses = [
  {
    id: "upsc",
    title: "UPSC Exam Preparation",
    image: "/assets/upsc.avif",
    description:
      "Master Indian Polity, Economy, and History with expert guidance and structured content.",
  },
  {
    id: "jee",
    title: "JEE Exam Preparation",
    image: "/assets/jee.avif",
    description:
      "Crack JEE with in-depth lessons on Physics, Chemistry, and Mathematics.",
  },
  {
    id: "neet",
    title: "NEET Exam Preparation",
    image: "/assets/neet.webp",
    description:
      "Prepare for NEET with expert Biology, Chemistry, and Physics lessons.",
  },
  {
    id: "cat",
    title: "CAT Exam Preparation",
    image: "/assets/cat.jpg",
    description:
      "Boost your aptitude with Quantitative, Verbal, and Logical Reasoning.",
  },
  {
    id: "gre",
    title: "GRE Exam Preparation",
    image: "/assets/gre.jpg",
    description:
      "Master Analytical Writing, Verbal, and Quantitative Reasoning for the GRE.",
  },
];

const Course = () => {
  return (
    <div className="course-container">
      <h1 className="course-title">Explore Our Courses</h1>
      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <h2 className="course-name">{course.title}</h2>
            <p className="course-desc">{course.description}</p>
            <Link to={`/courses/${course.id}`} className="course-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
