import express from "express";
import { submitQuizResults } from "../controllers/quizAttempController.js";
import { protect } from "../middllewares/authMiddleware.js";

const router = express.Router();

router.post("/quiz-result", protect, submitQuizResults);

export default router;
