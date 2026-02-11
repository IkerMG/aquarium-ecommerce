import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronRight, FiMessageCircle } from 'react-icons/fi';

// Datos
import { products } from '../data/mockProducts';

// Componentes Modulares (Asegúrate de tener las versiones oscuras que te pasé antes)
import ProductGallery from '../components/products/ProductGallery';
import ProductInfo from '../components/products/ProductInfo';
import ProductTabs from '../components/products/ProductTabs';

const ProductDetail = () => {
    const { slug } = useParams();

    // Buscar el producto
    const product = products.find(p => p.slug === slug);

    // Estado de carga / error con estilo Dark
    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white">
                <h2 className="text-3xl font-bold mb-4 text-accent-500">Producto no encontrado</h2>
                <Link
                    to="/"
                    className="px-6 py-2 bg-white text-neutral-950 font-bold rounded hover:bg-neutral-200 transition-colors"
                >
                    Volver al inicio
                </Link>
            </div>
        );
    }

    // Adaptador para galería (si tus datos no tienen array de imágenes)
    const galleryImages = product.images || [product.image, product.image];

    return (
        <div className="bg-neutral-950 text-white min-h-screen">

            {/* Margen superior para el Navbar fijo */}
            <div className="pt-24 pb-12">
                <div className="container mx-auto px-6">

                    {/* Breadcrumbs (Navegación) */}
                    <nav className="flex items-center text-sm text-neutral-400 mb-8 overflow-x-auto whitespace-nowrap">
                        <Link to="/" className="hover:text-accent-500 transition-colors">Inicio</Link>
                        <FiChevronRight className="mx-2 text-neutral-600" />
                        <Link to={`/categoria/${product.category}`} className="hover:text-accent-500 transition-colors capitalize">
                            {product.category}
                        </Link>
                        <FiChevronRight className="mx-2 text-neutral-600" />
                        <span className="text-white font-medium truncate">{product.name}</span>
                    </nav>

                    {/* SECCIÓN PRINCIPAL: Grid de 2 Columnas */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-20">
                        {/* Columna Izquierda: Galería */}
                        <div>
                            <ProductGallery images={galleryImages} />
                        </div>

                        {/* Columna Derecha: Información */}
                        <div>
                            <ProductInfo product={product} />
                        </div>
                    </div>

                    {/* SECCIÓN PESTAÑAS: Descripción y Specs */}
                    {/* Usamos border-neutral-900 para coincidir con el Home */}
                    <div className="border-t border-neutral-900 pt-16">
                        <ProductTabs product={product} />
                    </div>
                </div>
            </div>

            {/* SECCIÓN CTA FINAL (Estilo idéntico al Home) */}
            <section className="py-20 border-t border-neutral-900 bg-neutral-900/20">
                <div className="container mx-auto px-6 text-center">
                    <div className="inline-block p-4 rounded-full bg-neutral-900 border border-neutral-800 mb-6 text-accent-500 text-2xl">
                        <FiMessageCircle />
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-white">¿Tienes dudas sobre este producto?</h2>
                    <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                        Nuestros expertos en aquascaping pueden decirte si este equipo es compatible con tu acuario actual.
                    </p>
                    <Link
                        to="/contacto"
                        className="inline-block px-8 py-3 bg-white text-neutral-950 font-bold rounded-lg hover:bg-neutral-200 transition-colors"
                    >
                        Preguntar al Experto
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default ProductDetail;