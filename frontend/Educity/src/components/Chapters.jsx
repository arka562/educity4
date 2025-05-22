import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Chapters.css";
import kinematics from "../content/jee/Physics/kinematics";
import IndianConstitution from "../content/upsc/Indian Polity/constitution";
import Parliament from "../content/upsc/Indian Polity/parliament";
import Judiciary from "../content/upsc/Indian Polity/judiciary";

const chaptersData = {
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
      "Kinematics",
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

const chapterComponents = {
  jee: {
    Physics: {
      kinematics: kinematics,
    },
  },
  upsc: {
    "Indian Polity": {
      constitution: IndianConstitution,
      parliament: Parliament,
      judiciary: Judiciary,
    },
  },
};

const Chapter = () => {
  const { courseName, subjectName, chapterName } = useParams();
  const navigate = useNavigate();

  const handleChapterClick = (chapter) => {
    const chapterSlug = chapter.toLowerCase().replace(/\s+/g, "-");
    navigate(
      `/course/${courseName}/subject/${subjectName}/chapter/${chapterSlug}`
    );
  };

  const handleQuizClick = (quizNumber) => {
    navigate(
      `/course/${courseName}/subject/${subjectName}/chapter/${chapterName}/quiz/${quizNumber}`
    );
  };

  const chapters = chaptersData[courseName]?.[subjectName] || [];
  const ChapterComponent = chapterName
    ? chapterComponents[courseName]?.[subjectName]?.[chapterName]
    : null;

  return (
    <div className="chapter-container">
      {chapterName ? (
        ChapterComponent ? (
          <div>
            <ChapterComponent />
            <div className="quiz-section">
              <h2>Test Your Knowledge</h2>
              <div className="quiz-cards">
                {[1, 2, 3].map((quizNum) => (
                  <div
                    key={quizNum}
                    className="quiz-card"
                    onClick={() => handleQuizClick(quizNum)}
                  >
                    <h3>Quiz {quizNum}</h3>
                    <p>
                      {["Basic", "Intermediate", "Advanced"][quizNum - 1]} Level
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <h2>Chapter content not found</h2>
        )
      ) : (
        <>
          <h1>{subjectName} Chapters</h1>
          <ul className="chapter-list">
            {chapters.map((chapter, index) => (
              <li key={index} onClick={() => handleChapterClick(chapter)}>
                {chapter}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Chapter;
