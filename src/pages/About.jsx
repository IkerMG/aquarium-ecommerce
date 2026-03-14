import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiStar, FiMapPin, FiClock, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: FiAward,
    title: 'Calidad',
    description: 'Seleccionamos cada producto con criterio experto. Solo trabajamos con las mejores marcas del sector acuarístico: ADA, Seachem, Oase, Red Sea y más.'
  },
  {
    icon: FiStar,
    title: 'Experiencia',
    description: 'Más de 15 años asesorando a aficionados y profesionales. Nuestro equipo cuenta con biólogos marinos y aquascapers certificados.'
  },
  {
    icon: FiHeart,
    title: 'Pasión',
    description: 'No vendemos productos, compartimos una pasión. Cada acuario es un ecosistema vivo que merece cuidado y dedicación.'
  }
];

const stats = [
  { value: '+500', label: 'Clientes satisfechos' },
  { value: '+2.000', label: 'Especies disponibles' },
  { value: '15+', label: 'Años de experiencia' },
  { value: '98%', label: 'Satisfacción' }
];

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-950">
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1703221291880-303643093c22?q=80&w=2070" 
            alt="Coral reef" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-neutral-950/80" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-accent-400 text-sm font-medium uppercase tracking-[0.2em] mb-4">
              <span className="h-px w-8 bg-accent-500" />
              Desde 2008
              <span className="h-px w-8 bg-accent-500" />
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Sobre Urban Natura
            </h1>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto">
              Más de 15 años creando ecosistemas acuáticos únicos en el corazón de Barcelona
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 md:p-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed">
                <p>
                  <span className="text-white font-medium">Urban Natura nació en 2008</span> con una misión clara: 
                  traer la belleza del océano a los hogares de Barcelona. Lo que empezó como una pequeña tienda 
                  en el barrio de Gràcia, se ha convertido en el referente del aquascaping premium en Cataluña.
                </p>
                <p>
                  Fundada por <span className="text-accent-400">Marc Torres</span>, biólogo marino y apasionado 
                  del mundo submarino, Urban Natura ha crecido manteniendo siempre la filosofía de ofrecer 
                  <span className="text-white font-medium"> calidad por encima de cantidad</span>. Cada pez, 
                  cada coral y cada planta que vendemos pasa por un riguroso proceso de selección y aclimatación.
                </p>
                <p>
                  Hoy, nuestro equipo está formado por biólogos, veterinarios especializados y aquascapers 
                  profesionales que comparten la misma pasión: crear pequeños ecosistemas perfectos que 
                  transformen cualquier espacio.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-neutral-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-accent-400">{stat.value}</p>
                <p className="text-neutral-500 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-white mb-4">Nuestros Valores</h2>
            <p className="text-neutral-500">Lo que nos define y diferencia</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-accent-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-6 group-hover:bg-accent-500/20 transition-colors">
                  <value.icon className="text-accent-400" size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6 bg-neutral-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              Visítanos en Barcelona
            </h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              Ven a conocernos y descubre nuestro showroom de más de 200m² con acuarios 
              plantados, marinos y de agua fría.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400 mb-8">
              <span className="flex items-center gap-2">
                <FiMapPin className="text-accent-400" />
                C/ Verdi, 45 · Gràcia, Barcelona
              </span>
              <span className="flex items-center gap-2">
                <FiClock className="text-accent-400" />
                Lun-Sáb: 10:00 - 20:00
              </span>
              <span className="flex items-center gap-2">
                <FiPhone className="text-accent-400" />
                +34 93 123 45 67
              </span>
            </div>

            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-400 text-neutral-950 font-semibold rounded-xl transition-all hover:shadow-glow-accent"
            >
              Contactar
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
