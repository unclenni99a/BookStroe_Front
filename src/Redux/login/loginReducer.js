import {LOGIN_SUCCEED, LOGIN_FAILED, LOG_OUT} from './loginTypes'

const initialState = {
    loggedIn:false,
}

// eslint-disable-next-line import/no-anonymous-default-export
const loginReducer = (state = initialState,action) => {
    console.log(action.type)
        switch (action.type) {
            case LOGIN_SUCCEED:
                return {  ...state, loggedIn: true}
            
            case LOGIN_FAILED:
                return { ...state}
            
            case LOG_OUT:
                return { ...state, loggedIn: false}
            
            default:
                return state
    }
}

export default loginReducer