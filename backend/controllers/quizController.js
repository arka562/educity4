import Quiz from "../models/Quiz.model.js";
import asyncHandler from "express-async-handler";

// @desc Get a quiz by course, subject, and chapter
// @route GET /api/quizzes/:course/:subject/:chapter/:quizNumber
// @access Protected
export const getQuiz = asyncHandler(async (req, res) => {
  const quiz = await Quiz.findOne({
    course: req.params.course,
    subject: req.params.subject,
    chapter: req.params.chapter,
    quizNumber: parseInt(req.params.quizNumber),
  }).select("-questions.correctAnswer");

  if (!quiz) {
    res.status(404).json({ error: "Quiz not found" });
    return;
  }

  res.json(quiz);
});

// @desc Create a new quiz (Admin only)
// @route POST /api/quizzes
// @access Admin
export const createQuiz = asyncHandler(async (req, res) => {
  const { course, subject, chapter, quizNumber, title, description, questions, duration, passingScore } = req.body;

  const existingQuiz = await Quiz.findOne({ course, subject, chapter, quizNumber });

  if (existingQuiz) {
    res.status(400).json({ error: "Quiz already exists for this chapter" });
    return;
  }

  const quiz = new Quiz({
    course,
    subject,
    chapter,
    quizNumber,
    title,
    description,
    questions,
    duration,
    passingScore,
  });

  const savedQuiz = await quiz.save();
  res.status(201).json(savedQuiz);
});
