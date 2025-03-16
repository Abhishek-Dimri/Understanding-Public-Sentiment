import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './Dashboard.module.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [formData, setFormData] = useState({
    text: '',
    source: '',
    topic: '',
  });
  const [result, setResult] = useState(null);
  const [feedbackData, setFeedbackData] = useState([]);

  // Fetch feedback data on component mount
  useEffect(() => {
    fetchFeedbackData();
  }, []);

  const fetchFeedbackData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/sentiment/feedback');
      setFeedbackData(response.data);
    } catch (error) {
      console.error('Error fetching feedback data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/sentiment/analyze', formData);
      setResult(response.data);
      fetchFeedbackData(); // Refresh feedback data after submission
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  };

  // Prepare data for the bar chart
  const chartData = {
    labels: ['Positive', 'Neutral', 'Negative'],
    datasets: [
      {
        label: 'Feedback Count',
        data: [
          feedbackData.filter((item) => item.sentiment > 0.05).length, // Positive
          feedbackData.filter((item) => item.sentiment >= -0.05 && item.sentiment <= 0.05).length, // Neutral
          feedbackData.filter((item) => item.sentiment < -0.05).length, // Negative
        ],
        backgroundColor: ['#4CAF50', '#9E9E9E', '#F44336'],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <div className={styles.flex}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Feedback Text:</label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Source:</label>
          <input
            type="text"
            name="source"
            value={formData.source}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Topic:</label>
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Analyze Sentiment</button>
      </form>

      {result && (
        <div className={styles.result}>
          <h2>Sentiment Analysis Result</h2>
          <p><strong>Sentiment Score:</strong> {result.sentiment}</p>
          <p><strong>Details:</strong></p>
          {/* <ul>
            <li>Negative: {result.details.neg}</li>
            <li>Neutral: {result.details.neu}</li>
            <li>Positive: {result.details.pos}</li>
          </ul> */}
        </div>
      )}
      </div>

      <div className={styles.chart}>
        <h2>Feedback Distribution</h2>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;