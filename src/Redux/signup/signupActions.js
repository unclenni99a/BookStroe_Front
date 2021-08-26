import axios from '../../axiosHolder'
import { SIGNUP_SUCCEED, SIGNUP_FAILED } from './signupTypes'

export const signup = (email, username, password) => {
    return dispatch => {
        const headers = {
            'Content-Type' : 'application/json',
        }
        const body = {
            Authorization: email + ';' + username + ';' + password,
        }
        axios.post("signup", body, {headers})
        .then(response => {
            console.log(response.data)
            dispatch({type:SIGNUP_SUCCEED, payload: response.data})
        })
        .catch(error => 
        {
            console.log(error)
            dispatch({type:SIGNUP_FAILED})
        })
    }
}