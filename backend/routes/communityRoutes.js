import express from 'express';
import {
  getCommunity,
  createPost,
  addComment,
  handleVote,
  createAnnouncement,
  deletePost,
  createCommunity
} from '../controllers/communityController.js';
import { admin, protect } from '../middllewares/authMiddleware.js';


const router = express.Router();

router.post("/", createCommunity);


// Public route (no auth required)
router.get('/:course', getCommunity);

// Authenticated routes
router.use(protect);

router.post('/:course/posts', createPost);
router.post('/:course/posts/:postId/comments', addComment);
router.patch('/:course/posts/:postId/vote', handleVote);


// Admin-only routes
router.use(admin);

router.post('/:course/announcements', createAnnouncement);
router.delete('/:course/posts/:postId', deletePost);

export default router;