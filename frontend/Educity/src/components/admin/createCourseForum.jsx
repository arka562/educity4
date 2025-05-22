import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const CreateCourseForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    motivation: "",
    subjects: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch("http://localhost:5000/api/courses/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData), // Changed from courseData to formData
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create course");
      }

      // Handle success
      console.log("Course created:", data);
      navigate("/admin/courses"); // Redirect after success
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <h2>Create New Course</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="course-form">
        <label>Course Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <label>Motivation</label>
        <textarea
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Course"}
        </button>
      </form>
    </div>
  );
};

export default CreateCourseForm;
