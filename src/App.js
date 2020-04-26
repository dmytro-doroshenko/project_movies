import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { MoviesPageWithRedux } from "./containers/MoviesPage";
import Header from "./components/Header/Header";
import {store} from "./store/store";
import {Switch, Route} from "react-router-dom";

import './styles/style.css'
import {MovieInfoWithRedux} from "./components/MovieInfo/MovieInfo";

function App() {
  return (

        <Provider store={store}>
            <Header />
            <Switch>
                <Route exact path='/' component={MoviesPageWithRedux} />
                <Route path='/page=:pageNum' component={MoviesPageWithRedux} />
                <Route path='/movieInfo/:movieID' component={MovieInfoWithRedux}/>
            </Switch>

        </Provider>

  );
}

export default App;
