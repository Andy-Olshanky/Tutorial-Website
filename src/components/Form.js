import React from 'react'
import './Form.css'

function Form(props) {
  return (
    <input type={'text'} placeholder={props.placeholder} className={props.className}/>
  )
}

export default Form