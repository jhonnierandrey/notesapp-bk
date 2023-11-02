import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  note: {
    type: String,
    required: true,
    unique: true,
  },
});

const NoteModel = mongoose.model("Note", NoteSchema);

export default NoteModel;
