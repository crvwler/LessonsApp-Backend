const express = require("express");
const router = express.Router();
const connectDB = require("../db");

// GET all lessons
router.get("/", async (req, res) => {
  const db = await connectDB();
  try {
    const lessons = await db.collection("lessons").find().toArray();
    res.json(lessons);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// POST a new lesson
router.post("/", async (req, res) => {
  const db = await connectDB();
  try {
    const newLesson = req.body;
    const result = await db.collection("lessons").insertOne(newLesson);
    res.status(201).json(result.ops[0]);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

module.exports = router;
