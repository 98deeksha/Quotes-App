import React from "react";
import QuotesItem from "./QuotesItem";

const QuotesList = (props) => {
  const {quotes,removeItem, editItem} = props
  return ( 
    <div>
    {quotes.length === 0 ? ( <h3>No quotes found, Add Quotes</h3>) : (
      <div>
      <h3>Quotes - {quotes.length}</h3>
      {quotes.map((quote) => {
        return <QuotesItem key={quote.id} {...quote} removeItem={removeItem} editItem={editItem}/>
      })}
      </div>
      )}
  

    </div>
   );
}
 
export default QuotesList;