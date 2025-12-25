import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
  getNoteById,
} from "../controllers/notesController.js";
const router = express.Router();

// Get notes
router.get("/", getAllNotes);

// Get note by id
router.get("/:id", getNoteById);
// Add note
router.post("/", createNote);

// Update note
router.put("/:id", updateNote);

// Delete note
router.delete("/:id", deleteNote);

export default router;

// Note:
// 1. // What is an Endpoint? => is combination of a URL + HTTP method that lets the client interact with a specific resource.
