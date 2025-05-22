import express from 'express';
import {
  createChapter,
  getChaptersBySubject,
  getChapterByName,
  updateChapter,
  deleteChapter,
} from '../controllers/chapterController.js';
import { protect, admin } from '../middllewares/authMiddleware.js';

const router = express.Router();

// Public routes
router.route('/subject/:subject').get(protect, getChaptersBySubject);
router.route('/:chapterName').get(protect, getChapterByName);

// Admin-only routes
router.route('/').post(protect, admin, createChapter);
router.route('/:id')
  .put(protect, admin, updateChapter)
  .delete(protect, admin, deleteChapter);

export default router;