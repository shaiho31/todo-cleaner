import React from 'react'
import Todo from './todo/Todo.js'
import './todoList.css'

const TodoList = ({ todos, setTodos, filteredTodos,setFilteredTodos }) => {
  return (
    <div className="container">
      <ul className="ul-list">
        {filteredTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              text={todo.text}
              id={todo.id}
              setTodos={setTodos}
              todo={todo}
              todos={todos}
              setFilteredTodos={setFilteredTodos}
              filteredTodos={filteredTodos}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
