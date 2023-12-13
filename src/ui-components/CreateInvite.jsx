import Dialog from '@mui/material/Dialog';
import { Button } from "@aws-amplify/ui-react";
import { TextField } from "@mui/material";  
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect } from "react";
import { Auth } from 'aws-amplify';
import { API } from 'aws-amplify';
import { createInvite } from '../graphql/mutations';


const CreateInviteMutation = `
mutation CreateInvite(
  $input: CreateInviteInput!
  $condition: ModelInviteConditionInput
) {
  createInvite(input: $input, condition: $condition) {
    id
    sender
    receiver
    studygroupid
    createdAt
    updatedAt
    __typename
  }
}
`

const CreateInvite = ({ open, toggleForm, studygroupid }) => {
  const [emailInput, setEmailInput] = useState('');
  const uuid = require('uuid');

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await Auth.currentAuthenticatedUser()
    const newInvite = {
      id: uuid.v4(),
      sender: user.attributes.email,
      receiver: emailInput,
      studygroupid: studygroupid,
    }
    toggleForm();
    await API.graphql({
      query: CreateInviteMutation, 
      variables: { input: newInvite },
      query: createInvite, 
      variables: { input: newInvite, condition: null },
    });
  };

  return (
    <Dialog onClose={toggleForm} open={open}>
      <DialogTitle>Send Invite</DialogTitle>
      <DialogContent>
            <form onSubmit={handleSubmit}>
              <DialogContentText>
                Please enter the user's email you'd like to invite.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email"
                value={emailInput}
                onChange={handleEmailChange}
                fullWidth
                variant="standard"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleForm}>Cancel</Button>
            <Button variation="primary" onClick={handleSubmit}>Send</Button>
          </DialogActions>
    </Dialog>
  );
}

export default CreateInvite;