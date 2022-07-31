import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div to='/sign-up' className='hero-btns'>
                <Button className='btns'
                    to='/sign-up'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    GET STARTED
                </Button>
                <Button to='/sign-up' className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    WATCH TRAILER 
                    <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
