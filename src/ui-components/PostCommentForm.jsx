// PostCommentForm.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const PostCommentForm = ({ open, handleClose }) => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    console.log('Username:', username);
    console.log('Comment:', comment);
    // Add logic to handle the form data
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
        <h2>Post a Comment</h2>
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
            label="Comment"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default PostCommentForm;
