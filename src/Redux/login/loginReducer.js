import {LOGIN_SUCCEED, LOGIN_FAILED, LOG_OUT} from './loginTypes'
import { setCookie } from 'react-use-cookie';

const initialState = {
    loggedIn: "",
    userName: "",
    email: "",
}

const saveLocale = token => {
  setCookie('token', token,{days: 31});
};

const removeLocale = () => {
    setCookie('token', '');
  };

// eslint-disable-next-line import/no-anonymous-default-export
const loginReducer = (state = initialState, action)=> {
    switch (action.type) {
        case LOGIN_SUCCEED:
            saveLocale(action.payload.token)
            return {  
                ...state, 
                userName:action.payload.userName,
                email:action.payload.email,
                loggedIn: true
            }
            
        case LOGIN_FAILED:
            return { ...state, loggedIn: false}
            
        case LOG_OUT:
            removeLocale()
            return { ...state, loggedIn: false}
        
        default:
            return state
    }
}

export default loginReducer