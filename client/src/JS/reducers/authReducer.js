import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_USER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  AUTH_SUCCESS,
  AUTH_USER,
  AUTH_FAILURE
} from "../constants/actions-types";

const initialState = {
  isAuth: false,
  isLoading: false,
  errors: [],
  user: null,
  profile:null,
  userLog: null
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
    default:
      return state;
  }
};

export default authReducer;
