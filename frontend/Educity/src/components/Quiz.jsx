import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const { courseName, subjectName, chapterName, quizNumber } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeStarted, setTimeStarted] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [quizExpired, setQuizExpired] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setTimeStarted(new Date());
        const token =
          localStorage.getItem("token") || sessionStorage.getItem("token");

        const response = await fetch(
          `http://localhost:5000/api/quizzes/${courseName}/${subjectName}/${chapterName}/${quizNumber}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Attach token
            },
          }
        );

        if (response.status === 401) {
          throw new Error("Unauthorized! Please log in again.");
        }

        if (!response.ok) {
          throw new Error("Failed to load quiz");
        }

        const data = await response.json();
        setQuiz(data);
        setSelectedAnswers(new Array(data.questions.length).fill(null));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [courseName, subjectName, chapterName, quizNumber]);

  useEffect(() => {
    if (timeStarted && quiz?.duration) {
      const timer = setInterval(() => {
        const elapsed = Math.floor((new Date() - timeStarted) / 1000);
        setTimeTaken(elapsed);

        if (elapsed >= quiz.duration * 60) {
          setQuizExpired(true);
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeStarted, quiz]);

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    if (selectedAnswers.includes(null)) {
      const confirmSubmit = window.confirm(
        "You haven't answered all questions. Do you still want to submit?"
      );
      if (!confirmSubmit) return;
    }

    try {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");

      const response = await fetch(
        "http://localhost:5000/api/quizAttempt/quiz-result",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Attach token
          },
          body: JSON.stringify({
            quizId: quiz?._id, // Ensure quiz._id exists
            answers: selectedAnswers || [], // Default empty array to avoid undefined issues
            timeTaken: timeTaken || 0,
          }),
        }
      );

      if (response.status === 401) {
        throw new Error("Unauthorized! Please log in again.");
      }

      if (!response.ok) {
        throw new Error("Failed to submit quiz");
      }

      const result = await response.json();
      setScore(result);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="quiz-loading">Loading quiz...</div>;
  if (error) return <div className="quiz-error">{error}</div>;
  if (!quiz) return <div className="quiz-error">Quiz not found</div>;

  if (quizExpired) {
    return (
      <div className="quiz-expired">
        <h2>Time's up!</h2>
        <p>Your quiz has expired.</p>
        <button onClick={handleSubmit} className="submit">
          Submit Now
        </button>
      </div>
    );
  }

  if (score) {
    return (
      <div className="quiz-results">
        <h2>Quiz Results</h2>
        <div
          className={`score ${
            score.score >= score.passingScore ? "pass" : "fail"
          }`}
        >
          Your Score: {score.score}%
        </div>
        <p>
          {score.correctAnswers} out of {score.totalQuestions} correct
        </p>
        <p>
          Time taken: {Math.floor(timeTaken / 60)}m {timeTaken % 60}s
        </p>
        <button onClick={() => navigate(-1)} className="back-button">
          Back to Chapter
        </button>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>{quiz.title}</h2>
      <p>{quiz.description}</p>

      <div className="progress">
        <span>
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </span>
        {quiz.duration && (
          <span
            className={`timer ${
              quiz.duration * 60 - timeTaken <= 30 ? "warning" : ""
            }`}
          >
            Time: {Math.floor((quiz.duration * 60 - timeTaken) / 60)}:
            {String(Math.floor((quiz.duration * 60 - timeTaken) % 60)).padStart(
              2,
              "0"
            )}
          </span>
        )}
      </div>

      <div className="question-card">
        <h3>{currentQuestion.text}</h3>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`option ${
                selectedAnswers[currentQuestionIndex] === index
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleAnswerSelect(currentQuestionIndex, index)}
            >
              <input
                type="radio"
                checked={selectedAnswers[currentQuestionIndex] === index}
                readOnly
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="navigation">
        <button
          onClick={() =>
            setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
          }
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>

        {currentQuestionIndex < quiz.questions.length - 1 ? (
          <button onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}>
            Next
          </button>
        ) : (
          <button onClick={handleSubmit} className="submit">
            Submit Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
