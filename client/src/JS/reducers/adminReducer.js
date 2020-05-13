import {
    
    GET_ALL_USER,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAILURE,
    GET_SEARCHED_INPUT_NAME,
    GET_SEARCHED_INPUT_USER_TYPE
  } from "../constants/actions-types";
  
  const initialState = {
    isLoading: false,
    allUsers:[],
    searchInputName:"",
    searchInputUserType:""
  };
  
  const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
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
        case GET_SEARCHED_INPUT_NAME:
      return {
        ...state,
        searchInputName: payload,
      };
        case GET_SEARCHED_INPUT_USER_TYPE:
      return {
        ...state,
        searchInputUserType: payload,
      };
      default:
        return state;
    }
  };
  
  export default adminReducer;
  