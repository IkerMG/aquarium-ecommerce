import React from 'react';

const About = () => (
    <div className="min-h-screen bg-neutral-950 pt-24 text-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center">Sobre Urban Natura</h1>
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070" className="w-full h-64 object-cover rounded-2xl mb-10 grayscale hover:grayscale-0 transition-all duration-700" alt="Office" />
            <div className="space-y-6 text-neutral-300 text-lg leading-relaxed">
                <p>Nacimos en Barcelona con una misión clara: <strong>traer la naturaleza salvaje a los espacios urbanos</strong>. Somos apasionados del aquascaping, la botánica y el diseño.</p>
                <p>En Urban Natura no solo vendemos productos; ofrecemos ecosistemas vivos. Cada pieza es seleccionada por expertos para garantizar el equilibrio y la belleza de tu acuario o terrario.</p>
            </div>
        </div>
    </div>
);
export default About;