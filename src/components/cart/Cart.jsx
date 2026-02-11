import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../hooks/useCart'; // Ajusta ruta a hooks

// Importamos los componentes del carrito
import CartItem from '../components/cart/CartItem/CartItem';
import CartSummary from '../components/cart/CartSummary/CartSummary';
import CouponCode from '../components/cart/CouponCode/CouponCode';

const Cart = () => {
    const { cart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center container mx-auto px-6 py-20">
                <div className="w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center mb-6">
                    <FiShoppingBag className="w-10 h-10 text-neutral-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Tu carrito está vacío</h2>
                <p className="text-neutral-400 mb-8 text-center max-w-md">
                    Parece que aún no has añadido nada. Explora nuestra tienda para encontrar lo mejor para tu acuario.
                </p>
                <Link
                    to="/"
                    className="bg-accent-600 hover:bg-accent-500 text-white px-8 py-3 rounded-full font-bold transition-colors"
                >
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto px-6 py-10"
        >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Tu Carrito</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Lista de Productos (Izquierda) */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-neutral-950/50 rounded-2xl p-6 border border-neutral-800">
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <Link to="/" className="text-neutral-400 hover:text-white flex items-center gap-2 transition-colors">
                            <FiArrowLeft /> Continuar comprando
                        </Link>
                    </div>

                    {/* Componente de Cupón */}
                    <CouponCode />
                </div>

                {/* Resumen (Derecha) */}
                <div className="lg:col-span-1">
                    <CartSummary />
                </div>
            </div>
        </motion.div>
    );
};

export default Cart;