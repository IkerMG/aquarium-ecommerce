import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiUser, FiPhone, FiMapPin, FiInstagram } from 'react-icons/fi';

const MobileMenu = ({ isOpen, onClose, categories }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm lg:hidden"
                        onClick={onClose}
                    />

                    {/* Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 bottom-0 z-[90] w-[85%] max-w-sm bg-neutral-950 border-l border-neutral-800 lg:hidden flex flex-col shadow-2xl"
                    >
                        <div className="p-6 flex justify-between items-center border-b border-neutral-900">
                            <span className="text-white font-bold text-lg">Menú</span>
                            <button onClick={onClose} className="p-2 text-neutral-400 hover:text-white bg-neutral-900 rounded-full">
                                <FiX size={20} />
                            </button>
                        </div>

                        <nav className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
                            {categories.map((cat) => (
                                <Link
                                    key={cat.slug}
                                    to={cat.slug}
                                    onClick={onClose}
                                    className="text-xl font-medium text-neutral-300 hover:text-white hover:pl-4 transition-all duration-300 py-3 border-b border-neutral-900/50"
                                >
                                    {cat.name}
                                </Link>
                            ))}
                        </nav>

                        <div className="p-6 border-t border-neutral-900 bg-neutral-900/30 space-y-4">
                            <Link to="/mi-cuenta" onClick={onClose} className="flex items-center gap-3 text-neutral-300">
                                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
                                    <FiUser />
                                </div>
                                <span>Mi Cuenta</span>
                            </Link>
                            <div className="h-px bg-neutral-800 w-full" />
                            <div className="text-sm text-neutral-500 space-y-2">
                                <p className="flex items-center gap-2"><FiPhone /> 93 763 89 85</p>
                                <p className="flex items-center gap-2"><FiMapPin /> Barcelona, ES</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;