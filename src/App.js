import React, {useState} from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css"

const App = () => {
  const [inputText, setInputText] = useState("");// puting state here because needed access to all components from topest 
  const [todos, setTodos] = useState([]);
  const [todoCompleted, setTodoCompleted] = useState("");
  const [header, setHeader] = useState("")
  
  return (
    <div className ="app-container">
      <Header/>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        todoCompleted = {todoCompleted}
        setTodoCompleted = {setTodoCompleted}
      />
    </div>
  )
}

export default App;