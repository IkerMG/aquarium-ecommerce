import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, Navigate } from 'react-router-dom';
import { FiLogOut, FiPackage, FiUser, FiHeart } from 'react-icons/fi';

const Account = () => {
    const { user, logout, isAuthenticated } = useAuth();

    if (!isAuthenticated) return <Navigate to="/login" />;

    return (
        <div className="min-h-screen bg-neutral-950 pt-24 px-6 text-white">
            <div className="container mx-auto max-w-4xl">
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                        <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full border-2 border-accent-500" />
                        <div>
                            <h1 className="text-2xl font-bold">{user.name}</h1>
                            <p className="text-neutral-400">{user.email}</p>
                        </div>
                    </div>
                    <button onClick={logout} className="flex items-center gap-2 px-4 py-2 border border-neutral-700 rounded-lg hover:bg-red-500/10 hover:text-red-500 transition-colors">
                        <FiLogOut /> Cerrar Sesión
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Tarjetas de menú */}
                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-accent-500/50 transition-colors cursor-pointer group">
                        <FiPackage className="text-3xl text-accent-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-lg mb-2">Mis Pedidos</h3>
                        <p className="text-sm text-neutral-400">Rastrea, devuelve o compra de nuevo.</p>
                    </div>
                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-accent-500/50 transition-colors cursor-pointer group">
                        <FiHeart className="text-3xl text-accent-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-lg mb-2">Lista de Deseos</h3>
                        <p className="text-sm text-neutral-400">Tus productos favoritos guardados.</p>
                    </div>
                    <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-accent-500/50 transition-colors cursor-pointer group">
                        <FiUser className="text-3xl text-accent-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="font-bold text-lg mb-2">Datos Personales</h3>
                        <p className="text-sm text-neutral-400">Editar dirección y contraseña.</p>
                    </div>
                </div>

                {/* Historial Mock */}
                <div className="mt-12">
                    <h2 className="text-xl font-bold mb-6">Pedidos Recientes</h2>
                    <div className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden">
                        <div className="p-4 border-b border-neutral-800 flex justify-between items-center">
                            <div>
                                <p className="font-bold">Pedido #UN-8834</p>
                                <p className="text-xs text-neutral-500">Realizado el 24 Oct 2023</p>
                            </div>
                            <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold">Entregado</span>
                        </div>
                        <div className="p-4 flex gap-4">
                            <div className="w-16 h-16 bg-neutral-800 rounded"></div>
                            <div className="w-16 h-16 bg-neutral-800 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;