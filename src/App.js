import './App.css';
import Landing from './landing';
import Profile from './profile';
import StudyGroup from './studygroup';
import Dashboard from './ui-components/Dashboard';
import EditProfile from './ui-components/SLEditProfile';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { API, DataStore, Amplify, Auth, Hub } from 'aws-amplify'
import { useEffect } from 'react';
// import StudyGroupCard from './ui-components/StudyroupCard';

const CreateProfileCardMutation = `
mutation createProfileCard($input: CreateProfileCardInput!) {
  createProfileCard(input: $input) {
    id
    firstName
    email
  }
}
`

function App() {
  useEffect(() => {
    const removeListener = Hub.listen('auth', async (data) => {
      if (data.payload.event === 'signIn') {
        const userInfo = data.payload.data.attributes;
        const newUser = {
          id: userInfo.sub,
          firstName: userInfo.name,
          email: userInfo.email,
        }
        // console.log(userInfo.name);
        await API.graphql({
          query: CreateProfileCardMutation, 
          variables: { input: newUser } 
        });
        
      }
    });
    return () => {
      removeListener();
    };
  }, []);
 

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Edit-Profile" element={<EditProfile />} />
          <Route path="/:id" element={<StudyGroup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default (App);
