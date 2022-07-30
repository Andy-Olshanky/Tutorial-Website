import React from 'react'
import './Form.css'

function MultiForm(props) {
    return (<textarea 
        type={'text'}
        placeholder={
            props.placeholder
        }
        className={
            props.className
        }
        />)
}

export default MultiForm
