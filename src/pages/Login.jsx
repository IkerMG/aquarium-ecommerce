import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
    const { login, loading, error } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate('/mi-cuenta');
        } catch (err) {
            // El error ya se maneja en el estado del hook, pero podemos loguearlo
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-6">
            <div className="w-full max-w-md bg-neutral-900 p-8 rounded-2xl border border-neutral-800 shadow-2xl">
                <h2 className="text-3xl font-bold text-white mb-2 text-center">Bienvenido de nuevo</h2>
                <p className="text-neutral-400 text-center mb-8">Accede a tu cuenta Urban Natura</p>

                {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 text-red-400 text-sm rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-neutral-950 border border-neutral-700 rounded-lg p-3 text-white focus:border-accent-500 outline-none"
                            placeholder="tu@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-2">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-neutral-950 border border-neutral-700 rounded-lg p-3 text-white focus:border-accent-500 outline-none"
                            placeholder="••••••••"
                        />
                    </div>
                    <button disabled={loading} type="submit" className="w-full py-3 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-lg transition-all">
                        {loading ? 'Entrando...' : 'Iniciar Sesión'}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
                    <p className="text-sm text-neutral-500 mb-2">Credenciales de prueba:</p>
                    <code className="bg-neutral-950 px-2 py-1 rounded text-xs text-accent-400">demo@urbannatura.com</code>
                    <span className="mx-2 text-neutral-600">/</span>
                    <code className="bg-neutral-950 px-2 py-1 rounded text-xs text-accent-400">123456</code>
                </div>
            </div>
        </div>
    );
};

export default Login;