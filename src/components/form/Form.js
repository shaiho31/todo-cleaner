import React from 'react'
import './form.css'

const Form = ({ todos, setTodos, inputText, setInputText, setHeader, setParagraph, setStatus }) => {
  const inputTextHandler = (e) => {
    const inputValue = e.target.value
    setInputText(inputValue)
    setHeader('Todo cleaner')
    const showParagraphInDelay = () => {
      setTimeout(() => {
        setParagraph('Its Time to Clean App your Tasks')
      }, 1500)
    }
    showParagraphInDelay()
  }

  const submitButtonHandler = (e) => {
    e.preventDefault()
    if (inputText === '') {
      return alert('You enterd empty task please try again')
    }
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }])
    setInputText('')
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form>
      <input className="input" type="text" value={inputText} onChange={inputTextHandler} />
      <button className="button" onClick={submitButtonHandler}>
        Add task
      </button>
      <select className="button-select" onChange={statusHandler}>
        <option>All Todos</option>
        <option>Completed</option>
        <option>Not Completed</option>
      </select>
    </form>
  )
}

export default Form
