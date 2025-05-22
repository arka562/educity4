import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true,
    validate: {
      validator: options => options.length >= 2,
      message: 'At least two options are required'
    }
  },
  correctAnswer: {
    type: Number,
    required: true,
    min: 0
  },
  explanation: {
    type: String
  },
  points: {
    type: Number,
    default: 1
  }
});

const quizSchema = new mongoose.Schema({
  skill: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
    required: true
  },
  level: {
    type: String,
    enum: ['Basic', 'Intermediate', 'Advanced'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  questions: [questionSchema],
  duration: {
    type: Number, // in minutes
    default: 30
  },
  passingScore: {
    type: Number,
    default: 70
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

// Ensure only 3 quizzes per skill (one for each level)
quizSchema.index({ skill: 1, level: 1 }, { unique: true });

export default mongoose.model('QuizSkill', quizSchema);