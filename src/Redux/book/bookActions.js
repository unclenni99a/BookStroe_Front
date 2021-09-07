import axios from '../../axiosHolder'
import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from './bookTypes'

export const bookActions = () => {
    return dispatch => {
        axios.get("allBooks")
        .then(response => {
            dispatch({GET_BOOKS_SUCCESS, payload: response.data})
        })
        .catch(error => {
            console.log(error);
            dispatch({GET_BOOKS_FAILURE, payload: error})
        })
    }        
}
