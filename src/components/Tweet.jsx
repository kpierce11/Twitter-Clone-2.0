import React from 'react'
import './Tweet.css'

const Tweet = () => ({tweet, onLike}) => {
    return (
        <div className="tweet">
            <p>{tweet.content}</p>
            <button onClick={() => onLike(tweet.id)}>Like {tweet.likes}</button>
        </div>
    );
};

export default Tweet;