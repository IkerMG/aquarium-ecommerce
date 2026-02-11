import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simular proceso de pago
        setTimeout(() => {
            clearCart();
            setLoading(false);
            navigate('/order-success');
        }, 2000);
    };

    if (cart.length === 0) return null; // O redirigir a home

    return (
        <div className="min-h-screen bg-neutral-950 pt-24 pb-20 px-6 text-white">
            <div className="container mx-auto max-w-5xl">
                <h1 className="text-3xl font-bold mb-10">Finalizar Compra</h1>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Formulario */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <section className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                                <h2 className="text-xl font-bold mb-4">Información de Envío</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <input required placeholder="Nombre" className="w-full bg-neutral-950 border border-neutral-700 rounded-lg p-3 focus:border-accent-500 outline-none" />
                                    <input required placeholder="Apellidos" className="w-full bg-neutral-950 border border-neutral-700 rounded-lg p-3 focus:border-accent-500 outline-none" />
                                    <input required placeholder="Dirección" className="col-span-2 w-full bg-neutral-950 border border-neutral-700 rounded-lg p-3 focus:border-accent-500 outline-none" />
                                    <input required placeholder="Ciudad" className="w-full bg-neutral-950 border border-neutral-700 rounded-lg p-3 focus:border-accent-500 outline-none" />
                                    <input required placeholder="Código Postal" className="w-full bg-neutral-950 border border-neutral-700 rounded-lg p-3 focus:border-accent-500 outline-none" />
                                </div>
                            </section>

                            <button disabled={loading} type="submit" className="w-full py-4 bg-accent-600 hover:bg-accent-500 disabled:bg-neutral-700 text-white font-bold rounded-lg transition-all text-lg">
                                {loading ? 'Procesando...' : `Pagar ${cartTotal.toFixed(2)} €`}
                            </button>
                        </form>
                    </div>

                    {/* Resumen lateral */}
                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 h-fit">
                        <h3 className="text-lg font-bold mb-4">Tu Pedido</h3>
                        <div className="space-y-4 mb-4">
                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-neutral-400">{item.name} x{item.quantity}</span>
                                    <span>{(item.price * item.quantity).toFixed(2)}€</span>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-neutral-700 pt-4 flex justify-between font-bold text-xl">
                            <span>Total</span>
                            <span className="text-accent-500">{cartTotal.toFixed(2)}€</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;