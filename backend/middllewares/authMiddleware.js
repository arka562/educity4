import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization?.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

const admin = asyncHandler(async (req, res, next) => {
  // First ensure protect middleware has run and added user
  if (!req.user) {
    res.status(401);
    throw new Error('Not authorized, no user');
  }

  // Find the latest user data (in case role changed after token was issued)
  const user = await User.findById(req.user._id);
  
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Check for admin status (supporting both role and isAdmin patterns)
  if (user.role === 'admin' || user.isAdmin) {
    next();
  } else {
    res.status(403);
    throw new Error('Not authorized as admin');
  }
});

export { protect, admin };