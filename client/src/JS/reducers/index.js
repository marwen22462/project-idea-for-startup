import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import postReducer from "./postReducer";
import commentReducer from './commentReducer'
import messageReducer from './messageReducer'
import adminReducer from './adminReducer'

export default combineReducers({
  authReducer,
  postReducer,
  commentReducer,
  messageReducer,
  adminReducer
});
