import loginReducer from "./Redux/login/loginReducer"; 
const initialState = {
    loginReducer: loginReducer
}

const rootReducer = (state = initialState, { type, payload }) => {
    return state;
}
export default rootReducer;