require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const lessonRoutes = require("./routes/lessonRoutes");
const orderRoutes = require("./routes/orderRoutes");
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Serve Static Files Middleware
app.use("/images", express.static(path.join(__dirname, "public", "images")));

// Routes
app.use("/lessons", lessonRoutes);
app.use("/orders", orderRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Fallback Route (404 Handler)
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Start Server and Connect to DB
(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})();
