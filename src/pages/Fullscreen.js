import classes from './Fullscreen.module.css'
import {useEffect,Fragment,useState} from 'react'
import { getFilteredQuotes } from '../api/api'
import {useParams,Route,useRouteMatch,Link,useHistory} from 'react-router-dom'
import Comments from '../comments/Comments'
import useHttp from '../useHook/useHttp'
import LoadingSpinner from '../UI/LoadingSpinner'

const Fullscreen = (props)=>{
    const {sendRequest,error,data,status} =useHttp(getFilteredQuotes)
    const params =useParams()
    const match = useRouteMatch()
    const history = useHistory()
    const {quoteId} = params
    useEffect(()=>{
            sendRequest(quoteId)
    },[sendRequest])
    console.log(quoteId)
    console.log(data)
    console.log(match)
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
    if(!data.text){
     return <div>No quotes found</div>
    }
    console.log(data)
    console.log(status)
    return(
        <Fragment>
            <div className={classes.fullScreen}> 
            <h3>{data.text}</h3>
            <p>{data.author}</p>
            </div>
            <Route path={`${match.url}`} exact>
            <Link to={`${match.url}/comments`}>
            <div className={classes.btn}> 
            <button type='button'>Load comments</button>
            </div>
            </Link>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments quoteId={quoteId}/>
            </Route>
           </Fragment>
    )
}

export default Fullscreen