import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import "./submitTicket.css";

const SubmitTicket = () => {
  const { user } = useAuth();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [myTickets, setMyTickets] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ subject, message }),
      });

      if (!res.ok) {
        const errText = await res.text(); // safer than trying res.json() directly
        throw new Error(`Server error: ${errText}`);
      }

      const data = await res.json();
      alert("Ticket submitted!");
      setSubject("");
      setMessage("");
      fetchMyTickets(); // Refresh tickets
    } catch (err) {
      console.error(err);
      alert("Failed to submit ticket. Check console for more details.");
    }
  };

  const fetchMyTickets = async () => {
    try {
      console.log("Fetching user tickets with token:", user.token);
      const res = await fetch("http://localhost:5000/api/ticket/my", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await res.json();
      console.log("Received user tickets:", data);
      setMyTickets(data);
    } catch (error) {
      console.error("Failed to fetch tickets:", error);
    }
  };

  useEffect(() => {
    if (user && user.token) {
      fetchMyTickets();
    }
  }, [user, user.token]);

  return (
    <div className="submit-ticket">
      <h2>Submit a Support Ticket</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          placeholder="Describe your issue..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit Ticket</button>
      </form>

      <hr style={{ margin: "30px 0" }} />

      <h2>My Submitted Tickets</h2>
      {myTickets.length === 0 ? (
        <p>No tickets submitted yet.</p>
      ) : (
        <table className="my-tickets-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Message</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {myTickets.map((ticket) => (
              <tr key={ticket._id}>
                <td>{ticket.subject}</td>
                <td>{ticket.message}</td>
                <td>{ticket.status}</td>
                <td>{new Date(ticket.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SubmitTicket;
