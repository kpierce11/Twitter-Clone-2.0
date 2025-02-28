// Sidebar.jsx
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

// Import whichever icons you want from @mui/icons-material
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Sidebar = () => {
  return (

    <Box
      sx={{
        width: 250,
        p: 2,
        borderRight: '1px solid #e1e8ed',
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column',
      }}
    >

      <Box sx={{ mb: 3 }}>
        <img
          src="src/assets/twitter-bird.svg"
          alt="Twitter Logo"
          style={{ width: '40px', cursor: 'pointer' }}
        />
      </Box>


      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          cursor: 'pointer',
          p: 1,
          borderRadius: '50px',
          '&:hover': {
            backgroundColor: 'rgba(29,161,242,0.1)', // Twitter blue highlight
          },
        }}
      >
        <HomeIcon sx={{ mr: 2 }} />
        <Typography variant="h6">Home</Typography>
      </Box>


      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          cursor: 'pointer',
          p: 1,
          borderRadius: '50px',
          '&:hover': {
            backgroundColor: 'rgba(29,161,242,0.1)',
          },
        }}
      >
        <SearchIcon sx={{ mr: 2 }} />
        <Typography variant="h6">Explore</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          cursor: 'pointer',
          p: 1,
          borderRadius: '50px',
          '&:hover': {
            backgroundColor: 'rgba(29,161,242,0.1)',
          },
        }}
      >
        <NotificationsIcon sx={{ mr: 2 }} />
        <Typography variant="h6">Notifications</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          cursor: 'pointer',
          p: 1,
          borderRadius: '50px',
          '&:hover': {
            backgroundColor: 'rgba(29,161,242,0.1)',
          },
        }}
      >
        <MailIcon sx={{ mr: 2 }} />
        <Typography variant="h6">Messages</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          cursor: 'pointer',
          p: 1,
          borderRadius: '50px',
          '&:hover': {
            backgroundColor: 'rgba(29,161,242,0.1)',
          },
        }}
      >
        <BookmarkIcon sx={{ mr: 2 }} />
        <Typography variant="h6">Bookmarks</Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          pt: 2,
          borderTop: '1px solid #e1e8ed',
        }}
      >
        <Avatar alt="Your Name" src="https://example.com/avatar.jpg" />
        <Box sx={{ ml: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Your Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            @yourhandle
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
