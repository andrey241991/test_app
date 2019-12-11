import React from 'react';
import './style.css';

const Header = () => {
    return <header className='header'>
        <div className='header__container left__container'>
            <img src="images/logo.png" alt='logo' />
            <h3>Profile Editor</h3>
        </div>
        <div className='header__container right__container'>
            <h3>Contact</h3>
            <h3>FAQs</h3>
            <h3>Save and Exit</h3>
        </div>
    </header>
}

export default Header;