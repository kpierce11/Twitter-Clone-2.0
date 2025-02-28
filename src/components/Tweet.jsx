import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

const Tweet = ({ tweet, onLike }) => {
    return (
    <Card sx={{ mb: 2 }}>
        <CardHeader
        avatar={<Avatar src={tweet.avatar} alt={tweet.name} />}
        title={<Typography variant="body1" sx = {{ fontWeight: 700 }}>
        {tweet.name}{' '}
        <Typography
            component="span"
            variant="body2"
            color="text.secondary"
            sx={{ ml: 1 }}
            >
            @{tweet.handle} · {tweet.timestamp}
        </Typography>
        </Typography>}
        />
        <CardContent>
            <Typography variant="body1">
                {tweet.content}
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton size="small"><ChatBubbleOutlineIcon fontSize="small" /></IconButton>
            <IconButton size="small"><RepeatIcon fontSize="small" /></IconButton>
            <IconButton size="small" onClick={() => onLike(tweet.id)}><FavoriteBorderIcon fontSize="small" />
            <span style={{ marginLeft: 4 }}>{tweet.likes}</span></IconButton>
            <IconButton size="small"><IosShareIcon fontSize="small" /></IconButton>
        </CardActions>
    </Card>
    );
};

export default Tweet;