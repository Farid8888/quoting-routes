import classes from './CommentsList.module.css'
import CommentsItem from './CommentsItem'
import NewComment from './NewComment'
import { useState,Fragment} from 'react'
import LoadingSpinner from '../UI/LoadingSpinner'


const CommentsList = (props)=>{
    
   const [form,setForm ] = useState(false)
   const formHandler =()=>{
       setForm(true)
   }
     const {comments} =props
   let content = comments.map(comment=>{
       return <CommentsItem key={comment.comments} text={comment.comments}/>
   })

   if(comments.length<=0){
       content = <div className={classes.noComments}>
            No comments were added yet!
       </div>
   }
    return(
        <Fragment>
        <div className={classes.comments}>
       <div className={classes.addComments}>
           <h3>User Comments</h3>
           {props.statusCheck === true && <div style={{textAlign:'center'}}><LoadingSpinner/></div>}
          {!form && <button type='button' onClick={formHandler}>Add Comments</button>} 
       </div>
       </div> 
       {props.status === 'pending' && <div style={{textAlign:'center'}}><LoadingSpinner/></div>}
       {form &&<NewComment quoteId={props.quoteId} addedComment={props.addedComment} status={props.status} /> }
       {content}
       </Fragment>
    )
}

export default CommentsList