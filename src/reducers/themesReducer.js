import {TOGGLE_THEME} from "../actionTypes/themes";

const initialState = {
    darkTheme: false,
};

export const themesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME: {
            return {
                ...state,
                darkTheme: !state.darkTheme
            }
        }
        default: {
            return state;
        }
    }
}
