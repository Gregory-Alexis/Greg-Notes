const Note = require("../models/note");

exports.createNote = async (req, res, next) => {
  delete req.body.id;
  const note = new Note({
    ...req.body,
  });
  await note
    .save()
    .then(() => res.status(201).json({ message: "Note enregistré" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllNote = (req, res, next) => {
  Note.find()
    .then((note) => res.status(200).json(note))
    .catch((error) => res.status(400).json({ error }));
};

exports.findOneNote = (req, res, next) => {
  Note.findOne({ _id: req.params.id })
    .then((note) => res.status(200).json(note))
    .catch((error) => res.status(400).json({ error }));
};

exports.modifyNote = (req, res, next) => {
  Note.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Note modifiée" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteNote = (req, res, next) => {
  Note.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Note supprimée" }))
    .catch((error) => res.status(400).json({ error }));
};
