import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import {
    FiSearch,
    FiShoppingCart,
    FiUser,
    FiHeart,
    FiMenu,
    FiX,
    FiPhone,
    FiChevronDown,
    FiChevronRight
} from 'react-icons/fi';

import { useCart } from "../../../hooks/useCart";
import { useAuth } from "../../../hooks/useAuth";
import { navigationData } from '../../../data/navigationData'; // Importamos los datos

import TopBar from './TopBar';
import Navbar from './Navbar';
import MiniCart from '../../cart/MiniCart/MiniCart';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMobileCategory, setExpandedMobileCategory] = useState(null); // Estado para acordeón móvil

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showMiniCart, setShowMiniCart] = useState(false);

    const navigate = useNavigate();
    const { cartCount } = useCart();
    const { user } = useAuth();
    const wishlistCount = 0;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/buscar?q=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery('');
        }
    };

    // Toggle para el acordeón móvil
    const toggleMobileCategory = (id) => {
        setExpandedMobileCategory(expandedMobileCategory === id ? null : id);
    };

    return (
        <>
            <header
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                    'bg-neutral-950/80 backdrop-blur-md border-b border-white/5 supports-[backdrop-filter]:bg-neutral-950/60'
                )}
            >
                {/* TopBar Colapsable */}
                <div
                    className={clsx(
                        "overflow-hidden transition-all duration-500 ease-in-out border-b border-white/5",
                        isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
                    )}
                >
                    <TopBar />
                </div>

                <div className={clsx("container mx-auto px-6 transition-all duration-500", isScrolled ? "py-3" : "py-4")}>
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group relative z-50">
                            <div className="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.3)] group-hover:scale-105 transition-transform">
                                <span className="text-xl text-white font-bold">U</span>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-white tracking-tight leading-none">
                                    Urban<span className="text-accent-400">Natura</span>
                                </h1>
                                <p className="text-[9px] text-neutral-400 uppercase tracking-[0.2em] font-medium leading-none mt-1">Barcelona</p>
                            </div>
                        </Link>

                        {/* Navbar Desktop */}
                        <Navbar />

                        {/* Iconos de Acción */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2.5 text-neutral-300 hover:text-accent-400 transition-colors rounded-full hover:bg-white/5"
                                aria-label="Buscar"
                            >
                                <FiSearch className="w-5 h-5" />
                            </button>

                            <Link to="/favoritos" className="hidden sm:flex relative p-2.5 text-neutral-300 hover:text-accent-400 transition-colors rounded-full hover:bg-white/5">
                                <FiHeart className="w-5 h-5" />
                                {wishlistCount > 0 && (
                                    <span className="absolute top-1 right-1 w-4 h-4 bg-accent-500 text-neutral-950 text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                                        {wishlistCount}
                                    </span>
                                )}
                            </Link>

                            {/* --- INTEGRACIÓN DEL MINICART --- */}
                            <div
                                className="relative z-50"
                                onMouseEnter={() => setShowMiniCart(true)}
                                onMouseLeave={() => setShowMiniCart(false)}
                            >
                                <Link
                                    to="/carrito"
                                    className="relative p-2.5 text-neutral-300 hover:text-accent-400 transition-colors rounded-full hover:bg-white/5 block"
                                >
                                    <FiShoppingCart className="w-5 h-5" />
                                    <AnimatePresence>
                                        {cartCount > 0 && (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                                className="absolute top-1 right-1 w-4 h-4 bg-accent-500 text-neutral-950 text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm"
                                            >
                                                {cartCount}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </Link>

                                <AnimatePresence>
                                    {showMiniCart && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full right-0 pt-2"
                                        >
                                            <MiniCart onClose={() => setShowMiniCart(false)} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link to={user ? "/mi-cuenta" : "/login"} className="hidden md:flex p-2.5 text-neutral-300 hover:text-accent-400 transition-colors rounded-full hover:bg-white/5">
                                {user?.avatar ? (
                                    <img src={user.avatar} alt="User" className="w-6 h-6 rounded-full border border-neutral-600" />
                                ) : (
                                    <FiUser className={clsx("w-5 h-5", user && "text-accent-500")} />
                                )}
                            </Link>

                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="lg:hidden p-2.5 text-neutral-300 hover:text-white transition-colors"
                            >
                                <FiMenu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- ESPACIADOR GLOBAL --- */}
            <div className="h-[80px] lg:h-[104px] w-full bg-neutral-950" />

            {/* Modal de Búsqueda Fullscreen */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] bg-neutral-950/95 backdrop-blur-2xl flex items-start justify-center pt-32 px-6"
                    >
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="w-full max-w-3xl relative"
                        >
                            <form onSubmit={handleSearch} className="relative">
                                <input
                                    type="text"
                                    placeholder="¿Qué estás buscando para tu acuario?"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus
                                    className="w-full bg-transparent border-b-2 border-neutral-800 py-6 text-2xl md:text-4xl font-light text-white outline-none focus:border-accent-500 transition-all placeholder:text-neutral-700"
                                />
                                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-accent-400 transition-colors">
                                    <FiSearch className="w-8 h-8 md:w-10 md:h-10" />
                                </button>
                            </form>
                            <div className="mt-8 flex justify-center">
                                <button
                                    onClick={() => setIsSearchOpen(false)}
                                    className="text-neutral-500 hover:text-white flex items-center gap-2 text-sm uppercase tracking-widest transition-colors"
                                >
                                    <FiX className="w-5 h-5" /> Cerrar esc
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Menú Lateral Mobile (Acordeón) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 z-[90] w-[85%] max-w-sm bg-neutral-950 border-l border-neutral-800 lg:hidden flex flex-col shadow-2xl"
                        >
                            <div className="p-6 flex justify-between items-center border-b border-neutral-900">
                                <span className="text-white font-bold text-lg">Menú</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-neutral-400 hover:text-white transition-colors bg-neutral-900 rounded-full"
                                >
                                    <FiX size={20} />
                                </button>
                            </div>

                            <nav className="flex-1 overflow-y-auto py-4 px-4 flex flex-col">
                                {navigationData.map((cat) => (
                                    <div key={cat.id} className="border-b border-neutral-900/50">
                                        <div
                                            className="flex items-center justify-between py-4 px-2 cursor-pointer group"
                                            onClick={() => toggleMobileCategory(cat.id)}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl">{cat.icon}</span>
                                                <span className={clsx("text-lg font-medium transition-colors", expandedMobileCategory === cat.id ? "text-accent-400" : "text-neutral-300 group-hover:text-white")}>
                                                    {cat.name}
                                                </span>
                                            </div>
                                            <FiChevronDown
                                                className={clsx("text-neutral-500 transition-transform duration-300", expandedMobileCategory === cat.id ? "rotate-180 text-accent-400" : "")}
                                            />
                                        </div>

                                        <AnimatePresence>
                                            {expandedMobileCategory === cat.id && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden bg-white/5 rounded-lg mb-2"
                                                >
                                                    <div className="p-4 flex flex-col gap-4">
                                                        {/* Link a la categoría principal */}
                                                        <Link
                                                            to={cat.slug}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="text-accent-400 font-bold text-sm flex items-center gap-2"
                                                        >
                                                            Ver todo {cat.name} <FiChevronRight />
                                                        </Link>

                                                        {/* Subcategorías */}
                                                        {cat.subcategories?.map((group, idx) => (
                                                            <div key={idx} className="flex flex-col gap-2">
                                                                <h5 className="text-xs uppercase tracking-widest text-neutral-500 font-bold mt-2">{group.title}</h5>
                                                                {group.links.map(link => (
                                                                    <Link
                                                                        key={link.slug}
                                                                        to={link.slug}
                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                        className="text-neutral-300 text-sm py-1 pl-2 border-l border-neutral-700 hover:border-accent-500 hover:text-white transition-all"
                                                                    >
                                                                        {link.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </nav>

                            <div className="p-6 border-t border-neutral-900 bg-neutral-900/30">
                                <div className="flex flex-col gap-4">
                                    <Link
                                        to={user ? "/mi-cuenta" : "/login"}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-3 text-neutral-300 hover:text-accent-400 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                                            {user?.avatar ? <img src={user.avatar} className="rounded-full" alt="avatar" /> : <FiUser className="text-sm" />}
                                        </div>
                                        <span>{user ? "Mi Cuenta" : "Iniciar Sesión"}</span>
                                    </Link>
                                    <div className="h-px bg-neutral-800 w-full my-2"></div>
                                    <a href="tel:937638985" className="flex items-center gap-3 text-neutral-400 hover:text-accent-400 transition-colors text-sm">
                                        <FiPhone /> 93 763 89 85
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;