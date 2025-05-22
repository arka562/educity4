import mongoose from "mongoose";

const subjectSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true }, // Reference to the Course
}, { timestamps: true });

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;