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
      liked: false,
      replies: []
    },
    {
      id: 2,
      avatar: `https://i.pravatar.cc/50?img=${janeAvatarIndex}`,
      name: 'Jane Smith',
      handle: 'janesmith',
      timestamp: '3h',
      content: 'Is this thing on?',
      likes: 2,
      liked: false,
      replies: []
    }
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
      liked: false,
      replies: []
    };
    setTweets([newTweet, ...tweets]);
  };

  const toggleLike = (id) => {
    setTweets(
      tweets.map(tweet => {
        if(tweet.id === id){
          return tweet.liked
            ? { ...tweet, liked: false, likes: tweet.likes - 1 }
            : { ...tweet, liked: true, likes: tweet.likes + 1 };
        }
        return tweet;
      })
    );
  };

  const addReply = (tweetId, replyContent) => {
    const newReply = {
      id: Date.now(),
      avatar: userAvatar,
      name: 'Your Name',
      handle: 'yourhandle',
      content: replyContent,
    };
    setTweets(
      tweets.map(tweet => {
        if(tweet.id === tweetId){
          return { ...tweet, replies: [...tweet.replies, newReply] };
        }
        return tweet;
      })
    );
  };

  return (
    <Box sx={{ flex: 1, maxWidth: 600, p: 2 }}>
      <ComposeTweet onSubmit={addTweet} />
      {tweets.map(tweet => (
        <Tweet key={tweet.id} tweet={tweet} onToggleLike={toggleLike} onReplySubmit={addReply} />
      ))}
    </Box>
  );
};

export default Feed;
