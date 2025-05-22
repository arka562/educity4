import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Subject.css";

// Mock data for subjects and chapters
const subjectsData = {
  upsc: {
    "Indian Polity": ["Constitution", "Parliament", "Judiciary", "Federalism"],
    "Indian Economy": [
      "Macroeconomics",
      "Microeconomics",
      "Budget",
      "Taxation",
      "Economic Survey",
    ],
    "Indian History": [
      "Ancient History",
      "Medieval History",
      "Modern History",
      "Indian National Movement",
    ],
    Geography: [
      "Physical Geography",
      "Human Geography",
      "Indian Geography",
      "World Geography",
    ],
    "Environment and Ecology": [
      "Ecosystems",
      "Biodiversity",
      "Climate Change",
      "Environmental Laws",
    ],
    "Science and Technology": [
      "Space Technology",
      "Defence Technology",
      "Biotechnology",
      "Information Technology",
    ],
    "Current Affairs": [
      "National News",
      "International News",
      "Government Schemes",
      "Reports and Indices",
    ],
  },
  jee: {
    Physics: [
      "Mechanics",
      "Thermodynamics",
      "Electromagnetism",
      "Optics",
      "Modern Physics",
    ],
    Chemistry: [
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry",
      "Coordination Compounds",
      "Chemical Kinetics",
    ],
    Mathematics: [
      "Algebra",
      "Calculus",
      "Coordinate Geometry",
      "Trigonometry",
      "Probability",
    ],
  },
  neet: {
    Biology: [
      "Cell Biology",
      "Genetics",
      "Ecology",
      "Human Physiology",
      "Plant Physiology",
    ],
    Physics: [
      "Mechanics",
      "Thermodynamics",
      "Optics",
      "Electromagnetism",
      "Modern Physics",
    ],
    Chemistry: [
      "Organic Chemistry",
      "Inorganic Chemistry",
      "Physical Chemistry",
      "Biomolecules",
      "Chemical Bonding",
    ],
  },
  cat: {
    "Quantitative Aptitude": [
      "Number System",
      "Algebra",
      "Geometry",
      "Arithmetic",
      "Modern Maths",
    ],
    "Logical Reasoning": [
      "Puzzles",
      "Seating Arrangement",
      "Blood Relations",
      "Coding-Decoding",
      "Syllogism",
    ],
    "Verbal Ability": [
      "Reading Comprehension",
      "Para Jumbles",
      "Sentence Correction",
      "Vocabulary",
      "Grammar",
    ],
    "Data Interpretation": [
      "Tables",
      "Bar Graphs",
      "Pie Charts",
      "Line Graphs",
      "Caselets",
    ],
  },
  gre: {
    "Verbal Reasoning": [
      "Reading Comprehension",
      "Text Completion",
      "Sentence Equivalence",
      "Vocabulary",
    ],
    "Quantitative Reasoning": [
      "Arithmetic",
      "Algebra",
      "Geometry",
      "Data Analysis",
    ],
    "Analytical Writing": ["Issue Essay", "Argument Essay"],
  },
};

const Subject = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const subjects = subjectsData[courseName];

  if (!subjects) {
    return <h2>Subjects not found for this course</h2>;
  }

  return (
    <div className="subject-container">
      <h1>{courseName.toUpperCase()} Subjects</h1>
      <ul className="subject-list">
        {Object.entries(subjects).map(([subject, chapters], index) => (
          <li key={index}>
            <div className="subject-item">
              <span>{subject}</span>
              <button
                className="view-chapters-button"
                onClick={() =>
                  navigate(
                    `/courses/${courseName}/subjects/${subject}/chapters`
                  )
                }
              >
                View Chapters
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subject;
