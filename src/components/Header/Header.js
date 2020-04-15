//logo, dark_light theme switcher, search field, user info
import React from 'react';
import './Header.scss';

const CN = 'header';

function Header(props) {
    return (
        <div className={`${CN}`}>
            <div className='container p-2'>
                Movies
            </div>
        </div>
    );
}

export default Header;