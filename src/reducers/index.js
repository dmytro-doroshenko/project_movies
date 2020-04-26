import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { usersReducer } from "./userReducer";


const reducers = combineReducers( {
    moviesReducer,
    usersReducer
});

export default reducers;
