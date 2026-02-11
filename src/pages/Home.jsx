import React from 'react';
import { Link } from 'react-router-dom';
import { FiDroplet, FiSun, FiLayers, FiShoppingBag } from 'react-icons/fi';

// Componentes
import Hero from '../components/home/Hero/Hero';
import ProductGrid from '../components/products/ProductGrid';

// Datos
import { products } from '../data/mockProducts';

const Home = () => {
    // Simulamos productos destacados (los primeros 4)
    const featuredProducts = products.slice(0, 4);



    const features = [
        {
            icon: <FiDroplet />,
            title: 'Plantas',
            desc: 'Venta de plantas para acuarios de agua dulce.'
        },
        {
            icon: <FiSun />,
            title: 'Filtración Avanzada',
            desc: 'Equipos de alto rendimiento para agua cristalina.'
        },
        {
            icon: <FiLayers />,
            title: 'Diseño a Medida',
            desc: 'Proyectos personalizados de aquascaping profesional.'
        }
    ];

    return (
        <div className="bg-neutral-950 text-white">

            {/* 1. Componente HERO */}
            <Hero />

            {/* 2. Sección de FEATURES (Estilo Original) */}
            <section className="py-20 bg-neutral-900/30 border-b border-neutral-900">
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-accent-500/50 transition-colors group">
                            <div className="text-3xl text-accent-500 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{f.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Productos Destacados (Integrando ProductGrid con estilo oscuro) */}
            <section className="py-24 border-b border-neutral-900">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-accent-500 font-bold uppercase tracking-widest text-xs">Favoritos</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Productos Destacados</h2>
                        </div>
                        <Link to="/categoria/todo" className="hidden md:block text-accent-500 font-medium hover:text-accent-400 transition-colors">
                            Ver todo el catálogo &rarr;
                        </Link>
                    </div>

                    {/* El Grid usará las ProductCards oscuras que actualizamos arriba */}
                    <ProductGrid products={featuredProducts} />

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/categoria/todo" className="text-accent-500 font-medium hover:text-accent-400">
                            Ver todo el catálogo &rarr;
                        </Link>
                    </div>
                </div>
            </section>


            {/* 4. CTA Final (Estilo Original) */}
            <section className="py-20 border-t border-neutral-900 bg-neutral-900/20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6 text-white">¿Buscas algo específico?</h2>
                    <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                        Nuestro equipo de especialistas en Barcelona está listo para asesorarte en tu próximo proyecto.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-block px-8 py-3 bg-white text-neutral-950 font-bold rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                        Contactar Especialista
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;