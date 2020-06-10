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
  GET_POST_BY_TYPE_SUCCESS,
  GET_POST_BY_TYPE_FAILURE,
  GET_POST_BY_TYPE,
  ADD_LIKE,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_FAILURE,
  CHECK_ABILITE_TO_LIKE,
  CHECK_ABILITE_TO_LIKE_SUCCESS,
  CHECK_ABILITE_TO_LIKE_FAILLURE,
  REMOVE_LIKE,
  REMOVE_LIKE_SUCCESS,
  GET_LIKES_SUCCESS,
  GET_LIKES_FAILURE,
  GET_LIKES,
  REMOVE_LIKE_FAILURE,
} from "../constants/actions-types";

const initialeState = {
  isLoading: false,
  errors: [],
  msg: [],
  posts: [],
  post: {},
  onePost: {},
  allposts: [],
  likes: [],
  abiliteToLike: {},
};

const postReducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: payload,
      };
    case ADD_POST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts:[...state.posts, payload],
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case EDIT_POST:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        onePost: payload,
      };
    case EDIT_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case GET_ONE_POST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ONE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case GET_ONE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        onePost: payload,
      };
    case DELETE_ONE_POST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_ONE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case DELETE_ONE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        msg: payload,
      };
    case GET_POST_BY_TYPE:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POST_BY_TYPE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case GET_POST_BY_TYPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allposts: payload,
      };
    case GET_LIKES:
      return {
        ...state,
        isLoading: true,
      };
    case GET_LIKES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        likes:  payload
      };
    case GET_LIKES_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload
      };
    case ADD_LIKE:
      return {
        ...state,
      };
    case ADD_LIKE_SUCCESS:
      return {
        ...state,
        abiliteToLike:false,
        likes: [...state.likes, payload],
      };
    case ADD_LIKE_FAILURE:
      return {
        ...state,
        errors: payload,
      };
    case CHECK_ABILITE_TO_LIKE:
      return {
        ...state,
        isLoading: true,
      };
    case CHECK_ABILITE_TO_LIKE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        abiliteToLike: payload,
      };
    case CHECK_ABILITE_TO_LIKE_FAILLURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
      case REMOVE_LIKE:
        return {
          ...state,
          isLoading: false
        }
        case REMOVE_LIKE_SUCCESS:
          return {
            ...state,
            isLoading: false,
            likes:state.likes.filter(like=> like !== payload.userId),
            abiliteToLike: true,
         }
        case REMOVE_LIKE_FAILURE:
          return {
            ...state,
            isLoading: false,
            errors: payload
          }
    default:
      return state;
  }
};

export default postReducer;
