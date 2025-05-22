import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { user, isLoading, isAuthenticated } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (!isAuthenticated || user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminRoute;
