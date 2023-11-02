import NoteModel from "../models/noteModel";

const getNotes = async (req, res) => {
  try {
    const notes = await NoteModel.find({});
    res.send(notes);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createNote = async (req, res) => {
  const note = new NoteModel(req.body);

  note
    .save()
    .then(() => {
      res.status(201).send(note);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

const updateNote = async (req, res) => {
  try {
    const note = await NoteModel.findById(req.params.id);
    note.note = req.body.note;
    await note.save();
    res.status(200).send(note);
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await NoteModel.findByIdAndDelete(req.params.id);
    if (!note) {
      res.status(404).send("Note not found");
    }
    res.status(200).send("Note has been deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getNotes, createNote, updateNote, deleteNote };
