import './App.css';
import Landing from './landing';
import Profile from './profile';
//import StudyGroup from './studygroup';
import Dashboard from './ui-components/Dashboard';
import EditProfile from './ui-components/SLEditProfile';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { API, DataStore, Amplify, Hub } from 'aws-amplify'
import { useEffect } from 'react';
import Notes from "./notes";


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
        console.log(JSON.stringify(userInfo,null,2))
        const newUser = {
          id: userInfo.sub,
          firstName: userInfo.name,
          email: userInfo.email,
        }
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
          <Route path="/notes" element={<Notes />} />
          {/* <Route path="/studygroup/:id" element={<StudyGroup />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default (App);
