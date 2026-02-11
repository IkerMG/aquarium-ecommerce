import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrendingUp, FiSearch } from 'react-icons/fi';

const SearchSuggestions = ({ query, onClose }) => {
    // Datos Mock (En producción vendrían de una API o Store)
    const suggestions = [
        { id: 1, text: 'Acuario Plantado 60L', type: 'product', slug: '/producto/acuario-60l' },
        { id: 2, text: 'Filtro Externo Oase', type: 'product', slug: '/producto/filtro-oase' },
        { id: 3, text: 'Roca Dragon', type: 'category', slug: '/categoria/hardscape' },
        { id: 4, text: 'Iluminación LED RGB', type: 'category', slug: '/categoria/iluminacion' },
    ];

    if (!query) return null;

    return (
        <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden z-50">
            <div className="p-4">
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <FiTrendingUp /> Sugerencias
                </h4>
                <ul className="flex flex-col gap-1">
                    {suggestions.map((item) => (
                        <li key={item.id}>
                            <Link
                                to={item.slug}
                                onClick={onClose}
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-800 transition-colors text-neutral-300 hover:text-white"
                            >
                                <FiSearch className="text-neutral-500" />
                                <span>{item.text}</span>
                                <span className="ml-auto text-xs text-neutral-600 border border-neutral-800 px-2 py-0.5 rounded">
                                    {item.type === 'product' ? 'Producto' : 'Categoría'}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-neutral-950 p-3 text-center border-t border-neutral-800">
                <Link
                    to={`/buscar?q=${query}`}
                    onClick={onClose}
                    className="text-sm text-accent-500 hover:text-accent-400 font-medium"
                >
                    Ver todos los resultados para "{query}"
                </Link>
            </div>
        </div>
    );
};

export default SearchSuggestions;