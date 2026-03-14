import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiChevronDown, FiSliders } from 'react-icons/fi';
import { useProducts } from '../hooks/useProducts';
import { navigationData } from '../data/navigationData';
import ProductGrid from '../components/products/ProductGrid';

const SORT_OPTIONS = [
  { value: 'default', label: 'Relevancia' },
  { value: 'price_asc', label: 'Precio: menor a mayor' },
  { value: 'price_desc', label: 'Precio: mayor a menor' },
  { value: 'rating', label: 'Mejor valorados' },
  { value: 'newest', label: 'Más recientes' },
];

const Category = () => {
  const { categorySlug, subcategorySlug } = useParams();
  const { products, loading } = useProducts();

  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyNew, setOnlyNew] = useState(false);

  // Find category meta
  const categoryData = navigationData.find(c => c.id === categorySlug);

  // Filter & sort products
  const filtered = useMemo(() => {
    let list = [...products];

    // category filter
    if (categorySlug && categorySlug !== 'todo') {
      list = list.filter(p => p.category === categorySlug || p.category?.toLowerCase().replace(/\s+/g, '-') === categorySlug);
    }

    // subcategory filter
    if (subcategorySlug) {
      list = list.filter(p => p.subcategory?.toLowerCase().replace(/\s+/g, '-') === subcategorySlug);
    }

    // price
    list = list.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // stock
    if (onlyInStock) list = list.filter(p => p.stock !== false && p.stock !== 0);

    // new
    if (onlyNew) list = list.filter(p => p.isNew);

    // sort
    switch (sortBy) {
      case 'price_asc':  list.sort((a, b) => a.price - b.price); break;
      case 'price_desc': list.sort((a, b) => b.price - a.price); break;
      case 'rating':     list.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break;
      case 'newest':     list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      default: break;
    }

    return list;
  }, [products, categorySlug, subcategorySlug, sortBy, priceRange, onlyInStock, onlyNew]);

  const categoryName = categoryData?.name || (categorySlug === 'todo' ? 'Todos los productos' : categorySlug);

  return (
    <div className="min-h-screen bg-neutral-950 pt-24">

      {/* Category hero banner */}
      {categoryData?.heroImage && (
        <div className="relative h-44 overflow-hidden">
          <img src={categoryData.heroImage} alt={categoryName}
            className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950" />
        </div>
      )}

      <div className="container mx-auto px-6 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-neutral-600 mb-6">
          <Link to="/" className="hover:text-accent-400 transition-colors">Inicio</Link>
          <span>/</span>
          <span className="text-neutral-400">{categoryName}</span>
          {subcategorySlug && (
            <>
              <span>/</span>
              <span className="text-neutral-400 capitalize">{subcategorySlug.replace(/-/g, ' ')}</span>
            </>
          )}
        </nav>

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-white">{categoryName}</h1>
            {!loading && (
              <p className="text-neutral-600 text-sm mt-1">{filtered.length} productos</p>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Filter toggle mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl text-sm text-white transition-colors lg:hidden"
            >
              <FiSliders size={14} />
              Filtros
              {(onlyInStock || onlyNew) && (
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-xl px-4 py-2.5 text-sm text-white pr-8 outline-none cursor-pointer transition-colors"
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <FiChevronDown size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <AnimatePresence>
            {(showFilters || window.innerWidth >= 1024) && (
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-60 shrink-0 hidden lg:block"
              >
                <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 sticky top-28">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-heading font-semibold text-white text-sm">Filtros</h3>
                    {(onlyInStock || onlyNew) && (
                      <button onClick={() => { setOnlyInStock(false); setOnlyNew(false); }}
                        className="text-xs text-accent-500 hover:text-accent-400">
                        Limpiar
                      </button>
                    )}
                  </div>

                  {/* Subcategories */}
                  {categoryData?.subcategories?.length > 0 && (
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Subcategorías</p>
                      <div className="space-y-1">
                        {categoryData.subcategories.flatMap(g => g.links).map(link => (
                          <Link key={link.slug} to={link.slug}
                            className={`block text-sm px-3 py-2 rounded-xl transition-colors ${
                              subcategorySlug && link.slug.includes(subcategorySlug)
                                ? 'bg-accent-500/10 text-accent-400'
                                : 'text-neutral-500 hover:text-white hover:bg-neutral-800'
                            }`}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Toggles */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Estado</p>
                    {[
                      { label: 'Solo disponibles', value: onlyInStock, set: setOnlyInStock },
                      { label: 'Novedades', value: onlyNew, set: setOnlyNew },
                    ].map(f => (
                      <label key={f.label} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          onClick={() => f.set(!f.value)}
                          className={`w-10 h-5 rounded-full transition-colors relative ${f.value ? 'bg-accent-500' : 'bg-neutral-700'}`}
                        >
                          <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${f.value ? 'translate-x-5' : 'translate-x-0.5'}`} />
                        </div>
                        <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">{f.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Mobile filter drawer */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 z-50 lg:hidden"
                onClick={() => setShowFilters(false)}
              >
                <motion.div
                  initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                  className="absolute left-0 top-0 bottom-0 w-72 bg-neutral-900 p-6 overflow-y-auto"
                  onClick={e => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading font-bold text-white">Filtros</h3>
                    <button onClick={() => setShowFilters(false)}>
                      <FiX size={20} className="text-neutral-400" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Solo disponibles', value: onlyInStock, set: setOnlyInStock },
                      { label: 'Novedades', value: onlyNew, set: setOnlyNew },
                    ].map(f => (
                      <label key={f.label} className="flex items-center gap-3 cursor-pointer">
                        <div onClick={() => f.set(!f.value)}
                          className={`w-10 h-5 rounded-full transition-colors relative ${f.value ? 'bg-accent-500' : 'bg-neutral-700'}`}>
                          <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${f.value ? 'translate-x-5' : 'translate-x-0.5'}`} />
                        </div>
                        <span className="text-sm text-neutral-400">{f.label}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products */}
          <div className="flex-1 min-w-0">
            <ProductGrid products={filtered} loading={loading} columns="four" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
