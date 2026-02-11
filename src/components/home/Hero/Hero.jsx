import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';

const Hero = () => {
    return (
        <section className="relative h-[85vh] flex items-center overflow-hidden bg-neutral-950">
            {/* Imagen de Fondo */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=2070"
                    alt="Aquascape Background"
                    className="w-full h-full object-cover opacity-50"
                />
                {/* Overlay degradado para mejorar lectura del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
            </div>

            {/* Contenido Principal */}
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                        Tu Acuario Perfecto <br />
                        <span className="text-accent-500">Comienza Aquí</span>
                    </h1>

                    <p className="text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl">
                        Más de 15 años equipando acuarios en Barcelona.
                        Descubre el arte del Aquascaping con los mejores expertos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        {/* Botón Primario */}
                        <Link
                            to="/categoria/acuarios"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white font-semibold rounded-lg transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)]"
                        >
                            Explorar Productos <FiArrowRight />
                        </Link>

                        {/* Botón Secundario (Outline) */}
                        <Link
                            to="/contacto"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-neutral-600 hover:border-white text-white font-medium rounded-lg transition-colors hover:bg-white/5"
                        >
                            <FiMapPin /> Visita Nuestra Tienda
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;