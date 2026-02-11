import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    // Scroll to top automático cuando cambia la ruta
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-accent-500 selection:text-white">
            <Header />

            {/* pt-0 permite que el Hero ocupe toda la pantalla detrás del Header transparente.
                Si una página no tiene Hero, deberá tener padding-top manual o usar un contenedor.
            */}
            <main className="flex-grow relative z-0">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;