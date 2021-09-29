import axios from '../../axiosHolder'
import { LOGIN_FAILED, LOGIN_SUCCEED, LOG_OUT } from './loginTypes'

export const login = (username, password) => {
    return dispatch => {
        const body = {
            userName: username,
            password: password
        }
        axios.post("/users/login", body)
        .then(response => {
            dispatch({type:LOGIN_SUCCEED, payload: response.data})
        })
        .catch(error => 
        {
            dispatch({type:LOGIN_FAILED})
        })
    }
}

export const loginWithToken = (token) => {
    return dispatch => {
        axios.post("/users/login", {})
        .then(response => {
            dispatch({type:LOGIN_SUCCEED, payload: response.data})
        })
        .catch(error => 
        {
            console.log(error)
            dispatch({type:LOGIN_FAILED})
        })
    }
}

export const logout = () => {
    return dispatch => {
        dispatch({type:LOG_OUT, payload:false})
    }
}