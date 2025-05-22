import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import "./adminDasboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth(); // Grab user and loading state from context

  const [totalUsers, setTotalUsers] = useState(0);
  const [activeCourses, setActiveCourses] = useState(0);
  const [pendingTickets, setPendingTickets] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = user.token;
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const usersRes = await fetch("http://localhost:5000/api/auth/users", {
          headers,
        });
        const coursesRes = await fetch("http://localhost:5000/api/courses", {
          headers,
        });
        // const ticketsRes = await fetch(
        //   "http://localhost:5000/api/admin/tickets",
        //   { headers }
        // );

        if (usersRes.ok) {
          const usersData = await usersRes.json();
          setTotalUsers(usersData.total || usersData.length || 0);
        }

        if (coursesRes.ok) {
          const coursesData = await coursesRes.json();
          setActiveCourses(coursesData.total || coursesData.length || 0);
        }

        // if (ticketsRes.ok) {
        //   const ticketsData = await ticketsRes.json();
        //   setPendingTickets(ticketsData.total || ticketsData.length || 0);
        // }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    if (user?.token) {
      fetchData();
    }
  }, [user]);

  // If still loading or no user, show a loading state or redirect
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading && !user?.token) {
    navigate("/login");
    return null;
  }

  return (
    <div className="admin-dashboard">
      <h1>Welcome back, {user?.name || "Admin"}!</h1>
      <p className="admin-role">Role: {user?.role || "admin"}</p>

      <div className="admin-cards-container">
        <div className="admin-card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="admin-card">
          <h3>Active Courses</h3>
          <p>{activeCourses}</p>
        </div>
        <div className="admin-card">
          <h3>Pending Tickets</h3>
          <p>{pendingTickets}</p>
        </div>
        <div className="admin-card">
          <h3>Settings</h3>
          <button onClick={() => navigate("/admin/settings")}>
            Go to Settings
          </button>
        </div>
      </div>

      <div className="admin-shortcuts">
        <h3>Quick Access</h3>
        <button onClick={() => navigate("/admin/courses")}>
          Manage Courses
        </button>
        <button onClick={() => navigate("/admin/users")}>View Users</button>
        <button onClick={() => navigate("/admin/tickets")}>
          Support Tickets
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
