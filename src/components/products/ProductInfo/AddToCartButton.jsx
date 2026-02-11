import React from 'react';

const AddToCartButton = ({ onClick, disabled, loading }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white 
        transition-all duration-200
        ${disabled
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg active:scale-[0.98]'
                }
      `}
        >
            {loading ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                </>
            ) : disabled ? (
                'Agotado'
            ) : (
                'Añadir al Carrito'
            )}
        </button>
    );
};

export default AddToCartButton;