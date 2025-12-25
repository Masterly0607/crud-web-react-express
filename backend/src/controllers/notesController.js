import Note from "../models/Node.js";

// Get all notes
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    console.log(req.body);
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Get note by id
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Create new note
export async function createNote(req, res) {
  try {
    const { title, content } = req.body; // Get values from user input
    const note = new Note({ title, content }); // Creates a Mongoose document in memory. Why we need this before save into Mongdb? => Because MongoDB cannot accept raw JavaScript objects directly — Mongoose must first turn them into a document that follows the schema. They apply schema, Creates a Mongoose document(Adds methods like .save(), Adds metadata (_id, timestamps), Tracks changes), and Prepares data for MongoDB(Converts JS object → MongoDB document format). Note: When the key name and variable name are the same, we don't need to add key
    const savedNote = await note.save(); // Inserts the document into the collection
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body; // Get user input
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    }); // Find user id and update it by title and content
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Delete note
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
