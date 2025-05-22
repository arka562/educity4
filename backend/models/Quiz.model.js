import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: Number, required: true },
  explanation: { type: String }
});

const quizSchema = new mongoose.Schema({
  course: { type: String, required: true },
  subject: { type: String, required: true },
  chapter: { type: String, required: true },
  quizNumber: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  questions: [questionSchema],
  duration: { type: Number },
  passingScore: { type: Number, default: 70 },
  createdAt: { type: Date, default: Date.now }
});

quizSchema.index({ course: 1, subject: 1, chapter: 1, quizNumber: 1 }, { unique: true });

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;
