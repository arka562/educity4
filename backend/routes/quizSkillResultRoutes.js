import express from "express";
import { 
  getUserResults,
  getQuizResults,
  getResultDetails
} from "../controllers/skillQuizResultController.js";
import { protect } from "../middllewares/authMiddleware.js";

const router = express.Router();

// Protected user routes
router.get("/user/:userId", protect, getUserResults);
router.get("/quiz/:quizId", protect, getQuizResults);
router.get("/:resultId", protect, getResultDetails);

export default router;