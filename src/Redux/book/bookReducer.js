import { GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from './bookTypes'


const initialState = {
    books:[],
    loading: true
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_BOOKS_SUCCESS:
            return {...state, books: action.payload, loading:false}

        case GET_BOOKS_FAILURE:
            return {...state, books: [], loading:false}
        
        default:
            return state
    }
}