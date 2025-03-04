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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 2,
        mb: 2,
        backgroundColor: 'background.paper',
        border: '1px solid #38444d',
        borderRadius: 2,
      }}
    >
      <TextField
        fullWidth
        multiline
        rows={3}
        placeholder="What's happening?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        variant="outlined"
        sx={{
          backgroundColor: 'background.paper',
          '& .MuiInputBase-root': {
            color: 'text.primary',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#38444d',
          },
        }}
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
