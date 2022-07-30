import React from 'react'
import {Button} from '../Button'
import SingleForm from '../SingleForm'
import MultiForm from '../MultiForm'

function Contact() {
    return (
        <div className='contact'>
            <div className='blank'>
                <div className='contact-wrapper'>
                    <SingleForm className='one-line' placeholder='Type your name here'/>
                </div>
                <div className='contact-wrapper'>
                    <SingleForm className='one-line' placeholder='Type your email here'/>
                </div>
                <div className='contact-wrapper'>
                    <MultiForm className='multi-line' placeholder={'What\'s on your mind?'}/>
                </div>
                <div className='contact-button-wrapper'>
                    <div className='contact-button-item'>
                        <Button to='/sign-up'>
                            Send Message
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
