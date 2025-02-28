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
      <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#f5f8fa' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* More routes can be added here */}
        </Routes>
        <Box sx={{ width: 300, p: 2 }}>
          <Trends />
        </Box>
      </Box>
    </Router>
  );
};

export default App;
