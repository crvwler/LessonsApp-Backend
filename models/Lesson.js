const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  availableSpaces: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("Lesson", LessonSchema);
