import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const info = [
    { icon: <FiMapPin />, label: 'Dirección', value: 'C/ de València 605, 08026 Barcelona' },
    { icon: <FiPhone />, label: 'Teléfono', value: '93 763 89 85' },
    { icon: <FiMail />, label: 'Email', value: 'info@urbanatura.com' },
    { icon: <FiClock />, label: 'Horario', value: 'Lunes–Viernes: 10:00–19:00\nSábado: 10:00–14:00' },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 pt-28 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-accent-500 text-xs font-semibold uppercase tracking-[0.2em]">Contacto</span>
            <h1 className="font-heading text-4xl font-bold text-white mt-3 mb-4">Hablemos de tu proyecto</h1>
            <p className="text-neutral-500 max-w-lg mx-auto">
              Nuestro equipo de especialistas en Barcelona está listo para asesorarte.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-800 h-52">
                <img src="https://images.unsplash.com/photo-1517607736340-02e0b5220455?q=80&w=900"
                  alt="Tienda" className="w-full h-full object-cover opacity-60" />
              </div>
              {info.map((item, i) => (
                <div key={i} className="flex gap-4 p-4 bg-neutral-900 border border-neutral-800 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center text-accent-500 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-neutral-600 uppercase tracking-wider font-medium mb-1">{item.label}</p>
                    <p className="text-white text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7">
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-16 gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent-500/10 border border-accent-500/30 flex items-center justify-center">
                    <FiCheck size={28} className="text-accent-500" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">¡Mensaje enviado!</h3>
                  <p className="text-neutral-500 text-sm max-w-xs">Te contestaremos en menos de 24 horas laborables.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-heading font-bold text-white text-lg mb-5">Escríbenos</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {['name', 'email'].map(field => (
                      <div key={field}>
                        <label className="text-xs text-neutral-500 uppercase tracking-wider font-medium block mb-1.5 capitalize">
                          {field === 'name' ? 'Nombre' : 'Email'}
                        </label>
                        <input required type={field === 'email' ? 'email' : 'text'}
                          value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })}
                          className="w-full bg-neutral-950 border border-neutral-800 focus:border-accent-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-colors" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="text-xs text-neutral-500 uppercase tracking-wider font-medium block mb-1.5">Asunto</label>
                    <input type="text" value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-accent-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs text-neutral-500 uppercase tracking-wider font-medium block mb-1.5">Mensaje</label>
                    <textarea rows={5} required value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-accent-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold rounded-xl transition-all hover:shadow-glow-accent-sm">
                    Enviar mensaje <FiSend size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
