import React from 'react';
import './cards.css';
import CardItems from './CardItems';


function Cards() {
  // const img
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItems
              src="./Files/img/img-9.jpg"
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItems
              src="./Files/img/img-2.jpg"
              text='Travel through the Island of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItems
              src="./Files/img/img-9.jpg"
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItems
              src="./Files/img/img-2.jpg"
              text='Travel through the Island of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
            <CardItems
              src="./"
              text='Travel through the Island of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Cards