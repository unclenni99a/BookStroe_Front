import axios from '../../axiosHolder'
import { SIGNUP_SUCCEED, SIGNUP_FAILED } from './signupTypes'

export const signup = (email, userName, birthday, password) => {
    return dispatch => {
        const headers = {
            'Content-Type' : 'application/json',
        }
        const body = {
            email,
            userName,
            birthday,
            password,
        }
        axios.post("signup", body, {headers})
        .then(response => {
            dispatch({type:SIGNUP_SUCCEED, payload: response.data})
        })
        .catch(error => 
        {
            dispatch({type:SIGNUP_FAILED, payload: error})
        })
    }
}