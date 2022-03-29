import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ user }) => {
    let { id, name, website } = user;
    // let navigat = useNavigate();
    // function handleFndDeltsPath() {
    //     navigat(`/friend/${name}`)
    // }

    return (
        <div style={{ width: '30%', padding: '10px', margin: '10px', border: '1px solid gray', borderRadius: '8px' }}>
            <h3>{name}</h3>
            <p>Web Site : {website}</p>
            <button style={{ fontSize: '15px' }}>
                <Link to={`/friend/${id}`} style={{ textDecoration: 'none', color: 'black' }}>{name}</Link>
            </button>
        </div>
    );
};

export default Friend;