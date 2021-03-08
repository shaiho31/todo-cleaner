import React, { useState, useEffect } from 'react'
import Header from './components/header/Header.js'
import Form from './components/form/Form.js'
import TodoList from './components/todoList/TodoList.js'
import './App.css'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  const [header, setHeader] = useState('Todo Cleaner Please type your first todo')
  const [paragraph, setParagraph] = useState('')
  const [status, setStatus] = useState('All Todos')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'Completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break
      case 'Not Completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }

  return (
    <div className="app-container">
      <Header header={header} paragraph={paragraph} />
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        header={header}
        setHeader={setHeader}
        setParagraph={setParagraph}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
      />
    </div>
  )
}

export default App
/*  */
