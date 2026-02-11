import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiYoutube, FiMapPin, FiPhone, FiMail, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 font-light">
            {/* Sección Principal */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Columna 1: Marca e Info */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                Urban<span className="text-accent-500">Natura</span>
                            </h2>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Especialistas en aquascaping y acuariofilia de alta gama en Barcelona. Creamos ecosistemas vivos que transforman espacios.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-accent-600 hover:text-white transition-all duration-300">
                                <FiInstagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <FiFacebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
                                <FiYoutube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <div>
                        <h3 className="text-white font-medium mb-6 text-lg">Explorar</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/categoria/acuarios" className="hover:text-accent-400 transition-colors">Acuarios a Medida</Link></li>
                            <li><Link to="/categoria/plantas" className="hover:text-accent-400 transition-colors">Plantas Naturales</Link></li>
                            <li><Link to="/categoria/peces" className="hover:text-accent-400 transition-colors">Peces y Corales</Link></li>
                            <li><Link to="/servicios" className="hover:text-accent-400 transition-colors">Mantenimiento y Diseño</Link></li>
                            <li><Link to="/blog" className="hover:text-accent-400 transition-colors">Blog / Guías</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div>
                        <h3 className="text-white font-medium mb-6 text-lg">Contacto</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <FiMapPin className="mt-1 text-accent-500 shrink-0" />
                                <span>C/ de València, 605,<br />08026 Barcelona</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone className="text-accent-500 shrink-0" />
                                <a href="tel:937638985" className="hover:text-white transition-colors">93 763 89 85</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiMail className="text-accent-500 shrink-0" />
                                <a href="mailto:info@urbannatura.com" className="hover:text-white transition-colors">info@urbannatura.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Newsletter */}
                    <div>
                        <h3 className="text-white font-medium mb-6 text-lg">Newsletter</h3>
                        <p className="text-sm mb-4">Suscríbete para recibir consejos de aquascaping y ofertas exclusivas.</p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Tu email"
                                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors placeholder:text-neutral-600"
                                />
                            </div>
                            <button className="w-full bg-accent-600 hover:bg-accent-700 text-white font-medium py-3 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                                Suscribirme <FiArrowRight />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-neutral-900 bg-neutral-950">
                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>&copy; {currentYear} Urban Natura. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link to="/legal" className="hover:text-white transition-colors">Aviso Legal</Link>
                        <Link to="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;