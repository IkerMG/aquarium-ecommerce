import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../layout/Container';

const PromoBanner = () => {
    return (
        <section className="py-10">
            <Container>
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-900 to-emerald-900 border border-accent-500/20">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-8 text-center md:text-left">
                        <div className="max-w-xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                ¿Diseñas tu primer aquascape?
                            </h3>
                            <p className="text-neutral-200 leading-relaxed mb-6">
                                Ofrecemos asesoramiento personalizado para montar tu ecosistema desde cero.
                                Agenda una cita con nuestros expertos.
                            </p>
                            <Link
                                to="/contacto"
                                className="inline-block bg-white text-accent-900 font-bold py-3 px-8 rounded-lg hover:bg-neutral-100 transition-colors"
                            >
                                Contactar Experto
                            </Link>
                        </div>

                        {/* Decoración opcional (icono o imagen pequeña) */}
                        <div className="hidden md:block opacity-80">
                            {/* SVG o Icono grande decorativo */}
                            <svg className="w-40 h-40 text-accent-400/30" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-7h2v2h-2v-2zm0-8h2v6h-2V5z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PromoBanner;