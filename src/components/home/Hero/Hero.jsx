import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin, FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  const videoRef = useRef(null);

  return (
    <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden bg-neutral-950">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          className="w-full h-full object-cover opacity-40"
          poster="https://images.unsplash.com/photo-1524704654690-b56c05c78a00?q=80&w=2070"
        >
          <source src="/assets/videos/video-urban-natura.mp4" type="video/mp4" />
        </video>

        {/* Multi-layer overlay para profundidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-transparent to-neutral-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-950/20 to-transparent" />
      </div>

      {/* Floating badge — top left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-32 left-8 hidden xl:flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium text-neutral-300"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse-subtle" />
        Barcelona · Desde 2008
      </motion.div>

      {/* Floating badge — top right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute top-32 right-8 hidden xl:flex items-center gap-2 glass px-4 py-2 rounded-full text-xs font-medium text-neutral-300"
      >
        <span className="text-accent-400">★★★★★</span> +500 clientes
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl">

          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-px w-8 bg-accent-500" />
            <span className="text-accent-400 font-medium text-sm uppercase tracking-[0.2em]">
              Aquascaping Premium
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.0] tracking-tight text-white mb-6"
          >
            Lleva el{' '}
            <span className="relative inline-block">
              <span className="text-gradient-accent">océano</span>
            </span>
            <br />
            a tu hogar.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl"
          >
            Más de 15 años creando ecosistemas acuáticos únicos en Barcelona.
            Corales vivos, peces exóticos y aquascaping de alta gama.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/categoria/acuarios"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 shadow-glow-accent hover:shadow-glow-accent hover:scale-[1.02] text-base"
            >
              Explorar Catálogo
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contacto"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-medium rounded-xl transition-all duration-300 hover:border-white/20 text-base"
            >
              <FiMapPin className="text-accent-400" />
              Visita la Tienda
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-8 mt-14 pt-10 border-t border-white/10"
          >
            {[
              { value: '+500', label: 'Clientes' },
              { value: '+2.000', label: 'Especies' },
              { value: '15+', label: 'Años de experiencia' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <FiChevronDown className="animate-bounce" size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
