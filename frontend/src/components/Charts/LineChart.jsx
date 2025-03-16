import { useEffect, useRef } from 'react';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './Charts.module.css';

// Register Chart.js elements and scales
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

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

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Access the chart instance
    const chart = chartRef.current;

    return () => {
      // Destroy the chart instance on unmount
      if (chart) {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div className={styles.chart}>
      <Line ref={chartRef} data={data} />
    </div>
  );
};

export default LineChart;