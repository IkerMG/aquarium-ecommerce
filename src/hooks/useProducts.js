import { useState, useEffect } from 'react';
import { products as mockProducts } from '../data/mockProducts';

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulamos un retraso de red de 500ms
        const fetchProducts = async () => {
            try {
                setLoading(true);
                // Aquí iría tu llamada real: const res = await fetch('/api/products');
                // Por ahora usamos el mock:
                setTimeout(() => {
                    setProducts(mockProducts);
                    setLoading(false);
                }, 500);
            } catch (err) {
                setError('Error al cargar productos');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const getProductBySlug = (slug) => {
        return products.find(p => p.slug === slug);
    };

    const getFeaturedProducts = () => {
        return products.filter(p => p.rating >= 4.5).slice(0, 4);
    };

    return { products, loading, error, getProductBySlug, getFeaturedProducts };
}