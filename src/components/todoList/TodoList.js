import React, { useEffect } from 'react'
import Todo from './todo/Todo.js'
import './todoList.css'

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <ul>
        {console.log(todos)}
        {todos.map((todo) => {
          return <Todo key={todo.id} text={todo.text} id={todo.id} setTodos={setTodos} todo={todo} todos={todos} />
        })}
      </ul>
    </div>
  )
}

export default TodoList
