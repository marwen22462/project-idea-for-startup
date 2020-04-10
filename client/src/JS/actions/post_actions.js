import axios from "axios";
import {
  GET_POSTS,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  GET_POSTS_BY_ID,
} from "../constants/actions-types";

export const getPosts =id=> async dispatch =>{
    dispatch ({
        type:GET_POSTS
    })
    try {
        const posts= await axios.get(`/profile/${id}/posts`)
        dispatch({
            type: GET_POSTS_SUCCESS,
            payload: posts.data
        })
    } catch (error) {
        dispatch({
            type:GET_POSTS_FAILURE,
            payload: error.response.data.errors
        })
    }
}

export const getPostById = userId =>dispatch =>{
    dispatch({
        type:GET_POSTS_BY_ID,
        payload:userId
    })
}