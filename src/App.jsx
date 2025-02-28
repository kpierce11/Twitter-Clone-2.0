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
      <Box sx={{ display: 'flex', maxWidth: '1300px', margin: '0 auto', width: '100%', height: '100vh', backgroundColor: '#f5f8fa' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* More routes can be added here */}
        </Routes>
        <Box sx={{ width: 350, p: 2 }}>
          <Trends />
        </Box>
      </Box>
    </Router>
  );
};

export default App;
