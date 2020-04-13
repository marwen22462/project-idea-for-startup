import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  EDIT_POST_FAILURE,
  EDIT_POST_SUCCESS,
  EDIT_POST,
  GET_ONE_POST_FAILURE,
  GET_ONE_POST_SUCCESS,
  GET_ONE_POST,
  DELETE_ONE_POST,
  DELETE_ONE_POST_FAILURE,
  DELETE_ONE_POST_SUCCESS,
  // GET_POSTS_BY_IDs
} from "../constants/actions-types";

const initialeState = {
  isLoading: false,
  errors: [],
  msg:[],
  posts: [],
  post: {},
  getpost:{}
};

const postReducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        isLoading: true
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: payload
      };
    case ADD_POST:
      return {
        ...state,
        isLoading: true
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post: payload
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    case EDIT_POST:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors:payload
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        post:payload
      };
      case GET_ONE_POST:
        return {
          ...state,
          isLoading:true
        }
      case GET_ONE_POST_FAILURE:
        return {
          ...state,
          isLoading:false,
          errors:payload
        }
      case GET_ONE_POST_SUCCESS:
        return {
          ...state,
          isLoading:false,
          getpost:payload
        }
      case DELETE_ONE_POST:
        return {
          ...state,
          isLoading:true,
        }
      case DELETE_ONE_POST_FAILURE:
        return {
          ...state,
          isLoading:false,
          errors:payload
        }
      case DELETE_ONE_POST_SUCCESS:
        return {
          ...state,
          isLoading:false,
          msg:payload
        }
    default:
      return state;
  }
};

export default postReducer;
