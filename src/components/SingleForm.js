import React from 'react'
import './Form.css'

function SingleForm(props) {
  return (
    <input type={'text'} placeholder={props.placeholder} className={props.className}/>
  )
}

export default SingleForm