import asyncHandler from 'express-async-handler';
import Subject from '../models/Subject.model.js';
import Course from '../models/Course.model.js';

// @desc    Create a new subject
// @route   POST /api/subjects
// @access  Private/Admin
const createSubject = asyncHandler(async (req, res) => {
  const { name, description, course } = req.body;

  // Check if required fields are missing
  if (!name || !description || !course) {
    res.status(400);
    throw new Error('Please provide all required fields: name, description, course');
  }

  // Check if the course exists
  const courseExists = await Course.findById(course);
  if (!courseExists) {
    res.status(404);
    throw new Error('Course not found');
  }

  // Check if the subject already exists for this course
  const subjectExists = await Subject.findOne({ name, course });
  if (subjectExists) {
    res.status(400);
    throw new Error('Subject already exists for this course');
  }

  // Create the subject
  const subject = await Subject.create({
    name,
    description,
    course,
  });

  if (subject) {
    // Add the subject to the course's subjects array
    await Course.findByIdAndUpdate(
      course,
      { $push: { subjects: subject._id } },
      { new: true }
    );

    res.status(201).json(subject);
  } else {
    res.status(400);
    throw new Error('Invalid subject data');
  }
});

// @desc    Get all subjects for a specific course
// @route   GET /api/subjects/course/:courseId
// @access  Public
const getSubjectsByCourse = asyncHandler(async (req, res) => {
  const subjects = await Subject.find({ course: req.params.courseId });

  if (subjects) {
    res.json(subjects);
  } else {
    res.status(404);
    throw new Error('Subjects not found for this course');
  }
});

// @desc    Get a subject by ID
// @route   GET /api/subjects/:id
// @access  Public
const getSubjectById = asyncHandler(async (req, res) => {
  const subject = await Subject.findById(req.params.id).populate('course', 'name description');

  if (subject) {
    res.json(subject);
  } else {
    res.status(404);
    throw new Error('Subject not found');
  }
});

// @desc    Update a subject
// @route   PUT /api/subjects/:id
// @access  Private/Admin
const updateSubject = asyncHandler(async (req, res) => {
  const subject = await Subject.findById(req.params.id);

  if (subject) {
    subject.name = req.body.name || subject.name;
    subject.description = req.body.description || subject.description;

    const updatedSubject = await subject.save();
    res.json(updatedSubject);
  } else {
    res.status(404);
    throw new Error('Subject not found');
  }
});

// @desc    Delete a subject
// @route   DELETE /api/subjects/:id
// @access  Private/Admin
const deleteSubject = asyncHandler(async (req, res) => {
  const subject = await Subject.findById(req.params.id);

  if (subject) {
    // Remove the subject from the course's subjects array
    await Course.findByIdAndUpdate(
      subject.course,
      { $pull: { subjects: subject._id } },
      { new: true }
    );

    // Delete the subject
    await subject.remove();
    res.json({ message: 'Subject removed' });
  } else {
    res.status(404);
    throw new Error('Subject not found');
  }
});

export {
  createSubject,
  getSubjectsByCourse,
  getSubjectById,
  updateSubject,
  deleteSubject,
};