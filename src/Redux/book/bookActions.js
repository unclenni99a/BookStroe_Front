import axios from '../../axiosHolder'
import { GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from './bookTypes'

export const getAllBooks = () => {
    return dispatch => {
        axios.get("allBooks")
        .then(response => {
            dispatch({type:GET_BOOKS_SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type:GET_BOOKS_FAILURE, payload: error.response.data})
        })
    }        
}
