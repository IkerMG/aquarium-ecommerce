import { useState, useMemo } from 'react';
import { useProducts } from './useProducts';

export function useSearch(initialQuery = '') {
    const [query, setQuery] = useState(initialQuery);
    const { products } = useProducts();

    // Filtramos cada vez que cambia la query o los productos
    const results = useMemo(() => {
        if (!query) return [];

        const lowerQuery = query.toLowerCase();

        return products.filter(product =>
            product.name.toLowerCase().includes(lowerQuery) ||
            product.category.toLowerCase().includes(lowerQuery) ||
            product.brand.toLowerCase().includes(lowerQuery)
        );
    }, [query, products]);

    return { query, setQuery, results };
}