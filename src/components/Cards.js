import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1> Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src='images/img-9.jpg'
                        text='Explore the Waterfallxplore the Waterfallxplore the Waterfallxplore the Waterfall!'
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem
                        src='images/img-2.jpg'
                        text='This is a beachxplore the Waterfallxplore the Waterfallxplore the Waterfallxplore the Waterfall!'
                        label='Luxury'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src='images/img-4.jpg'
                        text='Footballxplore the Waterfallxplore the Waterfallxplore the Waterfall!'
                        label='Luxury'
                        path='/services'
                    />
                    <CardItem
                        src='images/img-8.jpg'
                        text='The dessert is hotxplore the Waterfallxplore the Waterfallxplore the Waterfallxplore the Waterfallxplore the Waterfall!'
                        label='Luxury'
                        path='/services'
                    />
                    <CardItem
                        src='images/img-3.jpg'
                        text='Its a boat... idk manxplore the Waterfallxplore the Waterfall'
                        label='Luxury'
                        path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards