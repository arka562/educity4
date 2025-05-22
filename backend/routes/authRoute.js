import express from 'express';
import {
  registerUser,
  authUser,
  getUserProfile,
  updateUserProfile,getUsers
} from '../controllers/authController.js';
import { protect,admin} from '../middllewares/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/users', protect, admin, getUsers);
router.route('/register').post(registerUser);
router.route('/login').post(authUser);

// Private routes
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;