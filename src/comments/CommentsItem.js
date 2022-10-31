import classes from './CommentsItem.module.css'



const CommentsItem =(props)=>{
    return(
      <div className={classes.commentsItem}>
          <p>{props.text}</p>
      </div>
    )
}

export default CommentsItem