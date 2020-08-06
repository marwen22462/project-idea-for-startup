import axios from "axios";
import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_USER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  AUTH_USER,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  GET_ONE_USER,
  GET_ONE_USER_SUCCESS,
  GET_ONE_USER_FAILURE,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  
} from "../constants/actions-types";

export const register = (user) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });
  try {
    const registerResult = await axios.post("/register", user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: registerResult.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response.data.errors,
    });
  }
};

export const login = (userLog) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  console.log(userLog)
  try {
    const logResult = await axios.post("/login", userLog);
    localStorage.setItem("token", logResult.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: logResult.data,
    });
    console.log(logResult.data)
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response.data.errors,
    });
  }
};



export const isAuthorized = () => async (dispatch) => {
  dispatch({
    type: AUTH_USER,
  });
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const isAuth = await axios.get("/profile", config);
    dispatch({
      type: AUTH_SUCCESS,
      payload: isAuth.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAILURE,
      payload: error.response.data.errors,
    });
  }
};

export const oneUser = (id) => async (dispatch) => {
  dispatch({
    type: GET_ONE_USER,
  });
  try {
    const userResult = await axios.get(`/profile/${id}/posts`);
    dispatch({
      type: GET_ONE_USER_SUCCESS,
      payload: userResult.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ONE_USER_FAILURE,
      payload: error.response.data.errors,
    });
  }
};
export const editUser = (userId, name, email ) =>async (dispatch)=>{
  dispatch({
    type:EDIT_USER
  })
  const editUser = await axios.put(`/profile`, {userId, name, email})
  try {
    dispatch({
      type: EDIT_USER_SUCCESS,
      payload: editUser.data
    })
    console.log(editUser.data)
  } catch (error) {
    dispatch({
      type:EDIT_USER_FAILURE,
      payload: error.response.data.errors
    })
  }
}