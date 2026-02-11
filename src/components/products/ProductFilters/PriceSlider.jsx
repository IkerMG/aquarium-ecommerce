import React from 'react';

const PriceSlider = ({ min, max, value, onChange }) => {
    // value es un array [minPrice, maxPrice]

    return (
        <div className="border-b border-gray-200 py-6">
            <h3 className="font-medium text-gray-900 mb-4">Precio</h3>

            <div className="flex items-center justify-between space-x-4 mb-4">
                <div className="bg-gray-100 p-2 rounded w-full text-center">
                    <span className="text-xs text-gray-500 block">Min</span>
                    <span className="text-sm font-medium">${value[0]}</span>
                </div>
                <div className="text-gray-400">-</div>
                <div className="bg-gray-100 p-2 rounded w-full text-center">
                    <span className="text-xs text-gray-500 block">Max</span>
                    <span className="text-sm font-medium">${value[1]}</span>
                </div>
            </div>

            {/* Inputs tipo range simulando doble slider */}
            <div className="space-y-4">
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={value[1]}
                    onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-xs text-gray-500">
                    <span>${min}</span>
                    <span>${max}</span>
                </div>
            </div>
        </div>
    );
};

export default PriceSlider;