import React from 'react';

const ShippingForm = ({ shippingData, setShippingData, onNext }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías añadir validaciones simples antes de pasar
        onNext();
    };

    return (
        <form id="shipping-form" onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-xl font-bold text-white mb-6">Datos de Envío</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Nombre Completo</label>
                    <input
                        required
                        type="text"
                        name="fullName"
                        value={shippingData.fullName}
                        onChange={handleChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                    />
                </div>

                {/* Email */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                    <input
                        required
                        type="email"
                        name="email"
                        value={shippingData.email}
                        onChange={handleChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                    />
                </div>

                {/* Dirección */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Dirección</label>
                    <input
                        required
                        type="text"
                        name="address"
                        value={shippingData.address}
                        onChange={handleChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                    />
                </div>

                {/* Ciudad */}
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Ciudad</label>
                    <input
                        required
                        type="text"
                        name="city"
                        value={shippingData.city}
                        onChange={handleChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                    />
                </div>

                {/* Código Postal */}
                <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Código Postal</label>
                    <input
                        required
                        type="text"
                        name="zipCode"
                        value={shippingData.zipCode}
                        onChange={handleChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                    />
                </div>

                {/* Teléfono */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Teléfono</label>
                    <input
                        required
                        type="tel"
                        name="phone"
                        value={shippingData.phone}
                        onChange={handleChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none transition-colors"
                    />
                </div>
            </div>
        </form>
    );
};

export default ShippingForm;