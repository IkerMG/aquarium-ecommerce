import React from 'react';

const QuantitySelector = ({ quantity, onIncrease, onDecrease, max }) => {
    return (
        <div className="flex items-center border border-gray-300 rounded-md w-max">
            <button
                type="button"
                onClick={onDecrease}
                disabled={quantity <= 1}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed border-r border-gray-300 transition-colors"
            >
                -
            </button>
            <span className="px-4 py-2 text-gray-900 font-medium min-w-[3rem] text-center">
                {quantity}
            </span>
            <button
                type="button"
                onClick={onIncrease}
                disabled={quantity >= max}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed border-l border-gray-300 transition-colors"
            >
                +
            </button>
        </div>
    );
};

export default QuantitySelector;