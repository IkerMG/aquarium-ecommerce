import React from 'react';
import ProductCard from '../ProductCard';

const ProductGrid = ({ products }) => {
    if (!products || products.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No se encontraron productos.</p>
            </div>
        );
    }

    return (
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;