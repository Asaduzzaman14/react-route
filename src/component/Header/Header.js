import React from 'react';
import { Link } from 'react-router-dom';
import CustomeLink from '../CustomeLink/CustomeLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my Routoing Website</h1>
            <nav>
                <CustomeLink to="/">Home</CustomeLink>
                <CustomeLink to="/Friends"> Friends</CustomeLink>
                <CustomeLink to="About">About</CustomeLink>
            </nav>
        </div>
    );
};

export default Header;