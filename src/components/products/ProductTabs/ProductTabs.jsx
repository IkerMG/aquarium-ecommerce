import React, { useState } from 'react';

const ProductTabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState('desc');

    return (
        <div>
            {/* Header de Pestañas */}
            <div className="flex gap-8 border-b border-neutral-800 mb-8 overflow-x-auto">
                {['desc', 'specs', 'shipping'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-sm font-bold uppercase tracking-wider transition-all relative ${activeTab === tab
                                ? 'text-white'
                                : 'text-neutral-500 hover:text-neutral-300'
                            }`}
                    >
                        {tab === 'desc' && 'Descripción'}
                        {tab === 'specs' && 'Especificaciones'}
                        {tab === 'shipping' && 'Envíos'}

                        {/* Línea indicadora animada */}
                        {activeTab === tab && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-500 shadow-[0_0_10px_rgba(var(--color-accent-500),0.8)]" />
                        )}
                    </button>
                ))}
            </div>

            {/* Contenido */}
            <div className="text-neutral-400 leading-relaxed min-h-[200px]">
                {activeTab === 'desc' && (
                    <div className="animate-fadeIn">
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Perfecto para acuarios plantados y de aquascaping profesional. Su diseño minimalista se integra perfectamente en cualquier entorno.
                        </p>
                    </div>
                )}

                {activeTab === 'specs' && (
                    <div className="animate-fadeIn">
                        <table className="w-full text-left border-collapse">
                            <tbody>
                                <tr className="border-b border-neutral-800">
                                    <th className="py-3 text-white w-1/3">Dimensiones</th>
                                    <td className="py-3">15 x 15 x 20 cm</td>
                                </tr>
                                <tr className="border-b border-neutral-800">
                                    <th className="py-3 text-white">Peso</th>
                                    <td className="py-3">1.2 kg</td>
                                </tr>
                                <tr className="border-b border-neutral-800">
                                    <th className="py-3 text-white">Material</th>
                                    <td className="py-3">Vidrio Óptico, Acero Inoxidable</td>
                                </tr>
                                <tr>
                                    <th className="py-3 text-white">Garantía</th>
                                    <td className="py-3">2 Años</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'shipping' && (
                    <div className="animate-fadeIn space-y-4">
                        <div className="flex gap-4 items-start bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                            <div className="text-accent-500 text-xl pt-1">🚚</div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Envío Estándar</h4>
                                <p className="text-sm mt-1">Entrega en 24-48 horas laborables en península.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                            <div className="text-accent-500 text-xl pt-1">🛡️</div>
                            <div>
                                <h4 className="text-white font-bold text-sm">Garantía de Rotura</h4>
                                <p className="text-sm mt-1">Si llega roto, lo reponemos sin coste alguno inmediatamente.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductTabs;