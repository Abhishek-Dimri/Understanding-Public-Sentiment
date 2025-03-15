const express = require("express");
const cors = require("cors");
const Sentiment = require("sentiment");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Sentiment analysis setup
const sentiment = new Sentiment();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// API route for sentiment analysis
app.post("/analyze", (req, res) => {
    const { text } = req.body;
    const result = sentiment.analyze(text);
    let sentimentResult = "";
    if (result.score > 0) {
        sentimentResult = "Positive 😊";
    } else if (result.score < 0) {
        sentimentResult = "Negative 😠";
    } else {
        sentimentResult = "Neutral 😐";
    }
    res.json({ sentiment: sentimentResult, score: result.score });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});