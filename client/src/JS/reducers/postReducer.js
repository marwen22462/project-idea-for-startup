import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  // GET_POSTS_BY_IDs
} from "../constants/actions-types";

const initialeState = {
  isLoading: false,
  errors: [],
  posts: []
  // post: null,
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
    // case GET_POSTS_BY_ID:
    //   return {
    //     ...state,
    //     post: state.posts.filter(el=>el.id=objectId(''))
    //   };
    default:
      return state;
  }
};

export default postReducer;
