import React from 'react';
import './Header.css';
import logo from '../../images/header-icon.png'

const Header = () => {
    return (
        <div className='header'>
            <img className='header-icon' src={logo} alt="" />
            <h2 className='main-header'>Sunglass House</h2>
        </div>
    );
};

export default Header;