import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PostDetails = () => {
    let { postId } = useParams();
    let [post, setPost] = useState([]);
    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [post])
    return (
        <div style={{ width: '400px', margin: "0 auto", boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px", padding: '10px', marginTop: '30px', borderRadius: '8px' }}>
            <h1>Post {post.id}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;