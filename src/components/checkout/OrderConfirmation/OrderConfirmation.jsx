import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiPackage, FiMail, FiPrinter, FiArrowRight } from 'react-icons/fi';

const OrderConfirmation = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockOrder = {
        id: orderId,
        date: new Date().toLocaleDateString('es-ES', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        }),
        email: "cliente@ejemplo.com",
        total: 156.00,
        items: [
          { id: 1, name: "Urna Crystal Garden 60P", price: 125.00, quantity: 1 },
          { id: 2, name: "ADA Aqua Soil Amazonia 9L", price: 38.00, quantity: 1 },
        ]
      };

      setOrder(mockOrder);
      setLoading(false);
    };

    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-2 border-neutral-800 border-t-accent-500 rounded-full animate-spin mb-4" />
        <p className="text-neutral-500">Cargando pedido #{orderId}...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-center px-6">
        <div className="text-6xl mb-6">😕</div>
        <h2 className="font-heading text-2xl font-bold text-white mb-3">Pedido no encontrado</h2>
        <p className="text-neutral-500 mb-8">No pudimos encontrar la orden #{orderId}</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-400 text-neutral-950 font-semibold rounded-xl transition-all"
        >
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 pt-28 pb-20 px-6">
      <div className="container mx-auto max-w-2xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-10"
        >
          {/* Success icon */}
          <div className="text-center mb-8">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="mx-auto w-16 h-16 rounded-full bg-accent-500/20 flex items-center justify-center mb-6"
            >
              <FiCheck className="text-accent-400" size={32} />
            </motion.div>
            <h1 className="font-heading text-3xl font-bold text-white mb-2">¡Gracias por tu compra!</h1>
            <p className="text-neutral-500">Tu pedido ha sido confirmado correctamente</p>
          </div>

          {/* Order info */}
          <div className="bg-neutral-950 rounded-xl p-4 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FiPackage className="text-accent-400" size={20} />
              <div>
                <p className="text-xs text-neutral-500">Número de pedido</p>
                <p className="text-white font-mono font-medium">#{order.id}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-neutral-500">Fecha</p>
              <p className="text-white text-sm">{order.date}</p>
            </div>
          </div>

          {/* Items */}
          <div className="mb-8">
            <h2 className="font-heading font-bold text-white mb-4">Resumen del pedido</h2>
            <div className="space-y-3">
              {order.items.map((item) => (
                <div 
                  key={item.id} 
                  className="flex justify-between items-center py-3 border-b border-neutral-800 last:border-0"
                >
                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-neutral-600 text-sm">Cantidad: {item.quantity}</p>
                  </div>
                  <p className="text-white font-medium">{item.price.toFixed(2)}€</p>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="bg-neutral-950 rounded-xl p-4 mb-8">
            <div className="flex justify-between items-center">
              <span className="font-heading font-bold text-white text-lg">Total</span>
              <span className="font-heading font-bold text-accent-400 text-2xl">{order.total.toFixed(2)}€</span>
            </div>
            <p className="text-neutral-600 text-xs mt-1">IVA incluido</p>
          </div>

          {/* Email notice */}
          <div className="flex items-start gap-3 bg-accent-500/10 border border-accent-500/20 rounded-xl p-4 mb-8">
            <FiMail className="text-accent-400 mt-0.5" size={18} />
            <div>
              <p className="text-white text-sm font-medium">Confirmación enviada</p>
              <p className="text-neutral-500 text-xs mt-1">
                Hemos enviado los detalles del pedido a tu email
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/"
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent-500 hover:bg-accent-400 text-neutral-950 font-bold rounded-xl transition-all"
              data-testid="order-continue-shopping"
            >
              Seguir comprando <FiArrowRight size={16} />
            </Link>
            <button
              onClick={() => window.print()}
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-xl transition-all"
            >
              <FiPrinter size={16} /> Imprimir recibo
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default OrderConfirmation;
