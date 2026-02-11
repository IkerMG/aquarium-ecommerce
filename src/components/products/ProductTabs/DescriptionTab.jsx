import React from 'react';

const DescriptionTab = ({ product }) => {
    // Texto de relleno por si el producto no tiene descripción larga
    const defaultText = `
    Experimenta la calidad superior y el diseño innovador que define a este producto. 
    Fabricado con materiales de primera calidad, ofrece durabilidad y un rendimiento excepcional en cada uso. 
    Su diseño ergonómico asegura comodidad durante todo el día, mientras que su estilo moderno se adapta perfectamente a cualquier entorno.
    <br/><br/>
    Ideal para quienes buscan lo mejor sin comprometer el estilo. Cada detalle ha sido cuidadosamente pensado para mejorar tu experiencia.
  `;

    return (
        <div className="prose prose-sm sm:prose lg:prose-lg text-gray-500 max-w-none">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Detalles del Producto</h3>
            <div
                dangerouslySetInnerHTML={{ __html: product?.longDescription || product?.description || defaultText }}
            />

            {/* Lista de características destacadas (Dummy data si no existe) */}
            <ul className="mt-6 list-disc pl-5 space-y-2">
                <li>Materiales premium de alta resistencia.</li>
                <li>Diseño moderno y minimalista.</li>
                <li>Garantía de satisfacción de 2 años.</li>
                <li>Disponible en varios acabados exclusivos.</li>
            </ul>
        </div>
    );
};

export default DescriptionTab;