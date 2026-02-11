import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../hooks/useCart'; // Usamos el hook que conecta con el Context

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-neutral-950 text-white px-4">
                <div className="w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center mb-6 text-neutral-600">
                    <FiShoppingBag size={40} />
                </div>
                <h2 className="text-2xl font-bold mb-2">Tu carrito está vacío</h2>
                <p className="text-neutral-400 mb-8">Parece que aún no has añadido nada.</p>
                <Link to="/" className="px-8 py-3 bg-accent-600 hover:bg-accent-500 text-white rounded-lg font-bold transition-colors">
                    Empezar a comprar
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-950 pt-24 pb-20 px-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-white mb-10">Tu Carrito de Compra</h1>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Lista de Productos */}
                    <div className="flex-1 space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex gap-4 p-4 bg-neutral-900 rounded-xl border border-neutral-800 items-center">
                                <div className="w-24 h-24 bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <Link to={`/producto/${item.slug}`} className="text-white font-bold hover:text-accent-500 transition-colors">
                                            {item.name}
                                        </Link>
                                        <button onClick={() => removeFromCart(item.id)} className="text-neutral-500 hover:text-red-500 transition-colors">
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                    <p className="text-sm text-neutral-400 mb-4">{item.category}</p>

                                    <div className="flex justify-between items-end">
                                        <div className="flex items-center border border-neutral-700 rounded bg-neutral-950">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-neutral-400 hover:text-white"><FiMinus size={14} /></button>
                                            <span className="w-8 text-center text-sm text-white font-medium">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-neutral-400 hover:text-white"><FiPlus size={14} /></button>
                                        </div>
                                        <span className="text-lg font-bold text-white">{(item.price * item.quantity).toFixed(2)} €</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button onClick={clearCart} className="text-sm text-red-500 hover:underline">Vaciar Carrito</button>
                    </div>

                    {/* Resumen de Compra */}
                    <div className="w-full lg:w-96">
                        <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6">Resumen</h3>
                            <div className="space-y-3 mb-6 pb-6 border-b border-neutral-800 text-neutral-400">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="text-white">{cartTotal.toFixed(2)} €</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Envío</span>
                                    <span className="text-green-500">Gratis</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Impuestos (21%)</span>
                                    <span className="text-white">{(cartTotal * 0.21).toFixed(2)} €</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-end mb-8">
                                <span className="text-white font-bold text-lg">Total</span>
                                <span className="text-3xl font-bold text-accent-500">{cartTotal.toFixed(2)} €</span>
                            </div>
                            <Link to="/checkout" className="w-full py-4 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all">
                                Proceder al Pago <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;