// routes/ticketRoutes.js
import express from "express";
import {
  createTicket,
  getAllTickets,
  getUserTickets,
  updateTicketStatus,
} from "../controllers/ticketController.js";
import { protect,admin } from "../middllewares/authMiddleware.js";

const router = express.Router();
router.post("/", protect, createTicket);
router.get("/my", protect, getUserTickets);
router.get("/", protect, admin,getAllTickets); // Admin only
router.patch("/:id/status", protect,admin, updateTicketStatus); // Admin only

export default router;
