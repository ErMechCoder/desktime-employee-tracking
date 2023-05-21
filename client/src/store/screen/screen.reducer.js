import * as types from "./screen.types";

const screenInitialState = {
    data: [],
}

export const screenReducer = (state = screenInitialState, { type, payload }) => {
    switch (type) {
    
        case types.ADD_PROJECTSSCREENSHOT: return {
            data: [...state.data, payload],
        }
       
        default:
            return state;
    }
}