import React from "react";
import "./css/todo.css"

const Todo = ({text, setTodos, todo, todos,setTodoCompleted,todoCompleted}) => {

const deleteHandler = () =>  {
  setTodos(todos.filter(element => element.id !== todo.id ))
}

const editHandler = () => {
  setTodos(todos.map((el) => {
    if (el.id === todo.id) {
      return text = ""
    }
  }))
}

  return (
    <div>
      <li className="li">
      <button className="dBtn" onClick={deleteHandler}><i class="fa fa-trash"></i> Remove</button>
      <button className="eBtn" onClick={editHandler}><i class="fa fa-edit"></i></button>
      <input className ="green" type = "text" value={text}/>
      {/* <input type ="checkbox" onClick={completedHandler}/> */}
      </li>
    </div>
  )
}

const completdTodo = {
  color:"green"
}

const notCompletedTodo = {
  listStyleType: "none",
}

export default Todo;