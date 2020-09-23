import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        }) 
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
            <Post 
                image={post.data.image}
                message={post.data.message}
                profilePic={post.data.profilePic}
                timestamp={post.data.timestamp}
                username={post.data.username}
                key={post.id}
            />))}
        </div>
    )
}

export default Feed
