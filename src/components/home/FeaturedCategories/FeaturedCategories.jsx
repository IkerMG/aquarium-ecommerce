import React from 'react';
import Container from '../../layout/Container';
import CategoryCard from './CategoryCard';

const FeaturedCategories = () => {
    // Datos simulados (puedes reemplazarlos con tus imágenes reales)
    const categories = [
        {
            id: 1,
            title: 'Acuarios',
            slug: '/categoria/acuarios',
            image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=600&auto=format&fit=crop',
            count: '+120'
        },
        {
            id: 2,
            title: 'Plantas Naturales',
            slug: '/categoria/plantas',
            image: 'https://images.unsplash.com/photo-1518182170546-0766ce6fec9e?q=80&w=600&auto=format&fit=crop',
            count: '+85'
        },
        {
            id: 3,
            title: 'Hardscape',
            slug: '/categoria/hardscape',
            image: 'https://images.unsplash.com/photo-1622325372338-30514a6047c6?q=80&w=600&auto=format&fit=crop',
            count: '+40'
        },
        {
            id: 4,
            title: 'Iluminación',
            slug: '/categoria/iluminacion',
            image: 'https://images.unsplash.com/photo-1583321500445-6351d520377f?q=80&w=600&auto=format&fit=crop',
            count: '+30'
        }
    ];

    return (
        <section className="py-20 bg-neutral-950">
            <Container>
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <span className="text-accent-500 font-bold uppercase tracking-widest text-xs">Categorías</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Nuestras Colecciones</h2>
                    </div>
                    <a href="/categorias" className="hidden md:flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                        Ver todo <FiArrowRight />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <CategoryCard key={cat.id} {...cat} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

// Necesario importar el icono si se usa en el header de sección
import { FiArrowRight } from 'react-icons/fi';

export default FeaturedCategories;