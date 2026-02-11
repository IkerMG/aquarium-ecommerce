import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SubcategoryList = ({ subcategories }) => {
    if (!subcategories) return null;

    return (
        <div className="space-y-16">
            {subcategories.map((group, groupIndex) => (
                <div key={groupIndex}>
                    {/* Título del Grupo (Ej: Agua Dulce, Componentes...) */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-neutral-800 flex-1"></div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                            {group.title}
                        </h3>
                        <div className="h-px bg-neutral-800 flex-1"></div>
                    </div>

                    {/* Grid de Tarjetas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.links.map((sub, index) => (
                            <motion.div
                                key={sub.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    to={sub.slug}
                                    className="group relative block h-72 overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-accent-500/50 transition-all duration-300"
                                >

                                    {/* Imagen de Fondo */}
                                    <div className="absolute inset-0">
                                        {sub.cardImage ? (
                                            // Prioridad 1: cardImage (imagen específica para la card)
                                            <img
                                                src={sub.cardImage}
                                                alt={sub.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : sub.image ? (
                                            // Prioridad 2: image (imagen general)
                                            <img
                                                src={sub.image}
                                                alt={sub.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            // Fallback: fondo gris con gradiente
                                            <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-850 to-neutral-900" />
                                        )}

                                        {/* Overlay oscuro para legibilidad del texto */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/50 to-neutral-950/20 group-hover:from-neutral-950/98 transition-all duration-300" />
                                    </div>

                                    {/* Contenido */}
                                    <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                                            {sub.name}
                                        </h4>

                                        {sub.description && (
                                            <p className="text-neutral-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                                {sub.description}
                                            </p>
                                        )}

                                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-accent-500">
                                            Ver Productos
                                            <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>

                                    {/* Efecto de brillo al hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent-500/5 to-transparent" />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SubcategoryList;