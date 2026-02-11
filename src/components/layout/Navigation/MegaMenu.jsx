import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationData } from '../../../data/navigationData';

const MegaMenu = ({ activeCategoryId, onMouseEnter, onMouseLeave }) => {
    // 1. Encontrar la categoría activa en los datos
    const category = navigationData.find(cat => cat.id === activeCategoryId);

    return (
        <AnimatePresence>
            {category && (
                <motion.div
                    key="megamenu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 w-full bg-neutral-950/95 backdrop-blur-xl border-t border-white/10 shadow-2xl z-40"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <div className="container mx-auto px-6 py-8">
                        <div className="grid grid-cols-12 gap-8">

                            {/* COLUMNA IZQUIERDA: SUBCATEGORÍAS (8 columnas) */}
                            <div className="col-span-12 lg:col-span-9 grid grid-cols-3 gap-8 border-r border-white/5 pr-8">
                                {category.subcategories?.map((group, index) => (
                                    <div key={index}>
                                        <h4 className="text-accent-400 font-bold mb-4 uppercase text-xs tracking-[0.15em] flex items-center gap-2">
                                            {/* Si es la primera columna, mostramos el icono de la categoría padre opcionalmente */}
                                            {group.title}
                                        </h4>
                                        <ul className="space-y-2.5">
                                            {group.links.map((link) => (
                                                <li key={link.slug}>
                                                    <Link
                                                        to={link.slug}
                                                        className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                                                    >
                                                        <span className="w-1 h-1 rounded-full bg-neutral-700 group-hover:bg-accent-500 transition-colors" />
                                                        {link.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* COLUMNA DERECHA: DESTACADOS (3 o 4 columnas) */}
                            <div className="col-span-12 lg:col-span-3 pl-2">
                                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
                                    Destacados
                                </h4>
                                <div className="flex flex-col gap-4">
                                    {category.featured?.map((item, idx) => (
                                        <Link key={idx} to={item.slug} className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-colors">
                                            <div className="w-12 h-12 bg-neutral-800 rounded-md overflow-hidden flex-shrink-0">
                                                {/* Placeholder para imagen con lazy load básico */}
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-neutral-200 group-hover:text-accent-400 transition-colors line-clamp-2">
                                                    {item.name}
                                                </p>
                                                <span className="text-xs text-neutral-500">Ver producto &rarr;</span>
                                            </div>
                                        </Link>
                                    ))}

                                    {(!category.featured || category.featured.length === 0) && (
                                        <div className="p-4 bg-accent-500/10 rounded-lg border border-accent-500/20">
                                            <p className="text-accent-200 text-sm">
                                                Explora nuestra selección completa de {category.name.toLowerCase()}.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MegaMenu;