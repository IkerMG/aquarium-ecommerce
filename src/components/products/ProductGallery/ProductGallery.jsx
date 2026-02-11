import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex flex-col gap-4">
            {/* Imagen Principal */}
            <div className="aspect-square bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 relative group">
                <img
                    src={selectedImage}
                    alt="Producto principal"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Miniaturas */}
            <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${selectedImage === img
                                ? 'border-accent-500 opacity-100'
                                : 'border-transparent opacity-50 hover:opacity-100 hover:border-neutral-700'
                            }`}
                    >
                        <img src={img} alt={`Vista ${idx}`} className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;