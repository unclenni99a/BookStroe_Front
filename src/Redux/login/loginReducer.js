import {LOGIN_SUCCEED, LOGIN_FAILED, LOG_OUT} from './loginTypes'

const initialState = {
    loggedIn: "",
    userName: "",
    email: "",
}

// eslint-disable-next-line import/no-anonymous-default-export
const loginReducer = (state = initialState, action)=> {
    switch (action.type) {
        case LOGIN_SUCCEED:
            return {  
                ...state, 
                userName:action.payload.userName,
                email:action.payload.email,
                loggedIn: true
            }
            
        case LOGIN_FAILED:
            return { ...state, loggedIn: false}
            
        case LOG_OUT:
            return { ...state, loggedIn: false}
        
        default:
            return state
    }
}

export default loginReducer