import React, { use } from 'react';
import type { Icard } from '../../types/cardType';
import Card from './Card';

interface CardProps {
    cardsPromise: Promise<Icard[]>
}

const Cards = ({cardsPromise}: CardProps)  => {

     const cards = use(cardsPromise)
    
    return (
        <div>
            <Card cards ={cards}/>
        </div>
    );
}; 

export default Cards;