import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShield } from 'react-icons/fi';
import { useCart } from '../../../hooks/useCart';

const CartSummary = () => {
    const { cartTotal } = useCart();

    // Cálculos simulados
    const subtotal = cartTotal;
    const shipping = subtotal > 50 ? 0 : 5.99; // Envío gratis > 50€
    const total = subtotal + shipping;

    return (
        <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-6">Resumen del Pedido</h2>

            <div className="space-y-4 mb-6">
                <div className="flex justify-between text-neutral-400">
                    <span>Subtotal</span>
                    <span className="text-white font-medium">{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                    <span>Envío</span>
                    {shipping === 0 ? (
                        <span className="text-accent-400 font-medium">Gratis</span>
                    ) : (
                        <span className="text-white font-medium">{shipping.toFixed(2)}€</span>
                    )}
                </div>
                <div className="h-px bg-neutral-800 my-4"></div>
                <div className="flex justify-between items-end">
                    <span className="text-white font-bold text-lg">Total</span>
                    <div className="text-right">
                        <span className="text-2xl font-bold text-white block leading-none">
                            {total.toFixed(2)}€
                        </span>
                        <span className="text-xs text-neutral-500 mt-1 block">
                            IVA incluido
                        </span>
                    </div>
                </div>
            </div>

            <Link
                to="/checkout"
                className="w-full bg-accent-600 hover:bg-accent-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:shadow-[0_0_30px_rgba(20,184,166,0.4)]"
            >
                Tramitar Pedido <FiArrowRight />
            </Link>

            <div className="mt-6 flex items-center justify-center gap-2 text-neutral-500 text-xs">
                <FiShield />
                <span>Pago 100% Seguro y Encriptado</span>
            </div>
        </div>
    );
};

export default CartSummary;