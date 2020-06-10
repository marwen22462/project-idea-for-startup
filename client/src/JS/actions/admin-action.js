import axios from "axios";
import {

  GET_ALL_USER,
  GET_ALL_USER_SUCCESS,
  GET_ALL_USER_FAILURE,
  GET_SEARCHED_INPUT_NAME,
  GET_SEARCHED_INPUT_USER_TYPE
} from "../constants/actions-types";

export const getAllUsers = ()=>async(dispatch)=>{
    dispatch({
      type:GET_ALL_USER
    })
    const allUsers = await axios.get("/dashboard");
    try {
      dispatch({
        type: GET_ALL_USER_SUCCESS,
        payload:allUsers.data
      })
      console.log(allUsers.data)
    } catch (error) {
      dispatch({
        type:GET_ALL_USER_FAILURE,
        payload: error.response.data.errors,
      })
    }
  }

export const searchInputName = (payload) => ({
    type: GET_SEARCHED_INPUT_NAME,
    payload,
  });
export const searchInputUserType = (payload) => ({
    type: GET_SEARCHED_INPUT_USER_TYPE,
    payload,
  });