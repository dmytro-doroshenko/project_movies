import React from 'react';
import './Header.scss';
import logo from '../../img/logo.svg';
import {UserInfoWithRedux} from "../UserInfo/UserInfo";
import {ThemeSwitcherWithRedux} from "../ThemeSwitcher/ThemeSwitcher";

const CN = 'header';

function Header() {
    return (
        <div className={`${CN}`}>
            <div className='container p-2 d-flex align-items-center justify-content-between'>
                <div className={`${CN}__logo col-4`}>
                    <img src={logo} alt='The_Movies_Logo'/>
                </div>
                <UserInfoWithRedux />
                <ThemeSwitcherWithRedux />
            </div>
        </div>
    );
}

export default Header;
