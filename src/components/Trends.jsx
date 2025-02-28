// src/components/Trends.jsx
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Trends = () => {
  const trends = [
    { id: 1, topic: '#React', tweets: 12000 },
    { id: 2, topic: '#JavaScript', tweets: 15000 },
    { id: 3, topic: '#HiringThePersonThatMadeThis', tweets: 8000 },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Trends for you</Typography>
      {trends.map(trend => (
        <Box key={trend.id} sx={{ mb: 1, borderBottom: '1px solid #e1e8ed', pb: 1 }}>
          <Typography variant="subtitle1">{trend.topic}</Typography>
          <Typography variant="caption" color="text.secondary">{trend.tweets} Tweets</Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default Trends;
