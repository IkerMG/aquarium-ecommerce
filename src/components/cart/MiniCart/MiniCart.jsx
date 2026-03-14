import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTrash2, FiShoppingBag, FiArrowRight, FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '../../../hooks/useCart';

const MiniCart = ({ onClose }) => {
  const { cart, cartTotal, cartCount, removeFromCart, updateQuantity } = useCart();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 8, scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="w-full sm:w-[340px] bg-neutral-900 border border-neutral-800 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] z-50 overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <FiShoppingBag className="text-accent-500" size={16} />
            <span className="font-heading font-semibold text-white text-sm">Mi cesta</span>
            {cartCount > 0 && (
              <span className="text-[11px] font-bold bg-accent-500/20 text-accent-400 px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <button onClick={onClose} className="text-neutral-600 hover:text-white transition-colors p-1 rounded-lg hover:bg-neutral-800">
            <FiX size={16} />
          </button>
        </div>

        {/* Empty state */}
        {cart.length === 0 ? (
          <div className="p-10 text-center">
            <div className="text-4xl mb-4">🛒</div>
            <p className="text-neutral-500 text-sm mb-5">Tu carrito está vacío</p>
            <Link
              to="/categoria/acuarios"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-400 hover:text-accent-300 transition-colors"
            >
              Explorar productos <FiArrowRight size={12} />
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="max-h-72 overflow-y-auto py-2">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex gap-3 px-4 py-3 hover:bg-neutral-800/40 transition-colors group"
                >
                  {/* Thumb */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-neutral-800 shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-xs font-medium leading-snug line-clamp-2 mb-1.5">{item.name}</h4>
                    <div className="flex items-center justify-between">
                      {/* Qty controls */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                        >
                          <FiMinus size={10} />
                        </button>
                        <span className="text-white text-xs font-semibold w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                        >
                          <FiPlus size={10} />
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold text-white text-sm">
                          {(item.price * item.quantity).toFixed(2)}€
                        </span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-neutral-700 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          <FiTrash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-800 p-4 bg-neutral-950/40">
              <div className="flex justify-between items-center mb-4">
                <span className="text-neutral-500 text-sm">Subtotal</span>
                <span className="font-heading font-bold text-white text-lg">{cartTotal.toFixed(2)}€</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/carrito"
                  onClick={onClose}
                  className="flex items-center justify-center py-2.5 border border-neutral-700 hover:border-neutral-600 rounded-xl text-white text-xs font-semibold transition-colors"
                >
                  Ver cesta
                </Link>
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-accent-500 hover:bg-accent-400 text-neutral-950 rounded-xl text-xs font-bold transition-all hover:shadow-glow-accent-sm"
                >
                  Pagar <FiArrowRight size={12} />
                </Link>
              </div>
              <p className="text-center text-neutral-700 text-[10px] mt-3">Envío gratuito a partir de 80€</p>
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default MiniCart;
