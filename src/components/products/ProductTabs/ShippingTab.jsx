import React from 'react';

const ShippingTab = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
            <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                    Envío Gratuito
                </h4>
                <p className="mb-4">
                    Ofrecemos envío estándar gratuito en todos los pedidos superiores a $50.
                    Los pedidos se procesan y envían en un plazo de 24-48 horas hábiles.
                </p>

                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Tiempos de Entrega
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Estándar: 3-5 días laborables</li>
                    <li>Express: 24-48 horas</li>
                </ul>
            </div>

            <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    Devoluciones Sencillas
                </h4>
                <p className="mb-4">
                    Si no estás 100% satisfecho con tu compra, puedes devolver el pedido para obtener un reembolso completo o cambiarlo por otro.
                </p>
                <p>
                    Las devoluciones deben realizarse dentro de los <strong>30 días</strong> posteriores a la recepción del pedido. El producto debe estar en su estado original.
                </p>
            </div>
        </div>
    );
};

export default ShippingTab;