import React from "react";
import "./css/form.css"

const Form = ({todos, setTodos,inputText,setInputText}) => {

  const inputHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {text:inputText, completed:false, id:Math.random() * 1000}])
    setInputText("")
  }

  return (
    <form>
      <input className ="input" type="text" value={inputText} onChange={inputHandler}/>
      <button className="button" onClick={submitHandler}> Add task</button> 
    </form>
  )
}

export default Form;