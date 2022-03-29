import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <h1 style={{ color: 'blueviolet' }}>welcome to react router</h1>
            <div style={{}}>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                {/* <Link to="/">Home</Link> */}
            </div>
        </div>
    );
};

export default Header;