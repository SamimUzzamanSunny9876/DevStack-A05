import React, { type Dispatch, type SetStateAction } from "react";
import type { Icard } from "../../types/cardType";
import { toast } from "react-toastify";


interface Props {
  card: Icard;
  selectedCard: Icard[];
  setSelectedCard: Dispatch<SetStateAction<Icard[]>>;
}


const Card = ({ card, selectedCard, setSelectedCard }: Props) => {
  

  const isSelected = selectedCard.some((c) => c.id === card.id);

  const handleStack = () => {
    if (!isSelected) {
      setSelectedCard((prev) => [...prev, card]);
      toast(`${card.name} is added to your stack`);
    }
  }; 

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col">
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
        <h2 className="text-xl font-bold text-gray-900 mb-2">{card.name}</h2>
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
        onClick={handleStack}
        disabled={isSelected} 
        className="w-full bg-[#0F172A] text-white font-medium py-3 rounded-xl transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSelected ? "Selected" : "Add to Stack"}
      </button>
    </div>
  );
};

export default Card;