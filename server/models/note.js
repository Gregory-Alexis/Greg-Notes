const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: { type: String },
  note: { type: String },
});

module.exports = mongoose.model("Note", noteSchema);
