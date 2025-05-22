import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./viewUser.css"; // Optional: for styling

const ViewUsers = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/users", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.token) {
      fetchUsers();
    }
  }, [user]);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="view-users-container">
      <h2>All Registered Users</h2>
      <table className="view-users-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {users?.map((u, i) => (
            <tr key={u._id}>
              <td>{i + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
