const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// POST a new order
router.post("/", async (req, res) => {
  try {
    const { name, phone, lessonIDs, numberOfSpaces } = req.body;

    // Create new Order with provided data
    const newOrder = new Order({
      name,
      phone,
      lessonIDs,
      numberOfSpaces,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

module.exports = router;
