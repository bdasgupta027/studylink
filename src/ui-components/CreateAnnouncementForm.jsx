import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createAnnouncement } from '../graphql/mutations';
import { API } from "aws-amplify";
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const CreateAnnouncementForm = ({ open, handleClose, studyGroupId }) => {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const history = useNavigate();
  const { groupId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    console.log('Username:', username);
    console.log('Title:', title);
    console.log('Announcement:', announcement);
    console.log('GroupID:', studyGroupId);

    const response = await API.graphql({
      query: createAnnouncement,
      variables: {
        input: {
          username: username,
          title: title,
          announcement: announcement,
          studygroupcardID: studyGroupId,
        },
      },
    });

    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Create an Announcement</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username (Email)"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Announcement"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateAnnouncementForm;
