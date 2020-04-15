import {START_LOADING, END_LOADING, GET_MOVIES} from "../actionTypes/movies";

export const getMoviesActionCreator = (moviesWithInfo) => ({type: GET_MOVIES, payload: moviesWithInfo})
export const startLoadingActionCreator = () => ({type: START_LOADING});
export const endLoadingActionCreator = () => ({type: END_LOADING});


export const getMoviesData = () => (dispatch) => {
    const url = 'https://api.themoviedb.org/3/discover/movie';
    const header = {Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWU1ZDJjNjY5MDJmYzZlYTBmODI0MDlkYjZhNmM2YyIsInN1YiI6IjVlODQ4MjUxZTM4YmQ4MDAxMWFiODNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vkMPTJhClcMrTyrqz1_OcT1XZqRUOUhznmF9Ai2cCLw'};
    dispatch(startLoadingActionCreator());
    fetch(url, {headers: header})
        .then(response => response.json())
        .then(result => {
            dispatch(endLoadingActionCreator())
            dispatch(getMoviesActionCreator({...result}))
        })
};
