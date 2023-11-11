import './App.css';
import Landing from './landing';
import Dashboard from './ui-components/Dashboard';
import StudyGroups from './pages/StudyGroups';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/studygroup" element={<StudyGroups />} />
        </Routes>
      </Router>
    </div>
  );
}

export default (App);
