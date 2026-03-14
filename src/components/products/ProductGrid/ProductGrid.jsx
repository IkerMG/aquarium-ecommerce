import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../ProductCard';

const SkeletonCard = () => (
  <div className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800">
    <div className="aspect-square shimmer bg-neutral-800" />
    <div className="p-4 space-y-3">
      <div className="h-3 w-16 shimmer bg-neutral-800 rounded" />
      <div className="h-4 w-full shimmer bg-neutral-800 rounded" />
      <div className="h-4 w-3/4 shimmer bg-neutral-800 rounded" />
      <div className="flex justify-between items-center pt-1">
        <div className="h-6 w-16 shimmer bg-neutral-800 rounded" />
        <div className="h-8 w-20 shimmer bg-neutral-800 rounded-xl" />
      </div>
    </div>
  </div>
);

const ProductGrid = ({ products, loading = false, columns = 'default' }) => {
  const gridClass = columns === 'four'
    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'
    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5';

  if (loading) {
    return (
      <div className={gridClass}>
        {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="text-6xl mb-4 opacity-30">🪸</div>
        <h3 className="font-heading text-xl font-bold text-white mb-2">Sin resultados</h3>
        <p className="text-neutral-500 text-sm max-w-xs">
          No encontramos productos con esos filtros. Prueba con otra combinación.
        </p>
      </div>
    );
  }

  return (
    <div className={gridClass}>
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
