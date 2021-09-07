import { GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from './bookTypes'


const initialState = {
    books:[],
    loading: true
}

export default bookReducer = (state = initialState, action) => {
    switch(action.Type){
        case GET_BOOKS_SUCCESS:
            return {...state, books: action.data, loading:false}

        case GET_BOOKS_FAILURE:
            return {...state, books: null, loading:false}
        
        default:
            return state
    }
}
