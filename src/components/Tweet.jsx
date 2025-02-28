import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Tweet = ({ tweet, onToggleLike, onReplySubmit }) => {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyContent.trim()) {
      onReplySubmit(tweet.id, replyContent);
      setReplyContent('');
      setShowReplyBox(false);
    }
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardHeader
        avatar={<Avatar src={tweet.avatar} alt={tweet.name} />}
        title={tweet.name}
        subheader={`@${tweet.handle} • ${tweet.timestamp}`}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {tweet.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onToggleLike(tweet.id)}>
          {tweet.liked ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {tweet.likes}
        </Typography>
        <Button onClick={() => setShowReplyBox(!showReplyBox)}>Reply</Button>
      </CardActions>
      {showReplyBox && (
        <Box component="form" onSubmit={handleReplySubmit} sx={{ pl: 4, pr: 4, pb: 2 }}>
          <TextField
            fullWidth
            multiline
            rows={2}
            placeholder="Tweet your reply"
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            variant="outlined"
            sx={{
              backgroundColor: 'background.paper',
              '& .MuiInputBase-root': { color: 'text.primary' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#38444d' },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <Button type="submit" variant="contained" color="primary">
              Reply
            </Button>
          </Box>
        </Box>
      )}
      {tweet.replies && tweet.replies.map(reply => (
        <Card key={reply.id} sx={{ ml: 4, mb: 1 }}>
          <CardHeader
            avatar={<Avatar src={reply.avatar} alt={reply.name} />}
            title={reply.name}
            subheader={`@${reply.handle}`}
          />
          <CardContent>
            <Typography variant="body2" color="text.primary">
              {reply.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Card>
  );
};

export default Tweet;
