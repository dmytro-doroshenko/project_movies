import React from 'react';
import {AppWithRedux} from "../App";
import {store} from "../store/store";
import {Provider} from "react-redux";

function AppWrapper() {
    return (
        <Provider store={store}>
            <AppWithRedux />
        </Provider>
    );
}

export default AppWrapper;
