import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  ProtectedRoute,
  AdminRoute,
  UserRoute,
} from "./routes/protectedRoute.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Course from "./pages/Course";
import CourseDetail from "./pages/courseDetail";
import Subject from "./pages/Subject";
import Chapter from "./components/Chapters.jsx";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgetPassword.jsx";
import Dashboard from "./pages/auth/Dashboard.jsx";
import Quiz from "./components/Quiz.jsx";
import Community from "./components/Community.jsx";
import AdminCourseList from "./components/admin/adminCourseList.jsx";
import EditCourseForm from "./components/admin/editCourse.jsx";
import AddCourseForm from "./components/admin/createCourseForum.jsx";
import AdminDashboard from "./components/admin/adminDasboard.jsx";
import AdminLayout from "./components/admin/adminLayout.jsx";
import ViewUsers from "./components/admin/viewUser.jsx";
import SubmitTicket from "./pages/auth/SubmitTicket.jsx";
import AdminTickets from "./components/admin/viewTicket.jsx";
import Skills from "./pages/Skill.jsx";
import SkillDetail from "./pages/skillDetail.jsx";
import SkillModule from "./pages/SkillModule.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/skills/:skillName/module" element={<SkillModule />} />
        <Route path="/skills/:id" element={<SkillDetail />} />
        <Route path="/skills" element={<Skills />} />
        {/* Protected User Routes */}
        <Route element={<UserRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/courses/:courseName" element={<CourseDetail />} />
          <Route path="/courses/:courseName/subjects" element={<Subject />} />
          <Route
            path="/courses/:courseName/subjects/:subjectName/chapters"
            element={<Chapter />}
          />
          <Route
            path="/course/:courseName/subject/:subjectName/chapter/:chapterName"
            element={<Chapter />}
          />
          <Route
            path="/course/:courseName/subject/:subjectName/chapter/:chapterName/quiz/:quizNumber"
            element={<Quiz />}
          />
          <Route
            path="/courses/:courseName/community"
            element={<Community />}
          />
          <Route path="/submit-ticket" element={<SubmitTicket />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* <Route path="/admin/home" element={<AdminLayout />} /> */}
          <Route
            path="/admin/home"
            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }
          ></Route>
          <Route path="/admin/ticket" element={<AdminTickets />} />
          <Route path="/admin/courses" element={<AdminCourseList />} />
          <Route path="/admin/courses/edit/:id" element={<EditCourseForm />} />
          <Route path="/admin/courses/new" element={<AddCourseForm />} />
          <Route path="/admin/users" element={<ViewUsers />} />
        </Route>

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
