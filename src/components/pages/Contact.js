import React from 'react'
import {Button} from '../Button'
import Form from '../Form'

function Contact() {
    return (
        <div className='contact'>
            <div className='blank'>
                <div className='contact-wrapper'>
                    <Form className='one-line' placeholder='Type your name here'/>
                </div>
                <div className='contact-wrapper'>
                    <Form className='one-line' placeholder='Type your email here'/>
                </div>
                <div className='contact-wrapper'>
                    <Form className='multi-line' placeholder={'What\'s on your mind?'}/>
                </div>
            </div>
        </div>
    )
}

export default Contact
