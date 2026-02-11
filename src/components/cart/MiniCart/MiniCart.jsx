import React from 'react';
import { Link } from 'react-router-dom';
import { FiX, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../../../hooks/useCart';

const MiniCart = ({ onClose }) => {
    const { cart, cartTotal, removeFromCart } = useCart();

    return (
        <div className="absolute top-full right-0 mt-4 w-80 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl z-50 overflow-hidden">
            {/* Flechita decorativa (opcional, estilo tooltip) */}
            <div className="absolute top-0 right-6 -mt-1.5 w-3 h-3 bg-neutral-900 border-t border-l border-neutral-800 transform rotate-45"></div>

            <div className="p-4 border-b border-neutral-800 flex justify-between items-center relative z-10 bg-neutral-900">
                <h3 className="font-bold text-white flex items-center gap-2">
                    <FiShoppingBag className="text-accent-500" />
                    Mi Cesta <span className="text-neutral-500 font-normal">({cart.length})</span>
                </h3>
            </div>

            {cart.length === 0 ? (
                <div className="p-8 text-center">
                    <p className="text-neutral-500 text-sm mb-4">Tu carrito está vacío.</p>
                    <Link
                        to="/products" // O la ruta de tu tienda
                        onClick={onClose}
                        className="text-accent-400 text-sm font-bold hover:underline"
                    >
                        Ver productos
                    </Link>
                </div>
            ) : (
                <>
                    {/* Lista de Items (con scroll si hay muchos) */}
                    <div className="max-h-64 overflow-y-auto custom-scrollbar p-2">
                        {cart.map((item) => (
                            <div key={item.id} className="flex gap-3 p-2 hover:bg-neutral-800/50 rounded-lg transition-colors group">
                                {/* Imagen pequeña */}
                                <div className="w-16 h-16 bg-neutral-950 rounded-md overflow-hidden flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0 flex flex-col justify-center">
                                    <h4 className="text-white text-sm font-medium truncate">{item.name}</h4>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-neutral-400 text-xs">
                                            {item.quantity} x <span className="text-white font-bold">{item.price}€</span>
                                        </p>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                removeFromCart(item.id);
                                            }}
                                            className="text-neutral-600 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                        >
                                            <FiTrash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer del MiniCart */}
                    <div className="p-4 bg-neutral-950/50 border-t border-neutral-800">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-neutral-400 text-sm">Total estimado:</span>
                            <span className="text-white font-bold text-lg">{cartTotal.toFixed(2)}€</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <Link
                                to="/carrito"
                                onClick={onClose}
                                className="flex justify-center items-center px-4 py-2 border border-neutral-700 rounded-lg text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
                            >
                                Ver Cesta
                            </Link>
                            <Link
                                to="/checkout"
                                onClick={onClose}
                                className="flex justify-center items-center px-4 py-2 bg-accent-600 rounded-lg text-white text-sm font-bold hover:bg-accent-500 transition-colors shadow-lg shadow-accent-900/20"
                            >
                                Pagar
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default MiniCart;