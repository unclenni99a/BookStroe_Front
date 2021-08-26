import {SIGNUP_SUCCEED, SIGNUP_FAILED, SIGN_OUT} from './signupTypes'

const initialState = {
    loggedin:false,
    loading:true
}

// eslint-disable-next-line import/no-anonymous-default-export
const loginReducer = (state = initialState,type) => {
    switch (type) {
        case SIGNUP_SUCCEED:
            return { loggedin: true,...state}
            
        case SIGNUP_FAILED:
            return { ...state}
        
        case SIGN_OUT:
            return { loggedin: false, ...state}
        
        default:
            return state
    }
}

export default loginReducer