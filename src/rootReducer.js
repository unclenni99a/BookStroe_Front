import loginReducer from "./Redux/login/loginReducer"; 
import signupReducer from "./Redux/signup/signupReducer"; 
import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    signupReducer: signupReducer
})

export default rootReducer;