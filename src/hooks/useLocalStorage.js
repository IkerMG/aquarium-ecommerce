import { useState } from 'react';

export function useLocalStorage(key, initialValue) {
    // 1. Intentar obtener el valor del storage al iniciar
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`Error leyendo localStorage clave "${key}":`, error);
            return initialValue;
        }
    });

    // 2. Función para guardar un nuevo valor
    const setValue = (value) => {
        try {
            // Permitir que value sea una función (como en useState)
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.warn(`Error guardando en localStorage clave "${key}":`, error);
        }
    };

    return [storedValue, setValue];
}