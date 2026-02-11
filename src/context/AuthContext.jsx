import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom'; // Opcional, para redirigir

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('urban_natura_user', null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Mock Login
    const login = async (email, password) => {
        setLoading(true);
        setError(null);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (email === 'demo@urbannatura.com' && password === '123456') {
                    const fakeUser = {
                        id: 'u_001',
                        name: 'Alex Aquascaper',
                        email: email,
                        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150',
                        role: 'customer'
                    };
                    setUser(fakeUser);
                    setLoading(false);
                    resolve(fakeUser);
                } else {
                    const err = 'Credenciales incorrectas (Prueba: demo@urbannatura.com / 123456)';
                    setError(err);
                    setLoading(false);
                    reject(new Error(err));
                }
            }, 800);
        });
    };

    const logout = () => {
        setUser(null);
        // window.location.href = '/login'; // O usar navigate
    };

    const register = async (userData) => {
        setLoading(true);
        // Simular registro...
        setTimeout(() => {
            setUser({ ...userData, id: 'u_' + Date.now() });
            setLoading(false);
        }, 800);
    };

    const value = {
        user,
        isAuthenticated: !!user,
        login,
        logout,
        register,
        loading,
        error
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext debe usarse dentro de un AuthProvider');
    }
    return context;
};