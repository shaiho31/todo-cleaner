import React from 'react'
import './todo.css'

const Todo = ({ text, setTodos, todo, todos}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id))
  }

  const editHandler = () => {
   const textChanged = prompt("Please edit your todo");
    const index = todos.findIndex((element) => element.id === todo.id ? todo : null)
    todos[index].text = textChanged;
    setTodos([...todos])
    console.log(todos)
  } 

  const completedHandler = () => {
    setTodos(todos.map((element) => {
      if(element.id === todo.id) {
        return {
          ...element, completed:!todo.completed
        }
      }
      return element
    }))
  }


  return (
    <div className="div-li">
      <li className="li">
        <button className="delete-btn" onClick={deleteHandler}><i class="fa fa-trash"></i> Remove</button>
        <input type className={`todo-item ${todo.completed ? "completed" : "not-completed"}`} defaultValue={text} key={todo.id}/>
        <button className="edit-btn" onClick={editHandler}><i class="fa fa-edit"></i></button>
        <input type="checkbox" onClick={completedHandler}/>
      </li>
    </div>
  )
}

export default Todo
