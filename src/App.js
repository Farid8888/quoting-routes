import {Route,Redirect,Switch} from 'react-router-dom'
import PageNotFound from './pages/PageNotFound';
import Layout from './Layout/Layout';
import { fetchQuotesData } from './api/api';
import useHttp from './useHook/useHttp';
import React,{useEffect,Suspense} from 'react'
import LoadingSpinner from './UI/LoadingSpinner'

function App() {
  const {sendRequest,data} = useHttp(fetchQuotesData)
useEffect(()=>{
sendRequest()
},[sendRequest])

const NewQuote = React.lazy(()=>import('./pages/NewQuote'))
const Fullscreen = React.lazy(()=>import('./pages/Fullscreen'))
const Quotes = React.lazy(()=>import('./pages/Quotes'))
  return (
    <div>
      <Layout/>
      <Suspense fallback={<div style ={{textAlign:'center'}}><LoadingSpinner/></div>}>
      <Switch>
      <Route path='/quotes/:quoteId'>
            <Fullscreen checkData={data}/>
          </Route>  
      <Redirect from='/' to='/quotes' exact/>
      <Route path='/quotes' exact>
        <Quotes />
        </Route>
        <Route path='/new-quote'>
          <NewQuote/>
        </Route>
      <Route path='*'>
        <PageNotFound/>
      </Route>
      </Switch>
      </Suspense>
    </div>
  );
}

export default App;
