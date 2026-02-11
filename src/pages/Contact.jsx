import React from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => (
    <div className="min-h-screen bg-neutral-950 pt-24 pb-20 px-6 text-white">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12">
            <div>
                <h1 className="text-4xl font-bold mb-6">Hablemos</h1>
                <p className="text-neutral-400 mb-8">¿Tienes dudas sobre tu proyecto? Visítanos o escríbenos.</p>
                <div className="space-y-6">
                    <div className="flex items-center gap-4"><FiMapPin className="text-accent-500 text-xl" /> <span>Carrer de la Natura 123, Barcelona</span></div>
                    <div className="flex items-center gap-4"><FiMail className="text-accent-500 text-xl" /> <span>hola@urbannatura.com</span></div>
                    <div className="flex items-center gap-4"><FiPhone className="text-accent-500 text-xl" /> <span>+34 93 123 45 67</span></div>
                </div>
            </div>
            <form className="space-y-4 bg-neutral-900 p-8 rounded-2xl border border-neutral-800">
                <input placeholder="Nombre" className="w-full bg-neutral-950 border border-neutral-700 rounded-lg p-3 text-white focus:border-accent-500 outline-none" />
                <input placeholder="Email" className="w-full bg-neutral-950 border border-neutral-700 rounded-lg p-3 text-white focus:border-accent-500 outline-none" />
                <textarea rows="4" placeholder="Mensaje" className="w-full bg-neutral-950 border border-neutral-700 rounded-lg p-3 text-white focus:border-accent-500 outline-none"></textarea>
                <button className="w-full bg-accent-600 hover:bg-accent-500 text-white font-bold py-3 rounded-lg">Enviar Mensaje</button>
            </form>
        </div>
    </div>
);
export default Contact;