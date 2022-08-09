import React from 'react';
import './cards.css';
import CardItems from './CardItems';


function Cards() {
    return (
      <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItems
              src=""
              />
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
  

export default Cards