import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Sentiment Analysis Dashboard</h1>
      <p>Track real-time insights from social media and uploaded data!</p>
    </div>
  );
};

export default Home;