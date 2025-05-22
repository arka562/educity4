import Skill from '../models/Skill.js';
import QuizSkill from '../models/SkillQuiz.model.js';

// Create a new skill with 3 quiz levels
export const createSkill = async (req, res) => {
  try {
    const { name, description, duration, category } = req.body;

    // Create skill
    const skill = await Skill.create({ name, description, duration, category });

    // Create 3 quizzes (Basic, Intermediate, Advanced)
    const levels = ['Basic', 'Intermediate', 'Advanced'];
    const quizzes = await Promise.all(
      levels.map(level => 
        QuizSkill.create({
          skill: skill._id,
          level,
          title: `${name} - ${level} Level`,
          description: `${level} level assessment for ${name}`,
          passingScore: level === 'Advanced' ? 80 : 70
        })
      )
    );

    // Update skill with quiz references
    skill.quizzes = quizzes.map(q => q._id);
    await skill.save();

    res.status(201).json({ skill, quizzes });
  } catch (error) {
    res.status(400).json({ 
      error: error.message,
      message: 'Failed to create skill and quizzes' 
    });
  }
};

// Get all skills with their quizzes
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().populate({
      path: 'quizzes',
      select: 'level title passingScore'
    });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ 
      error: error.message,
      message: 'Failed to fetch skills' 
    });
  }
};

// Get single skill with full quiz details
export const getSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id).populate('quizzes');
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.json(skill);
  } catch (error) {
    res.status(500).json({ 
      error: error.message,
      message: 'Failed to fetch skill' 
    });
  }
};