import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Tweet = ({ tweet, onLike }) => {
    return (
    <Card sx={{ mb: 2 }}>
        <CardHeader
        avatar={<Avatar src={tweet.avatar} alt={tweet.name} />}
        title={tweet.name}
        subhearder={`@${tweet.handle} • ${tweet.timestamp}`}
        />
        <CardContent>
            <Typography variant="body1">
                {tweet.content}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => onLike(tweet.id)}>Like {tweet.likes}</Button>
            <Button size="small">Reply</Button>
            <Button size="small">Retweet</Button>    
        </CardActions>
    </Card>
    );
};

export default Tweet;