import React from 'react'
import './header.css'

const Header = ({header,paragraph}) => {
  return (
    <div className="header">
      <h1>{header}</h1>
      <p className="p-element"> {paragraph} </p>
    </div>
  )
}

export default Header
