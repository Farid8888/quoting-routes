import classes from "./Quotes.module.css";
import React, { useEffect, Fragment, useState } from "react";
import QuotesItem from "./QuotesItem";
import { useHistory } from "react-router";
import useHttp from "../useHook/useHttp";
import { fetchQuotesData } from "../api/api";
import QuoteList from "./QuoteList";
import LoadingSpinner from "../UI/LoadingSpinner";

const Quotes = (props) => {
  const {sendRequest,data,error,status} = useHttp(fetchQuotesData)
  const [buttonChange, setButtonChange] = useState(false);
  useEffect(()=>{
      sendRequest()
},[sendRequest])

console.log(data)
  const history = useHistory();
  
  const redirectHandler =()=>{
    history.replace('/new-quote')
   }
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
  
  if(data.length === 0 && status === 'success'){
    return(
      <div className={classes.noQuotes}>
      <h1>No quotes found</h1>
      <button type='button' onClick={redirectHandler}>Add a quote</button>
    </div>
    )
  }
  const changeHandler = () => {
    setButtonChange((prevst) => {
      return !prevst;
    });
    history.push(history.location.pathname + '?sort=' + `${buttonChange ? 'desc' : 'asc'}`)
  };

    return (
    <Fragment>
        <section className={classes.quotes}>
          <div className={classes.btn}>
            <button onClick={changeHandler}>
              {buttonChange ? "Sort Descending" : "Sort Acsending"}
            </button>
          </div>
          <QuoteList buttonChange={buttonChange} quotes={data}/>
        </section>
    </Fragment>
  );
};

export default Quotes;
