import axios from '../../axiosHolder'
import { LOGIN_FAILED, LOGIN_SUCCEED } from './loginTypes'

export const login = (username, password) => {
    return dispatch => {
        const article = { title: 'Login Request' };
        console.log(username + '  ' + password)
        const headers = {
            'Content-Type' : 'application/json',
            Authorization: username + ';' + password,
        }
        axios.post("login", article, {headers})
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