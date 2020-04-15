import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { MoviesPageWithRedux } from "./containers/MoviesPage";
import Header from "./components/Header/Header";
import {store} from "./store/store";

import './styles/style.css'

function App() {
  return (

        <Provider store={store}>
            <Header />
            <MoviesPageWithRedux />
        </Provider>

  );
}

export default App;
