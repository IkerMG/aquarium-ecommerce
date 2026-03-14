import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiShoppingBag, FiTruck, FiLock, FiCheck } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useCart } from '../hooks/useCart';

const Checkout = () => {
  const { cart, cartTotal, cartCount, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: ''
  });
  const [errors, setErrors] = useState({});

  const shipping = cartTotal >= 80 ? 0 : 7.99;
  const total = cartTotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email no válido';
    if (!formData.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio';
    if (!formData.direccion.trim()) newErrors.direccion = 'La dirección es obligatoria';
    if (!formData.ciudad.trim()) newErrors.ciudad = 'La ciudad es obligatoria';
    if (!formData.codigoPostal.trim()) newErrors.codigoPostal = 'El código postal es obligatorio';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error('Por favor, completa todos los campos');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      clearCart();
      setLoading(false);
      toast.success('¡Pedido confirmado!');
      navigate('/order-confirmation/1');
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-neutral-950">
        <div className="text-6xl mb-6">🛒</div>
        <h2 className="font-heading text-2xl font-bold text-white mb-3">Tu carrito está vacío</h2>
        <p className="text-neutral-500 mb-8 max-w-xs">Añade productos antes de continuar con el checkout.</p>
        <Link 
          to="/categoria/acuarios" 
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent-500 hover:bg-accent-400 text-neutral-950 font-semibold rounded-xl transition-all hover:shadow-glow-accent-sm text-sm"
        >
          <FiShoppingBag size={15} /> Explorar catálogo
        </Link>
      </div>
    );
  }

  const inputClasses = (field) => `
    w-full bg-neutral-950 border rounded-xl p-4 text-white placeholder-neutral-600
    focus:border-accent-500 focus:ring-1 focus:ring-accent-500/20 outline-none transition-all
    ${errors[field] ? 'border-red-500/50' : 'border-neutral-800'}
  `;

  return (
    <div className="min-h-screen bg-neutral-950 pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="font-heading text-3xl font-bold text-white">Finalizar compra</h1>
            <p className="text-neutral-500 text-sm mt-1">{cartCount} {cartCount === 1 ? 'producto' : 'productos'} en tu pedido</p>
          </div>
          <Link to="/carrito" className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors">
            <FiArrowLeft size={14} /> Volver al carrito
          </Link>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Formulario */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Datos personales */}
              <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6">
                <h2 className="font-heading font-bold text-white text-lg mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-accent-500/20 text-accent-400 text-xs flex items-center justify-center">1</span>
                  Datos de contacto
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Nombre completo *</label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className={inputClasses('nombre')}
                      data-testid="checkout-nombre"
                    />
                    {errors.nombre && <p className="text-red-400 text-xs mt-1">{errors.nombre}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className={inputClasses('email')}
                      data-testid="checkout-email"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className={inputClasses('telefono')}
                      data-testid="checkout-telefono"
                    />
                    {errors.telefono && <p className="text-red-400 text-xs mt-1">{errors.telefono}</p>}
                  </div>
                </div>
              </div>

              {/* Dirección de envío */}
              <div className="bg-neutral-900 rounded-2xl border border-neutral-800 p-6">
                <h2 className="font-heading font-bold text-white text-lg mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-accent-500/20 text-accent-400 text-xs flex items-center justify-center">2</span>
                  Dirección de envío
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Dirección *</label>
                    <input
                      type="text"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      placeholder="Calle, número, piso..."
                      className={inputClasses('direccion')}
                      data-testid="checkout-direccion"
                    />
                    {errors.direccion && <p className="text-red-400 text-xs mt-1">{errors.direccion}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Ciudad *</label>
                    <input
                      type="text"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                      placeholder="Barcelona"
                      className={inputClasses('ciudad')}
                      data-testid="checkout-ciudad"
                    />
                    {errors.ciudad && <p className="text-red-400 text-xs mt-1">{errors.ciudad}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Código Postal *</label>
                    <input
                      type="text"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleChange}
                      placeholder="08001"
                      className={inputClasses('codigoPostal')}
                      data-testid="checkout-codigo-postal"
                    />
                    {errors.codigoPostal && <p className="text-red-400 text-xs mt-1">{errors.codigoPostal}</p>}
                  </div>
                </div>
              </div>

              {/* Submit button (visible on mobile) */}
              <button
                type="submit"
                disabled={loading}
                className="lg:hidden w-full flex items-center justify-center gap-2 py-4 bg-accent-500 hover:bg-accent-400 disabled:bg-neutral-700 text-neutral-950 font-bold rounded-xl transition-all text-sm"
                data-testid="checkout-submit-mobile"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <FiLock size={15} /> Confirmar pedido · {total.toFixed(2)}€
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Resumen del pedido */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sticky top-28">
              <h2 className="font-heading font-bold text-white mb-6">Resumen del pedido</h2>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3" data-testid={`checkout-item-${item.id}`}>
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-neutral-800 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{item.name}</p>
                      <p className="text-neutral-500 text-xs">Cant: {item.quantity}</p>
                    </div>
                    <p className="text-white text-sm font-medium">{(item.price * item.quantity).toFixed(2)}€</p>
                  </div>
                ))}
              </div>

              {/* Totales */}
              <div className="space-y-3 mb-6 text-sm border-t border-neutral-800 pt-4">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span className="text-white">{cartTotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <FiTruck size={13} /> Envío
                  </span>
                  <span className={shipping === 0 ? 'text-accent-400 font-medium' : 'text-white'}>
                    {shipping === 0 ? 'Gratis' : `${shipping.toFixed(2)}€`}
                  </span>
                </div>
              </div>

              <div className="border-t border-neutral-800 pt-4 mb-6">
                <div className="flex justify-between font-heading font-bold text-white text-xl">
                  <span>Total</span>
                  <span className="text-accent-400">{total.toFixed(2)}€</span>
                </div>
                <p className="text-neutral-600 text-xs mt-1">IVA incluido</p>
              </div>

              {/* Submit button (desktop) */}
              <button
                type="submit"
                form="checkout-form"
                onClick={handleSubmit}
                disabled={loading}
                className="hidden lg:flex w-full items-center justify-center gap-2 py-4 bg-accent-500 hover:bg-accent-400 disabled:bg-neutral-700 text-neutral-950 font-bold rounded-xl transition-all hover:shadow-glow-accent text-sm"
                data-testid="checkout-submit"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <FiLock size={15} /> Confirmar pedido
                  </>
                )}
              </button>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 mt-4 text-neutral-600 text-xs">
                <span className="flex items-center gap-1">
                  <FiLock size={11} /> Pago seguro
                </span>
                <span className="flex items-center gap-1">
                  <FiCheck size={11} /> SSL
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
