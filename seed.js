const dotenv = require("dotenv");
const connectDB = require("./db");
const Lesson = require("./models/Lesson");

dotenv.config();

// Seed data
const lessons = [
  {
    id: 1,
    subject: "Mathematics",
    location: "London",
    price: 100,
    availableSpaces: 5,
    image: "/images/mathematics.jpg",
  },
  {
    id: 2,
    subject: "English Literature",
    location: "Manchester",
    price: 80,
    availableSpaces: 5,
    image: "/images/english.jpg",
  },
  {
    id: 3,
    subject: "Physics",
    location: "Birmingham",
    price: 120,
    availableSpaces: 5,
    image: "/images/physics.jpg",
  },
  {
    id: 4,
    subject: "Chemistry",
    location: "Liverpool",
    price: 110,
    availableSpaces: 5,
    image: "/images/chemistry.jpg",
  },
  {
    id: 5,
    subject: "Biology",
    location: "Bristol",
    price: 90,
    availableSpaces: 5,
    image: "/images/biology.jpg",
  },
  {
    id: 6,
    subject: "History",
    location: "Leeds",
    price: 70,
    availableSpaces: 5,
    image: "/images/history.jpg",
  },
  {
    id: 7,
    subject: "Geography",
    location: "Sheffield",
    price: 95,
    availableSpaces: 5,
    image: "/images/geography.jpg",
  },
  {
    id: 8,
    subject: "Computer Science",
    location: "Nottingham",
    price: 130,
    availableSpaces: 5,
    image: "/images/computer.jpg",
  },
  {
    id: 9,
    subject: "Art",
    location: "Brighton",
    price: 60,
    availableSpaces: 5,
    image: "/images/art.jpg",
  },
  {
    id: 10,
    subject: "Music",
    location: "Oxford",
    price: 150,
    availableSpaces: 5,
    image: "/images/music.jpg",
  },
  {
    id: 11,
    subject: "Physical Education",
    location: "Cambridge",
    price: 85,
    availableSpaces: 5,
    image: "/images/physicaleducation.jpg",
  },
  {
    id: 12,
    subject: "Philosophy",
    location: "Edinburgh",
    price: 100,
    availableSpaces: 5,
    image: "/images/philosophy.jpg",
  },
  {
    id: 13,
    subject: "Economics",
    location: "York",
    price: 115,
    availableSpaces: 5,
    image: "/images/economics.jpg",
  },
  {
    id: 14,
    subject: "French",
    location: "Cardiff",
    price: 75,
    availableSpaces: 5,
    image: "/images/french.jpg",
  },
  {
    id: 15,
    subject: "Psychology",
    location: "Glasgow",
    price: 125,
    availableSpaces: 5,
    image: "/images/psychology.jpg",
  },
];

// Seed function
const seedLessons = async () => {
  try {
    await connectDB();

    // Delete existing lessons and seed new ones
    await Lesson.deleteMany();
    console.log("Existing lessons deleted.");
    await Lesson.insertMany(lessons);
    console.log("Lessons seeded successfully!");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

// Run seed function
seedLessons();
