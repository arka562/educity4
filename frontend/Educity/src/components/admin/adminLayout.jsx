import React from "react";
import { Link } from "react-router-dom";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="admin-layout">
      <div className="admin-layout-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/courses">Courses</Link>
          </li>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
        </ul>
      </div>

      <div className="admin-layout-content">
        <div className="admin-layout-header">
          <h3>Welcome, Admin</h3>

          {/* ✨ Add new content below the welcome */}
          <p className="admin-date">📅 {currentDate}</p>
          <p className="admin-role">🔑 Role: Super Admin</p>
          <p className="admin-tip">
            💡 Tip: Check the dashboard for new course submissions.
          </p>
        </div>

        {/* Main page content (dashboard, users, etc.) */}
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
