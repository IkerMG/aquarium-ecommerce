import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiHeart } from 'react-icons/fi';
import Container from '../../layout/Container'; // Asegúrate que esta ruta sea correcta

// Componente interno de tarjeta
const ProductCard = ({ name, price, category, image, isNew, slug }) => (
    <div className="group bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-accent-500/50 transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-neutral-800">
            {isNew && (
                <span className="absolute top-3 left-3 bg-accent-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                    Nuevo
                </span>
            )}
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            {/* Botones de acción rápida */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-white text-neutral-900 p-3 rounded-full hover:bg-neutral-200 transition-colors shadow-lg">
                    <FiShoppingBag size={18} />
                </button>
                <button className="bg-neutral-900 text-white border border-neutral-700 p-3 rounded-full hover:bg-neutral-800 transition-colors shadow-lg">
                    <FiHeart size={18} />
                </button>
            </div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
            <span className="text-xs text-neutral-500 uppercase tracking-wider">{category}</span>
            <Link to={`/producto/${slug || 'ejemplo'}`}>
                <h3 className="text-white font-medium text-lg mt-1 mb-2 group-hover:text-accent-400 transition-colors line-clamp-1">
                    {name}
                </h3>
            </Link>
            <div className="mt-auto flex items-center justify-between">
                <span className="text-neutral-200 font-bold">{typeof price === 'number' ? `${price} €` : price}</span>
            </div>
        </div>
    </div>
);

const FeaturedProducts = ({ title, text, products }) => {
    // Datos Mock por defecto (si no se pasan props)
    const defaultProducts = [
        { id: 1, name: 'Urna Crystal 60P', price: '125,00 €', category: 'Acuarios', isNew: true, image: 'https://images.unsplash.com/photo-1517607736340-02e0b5220455?q=80&w=400&auto=format&fit=crop', slug: 'urna-60p' },
        { id: 2, name: 'Filtro Oase BioMaster', price: '189,90 €', category: 'Filtración', isNew: false, image: 'https://images.unsplash.com/photo-1621996767850-937f22572533?q=80&w=400&auto=format&fit=crop', slug: 'filtro-oase' },
        { id: 3, name: 'Twinstar Light III', price: '145,50 €', category: 'Iluminación', isNew: false, image: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?q=80&w=400&auto=format&fit=crop', slug: 'twinstar-light' },
        { id: 4, name: 'Roca Dragon Stone (kg)', price: '4,50 €', category: 'Hardscape', isNew: false, image: 'https://images.unsplash.com/photo-1598263884393-e4c161cc6991?q=80&w=400&auto=format&fit=crop', slug: 'dragon-stone' },
    ];

    // Usamos los productos pasados por props O los default
    const displayProducts = products && products.length > 0 ? products : defaultProducts;

    return (
        <section className="py-20 bg-neutral-950 border-t border-neutral-900">
            <Container>
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <span className="text-accent-500 font-bold uppercase tracking-widest text-xs">
                        {products ? 'Selección' : 'Novedades'}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
                        {title || 'Productos Destacados'}
                    </h2>
                    <p className="text-neutral-400">
                        {text || 'Descubre lo último en equipamiento de alta gama para tu acuario plantado.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FeaturedProducts;