// src/hooks/useCart.js
import { useCartContext } from '../context/CartContext';

// Este hook ahora es solo un puente hacia el Contexto
export function useCart() {
    return useCartContext();
}