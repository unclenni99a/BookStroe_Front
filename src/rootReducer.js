import loginReducer from "./Redux/login/loginReducer"; 
import signupReducer from "./Redux/signup/signupReducer"; 
import bookReducer from './Redux/book/bookReducer';

import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    signupReducer: signupReducer,
    bookReducer : bookReducer,
})

export default rootReducer;