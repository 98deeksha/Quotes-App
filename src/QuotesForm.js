import React, { useState } from "react";
import {v4 as uuidv4} from "uuid";

const QuotesForm = (props) => {
    const { formSubmission, id:slNo, name: author, body: quote , handleToggle} = props;
    const [id, setId] = useState(slNo ? slNo : uuidv4())
  const [name, setName] = useState(author ? author : '')
  const [body, setBody] = useState(quote ? quote : '')



  const handleChange = (e) => {
    if(e.target.name === "name"){
      setName(e.target.value)
    } else if(e.target.name === "body"){
      setBody(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      id:id,
      name:name,
      body:body
    }
   formSubmission(formData)
   if(handleToggle){
    handleToggle()
   }
    setName('')
    setBody('')
  }
  return ( 
    <div>
    <form onSubmit={handleSubmit}>
    <label>Name</label> <br/>
    <input type="text" value={name} name="name" onChange={handleChange} /> <br/>
    <label>Body</label><br/>
    <textarea value={body} name="body" onChange={handleChange} /><br/>
    <input type="submit" />
    </form>
    </div>
   );
}
 
export default QuotesForm;