import React from 'react';
import '../styles/App.scss';
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; 

const Header = () => {
    return (
        <nav>
            <h1><span>Tech</span>Web</h1>
            <main>
                <HashLink to='/#home'>Home</HashLink>
                <Link to='/contact'>Contact</Link>
                <HashLink to='/#about'>About</HashLink>
                <HashLink to='/#brands'>Brands</HashLink>
                <Link to='/services'>Services</Link>
            </main>
        </nav>
    );
};

export default Header;