// store.js

import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";
import postReducer from "./reducers/postReducer";
import alertReducer from "./reducers/alertReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  profile: profileReducer,
  post: postReducer
});

const configureStore = createStore(rootReducer, {}, applyMiddleware(thunk));

export default configureStore;
