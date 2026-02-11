import React, { createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// 1. Creamos el contexto
const CartContext = createContext();

// 2. Creamos el Provider
export const CartProvider = ({ children }) => {
    // Usamos useLocalStorage para persistir el carrito aunque recarguen la página
    const [cart, setCart] = useLocalStorage('urban_natura_cart', []);

    // Lógica para añadir
    const addToCart = (product, quantity = 1) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                // Si ya existe, sumamos la cantidad
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            // Si no existe, lo añadimos nuevo
            return [...prevCart, { ...product, quantity }];
        });
    };

    // Lógica para eliminar
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    // Actualizar cantidad
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => setCart([]);

    // Cálculos derivados (optimizados con useMemo)
    const cartCount = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }, [cart]);

    const cartTotal = useMemo(() => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }, [cart]);

    // El objeto que compartiremos con toda la app
    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// 3. Hook para consumir el contexto fácilmente
export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext debe usarse dentro de un CartProvider');
    }
    return context;
};