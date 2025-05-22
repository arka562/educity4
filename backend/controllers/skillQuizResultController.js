import QuizSkillResult from '../models/SkillQuizAttempt.js';
import QuizSkill from '../models/SkillQuiz.model.js';

// Get user's quiz results
export const getUserResults = async (req, res) => {
  try {
    const results = await QuizSkillResult.find({ user: req.params.userId })
      .populate({
        path: 'quiz',
        select: 'title level skill',
        populate: {
          path: 'skill',
          select: 'name'
        }
      })
      .sort({ createdAt: -1 });

    res.json(results);
  } catch (error) {
    res.status(500).json({ 
      error: error.message,
      message: 'Failed to fetch user results' 
    });
  }
};

// Get all results for a specific quiz
export const getQuizResults = async (req, res) => {
  try {
    const results = await QuizSkillResult.find({ quiz: req.params.quizId })
      .populate('user', 'name email')
      .sort({ score: -1 });

    res.json(results);
  } catch (error) {
    res.status(500).json({ 
      error: error.message,
      message: 'Failed to fetch quiz results' 
    });
  }
};

// Get detailed result by ID
export const getResultDetails = async (req, res) => {
  try {
    const result = await QuizSkillResult.findById(req.params.resultId)
      .populate({
        path: 'quiz',
        populate: {
          path: 'skill',
          select: 'name'
        }
      })
      .populate('user', 'name email');

    if (!result) {
      return res.status(404).json({ message: 'Result not found' });
    }

    // Include questions with correct answers for review
    const quiz = await QuizSkill.findById(result.quiz._id)
      .select('questions');

    res.json({
      result,
      questions: quiz.questions
    });
  } catch (error) {
    res.status(500).json({ 
      error: error.message,
      message: 'Failed to fetch result details' 
    });
  }
};