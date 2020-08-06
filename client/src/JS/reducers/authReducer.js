import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_USER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  AUTH_SUCCESS,
  AUTH_USER,
  AUTH_FAILURE,
  GET_ALL_USER,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAILURE,
  GET_ONE_USER_SUCCESS,
  GET_ONE_USER,
  GET_ONE_USER_FAILURE,
  EDIT_USER_FAILURE,
  EDIT_USER_SUCCESS,
  EDIT_USER
} from "../constants/actions-types";
import Profile from "../../Components/profile/Profile";

const initialState = {
  isAuth: false,
  isLoading: false,
  errors: [],
  user: null,
  profile:{},
  userLog: null,
  allUsers:[]
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        isLoading: true
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload
      };
    case LOGIN_USER:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userLog: payload
      };
    
    case AUTH_USER:
      return {
        ...state,
        isLoading: true
      };
    case AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        profile: payload
      };
    case GET_ALL_USER:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allUsers: payload
      };
    case GET_ALL_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    case GET_ONE_USER:
      return {
        ...state,
        isLoading: true
      };
    case GET_ONE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user:payload
      };
    case GET_ONE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors:payload
      };
    case EDIT_USER:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        isLoading: true,
        profile:payload
      };
    case EDIT_USER_FAILURE:
      return {
        ...state,
        isLoading: true,
        errors:payload
      };
    default:
      return state;
  }
};

export default authReducer;
