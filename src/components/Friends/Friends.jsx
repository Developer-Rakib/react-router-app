import React from 'react';
import { useState, useEffect } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
                users.map(user => <Friend key={user.id} user={user}></Friend>)
            }
        </div>
    );
};

export default Friends;