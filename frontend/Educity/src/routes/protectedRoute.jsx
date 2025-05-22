import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Protected route that requires authentication
export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children || <Outlet />;
};

// Admin route that requires admin role
export const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.role !== "admin") {
    // Redirect to dashboard if not an admin
    return <Navigate to="/dashboard" replace />;
  }

  return children || <Outlet />;
};

// User route that requires user role
export const UserRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.role === "admin") {
    // Redirect to admin dashboard if admin tries to access user routes
    return <Navigate to="/admin/dashboard" replace />;
  }

  return children || <Outlet />;
};
