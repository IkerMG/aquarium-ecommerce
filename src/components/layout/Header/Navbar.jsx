import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { navigationData } from '../../../data/navigationData';
import MegaMenu from '../Navigation/MegaMenu';

const Navbar = () => {
    const location = useLocation();
    const [hoveredCategory, setHoveredCategory] = useState(null);

    // Manejadores para evitar el "parpadeo" del menú
    const handleMouseEnter = (id) => {
        setHoveredCategory(id);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };

    return (
        <nav
            className="hidden lg:flex items-center gap-1 h-full"
            onMouseLeave={handleMouseLeave} // Cierra el menú si el mouse sale de toda la barra de navegación
        >
            {navigationData.map((cat) => {
                // Verificamos si la ruta actual coincide con la categoría o sus subcategorías (simple check)
                const isActive = location.pathname.includes(cat.slug);
                const isHovered = hoveredCategory === cat.id;

                return (
                    <div key={cat.id} className="h-full flex items-center">
                        <Link
                            to={cat.slug}
                            onMouseEnter={() => handleMouseEnter(cat.id)}
                            className={clsx(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group flex items-center gap-2",
                                isActive || isHovered
                                    ? "text-accent-400 bg-accent-500/10"
                                    : "text-neutral-300 hover:text-white hover:bg-white/5",
                                cat.isSpecial && "text-orange-400 hover:text-orange-300 bg-orange-500/10 hover:bg-orange-500/20"
                            )}
                        >
                            {/* Icono opcional, si quieres que se vea en el menú principal descomenta esto: */}
                            {/* <span className="text-base">{cat.icon}</span> */}

                            {cat.name}

                            {/* Indicador de activo */}
                            {!isActive && !isHovered && !cat.isSpecial && (
                                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            )}
                        </Link>
                    </div>
                );
            })}

            {/* Renderizamos el MegaMenu fuera del loop pero dentro del Nav para que comparta el contexto de MouseLeave */}
            <MegaMenu
                activeCategoryId={hoveredCategory}
                onMouseEnter={() => setHoveredCategory(hoveredCategory)} // Mantiene abierto si entras al menú
                onMouseLeave={handleMouseLeave}
            />
        </nav>
    );
};

export default Navbar;