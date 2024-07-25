import React from "react";
import QuotesForm from "./quotes-form";

const AddQuote = (props) => {

    const {addItem} = props

    const formSubmission = (formData) => {
        addItem(formData)
    }

    return(
        <div>
            <h2>Add Quote</h2>
            <QuotesForm formSubmission = {formSubmission}/>
        </div>
    )
}

export default AddQuote