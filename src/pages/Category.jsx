import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiFilter, FiX, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// Datos
import { navigationData } from '../data/navigationData';
import { products as allProducts } from '../data/mockProducts';

// Componentes
import ProductGrid from '../components/products/ProductGrid';
import ProductFilters from '../components/products/ProductFilters';
import ProductSort from '../components/products/ProductSort';
import SubcategoryList from '../components/category/SubcategoryList';
import FeaturedProducts from '../components/home/FeaturedProducts';

const Category = () => {
    const { categorySlug, subcategorySlug } = useParams();
    const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
    const [sortOption, setSortOption] = useState('featured');

    // 1. Encontrar la Categoría Principal
    const currentCategory = navigationData.find(c => c.slug.endsWith(categorySlug));

    // 2. Determinar si estamos en Vista de Subcategoría
    const isSubcategoryView = Boolean(subcategorySlug);

    // 3. Info de Subcategoría
    let currentSubcategoryInfo = null;
    if (currentCategory && isSubcategoryView) {
        currentCategory.subcategories.forEach(group => {
            const found = group.links.find(link => link.slug.endsWith(subcategorySlug));
            if (found) currentSubcategoryInfo = found;
        });
    }

    // 4. Lógica de Filtrado General
    let filteredProducts = allProducts.filter(p => {
        const matchCategory = p.category === currentCategory?.id || currentCategory?.slug.includes(p.category);

        if (isSubcategoryView) {
            return matchCategory && (p.subcategory === subcategorySlug || p.type === subcategorySlug);
        }
        return matchCategory;
    });

    // 5. Lógica de Destacados (Para la vista principal de Categoría)
    const categoryFeaturedProducts = allProducts
        .filter(p => p.category === currentCategory?.id || currentCategory?.slug.includes(p.category))
        .slice(0, 4);

    // 6. Ordenar
    filteredProducts = [...filteredProducts].sort((a, b) => {
        switch (sortOption) {
            case 'price-asc': return a.price - b.price;
            case 'price-desc': return b.price - a.price;
            case 'newest': return b.isNew ? 1 : -1;
            case 'rating': return b.rating - a.rating;
            default: return 0;
        }
    });

    if (!currentCategory) {
        return (
            <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Categoría no encontrada</h1>
                    <Link to="/" className="text-accent-500 hover:underline">Volver al inicio</Link>
                </div>
            </div>
        );
    }

    // ============================================
    // 🎨 IMAGEN DEL HERO - PERSONALIZADA POR CATEGORÍA
    // ============================================
    const getHeroImage = () => {
        // Si estamos en subcategoría y tiene imagen, úsala
        if (isSubcategoryView && currentSubcategoryInfo?.heroImage) {
            return currentSubcategoryInfo.heroImage;
        }

        // Si la categoría principal tiene heroImage definida, úsala
        if (currentCategory.heroImage) {
            return currentCategory.heroImage;
        }

        // Fallback: imagen por defecto
        return "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070";
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white">

            {/* === HERO PERSONALIZADO === */}
            <div className="relative h-64 md:h-80 overflow-hidden bg-neutral-900 border-b border-neutral-900">
                {/* Imagen de Fondo */}
                <div className="absolute inset-0">
                    <img
                        src={getHeroImage()}
                        alt={isSubcategoryView ? currentSubcategoryInfo?.name : currentCategory.name}
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay oscuro para legibilidad */}
                    <div className="absolute inset-0 bg-neutral-900/70" />
                </div>

                {/* Gradiente desde abajo */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />

                {/* Contenido del Hero */}
                <div className="container mx-auto px-6 relative h-full flex flex-col justify-end pb-12">
                    {/* Badge de categoría padre (solo en subcategorías) */}
                    <span className="text-accent-500 font-bold uppercase tracking-widest text-xs mb-3">
                        {isSubcategoryView ? currentCategory.name : 'Colección'}
                    </span>

                    {/* Título principal */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        {isSubcategoryView ? currentSubcategoryInfo?.name : currentCategory.name}
                    </h1>

                    {/* Descripción */}
                    <p className="text-neutral-300 max-w-2xl text-lg leading-relaxed">
                        {isSubcategoryView
                            ? currentSubcategoryInfo?.description || currentCategory.description
                            : currentCategory.description
                        }
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">

                {/* === BREADCRUMBS === */}
                <nav className="flex items-center text-sm text-neutral-400 mb-12 overflow-x-auto whitespace-nowrap">
                    <Link to="/" className="hover:text-accent-500 transition-colors">Inicio</Link>
                    <FiChevronRight className="mx-2 text-neutral-600" />

                    {isSubcategoryView ? (
                        <>
                            <Link to={currentCategory.slug} className="hover:text-accent-500 transition-colors">
                                {currentCategory.name}
                            </Link>
                            <FiChevronRight className="mx-2 text-neutral-600" />
                            <span className="text-white font-medium">{currentSubcategoryInfo?.name}</span>
                        </>
                    ) : (
                        <span className="text-white font-medium">{currentCategory.name}</span>
                    )}
                </nav>

                {/* === CONTENIDO PRINCIPAL === */}

                {!isSubcategoryView ? (
                    // --- VISTA 1: LISTA DE SUBCATEGORÍAS ---
                    <div className="animate-fade-in">
                        <SubcategoryList subcategories={currentCategory.subcategories} />

                        {/* SECCIÓN DE DESTACADOS */}
                        <div className="mt-16 -mx-6 md:-mx-0">
                            <FeaturedProducts
                                title={`Destacados en ${currentCategory.name}`}
                                text={`Nuestra selección de los mejores productos de ${currentCategory.name.toLowerCase()}.`}
                                products={categoryFeaturedProducts}
                            />
                        </div>
                    </div>
                ) : (
                    // --- VISTA 2: GRID DE PRODUCTOS ---
                    <div className="flex flex-col lg:flex-row gap-12 animate-fade-in">

                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <ProductFilters />
                        </aside>

                        <main className="flex-1">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 pb-6 border-b border-neutral-900">
                                <div className="text-neutral-400 text-sm">
                                    Mostrando <span className="text-white font-bold">{filteredProducts.length}</span> resultados
                                </div>
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <button
                                        onClick={() => setMobileFilterOpen(true)}
                                        className="lg:hidden flex items-center gap-2 text-white bg-neutral-900 border border-neutral-800 px-4 py-2 rounded-lg hover:border-accent-500/50 transition-colors"
                                    >
                                        <FiFilter /> Filtros
                                    </button>
                                    <ProductSort onSortChange={setSortOption} totalProducts={filteredProducts.length} />
                                </div>
                            </div>

                            {filteredProducts.length > 0 ? (
                                <ProductGrid products={filteredProducts} />
                            ) : (
                                <div className="text-center py-32 bg-neutral-900/30 rounded-2xl border border-dashed border-neutral-800">
                                    <h3 className="text-xl font-bold text-white mb-2">No hay productos aquí todavía</h3>
                                    <p className="text-neutral-500">Estamos llenando el acuario. Vuelve pronto.</p>
                                </div>
                            )}
                        </main>
                    </div>
                )}
            </div>

            {/* Mobile Filters Modal */}
            <AnimatePresence>
                {isMobileFilterOpen && (
                    <div className="relative z-50 lg:hidden" role="dialog" aria-modal="true">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setMobileFilterOpen(false)}
                        />
                        <div className="fixed inset-0 flex">
                            <motion.div
                                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-neutral-950 border-l border-neutral-800 py-6 shadow-2xl"
                            >
                                <div className="flex items-center justify-between px-6 mb-8 border-b border-neutral-900 pb-6">
                                    <h2 className="text-lg font-bold text-white">Filtros</h2>
                                    <button onClick={() => setMobileFilterOpen(false)} className="text-neutral-400 hover:text-white">
                                        <FiX size={24} />
                                    </button>
                                </div>
                                <div className="px-6">
                                    <ProductFilters />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Category;