import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Button } from "@aws-amplify/ui-react";
import { TextField } from "@mui/material";  
import DialogActions from '@mui/material/DialogActions';
import { useState, useEffect } from "react";
import { API, Auth } from 'aws-amplify';
import { graphqlOperation } from 'aws-amplify';
import { listInvites } from '../graphql/queries';
import { listMemberCards } from '../graphql/queries';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { deleteInvite } from '../graphql/mutations';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';

const DeleteInviteMutation = `
mutation DeleteInvite(
  $input: DeleteInviteInput!
  $condition: ModelInviteConditionInput
) {
  deleteInvite(input: $input, condition: $condition) {
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

const CreateMemberCardMutation = `
      mutation createMemberCard($input: CreateMemberCardInput!) {
        createMemberCard(input: $input) {
          id
          username
          studyGroupId
          userId
        }
      }
    `;

const getStudyGroupQuery = `
  query GetStudyGroupCard($id: ID!) {
    getStudyGroupCard(id: $id) {
      id
      groupName
      numMembers
      className
      acceptingMembers
      description
      groupOwner
      image
      memberList
      Announcements {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`

const Notifications = ({ open, toggleForm, userEmail }) => {
  const [invites, setInvites] = useState([]);
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [deleteId, setDeleteId] = useState('');
  const uuid = require('uuid');

  const navigate = useNavigate();

  const buttonHandler = (id) => {
    navigate(`/${id}`);
  }

  const confirmDecline = (id) => {
    setConfirmationOpen(true);
    setDeleteId(id);
  }

  const toggleConfirmation = () => {
    setConfirmationOpen(!confirmationOpen);
  }

  const handleDelete = async () => {
    try {
      console.log(deleteId);
      const delInvite = {
        id: deleteId,
      }
      await API.graphql({
        query: DeleteInviteMutation, 
        variables: { input: delInvite },
        query: deleteInvite, 
        variables: { input: delInvite, condition: null },
      });
      toggleConfirmation();
    } catch (error) {
      console.error('Error deleting invite:', error);
    }
  };

  const fetchGroupName = async (invite) => {
    try {
      const response = await API.graphql(graphqlOperation(getStudyGroupQuery, { id: invite.studygroupid }));
      invite.groupname = response.data.getStudyGroupCard.groupName
      console.log(invite);
    } catch (error) {
      console.error('Error fetching study group:', error);
    }
  }

  useEffect(() => {
    const fetchInvites = async () => {
      try {
        const filter = {
          receiver: {
            eq: userEmail
          }
        };
        const result = await API.graphql(
          graphqlOperation(listInvites, {
            filter,
          })
        );
        const results = result.data.listInvites.items;
        for (const invite of results) {
          await fetchGroupName(invite);
        }
        setInvites(results);
      } catch (error) {
        console.error('Error fetching invites:', error);
      }
    }
    fetchInvites();
  }, [confirmationOpen]);

  async function addMember(sgid, inviteid) {
    try {
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);

        const existingMembersResponse = await API.graphql({
            query: listMemberCards,
            variables: {
                filter: {
                    studyGroupId: {
                        eq: sgid,
                    },
                    userId: {
                        eq: user.attributes.sub,
                    },
                },
            },
        });

        const existingMembers = existingMembersResponse.data.listMemberCards.items;

        if (existingMembers.length > 0) {
            console.log('Member card already exists for the user in this study group.');
        } else {
            const newMember = {
                id: uuid.v4(),
                username: user.attributes.email,
                userId: user.attributes.sub,
                studyGroupId: sgid,
            };

            console.log('NEW MEMBER', newMember);

            await API.graphql({
                query: CreateMemberCardMutation,
                variables: { input: newMember },
            });

            console.log('created');
            
        }
    } catch (err) {
        console.log(err);
    }
    try {
      const delInvite = {
        id: inviteid,
      }
      await API.graphql({
        query: DeleteInviteMutation, 
        variables: { input: delInvite },
        query: deleteInvite, 
        variables: { input: delInvite, condition: null },
      });
      navigate(`/${sgid}`);
    } catch (error) {
      console.error('Error deleting invite:', error);
    }
  }

  return (
    <Dialog onClose={toggleForm} open={open}>
      <DialogTitle>You have {invites.length} pending invite{invites.length===1?"":"s"}</DialogTitle>
      <List sx={{ pt: 0 }}>
        {invites.map((invite) => (
          <ListItem disableGutters key={invite.id}>
            <ListItemButton>
              <ListItemText primary={invite.groupname} secondary={"Invited by "+invite.sender} />
            </ListItemButton>
            <ListItemButton onClick={() => addMember(invite.studygroupid, invite.id)}>
              <CheckIcon />
            </ListItemButton>
            <ListItemButton onClick={() => confirmDecline(invite.id)}>
              <CloseIcon />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {confirmationOpen && (
      <Dialog onClose={toggleConfirmation} open={confirmationOpen}>
      <DialogTitle>Are you sure you want to decline this study group invite?</DialogTitle>
      <DialogActions>
          <Button onClick={toggleConfirmation}>Cancel</Button>
          <Button variation="primary" onClick={handleDelete}>Decline</Button>
        </DialogActions>
      </Dialog>
      )}
    </Dialog>
    
  );
}

export default Notifications;