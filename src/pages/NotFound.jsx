import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-500/5 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-500/5 blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-lg"
      >
        {/* Big 404 */}
        <div className="relative mb-6">
          <span className="font-heading text-[10rem] md:text-[14rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 select-none block">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl animate-bounce">🪸</span>
          </div>
        </div>

        <h1 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
          Esta página se disolvió en el agua
        </h1>
        <p className="text-neutral-500 mb-10 leading-relaxed">
          No encontramos lo que buscabas. Puede que haya cambiado de lugar
          o simplemente haya emigrado a aguas más profundas.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-400 text-neutral-950 font-semibold rounded-xl transition-all hover:shadow-glow-accent-sm text-sm"
          >
            <FiArrowLeft size={15} />
            Volver al inicio
          </Link>
          <Link
            to="/categoria/acuarios"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 glass text-white font-medium rounded-xl text-sm hover:border-white/20 transition-colors"
          >
            <FiSearch size={15} />
            Ver catálogo
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
