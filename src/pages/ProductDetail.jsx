import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiStar, FiTruck, FiShield, FiArrowLeft, FiPlus, FiMinus, FiCheck } from 'react-icons/fi';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import toast from 'react-hot-toast';
import ProductGrid from '../components/products/ProductGrid';

const ProductDetail = () => {
  const { slug } = useParams();
  const { getProductBySlug, products } = useProducts();
  const { addToCart } = useCart();
  const product = getProductBySlug(slug);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const related = products
    .filter(p => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h2 className="font-heading text-2xl font-bold text-white mb-4">Producto no encontrado</h2>
          <Link to="/categoria/acuarios" className="text-accent-400 hover:text-accent-300 transition-colors">
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    toast.success('Añadido al carrito', {
      style: { background: '#111827', color: '#f0f4f8', border: '1px solid rgba(81,215,145,0.3)' },
      iconTheme: { primary: '#51d791', secondary: '#0d1117' },
    });
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-20">
      <div className="container mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-600 mb-10">
          <Link to="/" className="hover:text-accent-400 transition-colors">Inicio</Link>
          <span>/</span>
          <Link to={`/categoria/${product.category}`} className="hover:text-accent-400 transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-neutral-400 line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800">
              <img src={product.image} alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {product.isNew && (
              <span className="absolute top-5 left-5 bg-accent-500 text-neutral-950 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Nuevo
              </span>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            {product.brand && (
              <p className="text-xs font-bold text-neutral-600 uppercase tracking-[0.2em]">{product.brand}</p>
            )}

            <h1 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">{product.name}</h1>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} size={15}
                      className={i < Math.floor(product.rating) ? 'text-accent-500 fill-accent-500' : 'text-neutral-700'} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">{product.rating}</span>
                <span className="text-sm text-neutral-600">({product.reviews} valoraciones)</span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-4xl font-bold text-white">{product.price?.toFixed(2)}€</span>
              {product.comparePrice && (
                <span className="text-xl text-neutral-600 line-through">{product.comparePrice?.toFixed(2)}€</span>
              )}
              {product.comparePrice && (
                <span className="text-sm font-bold text-accent-400 bg-accent-500/10 px-2.5 py-1 rounded-full">
                  -{Math.round((1 - product.price / product.comparePrice) * 100)}%
                </span>
              )}
            </div>

            <p className="text-neutral-400 leading-relaxed">{product.description}</p>

            {/* Qty + Add */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
                <button onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
                  <FiMinus size={14} />
                </button>
                <span className="w-10 text-center font-semibold text-white text-sm">{qty}</span>
                <button onClick={() => setQty(q => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
                  <FiPlus size={14} />
                </button>
              </div>

              <button
                onClick={handleAdd}
                disabled={!product.stock}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300
                  ${!product.stock
                    ? 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
                    : added
                      ? 'bg-accent-500/20 text-accent-400 border border-accent-500/40'
                      : 'bg-accent-500 hover:bg-accent-400 text-neutral-950 hover:shadow-glow-accent'
                  }`}
              >
                {added ? <FiCheck size={16} /> : <FiShoppingCart size={16} />}
                {added ? '¡Añadido!' : !product.stock ? 'Sin stock' : 'Añadir al carrito'}
              </button>

              <button className="w-12 h-12 rounded-xl border border-neutral-800 hover:border-rose-500/50 flex items-center justify-center text-neutral-600 hover:text-rose-400 transition-colors">
                <FiHeart size={17} />
              </button>
            </div>

            {/* Trust */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-800">
              {[
                { icon: <FiTruck size={14} />, text: 'Envío gratis +80€' },
                { icon: <FiShield size={14} />, text: 'Garantía 2 años' },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="text-accent-600">{t.icon}</span>
                  {t.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-heading text-2xl font-bold text-white mb-8">También te puede interesar</h2>
            <ProductGrid products={related} />
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
