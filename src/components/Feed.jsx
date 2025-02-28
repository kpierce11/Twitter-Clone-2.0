import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tweet from './Tweet';
import ComposeTweet from './ComposeTweet';

const userAvatar = 'https://i.pravatar.cc/50?u=Sally';
const johnAvatarIndex = 12;
const janeAvatarIndex = 39;

const Feed = () => {
  const [tweets, setTweets] = useState([
    {
      id: 1,
      avatar: `https://i.pravatar.cc/50?img=${johnAvatarIndex}`,
      name: 'John Doe',
      handle: 'johndoe',
      timestamp: '2h',
      content: 'This is my first tweet!',
      likes: 0,
    },
    {
      id: 2,
      avatar: `https://i.pravatar.cc/50?img=${janeAvatarIndex}`,
      name: 'Jane Smith',
      handle: 'janesmith',
      timestamp: '3h',
      content: 'Is this thing on?',
      likes: 2,
    },
  ]);

  const addTweet = (content) => {
    const newTweet = {
      id: Date.now(),
      avatar: userAvatar,
      name: 'Your Name',
      handle: 'yourhandle',
      timestamp: 'Just now',
      content,
      likes: 0,
    };
    setTweets([newTweet, ...tweets]);
  };

  const handleLike = (id) => {
    setTweets(
      tweets.map(tweet =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };

  return (
    <Box sx={{ flex: 1, maxWidth: 600, p: 2 }}>
      <ComposeTweet onSubmit={addTweet} />
      {tweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} onLike={handleLike} />
      ))}
    </Box>
  );
};

export default Feed;
