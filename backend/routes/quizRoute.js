import express from "express";
import { getQuiz, createQuiz } from "../controllers/quizController.js";
import { protect, admin } from "../middllewares/authMiddleware.js";

const router = express.Router();

router.get("/:course/:subject/:chapter/:quizNumber", protect, getQuiz);
router.post("/", protect, admin, createQuiz);

export default router;
