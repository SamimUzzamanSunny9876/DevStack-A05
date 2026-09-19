import React, { useState } from "react";
import type { Icard } from "../../types/cardType";


const Card = ({ card }: { card: Icard }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col shadow-sm">
    
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl border border-gray-100 bg-gray-50/50 p-2">
          <img 
            src={card.icon} 
            alt={card.id} 
            className="w-full h-full object-contain" 
          />
        </div>
        <span className="bg-blue-50 text-blue-500 text-xs font-semibold px-3 py-1 rounded-full">
          {card.badge}
        </span>
      </div>

     
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {card.name}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          {card.description}
        </p>
      </div>

     
      <div className="flex items-center justify-between text-xs font-medium mb-6">
        <div className="flex items-center gap-4 text-gray-500">
          <span className="bg-gray-100 px-2.5 py-1 rounded-md text-gray-600">
            {card.category}
          </span>
          <span>{card.difficulty}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-900 font-semibold">
          <span className="text-yellow-400 text-sm">★</span>
          {card.rating}
        </div>
      </div>

   
      <button 
        onClick={() => setIsSelected(true)} 
        disabled={isSelected} 
        className={`w-full text-white font-medium py-3 rounded-xl transition-colors`}
      >
        {isSelected ? "Selected" : "Add to Stack"}
      </button>
    </div>
  );
};

export default Card;