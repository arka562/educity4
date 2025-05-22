import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema({
  course: {
    type: String,
    required: true,
    enum: ['jee', 'neet', 'cat','upsc','gre'] // Your course categories
  },
  subject: String, // Optional: Physics, Chemistry, etc.
  posts: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      text: String,
      createdAt: { type: Date, default: Date.now }
    }],
    createdAt: { type: Date, default: Date.now }
  }],
  announcements: [{
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

export default mongoose.model('Community', communitySchema);