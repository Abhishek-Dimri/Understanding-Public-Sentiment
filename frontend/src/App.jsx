import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Upload from './pages/Upload';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard /> }/>
        {/* <Route path="/upload" element={<Upload />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
