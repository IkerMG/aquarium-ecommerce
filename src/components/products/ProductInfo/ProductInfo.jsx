import React, { useState } from 'react';
import { FiHeart, FiShare2, FiCheck, FiShoppingCart } from 'react-icons/fi';
import { useCartContext } from '../../../context/cartContext'; // 1. Importar el hook

const ProductInfo = ({ product }) => {
    const { addToCart } = useCartContext(); // 2. Usar el contexto
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false); // Estado para feedback visual

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        // 3. Ejecutar la función del contexto
        addToCart(product, quantity);

        // Feedback visual temporal
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="flex flex-col h-full pt-4">
            {/* ... (Marca y Stock igual que antes) ... */}
            <div className="flex justify-between items-start mb-4">
                <span className="text-accent-500 font-bold uppercase tracking-widest text-xs">
                    {product.brand || 'Premium Brand'}
                </span>
                <div className="flex items-center gap-2 text-green-400 text-sm bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                    <FiCheck /> Disponible
                </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {product.name}
            </h1>

            <div className="flex items-end gap-4 mb-6">
                <span className="text-3xl font-bold text-white">${product.price}</span>
                {product.oldPrice && (
                    <span className="text-neutral-500 line-through mb-1 text-lg">${product.oldPrice}</span>
                )}
            </div>

            <p className="text-neutral-400 leading-relaxed mb-8 border-b border-neutral-800 pb-8">
                {product.description || "Mejora tu ecosistema acuático con este producto de alta calidad."}
            </p>

            <div className="mt-auto">
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    {/* Selector de Cantidad */}
                    <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-lg h-12 w-fit">
                        <button onClick={decrement} className="px-4 text-neutral-400 hover:text-white hover:bg-neutral-800 h-full rounded-l-lg transition-colors">-</button>
                        <span className="w-12 text-center text-white font-medium">{quantity}</span>
                        <button onClick={increment} className="px-4 text-neutral-400 hover:text-white hover:bg-neutral-800 h-full rounded-r-lg transition-colors">+</button>
                    </div>

                    {/* 4. BOTÓN CON LÓGICA */}
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className={`flex-1 flex items-center justify-center gap-2 font-bold h-12 rounded-lg transition-all duration-300 transform shadow-[0_0_15px_rgba(255,255,255,0.1)]
                            ${isAdded
                                ? 'bg-green-500 text-white scale-95'
                                : 'bg-white text-neutral-950 hover:bg-accent-500 hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(var(--color-accent-500),0.4)]'
                            }`}
                    >
                        {isAdded ? (
                            <>
                                <FiCheck size={20} /> ¡Añadido!
                            </>
                        ) : (
                            <>
                                <FiShoppingCart size={18} /> Añadir al Carrito
                            </>
                        )}
                    </button>
                </div>

                <div className="flex gap-4 text-sm text-neutral-500">
                    <button className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                        <FiHeart /> Añadir a deseos
                    </button>
                    <button className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                        <FiShare2 /> Compartir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;