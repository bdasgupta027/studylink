import './App.css';
import Landing from './landing';
import Profile from './profile';
import StudyGroup from './studygroup';
import Dashboard from './ui-components/Dashboard';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/studygroup/:id" element={<StudyGroup />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default (App);
