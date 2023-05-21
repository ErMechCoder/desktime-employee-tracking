import * as types from "./screen.types";
import axios from "axios";


const addProjectScreen = (payload) => (dispatch) => {
    let x = JSON.parse(localStorage.getItem("userData"));
    let id = x.user._id
    axios
        .post(`http://localhost:8000/api/user/${id}/projects/screenshot`,payload)
        .then((r) => dispatch({ type:types.ADD_PROJECTSSCREENSHOT, payload:r.data }));
}



export { addProjectScreen}