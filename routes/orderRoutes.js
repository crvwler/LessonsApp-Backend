const express = require("express");
const router = express.Router();
const connectDB = require("../db");

// POST a new order
router.post("/", async (req, res) => {
  const db = await connectDB();
  console.log("Order route hit");
  try {
    const { name, phone, lessonIDs, numberOfSpaces } = req.body;

    const newOrder = {
      name,
      phone,
      lessonIDs,
      numberOfSpaces,
    };

    const result = await db.collection("orders").insertOne(newOrder);
    res.status(201).json(result.ops[0]);
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// GET all orders
router.get("/", async (req, res) => {
  const db = await connectDB();
  try {
    const orders = await db.collection("orders").find().toArray();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).send("Error retrieving orders");
  }
});

module.exports = router;
