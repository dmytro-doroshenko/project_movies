import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import MoviesPage from "./containers/MoviesPage";
import Header from "./components/Header/Header";

import './styles/style.css'

function App() {
  return (

        <div>
            <Header />
            <MoviesPage />
        </div>

  );
}

export default App;
