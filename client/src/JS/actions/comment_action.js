import axios from "axios";
import {
  GET_COMMENTS,
  GET_COMMENTS_FAILURE,
  GET_COMMENTS_SUCCESS,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT,
  ADD_COMMENT_FAILURE,
  EDIT_COMMENT,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_FAILURE,
  DELETE_COMMENT_FAILURE,
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
} from "../constants/actions-types";


export const getComments = (userId, postId) =>async dispatch =>{
    dispatch({
        type:GET_COMMENTS
    })
    try {
        const commentsPost = await axios.get(`/profile/${userId}/post/${postId}`)
        dispatch({
            type:GET_COMMENTS_SUCCESS,
            payload:commentsPost.data.comments
        })
    } catch (error) {
        dispatch ({
            type:GET_COMMENTS_FAILURE,
            payload: error
        })
    }
}

export const addComment = (userId, postId, comment) => async dispatch=>{
    dispatch({
        type: ADD_COMMENT
    })
    try {
        const addCommentRes = await axios.post(`/profile/${userId}/post/${postId}`, comment)
        dispatch ({
            type: ADD_COMMENT_SUCCESS,
            payload: addCommentRes.data
        })
        
    } catch (error) {
        dispatch({
            type: ADD_COMMENT_FAILURE,
            payload: error
        })
    }
}

export const editeComment = (userId, postId, comment) =>async dispatch =>{
    dispatch({
        type:EDIT_COMMENT
    })
    try {
        const editRes = await axios.put(`/profile/${userId}/post/${postId}`, comment)
        dispatch({
            type: EDIT_COMMENT_SUCCESS,
            payload:editRes.data
        })
    } catch (error) {
        dispatch({
            type:EDIT_COMMENT_FAILURE,
            payload: error
        })
    }
}

export const deleteComment = (userId, postId, id) =>async dispatch =>{
    dispatch({
        type:DELETE_COMMENT
    })
    try {
        const deleteRes = await axios.delete(`/profile/${userId}/post/${postId}/comment`, {data:{id}} )
        dispatch({
            type:DELETE_COMMENT_SUCCESS,
            payload: deleteRes.data
        })
    } catch (error) {
        dispatch({
            type:DELETE_COMMENT_FAILURE,
            payload: error
        })
    }
}