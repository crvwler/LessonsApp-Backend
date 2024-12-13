const express = require("express");
const router = express.Router();
const connectDB = require("../db");
const { ObjectId } = require("mongodb");

// POST a new order
router.post("/", async (req, res) => {
  const db = await connectDB();
  try {
    const { name, phone, lessonIDs, numberOfSpaces } = req.body;

    if (!name || !phone || !lessonIDs || !numberOfSpaces) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const order = {
      name,
      phone,
      lessonIDs: lessonIDs.map((id) => new ObjectId(id)),
      numberOfSpaces,
    };

    const result = await db.collection("orders").insertOne(order);

    // Fetch the inserted order using the insertedId
    const insertedOrder = await db
      .collection("orders")
      .findOne({ _id: result.insertedId });

    res.status(201).json(insertedOrder); // Return the full inserted order
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
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
