import axios from "axios";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./auth.types";

// form
// input feilds => api
// -username/email
// -password

// thunk will help us thus writing two functions
export const loginAPI = (data) => (dispatch) => {
    console.log('loginAPI:', data)
    dispatch({ type: LOGIN_LOADING });
    axios
        .post("https://vast-red-crocodile-boot.cyclic.app/api/auth/login", {
            "email": data.email,
            "password": data.password
        })
        .then((r) => {
            console.log("loginAPI",r.data)
            dispatch({ type: LOGIN_SUCCESS, payload: r.data });
            localStorage.setItem("token", JSON.stringify(r.data.data));
            localStorage.setItem("userData", JSON.stringify(r.data));

        })
        .catch(() => {
            dispatch({ type: LOGIN_ERROR });
        })
}
export const signupAPI = (data) => (dispatch) => {

    dispatch({ type: SIGNUP_LOADING });
    axios
        .post("https://vast-red-crocodile-boot.cyclic.app/api/users/signup", {
            "email": data.email,
            "password": data.password
        })
        .then((r) => {
            dispatch({ type: SIGNUP_SUCCESS, payload: r.data });
        })
        .catch(() => {
            dispatch({ type: SIGNUP_ERROR });
        })
}

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.setItem("token", null);
};