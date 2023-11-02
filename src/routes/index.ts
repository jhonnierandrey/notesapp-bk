import express from "express";
import { getNotes, createNote, updateNote, deleteNote } from "../controllers";

const router = express.Router();

router.get("/notes", getNotes);
router.post("/notes", createNote);
router.patch("/notes/:id", updateNote);
router.delete("/notes/:id", deleteNote);

export default router;
