import React, { useState } from "react";
import {v4 as uuidv4} from "uuid"

const QuotesForm = (props) => {

    const {formSubmission, id: slNo, name:author, body:quote, handleToggle} = props
    const [id, setId] = useState (slNo ? slNo : uuidv4())
    const [name, setName] = useState(author ? author : "")
    const [body, setBody] = useState(quote ? quote : "")


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: id,
            name: name,
            body: body
        }
        
        formSubmission(formData)

        if (handleToggle) {
            handleToggle()
        }

        //resetform
        setName("")
        setBody("")

    }
    

    const handleName = (e) =>{
        const result = e.target.value
        setName(result)
    }

    const handleBody = (e) => {
        const result = e.target.value
        setBody(result)
    }

    

    return(
        <div>
            <h3>Quotes Form</h3>

            <form onSubmit={handleSubmit}>

                <label>Name</label><br />
                <input type = "text" value = {name} onChange={handleName} /> <br />

                <label>Body</label><br />
                <textarea value = {body} onChange={handleBody} /><br />

                <input type = "submit" value= "Save" />

            </form>
        </div>
    )
}

export default QuotesForm;