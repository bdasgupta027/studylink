import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from "react";
import { Button } from "@aws-amplify/ui-react";
import Switch from '@mui/material/Switch';
import { TextField } from "@mui/material";  
import FormControlLabel from '@mui/material/FormControlLabel';
import { API } from 'aws-amplify'
import { createStudyGroupCard } from '../graphql/mutations';
import { Auth } from "aws-amplify";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';

const CreateStudyGroupCardMutation = `
  mutation CreateStudyGroupCard(
    $input: CreateStudyGroupCardInput!
    $condition: ModelStudyGroupCardConditionInput
  ) {
    createStudyGroupCard(input: $input, condition: $condition) {
      id
      groupName
      numMembers
      className
      acceptingMembers
      description
      groupOwner
      image
      memberList
      createdAt
      updatedAt
      __typename
    }
  }
`

const StudyGroupForm = ({ open, toggleForm }) => {
  const [nameInput, setNameInput] = useState('');
  const [descInput, setDescInput] = useState('');
  const [switchValue, setSwitchValue] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [studyGroupID, setStudyGroupID] = useState('');

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescInput(e.target.value);
  };

  const handleSwitchChange = (e) => {
    setSwitchValue(e.target.checked);
  };

  const navigate = useNavigate();

  const handleUploadClick = () => {
    document.getElementById('contained-button-file').click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await Auth.currentAuthenticatedUser();
    const newStudyGroup = {
      groupName: nameInput, 
        numMembers: 1,
        acceptingMembers: !switchValue,
        description: descInput,
        memberList: [],
        className: 'class_placeholder',
        groupOwner: user.attributes.email,
    }
    toggleForm();
    const response = await API.graphql({
      query: CreateStudyGroupCardMutation, 
      variables: { input: newStudyGroup },
      query: createStudyGroupCard, 
      variables: { input: newStudyGroup, condition: null },
    });
    const createdStudyGroupID = response.data.createStudyGroupCard.id;
    navigate(`/${createdStudyGroupID}`);
  };

  return (
    <Dialog open>
          <DialogTitle>Create Study Group</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit}>
              <DialogContentText>
                To create a study group, please fill out some necessary information.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Study Group Name"
                value={nameInput}
                onChange={handleNameChange}
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Description"
                value={descInput}
                onChange={handleDescChange}
                fullWidth
                multiline 
                variant="standard"
              />
              <FormControlLabel control={
                <Switch 
                checked={switchValue}
                onChange={handleSwitchChange}/>
              } label="Invite Only" />
              {selectedImage && (
                <div>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                  />
                </div>
              )}
              <DialogContentText>
                Please upload an image to represent the study group.
              </DialogContentText>
              <label htmlFor="contained-button-file">
                <Button contained onClick={handleUploadClick}>
                  Upload Image
                  <input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                </Button>
              </label>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleForm}>Cancel</Button>
            <Button variation="primary" onClick={handleSubmit}>Create</Button>
          </DialogActions>
        </Dialog>
  );
}

export default StudyGroupForm;