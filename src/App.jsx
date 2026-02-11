import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Layout from './components/layout/Layout';

import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderConfirmation from './components/checkout/OrderConfirmation/OrderConfirmation';
import Login from './pages/Login';
import Account from './pages/Account';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
import NotFound from './pages/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PlaceholderPage = ({ title }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-neutral-950">
    <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
    <p className="text-neutral-400">Esta sección está bajo construcción.</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* === Catálogo y Home === */}
          <Route path="/" element={<Home />} />

          {/* RUTA NIVEL 1: Categoría Padre (Ej: /categoria/acuarios) -> Muestra lista subcategorías */}
          <Route path="/categoria/:categorySlug" element={<Category />} />

          {/* RUTA NIVEL 2: Subcategoría (Ej: /categoria/acuarios/nano) -> Muestra productos */}
          <Route path="/categoria/:categorySlug/:subcategorySlug" element={<Category />} />

          <Route path="/producto/:slug" element={<ProductDetail />} />

          {/* === Flujo de Compra === */}
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation/:orderId" element={<OrderConfirmation />} />

          {/* === Usuario === */}
          <Route path="/login" element={<Login />} />
          <Route path="/mi-cuenta" element={<Account />} />
          <Route path="/favoritos" element={<PlaceholderPage title="Mis Favoritos" />} />

          {/* === Contenido e Info === */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/sobre-nosotros" element={<About />} />

          {/* === Error 404 === */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;