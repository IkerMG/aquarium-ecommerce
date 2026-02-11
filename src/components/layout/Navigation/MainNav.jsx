import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MegaMenu from './MegaMenu';

const MainNav = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const mainCategories = [
        { name: 'Acuarios', slug: '/categoria/acuarios' },
        { name: 'Plantas', slug: '/categoria/plantas' },
        { name: 'Peces', slug: '/categoria/peces-corales-anfibios' },
        { name: 'Aquascaping', slug: '/categoria/aquascaping' },
        { name: 'Equipamiento', slug: '/categoria/accesorios' },
    ];

    return (
        <nav className="hidden lg:block h-full" onMouseLeave={() => setHoveredCategory(null)}>
            <ul className="flex items-center gap-1 h-full">
                {mainCategories.map((category) => (
                    <li
                        key={category.slug}
                        className="h-full flex items-center"
                        onMouseEnter={() => setHoveredCategory(category.name)}
                    >
                        <Link
                            to={category.slug}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${hoveredCategory === category.name
                                    ? 'text-white bg-white/10'
                                    : 'text-neutral-300 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {category.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Renderizado condicional del MegaMenu */}
            <MegaMenu
                activeCategory={hoveredCategory}
                onMouseLeave={() => setHoveredCategory(null)}
            />
        </nav>
    );
};

export default MainNav;