import axios from "axios";
import {
  GET_POSTS,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  EDIT_POST,
  GET_ONE_POST,
  GET_ONE_POST_SUCCESS,
  GET_ONE_POST_FAILURE,
  DELETE_ONE_POST,
  DELETE_ONE_POST_SUCCESS,
  DELETE_ONE_POST_FAILURE,
  GET_POST_BY_TYPE,
  GET_POST_BY_TYPE_FAILURE,
  GET_POST_BY_TYPE_SUCCESS,
  ADD_LIKE,
  ADD_LIKE_SUCCESS,
//   GET_POSTS_BY_ID,
} from "../constants/actions-types";

export const getPosts =id=> async dispatch =>{
    dispatch ({
        type:GET_POSTS
    })
    try {
        const userPosts= await axios.get(`/profile/${id}/posts`)
        dispatch({
            type: GET_POSTS_SUCCESS,
            payload: userPosts.data
        })
    } catch (error) {
        dispatch({
            type:GET_POSTS_FAILURE,
            payload: error.response.data.errors
        })
    }
}

export const addPost = (id, post)=>async dispatch =>{
    dispatch ({
        type:ADD_POST
    })
    try {
        const addResutl = await axios.post(`/profile/${id}/add`, post)
        dispatch ({
            type: ADD_POST_SUCCESS,
            payload: addResutl.data
        })
    } catch (error) {
        dispatch({
            type:ADD_POST_FAILURE,
            payload: error.response.data.errors
        })
    }
}

export const editPost = (id, post) =>async dispatch =>{
    dispatch ({
        type:EDIT_POST
    })
    try {
        const editResult = await axios.put(`/edit/${id}`, post)
        dispatch({
            type:EDIT_POST_SUCCESS,
            payload:editResult.data
        })
    } catch (error) {
        dispatch({
            type: EDIT_POST_FAILURE,
            payload: error.response.data.errors
        })
    }
}

export const getOnePost = (userId,postId)=>async dispatch=>{
    dispatch({
        type:GET_ONE_POST
    })
    try {
        const onePostRes= await axios.get(`/profile/${userId}/post/${postId}`)
        dispatch({
            type:GET_ONE_POST_SUCCESS,
            payload:onePostRes.data
        })
    } catch (error) {
        dispatch ({
            type:GET_ONE_POST_FAILURE,
            payload: error.response.data.errors
        })
    }
}
export const deletePost=( userId, postId) =>async dispatch =>{
    dispatch({
        type:DELETE_ONE_POST
    })
    try {
        const deleteRes = await axios.delete(`/profile/${userId}/post/${postId}`)
        dispatch({
            type:DELETE_ONE_POST_SUCCESS,
            payload: deleteRes.data
        })
    } catch (error) {
        dispatch({
            type:DELETE_ONE_POST_FAILURE,
            payload: error.response.data.errors
        })
    }
}
export const getPostByType=postType1 =>async dispatch =>{
    dispatch({
        type:GET_POST_BY_TYPE
    })
    try {
        const getPostsRes= await axios.get("/homeUser", {params: postType1})
        dispatch({
            type:GET_POST_BY_TYPE_SUCCESS,
            payload: getPostsRes.data
            
        })
    } catch (error) {
        dispatch({
            type:GET_POST_BY_TYPE_FAILURE,
            payload: error.response.data.errors
        })
    }
}
export const addLike = (userId, postId, like) =>async (dispatch) =>{
    dispatch({
        type: ADD_LIKE
    })
    try {
        const likeRes= await axios.post(`/profile/${userId}/post/${postId}/addLike`, like)
        dispatch({
            type:ADD_LIKE_SUCCESS,
            payload: likeRes.data
            
        })
    } catch (error) {
        dispatch({
            type:ADD_POST_FAILURE,
            payload: error.response.data.error
        })
    }
    
}
