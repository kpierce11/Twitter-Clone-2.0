import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Sidebar = () => {
    return (
        <Box sx={{ width: 250, p: 2, borderRight: '1px solid #e1e8ed' }}>
            <Typography variant="h6" sx={{ mb: 2, cursor: 'pointer' }}>Home</Typography>
            <Typography variant="h6" sx={{ mb: 2, cursor: 'pointer' }}>Explore</Typography>
            <Typography variant="h6" sx={{ mb: 2, cursor: 'pointer' }}>Notifications</Typography>
            <Typography variant="h6" sx={{ mb: 2, cursor: 'pointer' }}>Messages</Typography>
            <Typography variant="h6" sx={{ mb: 2, cursor: 'pointer' }}>Bookmarks</Typography>
            <Box sx={{ display : 'flex', alignItems: 'center', mt: 4, pt: 2, borderTop : '1px solid #e1e8ed' }}>
                <Avatar alt="Your Name" src="https://example.com/avatar.jpg" />
                <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold">Your Name</Typography>
                <Typography variant="body2" color="text.secondary">@yourhandle</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar