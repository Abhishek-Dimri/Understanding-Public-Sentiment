import styles from './Dashboard.module.css';
import PieChart from '../components/Charts/PieChart';
import LineChart from '../components/Charts/LineChart';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <div className={styles.charts}>
        <PieChart />
        <LineChart />
      </div>
    </div>
  );
};

export default Dashboard;
