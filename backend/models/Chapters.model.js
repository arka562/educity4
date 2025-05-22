import mongoose from 'mongoose';

const chapterSchema = mongoose.Schema({
  chapterName: { type: String, required: true }, // Name of the chapter
  courseName: { type: String, required: true }, // Reference to the course
  subject: { type: String, required: true }, // Reference to the subject
  content: { 
    type: String, 
    // required: true,
  }, // Text content for the chapter
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Admin who created the chapter
}, { timestamps: true });

const Chapter = mongoose.model('Chapter', chapterSchema);
export default Chapter;