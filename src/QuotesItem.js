import React, { useState } from "react";
import EditQuote from "./EditQuote";

const QuotesItem = (props) => {
    const {id,name,body, removeItem, editItem} = props
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

   
    return (
      <div>
        {toggle ? (
            <div>
          <EditQuote id={id} name={name} body={body} editItem={editItem} handleToggle={handleToggle}/>
          <button onClick={handleToggle}>Cancel</button>
          </div>
        ) : (
          <div>
            <blockquote>
              {body} - {name}
            </blockquote>
            <button onClick={() => {
              const confirm = window.confirm('Do you want to delete?')
              if(confirm) {
                removeItem(id)
              }
            }}>Remove</button>
            <button onClick={handleToggle}>Edit</button>
          </div>
        )}
      </div>
    );
}
 
export default QuotesItem;