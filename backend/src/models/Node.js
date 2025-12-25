import mongoose from "mongoose";

// Create Schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // createdAt, updatedAt
);
const Note = mongoose.model("Note", noteSchema); // Create "Note" model base on "noteSchema"
export default Note;
