// src/pages/admin/AdminCourseList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";

const AdminCourseList = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/courses");
      const data = await res.json();
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/courses/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // if token needed
        },
      });

      if (res.ok) {
        fetchCourses(); // refresh list
      } else {
        console.error("Failed to delete course");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="admin-page">
      <h2>All Courses</h2>
      <Link to="/admin/courses/new" className="btn-add">
        + Add New Course
      </Link>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course._id} className="course-item">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <div className="actions">
              <Link
                to={`/admin/courses/edit/${course._id}`}
                className="btn-edit"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(course._id)}
                className="btn-delete"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCourseList;
