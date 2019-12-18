import React from 'react';
import './style.css';

const SideBar = () => {
    return <aside className='sidebar'>
        <div className='sidebar-image'>
            <img src="images/side_img.png" alt='sidebar logo' />
        </div>
        <div className='sidebar-item-wrapper'>
            <span className='sidebar__item'>COMPANY INFO</span>
        </div>
        <div className='sidebar-item-wrapper'>
            <span className='sidebar__item'>MY FIRM</span>
        </div>
        <div className='sidebar-item-wrapper'>
            <span className='sidebar__item'>DEALS</span>
        </div>
        <div className='sidebar-item-wrapper'>
            <span className='sidebar__item'>FINANCIALS</span>
        </div>
    </aside>
}

export default SideBar;