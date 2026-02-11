import React from 'react';

const ProductSort = ({ onSortChange }) => {
    return (
        <div className="flex items-center gap-3">
            <label htmlFor="sort" className="text-sm text-neutral-400 whitespace-nowrap hidden sm:block">
                Ordenar por:
            </label>
            <div className="relative">
                <select
                    id="sort"
                    onChange={(e) => onSortChange(e.target.value)}
                    className="
                        appearance-none 
                        bg-neutral-900 
                        text-white 
                        border border-neutral-800 
                        rounded-lg 
                        py-2 pl-4 pr-10 
                        focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 
                        cursor-pointer 
                        transition-colors
                        text-sm
                    "
                >
                    <option value="featured">Destacados</option>
                    <option value="newest">Más nuevos</option>
                    <option value="price-asc">Precio: Bajo a Alto</option>
                    <option value="price-desc">Precio: Alto a Bajo</option>
                    <option value="rating">Mejor valorados</option>
                </select>

                {/* Flechita customizada (porque ocultamos la default con appearance-none) */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-neutral-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ProductSort;