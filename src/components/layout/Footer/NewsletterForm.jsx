import React, { useState } from 'react';
import { FiArrowRight, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const NewsletterForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulación de API
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="relative">
            <div className="relative">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu email"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-accent-500 transition-colors placeholder:text-neutral-600 disabled:opacity-50"
                />

                <AnimatePresence mode='wait'>
                    {status === 'error' && (
                        <motion.span
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute right-3 top-3 text-red-500"
                        >
                            <FiAlertCircle />
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>

            <button
                disabled={status === 'loading' || status === 'success'}
                className="mt-3 w-full bg-accent-600 hover:bg-accent-700 disabled:bg-neutral-800 text-white font-medium py-3 rounded-lg text-sm transition-all flex items-center justify-center gap-2 relative overflow-hidden"
            >
                <AnimatePresence mode="wait">
                    {status === 'loading' ? (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        />
                    ) : status === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex items-center gap-2 text-accent-400"
                        >
                            <FiCheck /> ¡Suscrito!
                        </motion.div>
                    ) : (
                        <motion.span
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                        >
                            Suscribirme <FiArrowRight />
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>
        </form>
    );
};

export default NewsletterForm;