import axios from '../../axiosHolder'
import { LOGIN_FAILED, LOGIN_SUCCEED } from './loginTypes'

export const login = (username, password) => {
    return dispatch => {
        const headers = {
            'Content-Type' : 'application/json',
            Authorization: username + ';' + password
        }
        axios.post("/login","",headers)
        .then(response => {
            console.log(response.data)
            dispatch({type:LOGIN_SUCCEED, payload: response.data})
        })
        .catch(error => 
        {
            console.log(error.data)
            dispatch({type:LOGIN_FAILED, payload: error.data})
        })
    }
}