import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-accent-500 selection:text-white">
            <Header />
            <main className="flex-grow relative z-0">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
