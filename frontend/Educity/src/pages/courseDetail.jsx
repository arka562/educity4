import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CourseDetail.css";

const courseDetails = {
  upsc: {
    title: "UPSC Exam Preparation",
    image: "/assets/upsc.avif",
    description:
      "Master Indian Polity, Economy, and History with expert guidance and structured content.",
    keyPoints: [
      "Covers Prelims, Mains, and Interview preparation.",
      "Detailed notes on Indian Polity, Economy, History, and General Studies.",
      "Includes current affairs discussions and answer writing practice.",
      "Regular mock tests and quizzes with performance analysis.",
      "Expert mentorship and guidance from top educators.",
    ],
    quizzes:
      "Includes weekly quizzes, subject-wise tests, and a full-length mock exam.",
  },
  jee: {
    title: "JEE Exam Preparation",
    image: "/assets/jee.avif",
    description:
      "Crack JEE with in-depth lessons on Physics, Chemistry, and Mathematics.",
    keyPoints: [
      "Covers JEE Mains & Advanced syllabus with conceptual clarity.",
      "Video lectures, solved examples, and step-by-step problem-solving.",
      "Extensive question banks, mock tests, and time management strategies.",
      "Previous years’ question discussions and shortcut techniques.",
      "Doubt resolution sessions and mentor support for better understanding.",
    ],
    quizzes:
      "Includes topic-wise quizzes, practice tests, and a final JEE mock exam.",
  },
  neet: {
    title: "NEET Exam Preparation",
    image: "/assets/neet.webp",
    description:
      "Prepare for NEET with expert Biology, Chemistry, and Physics lessons.",
    keyPoints: [
      "Covers complete syllabus of Biology, Physics, and Chemistry.",
      "Topic-wise video lectures and conceptual clarity sessions.",
      "Regular practice tests and full-length mock exams.",
      "Guidance from top medical educators.",
      "Doubt resolution and mentorship support.",
    ],
    quizzes: "Includes chapter-wise quizzes and mock NEET exams.",
  },
  cat: {
    title: "CAT Exam Preparation",
    image: "/assets/cat.jpg",
    description:
      "Boost your aptitude with Quantitative, Verbal, and Logical Reasoning.",
    keyPoints: [
      "Covers Quantitative Aptitude, Logical Reasoning, Verbal Ability, and Data Interpretation.",
      "Daily practice sets and problem-solving strategies.",
      "Time management and accuracy improvement techniques.",
      "Mock tests with real-time analytics and feedback.",
      "Personalized mentorship and guidance.",
    ],
    quizzes: "Includes section-wise practice sets and full-length CAT mocks.",
  },
  gre: {
    title: "GRE Exam Preparation",
    image: "/assets/gre.jpg",
    description:
      "Master Analytical Writing, Verbal, and Quantitative Reasoning for the GRE.",
    keyPoints: [
      "Complete coverage of Verbal and Quantitative Reasoning.",
      "Special strategies for Analytical Writing Assessment.",
      "Timed practice tests with score predictions.",
      "Extensive vocabulary building and problem-solving approaches.",
      "Access to full-length GRE practice tests.",
    ],
    quizzes:
      "Includes section-wise GRE practice tests and full-length mock exams.",
  },
};

const CourseDetail = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const course = courseDetails[courseName];

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div className="course-detail-container">
      <img
        src={course.image}
        alt={course.title}
        className="course-detail-image"
      />
      <h1>{course.title}</h1>
      <p className="course-detail-description">{course.description}</p>

      <h2>Key Highlights:</h2>
      <ul className="course-keypoints">
        {course.keyPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <p className="course-quizzes">
        <strong>Quizzes & Exams:</strong> {course.quizzes}
      </p>

      <button
        className="view-subjects-button"
        onClick={() => navigate(`/courses/${courseName}/subjects`)}
      >
        View Subjects
      </button>

      {/* 🔹 Button to Navigate to Community Page */}
      <button onClick={() => navigate(`/courses/${courseName}/community`)}>
        Go to Community
      </button>
    </div>
  );
};

export default CourseDetail;
