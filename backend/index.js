import express from 'express';
import connectDB from './config/db.js';
import { errorHandler } from './middllewares/errorMiddleware.js';
import authRoutes from './routes/authRoute.js';
import courseRoutes from './routes/courseRoute.js';
import quizRoutes from './routes/quizRoute.js';
import subjectRoute from './routes/subjectRoute.js';
import communityRoute from './routes/communityRoutes.js';
import chapterRoute from './routes/chapterRoute.js'
import quizAttemptRoute from './routes/quizAttemptRoute.js'
import ticketRoute from './routes/ticketRoute.js';
import quizSkillRoutes from './routes/quizSkillRoutes.js';
import quizSkillResultRoutes from './routes/quizSkillResultRoutes.js'


import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app = express();


connectDB();

app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/subject',subjectRoute);
app.use('/api/chapters',chapterRoute);
app.use('/api/quizzes', quizRoutes);
app.use('/api/quizAttempt', quizAttemptRoute);
app.use('/api/community',communityRoute);
app.use("/api/ticket", ticketRoute);
app.use("/api/skillQuizzes", quizSkillRoutes);
app.use("/api/skillQuizResult", quizSkillResultRoutes);



app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// Trigger Git to track changes
