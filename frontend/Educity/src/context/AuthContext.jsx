import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get data from localStorage and set to state
    const authData = localStorage.getItem("authData");
    if (authData) {
      setUser(JSON.parse(authData)); // Parse and store user data
    }
  }, []);

  const login = (token, userData) => {
    // Save token and user data in localStorage and update state
    const authData = {
      ...userData,
      token,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("authData", JSON.stringify(authData));
    setUser(authData);
    // Add this to your login function after setting user data
    console.log(
      "User data after login:",
      JSON.parse(localStorage.getItem("authData"))
    );
  };

  const logout = () => {
    localStorage.removeItem("authData");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
