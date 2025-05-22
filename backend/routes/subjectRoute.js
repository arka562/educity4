import express from 'express';
import {
  createSubject,
  getSubjectsByCourse,
  getSubjectById,
  updateSubject,
  deleteSubject,
} from '../controllers/subjectController.js';
import { protect, admin } from '../middllewares/authMiddleware.js';

const router = express.Router();

// Public routes
router.route('/course/:courseName').get(protect,getSubjectsByCourse);
router.route('/:id').get(protect,getSubjectById);

// Admin-only routes
router.route('/').post(protect, admin, createSubject);
router
  .route('/:id')
  .put(protect, admin, updateSubject)
  .delete(protect, admin, deleteSubject);

export default router;