import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { MoviesPageWithRedux } from "./containers/MoviesPage";
import Header from "./components/Header/Header";
import {Switch, Route} from "react-router-dom";
import {MovieInfoWithRedux} from "./components/MovieInfo/MovieInfo";

import './App.scss';
import './styles/style.css'


function App({darkTheme}) {

    return (
        <Fragment>
            <div className={`${darkTheme ? 'theme-dark' : 'theme-light'} main_body`}>
                <Header />
                <Switch>
                    <Route exact path='/' component={MoviesPageWithRedux} />
                    <Route path='/page=:pageNum' component={MoviesPageWithRedux} />
                    <Route path='/movieInfo/:movieID' component={MovieInfoWithRedux}/>
                </Switch>
            </div>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    return {

        darkTheme: state.themesReducer.darkTheme
    }
}


export const AppWithRedux = connect(mapStateToProps)(App);
