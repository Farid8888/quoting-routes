import QuotesItem from "./QuotesItem";
import { Fragment } from "react";



const QuoteList = (props)=>{
    const mapquotes = props.quotes.map((q, i) => {
        return { index: i, quote: q };
      });
      let sortedquotes = mapquotes.sort(function (a, b) {
        if (b.index > a.index) {
          return 1;
        }
        if (b.index < a.index) {
          return -1;
        }
        return 0;
      });
      let result = sortedquotes.map((quote) => {
        return props.quotes[quote.index];
      });
      
      if (props.buttonChange) {
        sortedquotes = mapquotes.sort(function (a, b) {
          if (a.index > b.index) {
            return 1;
          }
          if (a.index < b.index) {
            return -1;
          }
          return 0;
        });
        result = sortedquotes.map((quote) => {
          return props.quotes[quote.index];
        });
        
      }
      console.log(mapquotes);
    
      
        let content = result.map((quote) => {
          return (
            <QuotesItem
              key={quote.id}
              text={quote.text}
              author={quote.author}
              id={quote.id}
            />
          );
        });
    return(
        <Fragment>
            {content}
        </Fragment>
    )
}

export default QuoteList