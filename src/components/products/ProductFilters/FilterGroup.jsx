import React from 'react';

const FilterGroup = ({ title, options, selectedValues, onChange }) => {
    const handleChange = (value) => {
        // Lógica para añadir o quitar del array de seleccionados
        const newValues = selectedValues.includes(value)
            ? selectedValues.filter((item) => item !== value)
            : [...selectedValues, value];

        onChange(newValues);
    };

    return (
        <div className="border-b border-gray-200 py-6">
            <h3 className="-my-3 flow-root">
                <span className="font-medium text-gray-900">{title}</span>
            </h3>
            <div className="pt-6 space-y-4">
                {options.map((option, optionIdx) => (
                    <div key={optionIdx} className="flex items-center">
                        <input
                            id={`filter-${title}-${optionIdx}`}
                            name={`${title}[]`}
                            type="checkbox"
                            checked={selectedValues.includes(option.value)}
                            onChange={() => handleChange(option.value)}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                            htmlFor={`filter-${title}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                        >
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterGroup;