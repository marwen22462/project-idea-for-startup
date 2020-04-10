import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import postReducer from "./postReducer";

export default combineReducers({
  authReducer,
  postReducer
});
