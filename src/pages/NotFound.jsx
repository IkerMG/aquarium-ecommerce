import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-center p-6 text-white">
        <h1 className="text-9xl font-bold text-accent-900/20 absolute select-none">404</h1>
        <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Página no encontrada</h2>
            <p className="text-neutral-400 mb-8">Lo sentimos, la página que buscas se ha disuelto en el agua.</p>
            <Link to="/" className="bg-accent-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-accent-500">Volver al inicio</Link>
        </div>
    </div>
);
export default NotFound;