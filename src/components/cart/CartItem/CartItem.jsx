import React from 'react';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import { useCart } from '../../../hooks/useCart'; // Ajusta la ruta si es necesario

const CartItem = ({ item }) => {
    const { removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = (newQty) => {
        if (newQty >= 1) {
            updateQuantity(item.id, newQty);
        }
    };

    return (
        <div className="flex flex-col sm:flex-row items-center gap-6 py-6 border-b border-neutral-800 last:border-0">
            {/* Imagen del Producto */}
            <div className="w-full sm:w-24 h-24 bg-neutral-900 rounded-xl overflow-hidden flex-shrink-0">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
            </div>

            {/* Información */}
            <div className="flex-1 flex flex-col sm:flex-row items-center justify-between w-full gap-4">
                <div className="text-center sm:text-left">
                    <h3 className="text-white font-medium text-lg">{item.name}</h3>
                    <p className="text-neutral-400 text-sm mt-1">{item.category}</p>
                    <p className="text-accent-400 font-semibold mt-1 sm:hidden">{item.price}€</p>
                </div>

                {/* Controles de Cantidad y Precio */}
                <div className="flex items-center gap-6 sm:gap-10">
                    <div className="flex items-center bg-neutral-900 rounded-lg p-1 border border-neutral-800">
                        <button
                            onClick={() => handleQuantityChange(item.quantity - 1)}
                            className="p-2 text-neutral-400 hover:text-white transition-colors disabled:opacity-50"
                            disabled={item.quantity <= 1}
                        >
                            <FiMinus size={14} />
                        </button>
                        <span className="w-8 text-center text-white font-medium text-sm">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => handleQuantityChange(item.quantity + 1)}
                            className="p-2 text-neutral-400 hover:text-white transition-colors"
                        >
                            <FiPlus size={14} />
                        </button>
                    </div>

                    <div className="hidden sm:block text-right min-w-[80px]">
                        <p className="text-white font-bold text-lg">
                            {(item.price * item.quantity).toFixed(2)}€
                        </p>
                        {item.quantity > 1 && (
                            <p className="text-neutral-500 text-xs">
                                {item.price}€ / ud.
                            </p>
                        )}
                    </div>

                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-all"
                        title="Eliminar producto"
                    >
                        <FiTrash2 size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;