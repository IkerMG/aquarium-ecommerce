import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTrash2, FiPlus, FiMinus, FiArrowLeft, FiArrowRight, FiShoppingBag, FiTruck } from 'react-icons/fi';
import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { cart, cartTotal, cartCount, removeFromCart, updateQuantity, clearCart } = useCart();
  const shipping = cartTotal >= 80 ? 0 : 7.99;
  const total = cartTotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="text-6xl mb-6">🛒</div>
        <h2 className="font-heading text-2xl font-bold text-white mb-3">Tu carrito está vacío</h2>
        <p className="text-neutral-500 mb-8 max-w-xs">Aún no has añadido ningún producto. Explora nuestro catálogo.</p>
        <Link to="/categoria/acuarios" className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-400 text-neutral-950 font-semibold rounded-xl transition-all hover:shadow-glow-accent-sm text-sm">
          <FiShoppingBag size={15} /> Explorar catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 pt-28 pb-20">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-heading text-3xl font-bold text-white">Mi carrito</h1>
            <p className="text-neutral-500 text-sm mt-1">{cartCount} {cartCount === 1 ? 'producto' : 'productos'}</p>
          </div>
          <Link to="/categoria/acuarios" className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors">
            <FiArrowLeft size={14} /> Seguir comprando
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Items list */}
          <div className="lg:col-span-2 space-y-3">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex gap-5 p-5 bg-neutral-900 rounded-2xl border border-neutral-800 group"
                >
                  {/* Image */}
                  <Link to={`/producto/${item.slug}`} className="w-24 h-24 rounded-xl overflow-hidden bg-neutral-800 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </Link>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    {item.brand && <p className="text-[11px] text-neutral-600 uppercase tracking-widest mb-1">{item.brand}</p>}
                    <Link to={`/producto/${item.slug}`}>
                      <h3 className="font-heading font-semibold text-white text-sm leading-snug hover:text-accent-300 transition-colors">{item.name}</h3>
                    </Link>
                    <p className="text-neutral-600 text-xs mt-1">{item.price?.toFixed(2)}€ / ud.</p>

                    <div className="flex items-center justify-between mt-4">
                      {/* Qty */}
                      <div className="flex items-center gap-1">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-xl bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                          <FiMinus size={12} />
                        </button>
                        <span className="text-white font-semibold w-8 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-xl bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                          <FiPlus size={12} />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-heading font-bold text-white">{(item.price * item.quantity).toFixed(2)}€</span>
                        <button onClick={() => removeFromCart(item.id)}
                          className="text-neutral-700 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                          <FiTrash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <button onClick={clearCart} className="text-xs text-neutral-700 hover:text-red-400 transition-colors mt-2 flex items-center gap-1.5">
              <FiTrash2 size={12} /> Vaciar carrito
            </button>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sticky top-28">
              <h2 className="font-heading font-bold text-white mb-6">Resumen del pedido</h2>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal ({cartCount} productos)</span>
                  <span className="text-white">{cartTotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Envío</span>
                  <span className={shipping === 0 ? 'text-accent-400 font-medium' : 'text-white'}>
                    {shipping === 0 ? 'Gratis' : `${shipping.toFixed(2)}€`}
                  </span>
                </div>
                {shipping > 0 && (
                  <div className="flex items-center gap-2 text-xs text-neutral-600 bg-neutral-800/50 rounded-xl p-3">
                    <FiTruck size={13} className="text-accent-600" />
                    Te faltan {(80 - cartTotal).toFixed(2)}€ para envío gratuito
                  </div>
                )}
              </div>

              <div className="border-t border-neutral-800 pt-4 mb-6">
                <div className="flex justify-between font-heading font-bold text-white text-lg">
                  <span>Total</span>
                  <span>{total.toFixed(2)}€</span>
                </div>
                <p className="text-neutral-600 text-xs mt-1">IVA incluido</p>
              </div>

              <Link
                to="/checkout"
                className="flex items-center justify-center gap-2 w-full py-4 bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold rounded-xl transition-all hover:shadow-glow-accent text-sm"
              >
                Finalizar compra <FiArrowRight size={15} />
              </Link>
              <p className="text-center text-neutral-700 text-[11px] mt-3">Pago 100% seguro · SSL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
