import axios from '../../axiosHolder'
import { SIGNUP_SUCCEED, SIGNUP_FAILED } from './signupTypes'

export const signup = (email, userName, birthday, password) => {
    return dispatch => {
        const body = {
            email,
            userName,
            birthday,
            password,
        }
        axios.post("/users/register", body)
        .then(response => {
            dispatch({type:SIGNUP_SUCCEED, payload: response.data})
        })
        .catch(error => 
        {
            dispatch({type:SIGNUP_FAILED, payload: error})
        })
    }
}