import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { usersReducer } from "./userReducer";
import {themesReducer} from "./themesReducer";


const reducers = combineReducers( {
    moviesReducer,
    usersReducer,
    themesReducer
});

export default reducers;
