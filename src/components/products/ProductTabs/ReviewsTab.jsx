import React from 'react';

// Helper para renderizar estrellas
const StarRating = ({ rating }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`h-5 w-5 flex-shrink-0 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

const ReviewsTab = ({ product }) => {
    // Datos ficticios de reseñas
    const reviews = product?.reviews && product.reviews.length > 0 ? product.reviews : [
        {
            id: 1,
            author: "María García",
            rating: 5,
            date: "Hace 2 semanas",
            content: "¡Me encanta! La calidad es increíble y llegó super rápido. Definitivamente volveré a comprar.",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
        },
        {
            id: 2,
            author: "Carlos Ruiz",
            rating: 4,
            date: "Hace 1 mes",
            content: "El producto cumple con lo prometido. Buen material, aunque el color es un poco más oscuro que en la foto.",
            avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
        }
    ];

    return (
        <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Lista de Reseñas */}
                <div className="space-y-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="flex space-x-4">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10 rounded-full bg-gray-200"
                                    src={review.avatar}
                                    alt={review.author}
                                />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                                <div className="mt-1 flex items-center">
                                    <StarRating rating={review.rating} />
                                    <span className="ml-2 text-xs text-gray-500">{review.date}</span>
                                </div>
                                <p className="mt-2 text-sm text-gray-600">{review.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sección de "Escribir Reseña" (Visual) */}
                <div className="bg-gray-50 p-6 rounded-lg h-fit">
                    <h3 className="text-lg font-medium text-gray-900">Comparte tu opinión</h3>
                    <p className="mt-1 text-sm text-gray-600">
                        Si has comprado este producto, comparte tu experiencia con otros clientes.
                    </p>
                    <button className="mt-4 w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md font-medium hover:bg-gray-50 transition-colors">
                        Escribir una reseña
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewsTab;