const { MongoClient } = require("mongodb");

const connectDB = async () => {
  const client = new MongoClient(process.env.MONGO_URI);
  try {
    await client.connect();
    console.log("Database connected successfully!");
    return client.db("LessonApp");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
