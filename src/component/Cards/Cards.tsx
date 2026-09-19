import React, { use } from 'react';

const Cards = ({cardsPromise}) => {

     const cards = use(cardsPromise)
     console.log(cards);
    return (
        <div>
             
        </div>
    );
};

export default Cards;