import express from "express";
import { 
  addQuestions, 
  getQuiz, 
  submitQuiz 
} from "../controllers/skillQuizController.js";
import { protect, admin } from "../middllewares/authMiddleware.js";

const router = express.Router();

// Admin routes
router.patch("/:quizId/questions", protect, admin, addQuestions);

// Protected user routes
router.get("/:quizId", protect, getQuiz);
router.post("/:quizId/submit", protect, submitQuiz);

export default router;