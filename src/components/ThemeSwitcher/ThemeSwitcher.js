import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {toggleThemeActionCreator} from "../../actionCreators/themes.action";

import './ThemeSwitcher.scss';

const CN = 'theme_switcher';

function ThemeSwitcher({darkTheme, changeTheme}) {
    return (
        <div className={CN}>
            <p>Switch to</p>
            <button onClick={changeTheme} className={`${CN}__theme_btn`}>
                {darkTheme ? 'Light' : 'Dark'} Theme
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        darkTheme: state.themesReducer.darkTheme
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {
        changeTheme: toggleThemeActionCreator,
    }, dispatch)
};

export const ThemeSwitcherWithRedux = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
