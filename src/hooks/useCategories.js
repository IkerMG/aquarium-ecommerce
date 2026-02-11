import { useState, useEffect } from 'react';
import { categories as mockCategories } from '../data/mockCategories';

export function useCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            setTimeout(() => {
                setCategories(mockCategories);
                setLoading(false);
            }, 400);
        };

        fetchCategories();
    }, []);

    return { categories, loading };
}