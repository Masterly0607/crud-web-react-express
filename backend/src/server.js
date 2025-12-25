import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Cors middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// express.json() = is a middleware that Reads the raw data, Parses JSON text → JS object, Assigns it to req.body
app.use(express.json());

// Rate limit middleware
app.use(rateLimiter);

// Group route(using app.use() method) = When users request "/api/notes", it will go to "notesRoutes.js"
app.use("/api/notes", notesRoutes);

// Connect to DB and then start the server
connectDB().then(() => {
  app.listen(PORT, () => console.log("Server started on PORT: 5001"));
});
