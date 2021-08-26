import loginReducer from "./Redux/login/loginReducer"; 
import signupReducer from "./Redux/signup/signupReducer"; 
const initialState = {
    loginReducer: loginReducer,
    signupReducer: signupReducer
}

const rootReducer = (state = initialState, { type, payload }) => {
    return state;
}
export default rootReducer;