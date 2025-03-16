const express = require('express');
const { analyzeSentiment, getFeedbackData } = require('../controllers/sentimentController');

const router = express.Router();

// Analyze sentiment
router.post('/analyze', analyzeSentiment);

// Fetch feedback data for charts
router.get('/feedback', getFeedbackData);

module.exports = router;