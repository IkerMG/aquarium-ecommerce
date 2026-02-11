import React, { useState } from 'react';
import { FiTag } from 'react-icons/fi';

const CouponCode = () => {
    const [code, setCode] = useState('');

    const handleApply = (e) => {
        e.preventDefault();
        // Aquí iría la lógica real para validar el cupón
        alert(`Cupón "${code}" aplicado (Simulación)`);
        setCode('');
    };

    return (
        <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
            <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                <FiTag className="text-accent-500" />
                Código Promocional
            </h3>
            <form onSubmit={handleApply} className="flex gap-2">
                <input
                    type="text"
                    placeholder="Ej: VERANO2024"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="flex-1 bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-2.5 text-white placeholder-neutral-600 focus:border-accent-500 focus:outline-none transition-colors uppercase"
                />
                <button
                    type="submit"
                    className="bg-white text-neutral-950 px-6 py-2.5 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
                >
                    Aplicar
                </button>
            </form>
        </div>
    );
};

export default CouponCode;