import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderConfirmation = () => {
    const { orderId } = useParams(); // Captura el ID de la URL
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulamos una petición al backend para obtener los detalles de ESTA orden específica
        const fetchOrder = async () => {
            setLoading(true);

            // Simulación de espera de red (1.5 segundos)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Datos ficticios que vendrían de tu base de datos
            const mockOrder = {
                id: orderId, // Usamos el ID de la URL
                date: new Date().toLocaleDateString(),
                email: "cliente@ejemplo.com",
                total: 15600, // Ejemplo en formato numérico simple
                items: [
                    { id: 1, name: "Producto Ejemplo A", price: 5600, quantity: 1 },
                    { id: 2, name: "Producto Ejemplo B", price: 10000, quantity: 1 },
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
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
                <p className="mt-4 text-neutral-500">Buscando tu pedido #{orderId}...</p>
            </div>
        );
    }

    if (!order) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h2 className="text-2xl font-bold text-red-600">Pedido no encontrado</h2>
                <p className="text-gray-600 mt-2">No pudimos encontrar la orden #{orderId}.</p>
                <Link to="/" className="mt-4 text-blue-600 hover:underline">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg border border-gray-100">

                {/* Icono de Éxito */}
                <div className="text-center mb-8">
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                        <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">¡Gracias por tu compra!</h1>
                    <p className="text-gray-500 mt-2">Tu pedido ha sido confirmado.</p>
                    <p className="text-sm text-gray-400 mt-1">ID de referencia: <span className="font-mono text-black">{order.id}</span></p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Resumen del pedido</h2>

                    <ul className="divide-y divide-gray-200">
                        {order.items.map((item) => (
                            <li key={item.id} className="py-4 flex justify-between">
                                <div>
                                    <p className="font-medium text-gray-900">{item.name}</p>
                                    <p className="text-sm text-gray-500">Cant: {item.quantity}</p>
                                </div>
                                <p className="font-medium text-gray-900">${item.price.toLocaleString()}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
                        <span className="font-bold text-lg text-gray-900">Total</span>
                        <span className="font-bold text-xl text-green-600">${order.total.toLocaleString()}</span>
                    </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors"
                    >
                        Seguir comprando
                    </Link>
                    <button
                        onClick={() => window.print()}
                        className="inline-flex justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                        Imprimir Recibo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;