import asyncHandler from 'express-async-handler';
import Chapter from '../models/Chapters.model.js';

// @desc    Get a chapter by Name
// @route   GET /api/chapters/:chapterName
// @access  Private
const getChapterByName = asyncHandler(async (req, res) => {
  try {
    const chapterName = req.params.chapterName.replace(/-/g, ' ');
    const chapter = await Chapter.findOne({ 
      chapterName: { $regex: new RegExp(`^${chapterName}$`, 'i') }
    });

    if (!chapter) {
      return res.status(404).json({ message: 'Chapter not found' });
    }

    res.json(chapter);
  } catch (error) {
    console.error('Error fetching chapter:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @desc    Get all chapters for a specific subject
// @route   GET /api/chapters/subject/:subject
// @access  Private
const getChaptersBySubject = asyncHandler(async (req, res) => {
  const chapters = await Chapter.find({ subject: req.params.subject });

  if (chapters.length > 0) {
    res.json(chapters);
  } else {
    res.status(404).json({ message: 'Chapters not found for this subject' });
  }
});

// @desc    Create a new chapter
// @route   POST /api/chapters
// @access  Private/Admin
const createChapter = asyncHandler(async (req, res) => {
  const { chapterName, courseName, subject, content } = req.body;

  const chapterExists = await Chapter.findOne({ 
    chapterName, 
    courseName, 
    subject 
  });

  if (chapterExists) {
    res.status(400);
    throw new Error('Chapter already exists for this subject');
  }

  const chapter = await Chapter.create({
    chapterName,
    courseName,
    subject,
    content,
    createdBy: req.user._id,
  });

  if (chapter) {
    res.status(201).json(chapter);
  } else {
    res.status(400);
    throw new Error('Invalid chapter data');
  }
});

// @desc    Update a chapter
// @route   PUT /api/chapters/:id
// @access  Private/Admin
const updateChapter = asyncHandler(async (req, res) => {
  const chapter = await Chapter.findById(req.params.id);

  if (chapter) {
    chapter.chapterName = req.body.chapterName || chapter.chapterName;
    chapter.courseName = req.body.courseName || chapter.courseName;
    chapter.subject = req.body.subject || chapter.subject;
    chapter.content = req.body.content || chapter.content;

    const updatedChapter = await chapter.save();
    res.json(updatedChapter);
  } else {
    res.status(404);
    throw new Error('Chapter not found');
  }
});

// @desc    Delete a chapter
// @route   DELETE /api/chapters/:id
// @access  Private/Admin
const deleteChapter = asyncHandler(async (req, res) => {
  const chapter = await Chapter.findById(req.params.id);

  if (chapter) {
    await chapter.remove();
    res.json({ message: 'Chapter removed' });
  } else {
    res.status(404);
    throw new Error('Chapter not found');
  }
});

export {
  createChapter,
  getChaptersBySubject,
  getChapterByName,
  updateChapter,
  deleteChapter,
};