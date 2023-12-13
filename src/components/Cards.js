import React from 'react';
import CardItem from './pages/CardItem';
import './Cards.css';

function Cards() {
  return (
    <>
    <div className='cards'>
        <h1>check out</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                {/* for 2  */}
                <ul className="cards__items"> 
                    < CardItem
                    src='images/img-1.jpg'
                    text='Explore'
                    label='Adventure'
                    path='/services'
                    />
                    < CardItem
                    src='images/img-2.jpg'
                    text='Travel'
                    label='Luxury'
                    path='/services'
                    />
                </ul>
                {/* for 3 , add  CardItem for more*/}
                <ul className="cards__items">
                    < CardItem
                    src='images/img-3.jpg'
                    text='Explore'
                    label='Adventure'
                    path='/services'
                    />
                    < CardItem
                    src='images/img-4.jpg'
                    text='Travel'
                    label='Luxury'
                    path='/services'
                    />
                    < CardItem
                    src='images/img-5.jpg'
                    text='Travel'
                    label='Luxury'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
    </>
  );
};

export default Cards;