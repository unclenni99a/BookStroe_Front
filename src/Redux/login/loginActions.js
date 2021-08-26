import axios from '../../axiosHolder'
import { LOGIN_FAILED, LOGIN_SUCCEED } from './loginTypes'

export const login = (username, password) => {
    return dispatch => {
        const body = {
            userName: username,
            password: password
        }
        const headers = {
            'Content-Type' : 'application/json',
        }
        axios.post("login", body, {headers})
        .then(response => {
            console.log(response.data)
            dispatch({type:LOGIN_SUCCEED, payload: response.data})
        })
        .catch(error => 
        {
            console.log(error)
            dispatch({type:LOGIN_FAILED})
        })
    }
}