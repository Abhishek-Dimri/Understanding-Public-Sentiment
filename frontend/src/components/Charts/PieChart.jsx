import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './Charts.module.css';

// Register Chart.js elements
ChartJS.register(LineElement, PointElement, LinearScale, Title);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Sentiment Score',
      data: [65, 59, 80, 81, 56], // Replace with real data
      borderColor: '#007bff',
      fill: false,
    },
  ],
};

const LineChart = () => (
  <div className={styles.chart}>
    <Line data={data} />
  </div>
);

export default LineChart;