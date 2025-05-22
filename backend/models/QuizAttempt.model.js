import mongoose from "mongoose";

const quizResultSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Store user who attempted the quiz
  score: { type: Number, required: true },
  answers: { type: Object, required: true },
  timeTaken: { type: Number },
  completedAt: { type: Date, default: Date.now },
});

const QuizResult = mongoose.model("QuizResult", quizResultSchema);
export default QuizResult;
