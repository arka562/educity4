import QuizSkill from '../models/SkillQuiz.model.js';
import QuizSkillResult from '../models/SkillQuizAttempt.js';

// Add questions to a quiz
export const addQuestions = async (req, res) => {
  try {
    const quiz = await QuizSkill.findByIdAndUpdate(
      req.params.quizId,
      { $set: { questions: req.body.questions } },
      { new: true, runValidators: true }
    );

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    res.json(quiz);
  } catch (error) {
    res.status(400).json({ 
      error: error.message,
      message: 'Failed to add questions' 
    });
  }
};

// Get quiz by ID with questions
export const getQuiz = async (req, res) => {
  try {
    const quiz = await QuizSkill.findById(req.params.quizId)
      .select('-questions.correctAnswer'); // Exclude correct answers

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    res.json(quiz);
  } catch (error) {
    res.status(500).json({ 
      error: error.message,
      message: 'Failed to fetch quiz' 
    });
  }
};

// Submit quiz answers
export const submitQuiz = async (req, res) => {
  try {
    const { userId, answers } = req.body;
    const quiz = await QuizSkill.findById(req.params.quizId);

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    // Calculate score
    let score = 0;
    const results = quiz.questions.map((question, index) => {
      const isCorrect = answers[index] === question.correctAnswer;
      if (isCorrect) score += question.points || 1;
      return {
        questionId: question._id,
        selectedOption: answers[index],
        isCorrect,
        timeTaken: req.body.timeTakenPerQuestion?.[index] || 0
      };
    });

    const percentage = Math.round((score / quiz.questions.reduce((sum, q) => sum + (q.points || 1), 0)) * 100);
    const passed = percentage >= quiz.passingScore;

    // Save result
    const result = await QuizSkillResult.create({
      quiz: quiz._id,
      user: userId,
      score,
      percentage,
      passed,
      answers: results,
      totalTime: req.body.totalTime
    });

    res.json({ result, passed });
  } catch (error) {
    res.status(400).json({ 
      error: error.message,
      message: 'Failed to submit quiz' 
    });
  }
};