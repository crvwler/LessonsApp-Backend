const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson");

// GET all lessons
router.get("/", async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// POST a new lesson
router.post("/", async (req, res) => {
  try {
    const newLesson = new Lesson(req.body);
    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

module.exports = router;
