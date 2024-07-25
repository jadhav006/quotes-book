import React from "react";
import QuotesItem from "./quotes-item";

const QuotesList = (props) => {
    const {quotes, removeItem, editItem} = props
    return(
        <div>
            {
               quotes.length === 0 ? (
                <div>   
                    <h2>No Quotes Found</h2>
                    <b>Add Your Quotes</b>
                </div>
               ): (
                <div>   
                    <h3>Quotes List - {quotes.length}</h3>
                    { quotes.map((quote) => {
                            return <QuotesItem key = {quote.id} {...quote} removeItem ={removeItem} editItem = {editItem} />
                        })
                    }
                </div>
               )
            }
        </div>
    )
}

export default QuotesList