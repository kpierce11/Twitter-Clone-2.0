import React from 'react'
import Sidebar from './components/Sidebar';
import Box from '@mui/material/Box';
import Home from './components/pages/Home';

const App = () => {
  return (
    <Router>
    <Box sx={{ backgroundColor: '#f5f8fa', minHeight: '100vh' }}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Box>
    </Router>
  )
} 

export default App