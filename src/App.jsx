import React from 'react'
import Sidebar from './components/Sidebar';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f8fa', minHeight: '100vh' }}>
      <Sidebar />
      </Box>
  )
};

export default App