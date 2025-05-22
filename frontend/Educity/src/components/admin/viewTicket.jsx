import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./viewTicket.css";

const AdminTickets = () => {
  const { user } = useAuth();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        console.log("Fetching admin tickets with token:", user.token);
        setLoading(true);

        const res = await fetch("http://localhost:5000/api/ticket", {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        });

        console.log("Response status:", res.status);

        if (!res.ok) {
          const errorText = await res.text();
          console.error(`API error details: ${errorText}`);
          throw new Error(`API error: ${res.status} - ${errorText}`);
        }

        const data = await res.json();
        console.log("Admin tickets received:", data);
        setTickets(data);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch tickets:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (user && user.token) {
      console.log("User is authenticated, fetching tickets");
      fetchTickets();
    } else {
      console.log("No user token available, skipping fetch");
      setLoading(false);
    }
  }, [user, user.token]);

  const handleStatusChange = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:5000/api/ticket/${id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to update status: ${errorText}`);
      }

      // Update local state after successful API call
      setTickets((prev) =>
        prev.map((t) => (t._id === id ? { ...t, status } : t))
      );
    } catch (error) {
      console.error("Status update failed:", error);
      alert("Failed to update ticket status.");
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="admin-tickets">
        <p className="loading-text">Loading tickets...</p>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="admin-tickets">
        <p className="error-text">Error loading tickets: {error}</p>
      </div>
    );
  }

  return (
    <div className="admin-tickets">
      <h2>All Support Tickets ({tickets.length})</h2>

      {tickets.length === 0 ? (
        <p className="no-tickets">No tickets found.</p>
      ) : (
        <table className="tickets-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td>{ticket.user?.name || "Unknown user"}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.message}</td>
                <td
                  className={`status status-${ticket.status.replace(
                    /\s+/g,
                    "-"
                  )}`}
                >
                  {ticket.status}
                </td>
                <td>
                  <select
                    value={ticket.status}
                    onChange={(e) =>
                      handleStatusChange(ticket._id, e.target.value)
                    }
                    className="status-select"
                  >
                    <option value="open">Open</option>
                    <option value="in progress">In Progress</option>
                    <option value="closed">Closed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminTickets;
