import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiInstagram, FiFacebook, FiYoutube, FiMapPin,
  FiPhone, FiMail, FiArrowRight, FiClock
} from 'react-icons/fi';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  const links = {
    tienda: [
      { name: 'Acuarios', to: '/categoria/acuarios' },
      { name: 'Plantas y Aquascaping', to: '/categoria/plantas' },
      { name: 'Peces y Corales', to: '/categoria/peces-corales-anfibios' },
      { name: 'Equipamiento', to: '/categoria/equipamiento' },
      { name: 'Iluminación', to: '/categoria/iluminacion' },
      { name: 'Ofertas', to: '/categoria/ofertas' },
    ],
    info: [
      { name: 'Sobre Nosotros', to: '/sobre-nosotros' },
      { name: 'Blog', to: '/blog' },
      { name: 'Contacto', to: '/contacto' },
      { name: 'Política de envíos', to: '/envios' },
      { name: 'Devoluciones', to: '/devoluciones' },
    ],
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900">

      {/* Main grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h2 className="font-heading text-2xl font-bold text-white tracking-tight">
                Urban<span className="text-accent-500">Natura</span>
              </h2>
              <p className="text-[10px] text-neutral-600 uppercase tracking-[0.25em] mt-0.5">Barcelona</p>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-xs">
              Especialistas en aquascaping y acuariofilia de alta gama. Creamos ecosistemas vivos que transforman espacios.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: <FiInstagram size={17} />, href: '#', hover: 'hover:bg-pink-600' },
                { icon: <FiFacebook size={17} />, href: '#', hover: 'hover:bg-blue-600' },
                { icon: <FiYoutube size={17} />, href: '#', hover: 'hover:bg-red-600' },
              ].map((s, i) => (
                <a key={i} href={s.href}
                  className={`w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 ${s.hover} hover:text-white hover:border-transparent transition-all duration-300`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Tienda links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-widest">Tienda</h3>
            <ul className="space-y-3">
              {links.tienda.map(l => (
                <li key={l.name}>
                  <Link to={l.to} className="text-neutral-500 hover:text-accent-400 text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 h-px bg-accent-500 transition-all duration-300" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links + contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-widest">Información</h3>
            <ul className="space-y-3 mb-8">
              {links.info.map(l => (
                <li key={l.name}>
                  <Link to={l.to} className="text-neutral-500 hover:text-accent-400 text-sm transition-colors flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 h-px bg-accent-500 transition-all duration-300" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-2.5">
              {[
                { icon: <FiMapPin size={14} />, text: 'C/ de València 605, 08026 BCN' },
                { icon: <FiPhone size={14} />, text: '93 763 89 85' },
                { icon: <FiMail size={14} />, text: 'info@urbanatura.com' },
                { icon: <FiClock size={14} />, text: 'L–V 10:00–19:00' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-600">
                  <span className="text-accent-600 mt-0.5 shrink-0">{c.icon}</span>
                  {c.text}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-2 text-sm uppercase tracking-widest">Newsletter</h3>
            <p className="text-neutral-500 text-sm mb-5 leading-relaxed">
              Recibe novedades, ofertas exclusivas y consejos de acuariofilia.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-accent-400 text-sm font-medium"
              >
                <span className="text-lg">✓</span> ¡Suscrito correctamente!
              </motion.div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full bg-neutral-900 border border-neutral-800 focus:border-accent-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-accent-500 hover:bg-accent-400 text-neutral-950 font-semibold rounded-xl text-sm transition-all duration-300 hover:shadow-glow-accent-sm"
                >
                  Suscribirse <FiArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-900">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-700">
          <p>© {new Date().getFullYear()} Urban Natura Barcelona · Todos los derechos reservados</p>
          <div className="flex items-center gap-4">
            <Link to="/privacidad" className="hover:text-neutral-500 transition-colors">Privacidad</Link>
            <Link to="/cookies" className="hover:text-neutral-500 transition-colors">Cookies</Link>
            <Link to="/legal" className="hover:text-neutral-500 transition-colors">Aviso legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
