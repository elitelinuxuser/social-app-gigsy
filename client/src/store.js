// store.js

import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/authReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer
});

const configureStore = () => {
  return createStore(rootReducer, {}, applyMiddleware(thunk));
};

export default configureStore;
