import express from 'express';
import {
  createCourse,
  getCourses,
  getCourseByName,
  updateCourse,
  deleteCourse,
} from '../controllers/courseCotroller.js'; // Fixed typo
import { protect, admin } from '../middllewares/authMiddleware.js'; // Fixed typo

const router = express.Router();

// Public routes
router.route('/').get(getCourses);
router.route('/:courseName').get(getCourseByName);

// Admin-only routes
router.post('/new', protect, admin, createCourse);
router
  .route('/:id')
  .put(protect, admin, updateCourse)
  .delete(protect, admin, deleteCourse);

export default router;