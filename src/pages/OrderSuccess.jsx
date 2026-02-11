import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const OrderSuccess = () => {
    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-center px-6">
            <div className="text-accent-500 mb-6">
                <FiCheckCircle size={80} />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">¡Gracias por tu pedido!</h1>
            <p className="text-neutral-400 max-w-md mb-8">
                Tu pedido <span className="text-white font-mono">#UN-{Math.floor(Math.random() * 10000)}</span> ha sido confirmado. Recibirás un correo electrónico con los detalles en breve.
            </p>
            <Link to="/" className="px-8 py-3 bg-white text-neutral-950 font-bold rounded-lg hover:bg-neutral-200 transition-colors">
                Volver a la tienda
            </Link>
        </div>
    );
};

export default OrderSuccess;