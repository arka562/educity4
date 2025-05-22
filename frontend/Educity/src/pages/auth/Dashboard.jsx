import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Import useAuth
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logout: authLogout } = useAuth(); // Use the AuthContext
  const [dailyGoal, setDailyGoal] = useState("");
  const [goals, setGoals] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      fetchEnrolledCourses(user._id, user.token);
    }
  }, [user, navigate]);

  const fetchEnrolledCourses = async (userId, token) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/users/${userId}/courses`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch enrolled courses");
      }

      const data = await response.json();
      setEnrolledCourses(data.courses);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authLogout(); // Use the logout function from AuthContext
    navigate("/login");
  };

  const handleSetGoal = (e) => {
    e.preventDefault();
    if (dailyGoal.trim()) {
      setGoals([...goals, { id: goals.length + 1, title: dailyGoal }]);
      setDailyGoal("");
    }
  };

  if (!user || loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {user.name}!</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="dashboard-content">
        <h2>Your Profile</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>

        <h2>Daily Goals</h2>
        <form onSubmit={handleSetGoal} className="goal-form">
          <input
            type="text"
            placeholder="Set a daily goal"
            value={dailyGoal}
            onChange={(e) => setDailyGoal(e.target.value)}
          />
          <button type="submit">Add Goal</button>
        </form>
        <ul className="dashboard-list">
          {goals.map((goal) => (
            <li key={goal.id}>{goal.title}</li>
          ))}
        </ul>

        <h2>Your Enrolled Courses</h2>
        {enrolledCourses.length > 0 ? (
          <ul className="dashboard-list">
            {enrolledCourses.map((course) => (
              <li key={course._id}>{course.title}</li>
            ))}
          </ul>
        ) : (
          <p>You haven't enrolled in any courses yet.</p>
        )}

        <h2>Quick Links</h2>
        <ul className="dashboard-links">
          <li>
            <Link to="/courses">View Courses</Link>
          </li>
          <li>
            <Link to="/profile">Edit Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <button
              onClick={() => alert("Redirect to rating page or open a modal")}
              className="rate-us-button"
            >
              Rate Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
