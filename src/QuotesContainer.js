import React, { useEffect, useState } from "react";
import QuotesList from "./QuotesList";

import AddQuote from "./AddQuote";

const QuotesContainer = (props) => {
  const [quotes, setQuotes] = useState([])

  const addItem = (quote) =>{
    const res = [...quotes, quote]
    setQuotes(res)
  }

  const removeItem = (id) =>{
    const res = quotes.filter((quote) =>{
      return quote.id !== id
    })
    setQuotes(res)
  }

  const editItem = (quote) => {
    const result = quotes.map((q) => {
      if(q.id === quote.id) {
        return {...q, ...quote}
      } else {
        return {...q}
      }
    })
    setQuotes(result)
  }


 useEffect(() => {
  const res = JSON.parse(localStorage.getItem('quotes') || [])
  setQuotes(res)
 }, [])

 useEffect(() =>{
  localStorage.setItem('quotes', JSON.stringify(quotes))
 }, [quotes])
  return (
    <div>
      <QuotesList quotes={quotes} removeItem={removeItem} editItem={editItem} />
      <AddQuote addItem={addItem} />
     
    </div>
  );
}
 
export default QuotesContainer;