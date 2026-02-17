const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/portfolio");

// Import database model
const Contact = require("./models/Contact.js");
// API to save form data
app.post("/contact", async (req, res) => {
  try {
    const data = new Contact(req.body);
    await data.save();
    res.send({ message: "Saved successfully!" });
  } catch (error) {
    res.status(500).send("Error saving data");
  }
});

// Start server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
