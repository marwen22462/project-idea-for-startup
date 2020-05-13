import axios from "axios"
import {SEND_MESSAGE, SEND_MESSAGE_FAILURE, SEND_MESSAGE_SUCCESS} from '../constants/actions-types'

export const sendMessage = (senderId, reciverId, message)=>async dispatch =>{
    dispatch({
        type:SEND_MESSAGE
    })
    try {
        const sendMessage= await axios.post(`/profile/${senderId}/post/${reciverId}/message`, message)
        dispatch({
            type:SEND_MESSAGE_SUCCESS,
            payload:sendMessage
        })
    } catch (error) {
        dispatch({
            type:SEND_MESSAGE_FAILURE,
            payload:error
        })
    }
}