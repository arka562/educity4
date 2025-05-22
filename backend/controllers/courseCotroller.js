import asyncHandler from 'express-async-handler';
import Course from '../models/Course.model.js';

// @desc    Create a new course
// @route   POST /api/courses/new
// @access  Private/Admin
const createCourse = asyncHandler(async (req, res) => {
  const { motivation, description, name, subjects } = req.body;

  console.log('Request Body:', req.body);

  // Check if required fields are missing
  if (!name || !description || !motivation) {
    res.status(400);
    throw new Error('Please provide all required fields: name, description, motivation');
  }

  const course = await Course.create({
    name, // Using name instead of courseName to match frontend
    description,
    motivation,
    subjects: subjects || [],
    createdBy: req.user._id,
  });

  if (course) {
    res.status(201).json(course);
  } else {
    res.status(400);
    throw new Error('Invalid course data');
  }
});

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
});

// @desc    Get a course by courseName
// @route   GET /api/courses/:courseName
// @access  Public
const getCourseByName = asyncHandler(async (req, res) => {
  // Modified to check both name and courseName fields
  const course = await Course.findOne({ 
    $or: [
      { name: req.params.courseName },
      { courseName: req.params.courseName }
    ]
  });

  if (course) {
    res.json(course);
  } else {
    res.status(404);
    throw new Error('Course not found');
  }
});

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Private/Admin
const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    course.name = req.body.name || course.name;
    course.description = req.body.description || course.description;
    course.motivation = req.body.motivation || course.motivation;
    course.subjects = req.body.subjects || course.subjects;

    const updatedCourse = await course.save();
    res.json(updatedCourse);
  } else {
    res.status(404);
    throw new Error('Course not found');
  }
});

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Private/Admin
const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (course) {
    await Course.deleteOne({ _id: course._id }); // Modern way instead of course.remove()
    res.json({ message: 'Course removed' });
  } else {
    res.status(404);
    throw new Error('Course not found');
  }
});

export { createCourse, getCourses, getCourseByName, updateCourse, deleteCourse };