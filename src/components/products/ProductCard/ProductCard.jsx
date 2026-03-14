import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiCheck } from 'react-icons/fi';
import { useCart } from '../../../hooks/useCart';
import toast from 'react-hot-toast';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const isOutOfStock = product.stock === false || product.stock === 0;
  const isLowStock = product.stock === true && product.lowStock;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOutOfStock) return;
    addToCart(product, 1);
    setAdded(true);
    toast.success(`${product.name.substring(0, 28)}... añadido`, {
      style: {
        background: '#111827',
        color: '#f0f4f8',
        border: '1px solid rgba(81,215,145,0.3)',
        fontSize: '0.875rem',
      },
      iconTheme: { primary: '#51d791', secondary: '#0d1117' },
    });
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800/80 hover:border-accent-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover flex flex-col"
    >
      {/* Image area */}
      <Link to={`/producto/${product.slug}`} className="block relative aspect-square overflow-hidden bg-neutral-800">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className={`w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 ${isOutOfStock ? 'opacity-50 grayscale' : ''}`}
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-accent-500 text-neutral-950 px-2.5 py-1 rounded-full">
              Nuevo
            </span>
          )}
          {product.comparePrice && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-500 text-white px-2.5 py-1 rounded-full">
              Oferta
            </span>
          )}
          {isOutOfStock && (
            <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-700 text-neutral-300 px-2.5 py-1 rounded-full">
              Sin stock
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center text-neutral-400 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
        >
          <FiHeart size={14} />
        </button>
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4">
        {product.brand && (
          <p className="text-[11px] text-neutral-500 font-medium uppercase tracking-widest mb-1">{product.brand}</p>
        )}
        <Link to={`/producto/${product.slug}`}>
          <h3 className="font-heading text-sm font-semibold text-white leading-snug mb-3 line-clamp-2 group-hover:text-accent-300 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Stars */}
        {product.rating && (
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-[11px] ${i < Math.floor(product.rating) ? 'text-accent-500' : 'text-neutral-700'}`}>★</span>
              ))}
            </div>
            <span className="text-[11px] text-neutral-600">({product.reviews})</span>
          </div>
        )}

        {/* Price + button */}
        <div className="flex items-center justify-between mt-auto gap-3">
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-lg font-bold text-white">{product.price?.toFixed(2)}€</span>
            {product.comparePrice && (
              <span className="text-xs text-neutral-600 line-through">{product.comparePrice?.toFixed(2)}€</span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 shrink-0
              ${isOutOfStock
                ? 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
                : added
                  ? 'bg-accent-500/20 text-accent-400 border border-accent-500/40'
                  : 'bg-accent-500 hover:bg-accent-400 text-neutral-950 hover:shadow-glow-accent-sm hover:scale-105'
              }`}
          >
            {added ? <FiCheck size={13} /> : <FiShoppingCart size={13} />}
            {added ? 'Añadido' : isOutOfStock ? 'Agotado' : 'Añadir'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
