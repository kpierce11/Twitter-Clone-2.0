// src/components/ComposeTweet.jsx
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ComposeTweet = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ p: 2, mb: 2, border: '1px solid #e1e8ed', borderRadius: 2 }}>
      <TextField
        fullWidth
        multiline
        rows={3}
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        variant="outlined"
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
        <Button type="submit" variant="contained" color="primary">
          Tweet
        </Button>
      </Box>
    </Box>
  );
};

export default ComposeTweet;
