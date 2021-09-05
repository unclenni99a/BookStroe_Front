import {SIGNUP_SUCCEED, SIGNUP_FAILED, SIGN_OUT} from './signupTypes'

const initialState = {
    signedUp:false,
}

// eslint-disable-next-line import/no-anonymous-default-export
const signupReducer = (state = initialState,action) => {
    switch (action.type) {
        case SIGNUP_SUCCEED:
            return { ...state, signedUp: true}
            
        case SIGNUP_FAILED:
            return { ...state}
        
        case SIGN_OUT:
            return { loggedin: false, ...state}
        
        default:
            return {...state}
    }
}

export default signupReducer