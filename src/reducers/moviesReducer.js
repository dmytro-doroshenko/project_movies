import {END_LOADING, GET_MOVIE_INFO, GET_MOVIES, START_LOADING} from "../actionTypes/movies";

const initialState = {
    loading: false,
    currentPage: 1,
    totalPagesNumber: 0,
    moviesList: [],
    selectedMovie: {}
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING: {
            return {
                ...state,
                loading: true,
            }
        }
        case END_LOADING: {
            return {
                ...state,
                loading: false,
            }
        }
        case GET_MOVIES: {
            const {payload: {results, page, total_pages}} = action;
            // console.log(action.payload);
            return {
                ...state,
                moviesList: [...results],
                currentPage: page,
                totalPagesNumber: total_pages,
            }
        }
        case GET_MOVIE_INFO: {
            const {payload} = action;
            return {
                ...state,
                selectedMovie: {...payload}
            }
        }
        default: {
            return state;
        }
    }
};
