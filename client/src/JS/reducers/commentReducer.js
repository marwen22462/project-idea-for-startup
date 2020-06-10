import {
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  EDIT_COMMENT,
  EDIT_COMMENT_FAILURE,
  EDIT_COMMENT_SUCCESS,
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
} from "../constants/actions-types";

const initialState = {
  isLoading: false,
  comments: [],
  errors: [],
  comment: {},
  editedComment:{},
  msg:[]
};

const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMMENTS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: payload,
      };
    case GET_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: [...state.comments, payload],
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case EDIT_COMMENT:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments:state.comments.map(comment => comment._id ===payload._id?{...payload}:comment)
      };
    case EDIT_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors:payload
      };
    case DELETE_COMMENT:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments:state.comments.filter(comment=> comment._id !== payload._id)
      };
    case DELETE_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors:payload
      };
    default:
      return { ...state };
  }
};

export default commentReducer;
