import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {LogInActionCreator, LogOutActionCreator} from "../../actionCreators/users.action";
import defaultUserIcon from '../../img/defaultUserIcon.png';
import './UserInfo.scss';

const CN = 'user_info_panel';

function UserInfo(props) {

    const { isLoggedIn, logIn, logOut } = props;

    return (
        <div className={CN}>
            {
                !isLoggedIn && (
                    <div>
                        <p>You are not logged in!</p>
                        <p>Please <button className={`${CN}__btn`} onClick={logIn}>Log In</button></p>
                    </div>
                )
            }
            {
                isLoggedIn && (
                    <Fragment>
                        <img src = {defaultUserIcon} alt='user-icon' className={`${CN}__icon`}/>
                        <div className={`${CN}__user`}>
                            <p>Hello, User</p>
                            <button className={`${CN}__btn`} onClick={logOut}>Log Out</button>
                        </div>
                    </Fragment>
                )
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.usersReducer.loggedIn,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {
        logIn: LogInActionCreator,
        logOut: LogOutActionCreator
    }, dispatch)
};

export const UserInfoWithRedux = connect(mapStateToProps, mapDispatchToProps)(UserInfo);
