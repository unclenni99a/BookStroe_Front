import {LOGIN, LOG_OUT, LOGIN_SUCCESS, LOGIN_FAILED} from './loginTypes'

const initialState = {
    loggedin:false,
    loading:true
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
    switch (type) {

    case LOGIN_SUCCESS:
        return { loggedin: true,...state}
        
    case LOGIN_FAILED:
        return { ...state}
    
    case LOGIN_FAILED:
        return { loggedin: false ,...state}
    
    default:
        return state
    }
}
