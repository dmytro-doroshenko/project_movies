import React, {useEffect} from 'react';
import MoviesList from "../components/MoviesList/MoviesList";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {getMoviesData} from "../actionCreators/movies.action";
import {PaginationWithRedux} from "../components/Pagination/Pagination";

import './MoviesPage.scss';

const CN = 'movies_page';

function MoviesPage(props) {
    const {getMovies, movies, loading, match: {params: {pageNum}}} = props;
    useEffect(() => {

        getMovies(pageNum);
    }, [pageNum]);


   return (
       <div className={`${CN} container`}>
           <MoviesList movies={movies} loading={loading}/>
           <PaginationWithRedux />
       </div>
   )
}


const mapStateToProps = (state) => {
    return {
        loading: state.moviesReducer.loading,
        isLoaded: state.moviesReducer.isLoaded,
        movies: state.moviesReducer.moviesList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( {
        getMovies: getMoviesData,
    }, dispatch)
};



export const MoviesPageWithRedux = connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
