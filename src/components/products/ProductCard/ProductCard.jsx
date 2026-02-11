import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/producto/${product.slug}`} className="group block bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-accent-500/50 transition-all duration-300">

            {/* Imagen */}
            <div className="relative aspect-square overflow-hidden bg-neutral-800">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay al hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

                {/* Badges */}
                {product.isNew && (
                    <span className="absolute top-3 left-3 bg-accent-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10 shadow-lg">
                        Nuevo
                    </span>
                )}
            </div>

            {/* Información */}
            <div className="p-4">
                <p className="text-xs text-neutral-500 mb-1">{product.brand}</p>
                <h3 className="text-white font-medium text-lg leading-tight mb-2 group-hover:text-accent-400 transition-colors truncate">
                    {product.name}
                </h3>

                <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-white">${product.price}</span>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;