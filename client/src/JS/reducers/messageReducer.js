import {
  SEND_MESSAGE,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
} from "../constants/actions-types";

const initialState = {
  isLoading: false,
  errors: [],
  message: null,
};
const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_MESSAGE:
      return { 
          ...state, 
          isloading: true 
        };
    case SEND_MESSAGE_SUCCESS:
      return { 
          ...state, 
          isloading: false,
          message:payload 
        };
    case SEND_MESSAGE_FAILURE:
      return { 
          ...state, 
          isloading: false,
          errors:payload 
        };

    default:
      return state;
  }
};

export default messageReducer