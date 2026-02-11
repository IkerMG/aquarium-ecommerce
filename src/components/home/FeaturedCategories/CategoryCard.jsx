import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const CategoryCard = ({ title, image, slug, count }) => {
    return (
        <Link to={slug} className="group relative block h-64 sm:h-80 w-full overflow-hidden rounded-2xl">
            {/* Imagen de Fondo con Zoom al Hover */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
            />

            {/* Overlay Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

            {/* Contenido */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
                <p className="text-xs font-bold text-accent-400 uppercase tracking-wider mb-2">
                    {count} Productos
                </p>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-50 transition-colors">
                    {title}
                </h3>

                <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="flex items-center gap-2 text-sm text-neutral-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0"
                >
                    Explorar <FiArrowRight />
                </motion.div>
            </div>
        </Link>
    );
};

export default CategoryCard;