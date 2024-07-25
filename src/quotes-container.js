import React, { useState, useEffect } from "react";
import QuotesList from "./quotes-list";
import AddQuote from "./addquote";

const QuotesContainer = (props) => {
    const [quotes, setQuotes] = useState([])
    
    const addItem = (quote) => {
        const result = [quote, ...quotes]
        setQuotes(result)
    }

    useEffect(() => {
        const result = JSON.parse(localStorage.getItem("quotes")) || []
        setQuotes(result)
    }, [])

    useEffect(() => {
        localStorage.setItem("quotes", JSON.stringify(quotes))
    }, [quotes])

    const removeItem = (id) => {
        const result = quotes.filter((quote) =>{
            return quote.id !== id
        })
        setQuotes(result)
    }

    const editItem = (quote) => {   
        const result = quotes.map((q) => {
            if(q.id === quote.id){
                return{...q, ...quote}
            }else{
                return{...q}
            }
        })
        setQuotes(result)
    }

    return(

        <div>
            <h2>Quotes Cotainer</h2>
            <QuotesList 
            quotes = {quotes} 
            removeItem = {removeItem}
            editItem = {editItem}
            />

            <AddQuote addItem = {addItem}/>
        </div>
    )
}

export default QuotesContainer;