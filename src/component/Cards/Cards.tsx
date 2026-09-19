import React, { use, useState } from 'react';
import type { Icard } from '../../types/cardType';
import Card from './Card';
import SelectedCard from './SelectedCard';

interface CardProps {
    cardsPromise: Promise<Icard[]>;
}

const Cards = ({ cardsPromise }: CardProps) => {
    const cards = use(cardsPromise);
    const [selectedCard, setSelectedCard] = useState<Icard[]>([]);
    
    return (
        
        <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-8 items-start">
            
          
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1">
                {cards.map((card) => {
                    return (
                        <Card 
                            card={card} 
                            key={card.id} 
                            selectedCard={selectedCard} 
                            setSelectedCard={setSelectedCard} 
                        />
                    ); 
                })}
            </div>

            <div className="w-full lg:w-80 shrink-0">
                <SelectedCard 
                    selectedCard={selectedCard} 
                    setSelectedCard={setSelectedCard} 
                />
            </div>
            
        </div>
    );
}; 

export default Cards;