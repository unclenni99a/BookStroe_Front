import { createStore, applyMiddleware  } from "redux";
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk';

function configureStore() {
  return createStore(rootReducer,applyMiddleware(thunk));
}
export default configureStore; 