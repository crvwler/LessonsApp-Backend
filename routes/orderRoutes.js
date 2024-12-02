const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// POST a new order
router.post("/", async (req, res) => {
  console.log("Order route hit");
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

// GET all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).send("Error retrieving orders");
  }
});

module.exports = router;
