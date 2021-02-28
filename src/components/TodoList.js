import React from "react";
import Todo from "./Todo";
import "./css/todoList.css"

const TodoList = ({todos, setTodos, todoCompleted, setTodoCompleted}) => {

  return (
    <div className="container">
      <ul>
      {todos.map(todo => (
        <Todo //passing related props to the componente that I can use later in the nested componente
          key={todo.id}
          text={todo.text}
          id={todo.id}
          setTodos={setTodos}
          todo={todo}
          todos={todos}
          setTodoCompleted={setTodoCompleted}
          todoCompleted={todoCompleted}
        />
      ))
      }
      </ul>
    </div>
  )
}

export default TodoList;