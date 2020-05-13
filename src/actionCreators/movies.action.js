import {
    START_LOADING,
    END_LOADING,
    GET_MOVIES,
    GET_MOVIE_INFO,
    CLEAR_CURRENT_MOVIE
} from "../actionTypes/movies";

export const getMoviesActionCreator = (moviesWithInfo) => ({type: GET_MOVIES, payload: moviesWithInfo})
export const startLoadingActionCreator = () => ({type: START_LOADING});
export const endLoadingActionCreator = () => ({type: END_LOADING});
export const getMovieInfoActionCreator = (movieInfo) => ({type: GET_MOVIE_INFO, payload: movieInfo});
export const clearCurrentMovieInfo = () => ({type: CLEAR_CURRENT_MOVIE})


export const getMoviesData = (pageNumber) => (dispatch) => {
    const url = `https://api.themoviedb.org/3/discover/movie?page=${pageNumber}`;
    const header = {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWU1ZDJjNjY5MDJmYzZlYTBmODI0MDlkYjZhNmM2YyIsInN1YiI6IjVlODQ4MjUxZTM4YmQ4MDAxMWFiODNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vkMPTJhClcMrTyrqz1_OcT1XZqRUOUhznmF9Ai2cCLw'};
    dispatch(startLoadingActionCreator());
    fetch(url, {headers: header,})
        .then(response => response.json())
        .then(result => {
            dispatch(endLoadingActionCreator())
            dispatch(getMoviesActionCreator({...result}))
        })
};

export const getMovieInfo = (movieID) => (dispatch) => {
    const url = `https://api.themoviedb.org/3/movie/${movieID}`;
    const header = {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWU1ZDJjNjY5MDJmYzZlYTBmODI0MDlkYjZhNmM2YyIsInN1YiI6IjVlODQ4MjUxZTM4YmQ4MDAxMWFiODNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vkMPTJhClcMrTyrqz1_OcT1XZqRUOUhznmF9Ai2cCLw'};
    dispatch(startLoadingActionCreator());
    fetch(url, {headers: header})
        .then(response => response.json())
        .then(result => {
            dispatch(endLoadingActionCreator())
            dispatch(getMovieInfoActionCreator({...result}))
        })
};


