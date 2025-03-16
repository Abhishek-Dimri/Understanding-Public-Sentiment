const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  text: String,
  sentiment: Number, // Compound score from VADER
  source: String, // 'twitter', 'reddit', 'csv'
  topic: String,
  sentimentDetails: { // Store detailed sentiment scores
    neg: Number, // Negative score
    neu: Number, // Neutral score
    pos: Number, // Positive score
  },
  createdAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;