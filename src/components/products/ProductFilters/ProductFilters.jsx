import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

const ProductFilters = () => {
    // Estado para controlar qué secciones están abiertas (acordeón)
    const [sections, setSections] = useState({
        price: true,
        brands: true,
        availability: true
    });

    const toggleSection = (section) => {
        setSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="space-y-8">

            {/* --- Filtro de PRECIO --- */}
            <div className="border-b border-neutral-800 pb-6">
                <button
                    onClick={() => toggleSection('price')}
                    className="flex items-center justify-between w-full text-left mb-4 group"
                >
                    <span className="font-bold text-white group-hover:text-accent-500 transition-colors">Precio</span>
                    {sections.price ? <FiMinus className="text-neutral-500" /> : <FiPlus className="text-neutral-500" />}
                </button>

                {sections.price && (
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                                <input
                                    type="number"
                                    placeholder="Min"
                                    className="w-full bg-neutral-900 text-white border border-neutral-800 rounded-lg py-2 pl-7 pr-3 text-sm focus:outline-none focus:border-accent-500 transition-colors"
                                />
                            </div>
                            <span className="text-neutral-600">-</span>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">$</span>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    className="w-full bg-neutral-900 text-white border border-neutral-800 rounded-lg py-2 pl-7 pr-3 text-sm focus:outline-none focus:border-accent-500 transition-colors"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* --- Filtro de MARCAS --- */}
            <div className="border-b border-neutral-800 pb-6">
                <button
                    onClick={() => toggleSection('brands')}
                    className="flex items-center justify-between w-full text-left mb-4 group"
                >
                    <span className="font-bold text-white group-hover:text-accent-500 transition-colors">Marcas</span>
                    {sections.brands ? <FiMinus className="text-neutral-500" /> : <FiPlus className="text-neutral-500" />}
                </button>

                {sections.brands && (
                    <div className="space-y-3">
                        {['ADA Nature', 'Oase', 'Twinstar', 'Tropica', 'Seachem'].map((brand, i) => (
                            <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        className="peer appearance-none h-5 w-5 border border-neutral-700 rounded bg-neutral-900 checked:bg-accent-500 checked:border-accent-500 transition-all"
                                    />
                                    {/* Icono check personalizado */}
                                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" viewBox="0 0 14 10" fill="none">
                                        <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-neutral-400 group-hover:text-white transition-colors select-none">{brand}</span>
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* --- Filtro de DISPONIBILIDAD --- */}
            <div className="pb-6">
                <button
                    onClick={() => toggleSection('availability')}
                    className="flex items-center justify-between w-full text-left mb-4 group"
                >
                    <span className="font-bold text-white group-hover:text-accent-500 transition-colors">Estado</span>
                    {sections.availability ? <FiMinus className="text-neutral-500" /> : <FiPlus className="text-neutral-500" />}
                </button>

                {sections.availability && (
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input type="checkbox" className="peer appearance-none h-5 w-5 border border-neutral-700 rounded bg-neutral-900 checked:bg-accent-500 checked:border-accent-500 transition-all" />
                                <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" viewBox="0 0 14 10" fill="none">
                                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-neutral-400 group-hover:text-white transition-colors select-none">En Stock</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input type="checkbox" className="peer appearance-none h-5 w-5 border border-neutral-700 rounded bg-neutral-900 checked:bg-accent-500 checked:border-accent-500 transition-all" />
                                <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" viewBox="0 0 14 10" fill="none">
                                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="text-neutral-400 group-hover:text-white transition-colors select-none">En Oferta</span>
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductFilters;