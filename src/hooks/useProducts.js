import { useState, useEffect, useCallback } from 'react';

const API_BASE = 'http://localhost:8080/api/v1';

export function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Paginación
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);

    // Filtros
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [pageSize] = useState(20);

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            // Construir URL con parámetros
            const params = new URLSearchParams();
            params.append('page', currentPage);
            params.append('size', pageSize);
            if (search) params.append('search', search);
            if (category) params.append('category', category);
            if (subcategory) params.append('subcategory', subcategory);

            const res = await fetch(`${API_BASE}/products?${params.toString()}`);

            if (!res.ok) throw new Error(`Error ${res.status}`);

            const data = await res.json();

            // Soporte para respuesta paginada ({ content: [...] }) o array plano
            if (Array.isArray(data)) {
                setProducts(data);
                setTotalPages(1);
                setTotalElements(data.length);
            } else {
                setProducts(data.content ?? []);
                setTotalPages(data.totalPages ?? 1);
                setTotalElements(data.totalElements ?? 0);
            }

        } catch (err) {
            console.error('Error cargando productos:', err);
            setError('No se pudieron cargar los productos. Verifica que el backend está corriendo en localhost:8080.');
        } finally {
            setLoading(false);
        }
    }, [currentPage, pageSize, search, category, subcategory]);

    // Re-fetch cuando cambian los filtros o la página
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    // Al cambiar filtros, volver a página 0
    const handleSetSearch = (val) => {
        setCurrentPage(0);
        setSearch(val);
    };
    const handleSetCategory = (val) => {
        setCurrentPage(0);
        setCategory(val);
        setSubcategory('');
    };
    const handleSetSubcategory = (val) => {
        setCurrentPage(0);
        setSubcategory(val);
    };

    // Buscar un producto por slug dentro de los ya cargados
    const getProductBySlug = (slug) => {
        return products.find(p => p.slug === slug);
    };

    // Buscar un producto por slug directamente en la API (para ProductDetail)
    const fetchProductBySlug = useCallback(async (slug) => {
        try {
            const res = await fetch(`${API_BASE}/products/slug/${slug}`);
            if (!res.ok) throw new Error(`Error ${res.status}`);
            return await res.json();
        } catch {
            // Fallback: buscar en los productos ya cargados
            return products.find(p => p.slug === slug) ?? null;
        }
    }, [products]);

    const getFeaturedProducts = () => {
        return products.filter(p => p.rating >= 4.5).slice(0, 8);
    };

    return {
        products,
        loading,
        error,
        currentPage,
        totalPages,
        totalElements,
        setPage: setCurrentPage,
        search,
        setSearch: handleSetSearch,
        category,
        setCategory: handleSetCategory,
        subcategory,
        setSubcategory: handleSetSubcategory,
        getProductBySlug,
        fetchProductBySlug,
        getFeaturedProducts,
        refetch: fetchProducts,
    };
}