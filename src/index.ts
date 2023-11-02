import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import notesRouter from "./routes";

// setting up the server
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({ msg: "Notes App Api is up and running" });
});

app.use("/api", notesRouter);

// connect to mongodb and start server
mongoose
  .connect(process.env.MONGODB_ATLAS_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`connected to mongodb and listening on Port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
