import CommentsList from "./CommentsList"
import { fetchCommentsData } from "../api/api"
import {useEffect,useCallback,Fragment,useState} from 'react'
import useHttp from "../useHook/useHttp"
import LoadingSpinner from "../UI/LoadingSpinner"

const Comments =(props)=>{
    const {sendRequest,data,error,status} =useHttp(fetchCommentsData)
    
    const {quoteId} =props
    useEffect(()=>{
            sendRequest(quoteId)
    },[sendRequest,quoteId])

    const addedCommentHandler =useCallback(()=>{
        sendRequest(quoteId)
    },[sendRequest,quoteId])
  



    
    return(
      <Fragment>
    <CommentsList quoteId={props.quoteId} comments={data} addedComment={addedCommentHandler} status={status} />
    </Fragment>
    )
}

export default Comments