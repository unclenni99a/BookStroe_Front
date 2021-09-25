import axios from '../../axiosHolder'
import { LOGIN_FAILED, LOGIN_SUCCEED, LOG_OUT } from './loginTypes'

export const login = (username, password) => {
    return dispatch => {
        const body = {
            userName: username,
            password: password
        }
        const headers = {
            'Content-Type' : 'application/json',
        }
        axios.post("/users/login", body, {headers})
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

export const loginWithToken = (token) => {
    return dispatch => {
        const headers = {
            'Content-Type' : 'application/json',
            'authorization': token
        }
        axios.post("/users/login", {}, {headers})
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
    console.log('shsasdasdsae')
    return dispatch => {
        dispatch({type:LOG_OUT, payload:false})
    }
}