import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FriendsDetails = () => {
    let { friendId } = useParams()
    let [friendData, setFriendData] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriendData(data))
    }, [])
    let { address, name, username, email, phone, website } = friendData;
    console.log(friendData);
    return (
        <div>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <p>city : {address?.city}</p>
            <p>ZipCode : {address?.zipcode}</p>
            <p>{friendData.address?.geo.lat}</p>
        </div>
    );
};

export default FriendsDetails;