import React from 'react';
import { FiCreditCard } from 'react-icons/fi';
import { FaPaypal } from 'react-icons/fa';

const PaymentMethods = ({ paymentMethod, setPaymentMethod, onNext, onBack }) => {

    const methods = [
        { id: 'card', name: 'Tarjeta de Crédito / Débito', icon: FiCreditCard },
        { id: 'paypal', name: 'PayPal', icon: FaPaypal },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-6">Método de Pago</h2>

            <div className="grid grid-cols-1 gap-4">
                {methods.map((method) => {
                    const Icon = method.icon;
                    return (
                        <div
                            key={method.id}
                            onClick={() => setPaymentMethod(method.id)}
                            className={`
                relative flex items-center p-4 cursor-pointer rounded-xl border transition-all
                ${paymentMethod === method.id
                                    ? 'border-accent-500 bg-accent-900/10 ring-1 ring-accent-500'
                                    : 'border-neutral-800 bg-neutral-900 hover:border-neutral-600'}
              `}
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white">
                                <Icon size={20} />
                            </div>
                            <div className="ml-4 flex-1">
                                <span className={`block text-sm font-medium ${paymentMethod === method.id ? 'text-accent-400' : 'text-white'}`}>
                                    {method.name}
                                </span>
                            </div>
                            <div className={`
                h-5 w-5 rounded-full border flex items-center justify-center
                ${paymentMethod === method.id ? 'border-accent-500' : 'border-neutral-600'}
              `}>
                                {paymentMethod === method.id && <div className="h-2.5 w-2.5 rounded-full bg-accent-500" />}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Simulación de formulario de tarjeta si selecciona tarjeta */}
            {paymentMethod === 'card' && (
                <div className="mt-6 p-4 bg-neutral-900 rounded-lg border border-neutral-800 animate-in fade-in slide-in-from-top-4">
                    <p className="text-sm text-neutral-400 mb-4">Introduce los datos de tu tarjeta (Simulación):</p>
                    <input type="text" placeholder="Número de tarjeta" className="w-full mb-3 bg-neutral-950 border border-neutral-800 rounded p-3 text-white text-sm" />
                    <div className="grid grid-cols-2 gap-3">
                        <input type="text" placeholder="MM/YY" className="w-full bg-neutral-950 border border-neutral-800 rounded p-3 text-white text-sm" />
                        <input type="text" placeholder="CVC" className="w-full bg-neutral-950 border border-neutral-800 rounded p-3 text-white text-sm" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentMethods;