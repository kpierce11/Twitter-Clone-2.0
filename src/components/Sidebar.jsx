import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const userAvatar = 'https://i.pravatar.cc/50?u=Sally';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        p: 2,
        borderRight: '1px solid #38444d',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'background.default',
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
            backgroundColor: 'rgba(29,161,242,0.2)',
          },
        }}
      >
        <HomeIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="text.primary">
          Home
        </Typography>
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
            backgroundColor: 'rgba(29,161,242,0.2)',
          },
        }}
      >
        <SearchIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="text.primary">
          Explore
        </Typography>
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
            backgroundColor: 'rgba(29,161,242,0.2)',
          },
        }}
      >
        <NotificationsIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="text.primary">
          Notifications
        </Typography>
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
            backgroundColor: 'rgba(29,161,242,0.2)',
          },
        }}
      >
        <MailIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="text.primary">
          Messages
        </Typography>
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
            backgroundColor: 'rgba(29,161,242,0.2)',
          },
        }}
      >
        <BookmarkIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="text.primary">
          Bookmarks
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          pt: 2,
          borderTop: '1px solid #38444d',
        }}
      >
        <Avatar alt="Your Name" src={userAvatar} />
        <Box sx={{ ml: 2 }}>
          <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
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
