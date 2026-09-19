import React, { use } from 'react';
import type { Icard } from '../../types/cardType';
import Card from './Card';

interface CardProps {
    cardsPromise: Promise<Icard[]>;
}

const Cards = ({ cardsPromise }: CardProps) => {
    const cards = use(cardsPromise);
    
    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-6 container mx-auto">
            {cards.map((card) => {
                return <Card card={card} key={card.id} />; 
            })}
        </div>
    );
}; 

export default Cards;