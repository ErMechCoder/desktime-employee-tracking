import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { projectsReducer } from "./projects/projects.reducer";
import { authReducer } from "./auth/auth.reducer";
import { screenReducer } from "./screen/screen.reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectsReducer,
    screen:screenReducer ,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
