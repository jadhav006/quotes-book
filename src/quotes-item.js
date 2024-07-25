import React, {useState} from "react";
import EditQuote from "./editquote";

const QuotesItem = (props) => {
    const {id, name, body, removeItem, editItem} = props
    const [toggle, setToggle] = useState(false)

    const handleRemove = () => {
        const result = window.confirm("are you sure")
        if(result){
            removeItem(id)
        }
    }

    const handleToggle = () => {
        const result = !toggle
        setToggle(result)
    }
    
    return(
        <div>
            { toggle ? (
                <div>
                    <EditQuote 
                        id = {id} 
                        name = {name} 
                        body = {body}
                        editItem = {editItem}
                        handleToggle = {handleToggle}
                    />

                    <button onClick={handleToggle}>Cancel</button>
                </div>
            ) : (
            <div>
            <blockquote><b>{body} - {name}</b></blockquote>
            <button onClick={handleToggle}>edit</button>
            <button onClick={handleRemove}>remove</button>
            </div>
            )}
            
        </div>
    )
}

export default QuotesItem