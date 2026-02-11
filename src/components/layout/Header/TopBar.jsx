import React from 'react';
import { FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const TopBar = () => {
    return (
        <div className="bg-neutral-950 border-b border-neutral-900 text-neutral-400 py-2 hidden md:block text-[11px] uppercase tracking-widest font-medium">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Contacto e Info */}
                <div className="flex gap-6">
                    <a
                        href="tel:937638985"
                        className="flex items-center gap-2 hover:text-accent-400 transition-colors duration-300"
                    >
                        <FiPhone className="text-accent-500 text-sm" />
                        <span>93 763 89 85</span>
                    </a>
                    <a
                        href="https://maps.google.com/?q=C/ de València, 605, Barcelona"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-accent-400 transition-colors duration-300"
                    >
                        <FiMapPin className="text-accent-500 text-sm" />
                        <span>C/ de València, 605, Barcelona</span>
                    </a>
                </div>

                {/* Horario */}
                <div className="flex items-center gap-2">
                    <FiClock className="text-accent-500 text-sm" />
                    <span>Lunes a Sábado: 10:00 - 14:00 | 17:00 - 20:30</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;