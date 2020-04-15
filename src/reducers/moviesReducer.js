import {END_LOADING, GET_MOVIES, START_LOADING} from "../actionTypes/movies";

const initialState = {
    loading: false,
    moviesListWithInfo: {}
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
            const {payload} = action;
            return {
                ...state,
                moviesListWithInfo: {...payload}
            }
        }
        default: {
            return state;
        }
    }
};
