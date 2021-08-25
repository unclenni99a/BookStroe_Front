import {LOGIN_SUCCEED, LOGIN_FAILED, LOG_OUT} from './loginTypes'

const initialState = {
    loggedin:false,
    loading:true
}

// eslint-disable-next-line import/no-anonymous-default-export
const loginReducer = (state = initialState,type) => {
    switch (type) {
        case LOGIN_SUCCEED:
            return { loggedin: true,...state}
            
        case LOGIN_FAILED:
            return { ...state}
        
        case LOG_OUT:
            return { loggedin: false, ...state}
        
        default:
            return state
    }
}

export default loginReducer