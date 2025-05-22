import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./admin.css";

const EditCourseForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    motivation: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCourse = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/courses/${id}`);
      const data = await res.json();

      if (res.ok) {
        setFormData({
          name: data.name,
          description: data.description,
          motivation: data.motivation,
        });
      } else {
        setError("Failed to fetch course data");
      }
    } catch (err) {
      setError("Error fetching course data");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/api/courses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // if token needed
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update course");
      }

      navigate("/admin/courses"); // redirect to course list
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [id]);

  return (
    <div className="admin-page">
      <h2>Edit Course</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} className="course-form">
        <label>Course Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label>Motivation</label>
        <textarea
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Course"}
        </button>
      </form>
    </div>
  );
};

export default EditCourseForm;
