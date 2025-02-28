// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/pages/Home';
import Trends from './components/Trends';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <Router>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '1500px',
          margin: '0 auto',
          width: '100%',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            maxWidth: '1300px',
            px: 2,
          }}
        >
          <Box sx={{ width: 250, mr: 2 }}>
            <Sidebar />
          </Box>
          <Box sx={{ flex: 1, maxWidth: 600, mr: 2 }}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
          <Box sx={{ width: 350, p: 2 }}>
            <Trends />
          </Box>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
