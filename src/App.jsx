import './App.css';
import { Routes, Route } from 'react-router-dom'
import CompetitionDetails from './components/CompetitionDetails/CompetitionDetails';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar'
import Matches from './components/Matches/Matches';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
