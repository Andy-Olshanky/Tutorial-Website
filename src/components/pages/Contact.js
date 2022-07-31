import React from 'react'
import {Button} from '../Button'
import SingleForm from '../SingleForm'
import MultiForm from '../MultiForm'
import Dropdown from '../Dropdown'
import MultiButton from '../MultiButton'


class Person {
    constructor(name, number, email) {
        this.name = name
        this.number = number
        this.email = email
    }
}


function Contact() {
    const PEOPLE = [
        new Person("Me", "2679915815", "aolshans@temple.edu"),
        new Person("Papa", "2679840360", "lolshans@gmail.com"),
        new Person("Evan", "temp num", "temp email"),
        new Person("Harrison", "temp num", "temp email")
    ]

    return (<div className='contact'>
        <div className='contact-menu'>
            Stuff goes here
        </div>
        <div className='blank'>
            <div className='message-wrapper'>
                <h2>Contact Us</h2>
            </div>
            <div className='contact-wrapper'>
                <SingleForm className='one-line' placeholder='Type your name here'/>
            </div>
            <div className='contact-wrapper'>
                <SingleForm className='one-line' placeholder='Type your email here'/>
            </div>
            <div className='contact-wrapper'>
                <MultiForm className='multi-line'
                    placeholder={'What\'s on your mind?'}/>
            </div>
            <div className='contact-button-wrapper'>
                <div className='contact-button-item'>
                    <Button to='/sign-up'>
                        Send Message
                    </Button>
                </div>
            </div>
        </div>
    </div>)
}

export default Contact
