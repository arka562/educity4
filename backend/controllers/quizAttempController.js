import Quiz from "../models/Quiz.model.js";
import QuizResult from "../models/QuizAttempt.model.js";
import asyncHandler from "express-async-handler";

// @desc Submit quiz results
// @route POST /api/quiz-results
// @access Protected
export const submitQuizResults = asyncHandler(async (req, res) => {
  try {
    const { quizId, answers, timeTaken } = req.body;

    // Ensure the user is authenticated
    if (!req.user || !req.user._id) {
      return res.status(401).json({ error: "Unauthorized! Please log in." });
    }

    // Validate request body
    if (!quizId || !answers || !Array.isArray(answers)) {
      return res.status(400).json({ error: "Invalid request data" });
    }

    // Fetch the quiz
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    // Ensure quiz has questions
    if (!quiz.questions || quiz.questions.length === 0) {
      return res.status(400).json({ error: "Quiz has no questions" });
    }

    // Validate answer length
    if (answers.length !== quiz.questions.length) {
      return res.status(400).json({ error: "Incomplete answers submitted" });
    }

    // Calculate the score
    let correctAnswers = 0;
    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) correctAnswers++;
    });

    const score = Math.round((correctAnswers / quiz.questions.length) * 100);

    // Save quiz attempt result
    const quizResult = new QuizResult({
      quiz: quizId,
      user: req.user._id, // Store user ID
      score,
      answers,
      timeTaken,
    });

    await quizResult.save();

    // Send the response
    res.status(201).json({
      score,
      passingScore: quiz.passingScore,
      correctAnswers,
      totalQuestions: quiz.questions.length,
    });
  } catch (error) {
    console.error("Quiz submission error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});
