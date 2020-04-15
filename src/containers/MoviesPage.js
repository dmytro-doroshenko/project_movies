import React, {useEffect} from 'react';
import MoviesList from "../components/MoviesList/MoviesList";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {
    endLoadingActionCreator,
    getMoviesActionCreator, getMoviesData,
    startLoadingActionCreator
} from "../actionCreators/movies.action";


function MoviesPage({getMovies, movies, loading}) {


    useEffect(() => {
        getMovies();
    }, []);


   return (
       <div className='container'>
           <MoviesList movies={movies} loading={loading}/>
       </div>
   )
}


const mapStateToProps = (state) => {
    return {
        loading: state.moviesReducer.loading,
        isLoaded: state.moviesReducer.isLoaded,
        movies: state.moviesReducer.moviesListWithInfo.results,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {
        getMovies: getMoviesData,
    }, dispatch)
};

export const MoviesPageWithRedux = connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
