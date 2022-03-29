import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h3>All post count: {posts.length}</h3>
            <div style={{ display: "flex", flexWrap: "wrap" }}>

                {
                    posts.map(post => <Link
                        style={{ textDecoration: 'none', borderRadius: '5px', padding: '5px', margin: '5px', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px', }}
                        to={`/posts/${post.id}`}
                        key={post.id}
                    >{post.id}</Link>)
                }
                <Outlet></Outlet>


            </div>
        </div>
    );
};

export default Posts;