const Feedback = require('../models/Feedback');
const vader = require('vader-sentiment');

const analyzeSentiment = async (req, res) => {
  try {
    const { text, source, topic } = req.body;

    // Validate input
    if (!text) {
      return res.status(400).json({ message: 'Text is required' });
    }

    // Perform sentiment analysis using VADER
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(text);
    const { neg, neu, pos, compound } = intensity;

    // Save feedback to the database
    const feedback = new Feedback({
      text,
      sentiment: compound, // Use compound score for overall sentiment
      source,
      topic,
      sentimentDetails: { neg, neu, pos }, // Store detailed sentiment scores
    });

    await feedback.save();

    // Return the sentiment analysis result
    res.json({
      sentiment: compound,
      details: { neg, neu, pos },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getFeedbackData = async (req, res) => {
  try {
    const feedbackData = await Feedback.find({});
    res.json(feedbackData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { analyzeSentiment, getFeedbackData };