import classes from './NewQuote.module.css'
import Card from '../UI/Card'
import React,{useRef,useEffect,useState} from 'react'
import {useHistory} from 'react-router'
import { sendQuotesData} from '../api/api' 
import useHttp from '../useHook/useHttp'
import LoadingSpinner from '../UI/LoadingSpinner'
import PromtQuotes from './PromtQuotes'

const NewQuote =()=>{
    const {sendRequest,data,error,status} =useHttp(sendQuotesData)
  const textInputRef = useRef()
  const authorInputRef = useRef()
const history =useHistory()
const [isEntering,setIsEntering] = useState(false)
const onFocusHandler =()=>{
    setIsEntering(true)
}
console.log(isEntering)
console.log('sd')
    const onSubmitHandler =(event)=>{
     event.preventDefault()
     const sendData={
        text:textInputRef.current.value,
        author:authorInputRef.current.value
    }
     sendRequest(sendData)
    }

    useEffect(()=>{
        if(status==='success'){
            history.push('/quotes')
        }
    },[history,status])
    if(status === 'pending'){
        return <div className={classes.loading}>
            <LoadingSpinner/>
        </div>
    }

    if(status === 'error'){
      return <div className={classes.error}>
          {error}
      </div>
    }
    return(
        <Card>
            <PromtQuotes isEntering={isEntering}>
        <form className={classes.form} onSubmit={onSubmitHandler} onFocus={onFocusHandler}>
           <div className={classes.control}>
               <label htmlFor='author'>Author</label>
               <input id='author' type='text' ref={textInputRef}/>
           </div>
           <div className={classes.control}>
               <label htmlFor='text'>Text</label>
               <textarea id='text' rows='5' type='text' ref={authorInputRef} />
           </div>
           <div className={classes.btn}>
               <button type='submit'>Add Quote</button>
           </div>
        </form>
        </PromtQuotes>
        </Card>
    )
}

export default NewQuote