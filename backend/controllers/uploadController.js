const csv = require('csv-parser');
const fs = require('fs');
const Feedback = require('../models/Feedback');
const Sentiment = require('sentiment');

const processCsv = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const sentiment = new Sentiment();
  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csv())
    .on('data', async (data) => {
      try {
        const result = sentiment.analyze(data.feedback);
        const feedback = new Feedback({
          text: data.feedback,
          sentiment: result.score,
          source: 'csv',
          topic: data.topic || 'General',
        });
        await feedback.save();
        results.push(feedback);
      } catch (error) {
        console.error('Error processing row:', error);
      }
    })
    .on('end', () => {
      fs.unlinkSync(req.file.path); // Delete the file after processing
      res.json({ message: 'File processed', results });
    })
    .on('error', (error) => {
      fs.unlinkSync(req.file.path); // Delete the file on error
      res.status(500).json({ message: 'Error processing file', error });
    });
};

module.exports = { processCsv };