import React, { type Dispatch, type SetStateAction } from 'react';
import type { Icard } from '../../types/cardType';

interface Props {
      selectedCard: Icard[];
      setSelectedCard: Dispatch<SetStateAction<Icard[]>>;
}

const SelectedCard = ({ selectedCard, setSelectedCard }: Props) => {
  
    const handleRemove = (id: string | number) => {
        setSelectedCard((prev) => prev.filter(card => card.id !== id));
    };

    return (
        <div className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col w-full shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Your Stack</h2>
            <p className="text-sm text-gray-500 mb-6">
                {selectedCard.length} Technology Selected
            </p>

            {selectedCard.length === 0 ? (
                <div className="border border-dashed border-gray-200 rounded-xl p-8 text-center text-gray-400 text-sm">
                    Your stack is empty.
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    {selectedCard.map((card) => (
                        <div key={card.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 flex items-center justify-center bg-gray-50/50 rounded-lg p-1.5 border border-gray-100">
                                    <img src={card.icon} alt={card.name} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 leading-tight">{card.name}</h3>
                                </div>
                            </div>
                            <button 
                                onClick={() => handleRemove(card.id)} 
                                className="text-gray-400 hover:text-red-500 p-1"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectedCard;