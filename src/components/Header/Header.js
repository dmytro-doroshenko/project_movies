//logo, dark_light theme switcher, search field, user info
import React from 'react';
import './Header.scss';
import logo from '../../img/logo.svg';
import UserInfo from "../UserInfo/UserInfo";
import {ThemeSwitcherWithRedux} from "../ThemeSwitcher/ThemeSwitcher";

const CN = 'header';

function Header() {
    return (
        <div className={`${CN}`}>
            <div className='container p-2 d-flex align-items-center justify-content-between'>
                <div className={`${CN}__logo col-4`}>
                    <img src={logo} alt='The_Movies_Logo'/>
                </div>
                <UserInfo/>
                <ThemeSwitcherWithRedux />
            </div>
        </div>
    );
}

export default Header;
