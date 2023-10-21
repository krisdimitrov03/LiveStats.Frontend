import './App.css';
import CompetitionDetails from './components/CompetitionDetails/CompetitionDetails';
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <div className="App">
      <CompetitionDetails id={3} />
    </div>
  );
}

export default App;
