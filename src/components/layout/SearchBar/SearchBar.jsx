import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import SearchSuggestions from './SearchSuggestions';

const SearchBar = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // Auto-focus cuando se abre
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 100);
        }
    }, [isOpen]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/buscar?q=${encodeURIComponent(query)}`);
            onClose();
            setQuery('');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[70] bg-neutral-950/95 backdrop-blur-xl flex flex-col pt-32 px-6"
                >
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="w-full max-w-3xl mx-auto relative"
                    >
                        <form onSubmit={handleSearch} className="relative z-20">
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Buscar productos, marcas o categorías..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-transparent border-b-2 border-neutral-800 py-6 text-2xl md:text-4xl font-light text-white outline-none focus:border-accent-500 transition-all placeholder:text-neutral-700"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-accent-400 transition-colors"
                            >
                                <FiSearch className="w-8 h-8" />
                            </button>
                        </form>

                        {/* Sugerencias Dinámicas */}
                        <div className="mt-4 relative z-10">
                            <SearchSuggestions query={query} onClose={() => { onClose(); setQuery(''); }} />
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={onClose}
                                className="text-neutral-500 hover:text-white flex items-center gap-2 text-sm uppercase tracking-widest transition-colors"
                            >
                                <FiX className="w-5 h-5" /> Cerrar Esc
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchBar;