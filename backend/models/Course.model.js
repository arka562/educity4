import mongoose from "mongoose";
const courseSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  motivation: { type: String, required: true },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);
export default Course;