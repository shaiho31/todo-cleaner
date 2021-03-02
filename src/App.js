import React, { useState, useEffect } from 'react'
import Header from './components/header/Header.js'
import Form from './components/form/Form.js'
import TodoList from './components/todoList/TodoList.js'
import './App.css'

const App = () => {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className="app-container">
      <Header />
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
