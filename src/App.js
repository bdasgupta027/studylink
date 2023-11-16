import './App.css';
import Landing from './landing';
import Profile from './profile';
import Notes from "./notes"
//import StudyGroup from './studygroup';
import Dashboard from './ui-components/Dashboard';
import EditProfile from './ui-components/SLEditProfile';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Edit-Profile" element={<EditProfile />} />
          <Route path="/Notes" element={<Notes />} />
          {/* <Route path="/studygroup/:id" element={<StudyGroup />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default (App);
