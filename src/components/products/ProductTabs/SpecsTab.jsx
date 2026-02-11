import React from 'react';

const SpecsTab = ({ product }) => {
    // Datos de ejemplo por si el producto no tiene 'specs' definidas
    const defaultSpecs = [
        { name: "Material", value: "Algodón Orgánico / Poliéster Reciclado" },
        { name: "Peso", value: "350g" },
        { name: "Dimensiones", value: "30cm x 20cm x 15cm" },
        { name: "País de Origen", value: "España" },
        { name: "Cuidados", value: "Lavado a máquina 30°C" },
        { name: "Referencia", value: product?.sku || "REF-001-XYZ" },
    ];

    const specs = product?.specifications || defaultSpecs;

    return (
        <div className="max-w-2xl">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Especificaciones Técnicas</h3>
            <div className="border-t border-gray-200">
                <dl>
                    {specs.map((spec, index) => (
                        <div
                            key={index}
                            className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
                        >
                            <dt className="text-sm font-medium text-gray-500">{spec.name}</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{spec.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
};

export default SpecsTab;