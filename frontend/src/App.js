import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import AddPage from './components/AddPage';


function App() {
  return (
    <div className="App">
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/add" Component={AddPage} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;