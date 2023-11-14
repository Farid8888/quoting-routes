import classes from './NewComment.module.css'
import { sendCommentsData } from '../api/api'
import {useRef,useEffect,Fragment} from 'react'
import useHttp from '../useHook/useHttp'
import {useHistory,useRouteMatch} from 'react-router'


const NewComment =(props)=>{
    const history = useHistory()
    const match = useRouteMatch()
    console.log(match)
    console.log(history)
    const {sendRequest,error,status} = useHttp(sendCommentsData)
    const inputRef = useRef()
    const submitHandler=(event)=>{
        event.preventDefault()
        const sendData={
            comments:inputRef.current.value,
            quoteId:props.quoteId
        }
       sendRequest(sendData)
    }

    const {addedComment} = props
    useEffect(()=>{
        if(status === 'success' && !error)
        addedComment()
    },[status,error,addedComment])
    
   
    return(
        <Fragment>
       <form className={classes.form} onSubmit={submitHandler}>
           <label htmlFor='new-comment'>Your Comment</label>
           <textarea id='new-comment' type='text' rows='5' ref={inputRef}/>
           <div className={classes.btn}>
               <button type='submit'>Add Comment</button>
           </div>
       </form>
       </Fragment>
    )
}

export default NewComment