import React from 'react'
import './todo.css'

const Todo = ({ text, setTodos, todo, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id))
  }

  const editHandler = () => {
    let newText = prompt('edit your todo')
    const index = todos.findIndex((el) => (el.id === todo.id ? todo : null))
    todos[index].text = newText
    setTodos([...todos])
  }

  return (
    <div>
      <li className="li">
        <button className="delete-btn" onClick={deleteHandler}>
          <i class="fa fa-trash"></i> Remove
        </button>
        <button className="edit-btn" onClick={editHandler}>
          <i class="fa fa-edit"></i>
        </button>
        <input className="input-list" type="text" value={text} />
      </li>
    </div>
  )
}

export default Todo
