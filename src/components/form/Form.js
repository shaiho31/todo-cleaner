import React from 'react'
import './form.css'

const Form = ({ todos, setTodos, inputText, setInputText }) => {
  const inputTextHandler = (e) => {
    const inputValue = e.target.value
    setInputText(inputValue)
  }

  const submitButtonHandler = (e) => {
    e.preventDefault()
    if (inputText === '') {
      return alert('You enterd empty task please try again')
    }
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }])
    setInputText('')
  }

  return (
    <form>
      <input className="input" type="text" value={inputText} onChange={inputTextHandler} />
      <button className="button" onClick={submitButtonHandler}>
        {' '}
        Add task
      </button>
    </form>
  )
}

export default Form
