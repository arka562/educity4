// controllers/ticketController.js
import Ticket from "../models/ticketModel.js";

export const createTicket = async (req, res) => {
  const { subject, message } = req.body;

  const ticket = new Ticket({
    user: req.user._id,
    subject,
    message,
  });

  await ticket.save();
  res.status(201).json(ticket);
};

export const getUserTickets = async (req, res) => {
  const tickets = await Ticket.find({ user: req.user._id });
  res.json(tickets);
};

export const getAllTickets = async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });

  const tickets = await Ticket.find().populate("user", "name email");
  res.json(tickets);
};

export const updateTicketStatus = async (req, res) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });

  const { status } = req.body;
  const ticket = await Ticket.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(ticket);
};
