import * as types from "./projects.types";
import axios from "axios";

const getProjects = () => (dispatch) => {
    let x = JSON.parse(localStorage.getItem("userData"));
    let id = x.user._id;
    let username = x.user;
    console.log("projects id",id)
    console.log("username",username )
    axios
        .get(`https://vast-red-crocodile-boot.cyclic.app/api/user/${id}/projects`)
        .then((r) => dispatch({ type:types.GET_PROJECTS , payload:r.data }));
}
const addProject = (payload) => (dispatch) => {
    let x = JSON.parse(localStorage.getItem("userData"));
    let id = x.user._id
    axios
        .post(`https://vast-red-crocodile-boot.cyclic.app/api/user/${id}/projects`,payload)
        .then((r) => dispatch({ type:types.ADD_PROJECTS , payload:r.data }));
}



const removeProject = (payload) => (dispatch) => {
    let x = JSON.parse(localStorage.getItem("userData"));
    let id = x.user._id
    axios
        .delete(`https://vast-red-crocodile-boot.cyclic.app/api/user/${id}/projects/${payload}`)
        .then((r) => dispatch({ type:types.REMOVE_PROJECTS , payload:payload }));
}

export { getProjects, addProject, removeProject }