import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const loggerMiddleware = (store) => (next) => (action) => {


    next(action);
}

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk, loggerMiddleware));
