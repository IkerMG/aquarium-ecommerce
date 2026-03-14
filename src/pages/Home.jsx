import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDroplet, FiSun, FiLayers, FiAward, FiTruck, FiMessageCircle } from 'react-icons/fi';

import Hero from '../components/home/Hero/Hero';
import ProductGrid from '../components/products/ProductGrid';
import { useProducts } from '../hooks/useProducts';
import { categories } from '../data/mockCategories';

/* ─── Bento grid categories ─────────────────────────── */
const bentoCategories = [
  {
    id: 'acuarios',
    name: 'Acuarios',
    desc: 'Urnas de cristal, kits y sistemas completos',
    slug: '/categoria/acuarios',
    image: 'https://images.unsplash.com/photo-1517607736340-02e0b5220455?q=80&w=900',
    span: 'lg:col-span-2 lg:row-span-2',
    textSize: 'text-3xl',
  },
  {
    id: 'plantas',
    name: 'Plantas',
    desc: 'In-vitro, musgos y aquascaping',
    slug: '/categoria/plantas',
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=600',
    span: '',
    textSize: 'text-xl',
  },
  {
    id: 'peces-corales',
    name: 'Peces & Corales',
    desc: 'Agua dulce y marina',
    slug: '/categoria/peces-corales-anfibios',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?q=80&w=600',
    span: '',
    textSize: 'text-xl',
  },
  {
    id: 'iluminacion',
    name: 'Iluminación',
    desc: 'LED RGB para plantas y corales',
    slug: '/categoria/iluminacion',
    image: 'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?q=80&w=600',
    span: '',
    textSize: 'text-xl',
  },
  {
    id: 'quimica',
    name: 'Química',
    desc: 'Test, fertilizantes y CO2',
    slug: '/categoria/quimica-del-acuario',
    image: 'https://images.unsplash.com/photo-1621996767850-937f22572533?q=80&w=600',
    span: '',
    textSize: 'text-xl',
  },
];

const BentoCard = ({ cat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    className={`group relative overflow-hidden rounded-2xl border border-neutral-800/60 hover:border-accent-500/40 transition-all duration-500 cursor-pointer min-h-[200px] ${cat.span}`}
  >
    <Link to={cat.slug} className="block h-full w-full absolute inset-0" />
    <img
      src={cat.image}
      alt={cat.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/10" />
    <div className="absolute bottom-0 left-0 p-5">
      <h3 className={`font-heading ${cat.textSize} font-bold text-white mb-1 leading-tight`}>{cat.name}</h3>
      <p className="text-neutral-400 text-sm">{cat.desc}</p>
    </div>
    <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
      <FiArrowRight size={14} className="text-accent-400" />
    </div>
  </motion.div>
);

/* ─── Trust badges ───────────────────────────────────── */
const trustItems = [
  { icon: <FiTruck />, title: 'Envío gratuito', desc: 'En pedidos +80€' },
  { icon: <FiDroplet />, title: 'Animales sanos', desc: 'Cuarentenados y garantizados' },
  { icon: <FiAward />, title: '+15 años', desc: 'Experiencia en acuariofilia' },
  { icon: <FiMessageCircle />, title: 'Asesoría gratis', desc: 'Expertos siempre disponibles' },
];

/* ─── HOME ───────────────────────────────────────────── */
const Home = () => {
  const { products, loading } = useProducts();
  const featured = products.filter(p => p.rating >= 4.5).slice(0, 8);

  return (
    <div className="bg-neutral-950 text-white">

      {/* 1 ─ HERO */}
      <Hero />

      {/* 2 ─ TRUST BAR */}
      <section className="border-y border-neutral-900 bg-neutral-950/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-900">
            {trustItems.map((item) => (
              <div key={item.title} className="flex items-center gap-3 py-5 px-6">
                <span className="text-accent-500 text-xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-heading font-semibold text-white text-sm leading-tight">{item.title}</p>
                  <p className="text-neutral-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 ─ BENTO CATEGORIES */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <span className="text-accent-500 text-xs font-semibold uppercase tracking-[0.2em]">Explora</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2">Nuestras categorías</h2>
            </div>
            <Link to="/categoria/acuarios" className="text-sm text-neutral-400 hover:text-accent-400 transition-colors flex items-center gap-1 group">
              Ver todo
              <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
            {bentoCategories.map((cat, i) => (
              <BentoCard key={cat.id} cat={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 ─ FEATURED PRODUCTS */}
      <section className="py-24 bg-neutral-900/20 border-y border-neutral-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <span className="text-accent-500 text-xs font-semibold uppercase tracking-[0.2em]">Selección</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2">Productos destacados</h2>
            </div>
            <Link to="/categoria/acuarios" className="text-sm text-neutral-400 hover:text-accent-400 transition-colors flex items-center gap-1 group">
              Ver catálogo completo
              <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <ProductGrid products={featured} loading={loading} columns="four" />
        </div>
      </section>

      {/* 5 ─ AQUASCAPING BANNER */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-neutral-800"
          >
            <img
              src="https://images.unsplash.com/photo-1598263884393-e4c161cc6991?q=80&w=1600"
              alt="Aquascaping"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-transparent" />
            <div className="relative z-10 p-10 md:p-16 max-w-2xl">
              <span className="text-accent-400 text-xs font-semibold uppercase tracking-[0.2em]">Aquascaping</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-4 leading-tight">
                El arte de diseñar<br />mundos bajo el agua.
              </h2>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                Descubre nuestros kits de aquascaping: rocas Seiryu, sustratos nutritivos,
                plantas raras y sistemas CO2 para crear tu paisaje acuático perfecto.
              </p>
              <Link
                to="/categoria/aquascaping"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-glow-accent-sm text-sm"
              >
                Explorar Aquascaping <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6 ─ 3-FEATURE GRID */}
      <section className="py-20 border-t border-neutral-900 bg-neutral-900/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FiDroplet size={22} />,
                title: 'Plantas in-vitro',
                desc: 'Las mejores especies de agua dulce, libres de plagas y pesticidas.',
                link: '/categoria/plantas',
              },
              {
                icon: <FiLayers size={22} />,
                title: 'Aquascaping a medida',
                desc: 'Diseñamos y montamos tu proyecto desde cero en tu hogar o negocio.',
                link: '/contacto',
              },
              {
                icon: <FiSun size={22} />,
                title: 'Iluminación LED',
                desc: 'Pantallas de espectro completo para corales y plantas exigentes.',
                link: '/categoria/iluminacion',
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={f.link}
                  className="group block p-7 rounded-2xl bg-neutral-950 border border-neutral-800/80 hover:border-accent-500/40 transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-500 mb-5 group-hover:bg-accent-500/20 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{f.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-accent-500 mt-4 font-medium group-hover:gap-2 transition-all">
                    Ver más <FiArrowRight size={11} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 ─ CTA FINAL */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <span className="text-accent-500 text-xs font-semibold uppercase tracking-[0.2em]">¿Tienes dudas?</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Habla con un especialista
            </h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Nuestro equipo de expertos en acuariofilia está en Barcelona, listo para
              asesorarte en tu próximo proyecto sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-neutral-100 text-neutral-950 font-semibold rounded-xl transition-colors"
              >
                Contactar ahora <FiArrowRight />
              </Link>
              <Link
                to="/sobre-nosotros"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-medium rounded-xl transition-colors hover:border-white/20"
              >
                Conoce Urban Natura
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
